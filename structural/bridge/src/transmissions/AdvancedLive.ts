import Live from "./Live";
import IPLatform from "../platforms/IPlatform";

export default class AdvancedLive extends Live {

  constructor(platform: IPLatform) {
    super(platform);
  }
  subTitle(){
    console.log("Legendas ativadas...");
  }
  comments(){
    console.log("Comentários liberados na live");
  }
}