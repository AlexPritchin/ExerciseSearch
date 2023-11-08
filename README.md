# Exercise Search

Simple React Native app for searching for physical exercises in an open web database.

## Description

Test task for a position of React Native developer.

## Additional info

This app is very small and it is the reason for some decisions:

* This project was built with Expo.
* Api key was hardcoded at first in purpose. This key is for a public api and the project have no dedicated server to store an api key on. But now it's no need for this.

The app uses the [API Ninjas](https://api-ninjas.com/). You need to sign up there, get your api key and paste it to srs/services/api/apiClient.ts file in order to get this app working.

The app has three screens - Search form, Search results and Exercise details. The details screen is for more comfortable reading of an exercise instructions cause it's pretty long text.
