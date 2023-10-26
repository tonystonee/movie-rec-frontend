/* eslint-disable import/no-extraneous-dependencies */
import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    // Simple usage
    '@nuxtjs/eslint-module',
    // With options
    ['@nuxtjs/eslint-module', { /* module options */ }],
    '@nuxtjs/tailwindcss',
  ],
  devtools: { enabled: true },
});
