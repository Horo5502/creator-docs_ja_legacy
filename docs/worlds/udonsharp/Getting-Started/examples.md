---
title: "スクリプト例"
---

<!-- # Examples -->

<!-- * [Spinning Cube](#spinning-cube) -->
<!-- * [Player Settings](#player-settings) -->
<!-- * [Interact](#interact) -->
<!-- * [Teleport Player](#teleport-player) -->
<!-- * [Get Players](#get-players) -->
<!-- * [UdonSharp Script Example](#udonsharp-script-example) -->
* [回転するキューブ](#spinning-cube)
* [プレイヤー操作に関する設定](#player-settings)
* [トリガーできるボタン](#interact)
* [プレイヤーのテレポート](#teleport-player)
* [プレイヤーの取得](#get-players)
* [UdonSharpスクリプト例](#udonsharp-script-example)


---

<!-- ### Spinning Cube -->
### 回転するキューブ {#spinning-cube}
```cs
using UnityEngine;
using UdonSharp;

public class RotatingCubeBehaviour : UdonSharpBehaviour
{
    private void Update()
    {
        transform.Rotate(Vector3.up, 90f * Time.deltaTime);
    }
}
```

<!-- ### Player Settings -->
### プレイヤー操作に関する設定 {#player-settings}
```cs
using UnityEngine;
using UdonSharp;
using VRC.SDKBase;

public class PlayerModSettings : UdonSharpBehaviour
{
    VRCPlayerApi playerApi;

    [Header("Player Settings")]
    [SerializeField] float jumpImpulse = 3;
    [SerializeField] float walkSpeed = 2;
    [SerializeField] float runSpeed = 4;
    [SerializeField] float gravityStrengh = 1;

    void Start()
    {
        playerApi = Networking.LocalPlayer;
        playerApi.SetJumpImpulse(jumpImpulse);
        playerApi.SetWalkSpeed(walkSpeed);
        playerApi.SetRunSpeed(runSpeed);
        playerApi.SetGravityStrength(gravityStrengh);
    }
}
```
<!-- A more advanced example is located in the [examples folder of UdonSharp](https://github.com/Merlin-san/UdonSharp/blob/master/Assets/UdonSharp/Examples/Utilities/PlayerModSetter.cs). -->
より高度なスクリプト例は、[UdonSharpのExamplesフォルダー](https://github.com/Merlin-san/UdonSharp/blob/master/Assets/UdonSharp/Examples/Utilities/PlayerModSetter.cs)にあります。  
(訳注: 上記のリンクは古いです。新しいものは[こちら](https://github.com/vrchat-community/UdonSharp/tree/master/Packages/com.vrchat.UdonSharp/Samples~))


<!-- ### Interact -->
### トリガーできるボタン {#interact}
```cs
using UnityEngine;
using UdonSharp;

public class ClickMe: UdonSharpBehaviour
{
    public override void Interact()
    {
        gameObject.SetActive(false);
    }
}
```

<!-- ### Teleport Player -->
### プレイヤーのテレポート {#teleport-player}
```cs
using UdonSharp;
using UnityEngine;
using VRC.SDKBase;

public class TeleportPlayer : UdonSharpBehaviour
{
    [SerializeField] Transform targetPosition;

    public override void Interact()
    {
        Networking.LocalPlayer.TeleportTo(targetPosition.position, 
                                          targetPosition.rotation, 
                                          VRC_SceneDescriptor.SpawnOrientation.Default, 
                                          false);
    }
}
```

<!-- ### Get Players -->
### プレイヤーの取得 {#get-players}
Example on how to get all players in the instance.
```cs
using UdonSharp;
using UnityEngine;
using VRC.SDKBase;

public class GetPlayersExample : UdonSharpBehaviour
{
    // World capacity is 10, so we create a new array with length of 20 (Hard cap)
    VRCPlayerApi[] players = new VRCPlayerApi[20];

    void Start()
    {
        VRCPlayerApi.GetPlayers(players);

        foreach(VRCPlayerApi player in players) {
            if(player == null) continue;
            Debug.Log(player.displayName);
        }
    }
}
```

<!-- ### UdonSharp Script Example -->
### UdonSharpスクリプト例 {#udonsharp-script-example}
This is an example class for UdonSharp and how it communicates with other UdonSharp behaviours.
```cs
using UdonSharp;
using UnityEngine;
using VRC.SDKBase;
using VRC.Udon.Common.Interfaces;

namespace UdonSharpExample
{
    public class Example : UdonSharpBehaviour
    {
        // UdonSharpBehaviour Class (Affects the Inspector)
        [SerializeField] AnotherExample anotherExample;

        void Start()
        {
            // Same as: anotherExample.GetProgramVariable("publicBoolean");
            if(anotherExample.publicBoolean)
            {
                // Same as: anotherExample.SendCustomEvent("RunMethod");
                anotherExample.RunMethod();
            }
        }

        // VRChat Event
        public override void Interact()
        {
            // Same as: SendCustomEvent("DoStuff");
            DoStuff();
        }

        public void DoStuff()
        {
            // This will be sent to all clients and run locally on each one (including the one sending)
            SendCustomNetworkEvent(NetworkEventTarget.All, "NetworkEventStuff");
        }

        public void NetworkEventStuff()
        {
            // Same as: anotherExample.SetProgramVariable("publicBoolean", false);
            anotherExample.publicBoolean = false;

            // Same as: anotherExample.SendCustomEvent("RunMethod");
            anotherExample.RunMethod();

            anotherExample.SendCustomNetworkEvent(NetworkEventTarget.Owner, "DoOwnerStuff");
        }
    }
}
```