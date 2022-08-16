import IPlatform from './platforms/IPlatform';
import Live from './transmissions/Live';
import AdvancedLive from './transmissions/AdvancedLive';
import Youtube from './platforms/Youtube';
import Twitch from './platforms/Twitch';

function startLive(platform:IPlatform){
  console.log('Aguarde...');
  const live = new Live(platform);
  live.broadcasting();
  live.result();
}

function startAdvanedLive(platform:IPlatform){
  console.log('Aguarde...');
  const live = new AdvancedLive(platform);
  live.broadcasting();
  live.comments();
  live.subTitle();
  live.result();
}

startLive(new Youtube());
startLive(new Twitch());

startAdvanedLive(new Youtube());
startAdvanedLive(new Twitch());