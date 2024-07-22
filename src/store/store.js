import { configureStore } from "@reduxjs/toolkit"

import modeSlice from "./modeSlice"

const modeStore = configureStore({
    reducer:{mode:modeSlice.reducer}
})

export default modeStore