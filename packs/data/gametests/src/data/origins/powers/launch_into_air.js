
import { world } from "@minecraft/server";

import { toAllPlayers } from "../../../origins/player";
import { ResourceBar } from "../../../origins/resource_bar";

/**
 * 
 * @param { import('@minecraft/server').Player } player 
 */
function launch_into_air(player) {
  if (
    !player.hasTag('power_launch_into_air') ||
    !player.hasTag('_control_use_launch_into_air')
  ) return


  if (!player.hasTag('cooldown_2')) {

    player.applyKnockback(0, 0, 0, 3);
    world.playSound('firework.launch', player.location, { volume: 1, pitch: 1.25 })

    new ResourceBar(2, 0, 100, 30)
        .push(player)

  } else {

    player.playSound('note.bass', { volume: 1, pitch: 1.5 })

  }

  player.removeTag('_control_use_launch_into_air');

}

toAllPlayers(launch_into_air, 2)
