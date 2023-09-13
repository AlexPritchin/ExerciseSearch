import React, { useEffect, useRef } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  View,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useInfiniteQuery } from '@tanstack/react-query';

import {
  getExercisesList
} from '../services/query/queries';
import { getAllExercisesArrayFromPages } from '../helpers/exercisesHelpers';
import FullScreenSpinnerCentered from '../components/list/FullScreenSpinnerCentered';
import ListTouchableItem from '../components/list/ListTouchableItem';

import { MainStackParamList } from '../routes/types';
import { ExerciseItem } from '../types/searchTypes';

type ScreenProps = NativeStackScreenProps<MainStackParamList, 'SearchResults'>;

const SearchResultsScreen: React.FC<ScreenProps> = ({ navigation, route }) => {
  const currentPage = useRef(0);

  const {
    data: exercisesPages,
    isLoading: listQueryLoading,
    isFetchingNextPage,
    isRefetching,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery(
    [
      'exercisesList',
      {
        ...route.params
      },
    ],
    getExercisesList,
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.exercises.length === 10)
          return pages.length;

        return undefined;
      },
      cacheTime: 0,
    }
  );

  useEffect(() => {
    if (isRefetching) {
      currentPage.current = 0;
    }
  }, [isRefetching]);

  const renderListItem = (item: ExerciseItem) => {
    return (
      <ListTouchableItem
        exerciseItem={item}
      />
    );
  };

  const renderSeparator = () => <View style={styles.separator} />;

  const renderFooter = () => (
    <View style={styles.footerContainer}>
      {isFetchingNextPage && <ActivityIndicator />}
    </View>
  );

  return (
    <>
      {listQueryLoading && !isFetchingNextPage ? (
        <FullScreenSpinnerCentered />
      ) : (
        <>
          <FlatList
            data={getAllExercisesArrayFromPages(exercisesPages?.pages)}
            renderItem={({ item }) => renderListItem(item)}
            style={{
              backgroundColor: 'white',
            }}
            contentContainerStyle={styles.listContentContainer}
            ItemSeparatorComponent={() => renderSeparator()}
            ListFooterComponent={renderFooter}
            onEndReachedThreshold={0.1}
            onEndReached={() => {
              if (hasNextPage) {
                fetchNextPage();
              }
            }}
          />
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    marginLeft: 45,
    marginRight: 30,
    backgroundColor: 'grey',
  },
  footerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 5,
  },
  listContentContainer: {
    paddingBottom: 40,
    backgroundColor: 'white',
  },
});

export default SearchResultsScreen;
