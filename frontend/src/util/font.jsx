import { Julius_Sans_One, Inter, Josefin_Slab, Jura } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const julius = Julius_Sans_One({ subsets: ["latin"], weight: "400" });
const josfin_slab_400 = Josefin_Slab({ subsets: ["latin"], weight: "400" });
const josfin_slab_600 = Josefin_Slab({ subsets: ["latin"], weight: "600" });
const jura = Jura({ subsets: ["latin"], weight: "400" });

export { julius, inter, josfin_slab_400, josfin_slab_600, jura };
