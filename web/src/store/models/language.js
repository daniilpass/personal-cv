import { languages } from "../../settings"

export const language = {
    state: languages[0],
    reducers: {
        setLanguage: (state, payload) => {
            return payload;
        }
    }
}