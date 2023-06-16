import {
   rareGemstones
} from "../assets";
import { Ruby } from "../api/Ruby";
import { Spinel } from "../api/Spinel";


const RareGemstonesData = {
   header: "Rare Gemstones",
   summary: "Its rich geological history means that a wide variety of fine gems formed within it. Some are rare and extremely interesting and we showcase them here.",
   img: rareGemstones,
};


const RareGemstones = [
   ...Ruby,
   ...Spinel,
];


export {
   RareGemstonesData,
   RareGemstones,
}