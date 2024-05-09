const DEFAULT_FEATURE_TOGGLE = {
  TAILWIND_INDICATOR: false,
}

const getFeatureToggle = () => {
  try {
    if (process.env.NEXT_PUBLIC_FEATURE_TOGGLE) {
      return JSON.parse(process.env.NEXT_PUBLIC_FEATURE_TOGGLE)
    }
  } catch (error) {}
  return DEFAULT_FEATURE_TOGGLE
}

export const featureToggle = getFeatureToggle()
