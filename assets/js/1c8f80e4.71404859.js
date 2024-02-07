"use strict";(self.webpackChunkdocs_ja=self.webpackChunkdocs_ja||[]).push([[911],{9255:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=r(5893),t=r(1151);const i={title:"\u30b9\u30af\u30ea\u30d7\u30c8\u4f8b"},l=void 0,s={id:"worlds/udonsharp/Getting-Started/examples",title:"\u30b9\u30af\u30ea\u30d7\u30c8\u4f8b",description:"* \u56de\u8ee2\u3059\u308b\u30ad\u30e5\u30fc\u30d6",source:"@site/docs/worlds/udonsharp/Getting-Started/examples.md",sourceDirName:"worlds/udonsharp/Getting-Started",slug:"/worlds/udonsharp/Getting-Started/examples",permalink:"/creator-docs_ja/worlds/udonsharp/Getting-Started/examples",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1707325724,formattedLastUpdatedAt:"2024\u5e742\u67087\u65e5",frontMatter:{title:"\u30b9\u30af\u30ea\u30d7\u30c8\u4f8b"},sidebar:"tutorialSidebar",previous:{title:"\u30b3\u30df\u30e5\u30cb\u30c6\u30a3\u30fc\u8cc7\u6599",permalink:"/creator-docs_ja/worlds/udonsharp/Getting-Started/community-resources"},next:{title:"Creator Companion",permalink:"/creator-docs_ja/vcc/"}},o={},p=[{value:"\u56de\u8ee2\u3059\u308b\u30ad\u30e5\u30fc\u30d6",id:"spinning-cube",level:3},{value:"\u30d7\u30ec\u30a4\u30e4\u30fc\u64cd\u4f5c\u306b\u95a2\u3059\u308b\u8a2d\u5b9a",id:"player-settings",level:3},{value:"\u30c8\u30ea\u30ac\u30fc\u3067\u304d\u308b\u30dc\u30bf\u30f3",id:"interact",level:3},{value:"\u30d7\u30ec\u30a4\u30e4\u30fc\u306e\u30c6\u30ec\u30dd\u30fc\u30c8",id:"teleport-player",level:3},{value:"\u30d7\u30ec\u30a4\u30e4\u30fc\u306e\u53d6\u5f97",id:"get-players",level:3},{value:"UdonSharp\u30b9\u30af\u30ea\u30d7\u30c8\u4f8b",id:"udonsharp-script-example",level:3}];function d(e){const n={a:"a",br:"br",code:"code",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#spinning-cube",children:"\u56de\u8ee2\u3059\u308b\u30ad\u30e5\u30fc\u30d6"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#player-settings",children:"\u30d7\u30ec\u30a4\u30e4\u30fc\u64cd\u4f5c\u306b\u95a2\u3059\u308b\u8a2d\u5b9a"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#interact",children:"\u30c8\u30ea\u30ac\u30fc\u3067\u304d\u308b\u30dc\u30bf\u30f3"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#teleport-player",children:"\u30d7\u30ec\u30a4\u30e4\u30fc\u306e\u30c6\u30ec\u30dd\u30fc\u30c8"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#get-players",children:"\u30d7\u30ec\u30a4\u30e4\u30fc\u306e\u53d6\u5f97"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#udonsharp-script-example",children:"UdonSharp\u30b9\u30af\u30ea\u30d7\u30c8\u4f8b"})}),"\n"]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"spinning-cube",children:"\u56de\u8ee2\u3059\u308b\u30ad\u30e5\u30fc\u30d6"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cs",children:"using UnityEngine;\r\nusing UdonSharp;\r\n\r\npublic class RotatingCubeBehaviour : UdonSharpBehaviour\r\n{\r\n    private void Update()\r\n    {\r\n        transform.Rotate(Vector3.up, 90f * Time.deltaTime);\r\n    }\r\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"player-settings",children:"\u30d7\u30ec\u30a4\u30e4\u30fc\u64cd\u4f5c\u306b\u95a2\u3059\u308b\u8a2d\u5b9a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cs",children:'using UnityEngine;\r\nusing UdonSharp;\r\nusing VRC.SDKBase;\r\n\r\npublic class PlayerModSettings : UdonSharpBehaviour\r\n{\r\n    VRCPlayerApi playerApi;\r\n\r\n    [Header("Player Settings")]\r\n    [SerializeField] float jumpImpulse = 3;\r\n    [SerializeField] float walkSpeed = 2;\r\n    [SerializeField] float runSpeed = 4;\r\n    [SerializeField] float gravityStrengh = 1;\r\n\r\n    void Start()\r\n    {\r\n        playerApi = Networking.LocalPlayer;\r\n        playerApi.SetJumpImpulse(jumpImpulse);\r\n        playerApi.SetWalkSpeed(walkSpeed);\r\n        playerApi.SetRunSpeed(runSpeed);\r\n        playerApi.SetGravityStrength(gravityStrengh);\r\n    }\r\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["\u3088\u308a\u9ad8\u5ea6\u306a\u30b9\u30af\u30ea\u30d7\u30c8\u4f8b\u306f\u3001",(0,a.jsx)(n.a,{href:"https://github.com/Merlin-san/UdonSharp/blob/master/Assets/UdonSharp/Examples/Utilities/PlayerModSetter.cs",children:"UdonSharp\u306eExamples\u30d5\u30a9\u30eb\u30c0\u30fc"}),"\u306b\u3042\u308a\u307e\u3059\u3002",(0,a.jsx)(n.br,{}),"\n","(\u8a33\u6ce8: \u4e0a\u8a18\u306e\u30ea\u30f3\u30af\u306f\u53e4\u3044\u3067\u3059\u3002\u65b0\u3057\u3044\u3082\u306e\u306f",(0,a.jsx)(n.a,{href:"https://github.com/vrchat-community/UdonSharp/tree/master/Packages/com.vrchat.UdonSharp/Samples~",children:"\u3053\u3061\u3089"}),")"]}),"\n",(0,a.jsx)(n.h3,{id:"interact",children:"\u30c8\u30ea\u30ac\u30fc\u3067\u304d\u308b\u30dc\u30bf\u30f3"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cs",children:"using UnityEngine;\r\nusing UdonSharp;\r\n\r\npublic class ClickMe: UdonSharpBehaviour\r\n{\r\n    public override void Interact()\r\n    {\r\n        gameObject.SetActive(false);\r\n    }\r\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"teleport-player",children:"\u30d7\u30ec\u30a4\u30e4\u30fc\u306e\u30c6\u30ec\u30dd\u30fc\u30c8"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cs",children:"using UdonSharp;\r\nusing UnityEngine;\r\nusing VRC.SDKBase;\r\n\r\npublic class TeleportPlayer : UdonSharpBehaviour\r\n{\r\n    [SerializeField] Transform targetPosition;\r\n\r\n    public override void Interact()\r\n    {\r\n        Networking.LocalPlayer.TeleportTo(targetPosition.position, \r\n                                          targetPosition.rotation, \r\n                                          VRC_SceneDescriptor.SpawnOrientation.Default, \r\n                                          false);\r\n    }\r\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"get-players",children:"\u30d7\u30ec\u30a4\u30e4\u30fc\u306e\u53d6\u5f97"}),"\n",(0,a.jsx)(n.p,{children:"Example on how to get all players in the instance."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cs",children:"using UdonSharp;\r\nusing UnityEngine;\r\nusing VRC.SDKBase;\r\n\r\npublic class GetPlayersExample : UdonSharpBehaviour\r\n{\r\n    // World capacity is 10, so we create a new array with length of 20 (Hard cap)\r\n    VRCPlayerApi[] players = new VRCPlayerApi[20];\r\n\r\n    void Start()\r\n    {\r\n        VRCPlayerApi.GetPlayers(players);\r\n\r\n        foreach(VRCPlayerApi player in players) {\r\n            if(player == null) continue;\r\n            Debug.Log(player.displayName);\r\n        }\r\n    }\r\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"udonsharp-script-example",children:"UdonSharp\u30b9\u30af\u30ea\u30d7\u30c8\u4f8b"}),"\n",(0,a.jsx)(n.p,{children:"This is an example class for UdonSharp and how it communicates with other UdonSharp behaviours."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cs",children:'using UdonSharp;\r\nusing UnityEngine;\r\nusing VRC.SDKBase;\r\nusing VRC.Udon.Common.Interfaces;\r\n\r\nnamespace UdonSharpExample\r\n{\r\n    public class Example : UdonSharpBehaviour\r\n    {\r\n        // UdonSharpBehaviour Class (Affects the Inspector)\r\n        [SerializeField] AnotherExample anotherExample;\r\n\r\n        void Start()\r\n        {\r\n            // Same as: anotherExample.GetProgramVariable("publicBoolean");\r\n            if(anotherExample.publicBoolean)\r\n            {\r\n                // Same as: anotherExample.SendCustomEvent("RunMethod");\r\n                anotherExample.RunMethod();\r\n            }\r\n        }\r\n\r\n        // VRChat Event\r\n        public override void Interact()\r\n        {\r\n            // Same as: SendCustomEvent("DoStuff");\r\n            DoStuff();\r\n        }\r\n\r\n        public void DoStuff()\r\n        {\r\n            // This will be sent to all clients and run locally on each one (including the one sending)\r\n            SendCustomNetworkEvent(NetworkEventTarget.All, "NetworkEventStuff");\r\n        }\r\n\r\n        public void NetworkEventStuff()\r\n        {\r\n            // Same as: anotherExample.SetProgramVariable("publicBoolean", false);\r\n            anotherExample.publicBoolean = false;\r\n\r\n            // Same as: anotherExample.SendCustomEvent("RunMethod");\r\n            anotherExample.RunMethod();\r\n\r\n            anotherExample.SendCustomNetworkEvent(NetworkEventTarget.Owner, "DoOwnerStuff");\r\n        }\r\n    }\r\n}\n'})})]})}function c(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>l});var a=r(7294);const t={},i=a.createContext(t);function l(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);