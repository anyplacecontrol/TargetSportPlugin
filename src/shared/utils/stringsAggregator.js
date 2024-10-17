//there are a lot of "LocalizedStrings" objects in the application
//every object will be added to this array (from every module separately)
export const STRINGS_AGGREGATOR = []

//swith language for all strings in the application (collected from different modules)
export function SwitchLanguageToId(languageId) {
  for (let i = 0; i < STRINGS_AGGREGATOR.length; i++) {
    STRINGS_AGGREGATOR[i].setLanguage(languageId)
  }
}
