declare const __DEV__: boolean;
declare const __APP_VERSION__: string;
declare const __APP_BUILD_TIME__: string;

interface AppFeatureFlags {
  readonly NEW_DASHBOARD: boolean;
  readonly EXPERIMENTAL_API: boolean;
}

declare const __APP_FEATURE_FLAGS__: AppFeatureFlags;
