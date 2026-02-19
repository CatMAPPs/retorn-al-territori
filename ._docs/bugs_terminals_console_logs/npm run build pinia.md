$ npm run build

> histoguesser@1.0.0 build
> vue-tsc && vite build

src/components/lobby/LobbyGameplay.vue:5:10 - error TS2724: '"@/stores/lobbyStore"' has no exported member named 'lobbyStore'. Did you mean 'useLobbyStore'?

5 import { lobbyStore } from '@/stores/lobbyStore'
           ~~~~~~~~~~

  src/stores/lobbyStore.ts:6:14
    6 export const useLobbyStore = defineStore('lobby', () => {
                   ~~~~~~~~~~~~~
    'useLobbyStore' is declared here.

src/composables/useLobby.ts:29:24 - error TS2345: Argument of type '{ topic: string; params: { config: { broadcast?: { self?: boolean | undefined; ack?: boolean | undefined; replay?: { since: number; limit?: number | undefined; } | undefined; } | undefined; presence?: { ...; } | undefined; private?: boolean | undefined; }; }; ... 21 more ...; teardown: () => void; }' is not assignable to parameter of type 'RealtimeChannel'.     
  Types of property 'socket' are incompatible.
    Type '{ accessTokenValue: string | null; apiKey: string | null; channels: { topic: string; params: { config: { broadcast?: { self?: boolean 
| undefined; ack?: boolean | undefined; replay?: { since: number; limit?: number | undefined; } | undefined; } | undefined; presence?: { ...; } 
| undefined; private?: boolean | undefi...' is missing the following properties from type 'RealtimeClient': _connectionState, _wasManualDisconnect, _authPromise, _workerObjectUrl

29       unsubscribeLobby(realtimeChannel.value)
                          ~~~~~~~~~~~~~~~~~~~~~

src/composables/useLobby.ts:202:30 - error TS6133: 'player' is declared 
but its value is never read.

202       onPlayerJoined: async (player) => {
                                 ~~~~~~

src/composables/useLobby.ts:215:28 - error TS6133: 'playerId' is declared but its value is never read.

215       onPlayerLeft: async (playerId) => {
                               ~~~~~~~~

src/composables/useLobby.ts:271:36 - error TS6133: 'submission' is declared but its value is never read.

271       onSubmissionReceived: async (submission) => {
                                       ~~~~~~~~~~

src/composables/useLobby.ts:292:28 - error TS6133: 'scores' is declared 
but its value is never read.

292       onRoundEnded: async (scores) => {
                               ~~~~~~

src/composables/useLobby.ts:296:27 - error TS6133: 'finalScores' is declared but its value is never read.

296       onGameEnded: async (finalScores) => {
                              ~~~~~~~~~~~

src/composables/useLobby.ts:308:24 - error TS2345: Argument of type '{ topic: string; params: { config: { broadcast?: { self?: boolean | undefined; ack?: boolean | undefined; replay?: { since: number; limit?: number 
| undefined; } | undefined; } | undefined; presence?: { ...; } | undefined; private?: boolean | undefined; }; }; ... 21 more ...; teardown: () => void; }' is not assignable to parameter of type 'RealtimeChannel'.    
  Types of property 'socket' are incompatible.
    Type '{ accessTokenValue: string | null; apiKey: string | null; channels: { topic: string; params: { config: { broadcast?: { self?: boolean 
| undefined; ack?: boolean | undefined; replay?: { since: number; limit?: number | undefined; } | undefined; } | undefined; presence?: { ...; } 
| undefined; private?: boolean | undefi...' is missing the following properties from type 'RealtimeClient': _connectionState, _wasManualDisconnect, _authPromise, _workerObjectUrl

308       unsubscribeLobby(realtimeChannel.value)
                           ~~~~~~~~~~~~~~~~~~~~~

src/composables/useMap.ts:62:14 - error TS2345: Argument of type '{ getRenderer: (layer: Path) => Renderer; addControl: (control: Control<ControlOptions>) => Map; removeControl: (control: Control<ControlOptions>) => 
Map; ... 83 more ...; hasEventListeners: (type: string) => boolean; }' is not assignable to parameter of type 'Map | LayerGroup<any>'.
  Type '{ getRenderer: (layer: Path) => Renderer; addControl: (control: 
Control<ControlOptions>) => Map; removeControl: (control: Control<ControlOptions>) => Map; ... 83 more ...; hasEventListeners: (type: string) => boolean; }' is not assignable to type 'Map'.
    The types of 'options.layers' are incompatible between these types. 
      Type '{ addTo: (map: Map | LayerGroup<any>) => Layer; remove: () => Layer; removeFrom: (map: Map) => Layer; getPane: (name?: string | undefined) => HTMLElement | undefined; ... 36 more ...; hasEventListeners: (type: string) => boolean; }[] | undefined' is not assignable to type 'Layer[] | undefined'.
        Type '{ addTo: (map: Map | LayerGroup<any>) => Layer; remove: () => Layer; removeFrom: (map: Map) => Layer; getPane: (name?: string | undefined) => HTMLElement | undefined; ... 36 more ...; hasEventListeners: (type: string) => boolean; }[]' is not assignable to type 'Layer[]'.   
          Property '_map' is missing in type '{ addTo: (map: Map | LayerGroup<any>) => Layer; remove: () => Layer; removeFrom: (map: Map) => Layer; getPane: (name?: string | undefined) => HTMLElement | undefined; ... 36 more ...; hasEventListeners: (type: string) => boolean; }' but required in type 'Layer'.

62     }).addTo(map.value);
                ~~~~~~~~~

  node_modules/@types/leaflet/index.d.ts:1715:15
    1715     protected _map: Map;
                       ~~~~
    '_map' is declared here.

src/composables/useMap.ts:90:9 - error TS2345: Argument of type '{ getRenderer: (layer: Path) => Renderer; addControl: (control: Control<ControlOptions>) => Map; removeControl: (control: Control<ControlOptions>) => Map; ... 83 more ...; hasEventListeners: (type: string) => boolean; }' is not assignable to parameter of type 'Map | LayerGroup<any>'.
  Type '{ getRenderer: (layer: Path) => Renderer; addControl: (control: 
Control<ControlOptions>) => Map; removeControl: (control: Control<ControlOptions>) => Map; ... 83 more ...; hasEventListeners: (type: string) => boolean; }' is not assignable to type 'Map'.
    The types of 'options.layers' are incompatible between these types. 
      Type '{ addTo: (map: Map | LayerGroup<any>) => Layer; remove: () => Layer; removeFrom: (map: Map) => Layer; getPane: (name?: string | undefined) => HTMLElement | undefined; ... 36 more ...; hasEventListeners: (type: string) => boolean; }[] | undefined' is not assignable to type 'Layer[] | undefined'.
        Type '{ addTo: (map: Map | LayerGroup<any>) => Layer; remove: () => Layer; removeFrom: (map: Map) => Layer; getPane: (name?: string | undefined) => HTMLElement | undefined; ... 36 more ...; hasEventListeners: (type: string) => boolean; }[]' is not assignable to type 'Layer[]'.   
          Property '_map' is missing in type '{ addTo: (map: Map | LayerGroup<any>) => Layer; remove: () => Layer; removeFrom: (map: Map) => Layer; getPane: (name?: string | undefined) => HTMLElement | undefined; ... 36 more ...; hasEventListeners: (type: string) => boolean; }' but required in type 'Layer'.

90         map.value,
           ~~~~~~~~~

  node_modules/@types/leaflet/index.d.ts:1715:15
    1715     protected _map: Map;
                       ~~~~
    '_map' is declared here.

src/composables/useMap.ts:109:70 - error TS2345: Argument of type '{ getRenderer: (layer: Path) => Renderer; addControl: (control: Control<ControlOptions>) => Map; removeControl: (control: Control<ControlOptions>) => Map; ... 83 more ...; hasEventListeners: (type: string) => boolean; }' 
is not assignable to parameter of type 'Map | LayerGroup<any>'.
  Type '{ getRenderer: (layer: Path) => Renderer; addControl: (control: 
Control<ControlOptions>) => Map; removeControl: (control: Control<ControlOptions>) => Map; ... 83 more ...; hasEventListeners: (type: string) => boolean; }' is not assignable to type 'Map'.
    The types of 'options.layers' are incompatible between these types. 
      Type '{ addTo: (map: Map | LayerGroup<any>) => Layer; remove: () => Layer; removeFrom: (map: Map) => Layer; getPane: (name?: string | undefined) => HTMLElement | undefined; ... 36 more ...; hasEventListeners: (type: string) => boolean; }[] | undefined' is not assignable to type 'Layer[] | undefined'.
        Type '{ addTo: (map: Map | LayerGroup<any>) => Layer; remove: () => Layer; removeFrom: (map: Map) => Layer; getPane: (name?: string | undefined) => HTMLElement | undefined; ... 36 more ...; hasEventListeners: (type: string) => boolean; }[]' is not assignable to type 'Layer[]'.   
          Property '_map' is missing in type '{ addTo: (map: Map | LayerGroup<any>) => Layer; remove: () => Layer; removeFrom: (map: Map) => Layer; getPane: (name?: string | undefined) => HTMLElement | undefined; ... 36 more ...; hasEventListeners: (type: string) => boolean; }' but required in type 'Layer'.

109     correctPin.value = L.marker([lat, lon], { icon: redIcon }).addTo(map.value);
    
 ~~~~~~~~~

  node_modules/@types/leaflet/index.d.ts:1715:15
    1715     protected _map: Map;
                       ~~~~
    '_map' is declared here.

src/composables/useMap.ts:124:15 - error TS2345: Argument of type '{ getRenderer: (layer: Path) => Renderer; addControl: (control: Control<ControlOptions>) => Map; removeControl: (control: Control<ControlOptions>) => Map; ... 83 more ...; hasEventListeners: (type: string) => boolean; }' 
is not assignable to parameter of type 'Map | LayerGroup<any>'.
  Type '{ getRenderer: (layer: Path) => Renderer; addControl: (control: 
Control<ControlOptions>) => Map; removeControl: (control: Control<ControlOptions>) => Map; ... 83 more ...; hasEventListeners: (type: string) => boolean; }' is not assignable to type 'Map'.
    The types of 'options.layers' are incompatible between these types. 
      Type '{ addTo: (map: Map | LayerGroup<any>) => Layer; remove: () => Layer; removeFrom: (map: Map) => Layer; getPane: (name?: string | undefined) => HTMLElement | undefined; ... 36 more ...; hasEventListeners: (type: string) => boolean; }[] | undefined' is not assignable to type 'Layer[] | undefined'.
        Type '{ addTo: (map: Map | LayerGroup<any>) => Layer; remove: () => Layer; removeFrom: (map: Map) => Layer; getPane: (name?: string | undefined) => HTMLElement | undefined; ... 36 more ...; hasEventListeners: (type: string) => boolean; }[]' is not assignable to type 'Layer[]'.   
          Property '_map' is missing in type '{ addTo: (map: Map | LayerGroup<any>) => Layer; remove: () => Layer; removeFrom: (map: Map) => Layer; getPane: (name?: string | undefined) => HTMLElement | undefined; ... 36 more ...; hasEventListeners: (type: string) => boolean; }' but required in type 'Layer'.

124       ).addTo(map.value);
                  ~~~~~~~~~

  node_modules/@types/leaflet/index.d.ts:1715:15
    1715     protected _map: Map;
                       ~~~~
    '_map' is declared here.

src/composables/useMap.ts:143:29 - error TS2345: Argument of type '{ toGeoJSON: (precision?: number | false | undefined) => Feature<Point, any>; getLatLng: () => LatLng; setLatLng: (latlng: LatLngExpression) => Marker<...>; ... 47 more ...; hasEventListeners: (type: string) => boolean; }' is not assignable to parameter of type 'Layer'.
  Property '_map' is missing in type '{ toGeoJSON: (precision?: number | false | undefined) => Feature<Point, any>; getLatLng: () => LatLng; setLatLng: (latlng: LatLngExpression) => Marker<...>; ... 47 more ...; hasEventListeners: (type: string) => boolean; }' but required in type 'Layer'.

143       map.value.removeLayer(userPin.value);
                                ~~~~~~~~~~~~~

  node_modules/@types/leaflet/index.d.ts:1715:15
    1715     protected _map: Map;
                       ~~~~
    '_map' is declared here.

src/composables/useMap.ts:147:29 - error TS2345: Argument of type '{ toGeoJSON: (precision?: number | false | undefined) => Feature<Point, any>; getLatLng: () => LatLng; setLatLng: (latlng: LatLngExpression) => Marker<...>; ... 47 more ...; hasEventListeners: (type: string) => boolean; }' is not assignable to parameter of type 'Layer'.
  Property '_map' is missing in type '{ toGeoJSON: (precision?: number | false | undefined) => Feature<Point, any>; getLatLng: () => LatLng; setLatLng: (latlng: LatLngExpression) => Marker<...>; ... 47 more ...; hasEventListeners: (type: string) => boolean; }' but required in type 'Layer'.

147       map.value.removeLayer(correctPin.value);
                                ~~~~~~~~~~~~~~~~

  node_modules/@types/leaflet/index.d.ts:1715:15
    1715     protected _map: Map;
                       ~~~~
    '_map' is declared here.

src/composables/useMap.ts:151:29 - error TS2345: Argument of type '{ toGeoJSON: (precision?: number | false | undefined) => Feature<LineString | MultiLineString, any>; getLatLngs: () => LatLng[] | LatLng[][] | LatLng[][][]; ... 52 more ...; hasEventListeners: (type: string) => boolean; }' is not assignable to parameter of type 'Layer'.
  Property '_map' is missing in type '{ toGeoJSON: (precision?: number | false | undefined) => Feature<LineString | MultiLineString, any>; getLatLngs: () => LatLng[] | LatLng[][] | LatLng[][][]; ... 52 more ...; hasEventListeners: (type: string) => boolean; }' but required in type 'Layer'.

151       map.value.removeLayer(distanceLine.value);
                                ~~~~~~~~~~~~~~~~~~

  node_modules/@types/leaflet/index.d.ts:1715:15
    1715     protected _map: Map;
                       ~~~~
    '_map' is declared here.

src/lib/geography/haversine.ts:63:10 - error TS6133: '_toRadians' is declared but its value is never read.

63 function _toRadians(degrees: number): number {
            ~~~~~~~~~~

src/lib/supabase/auth.ts:108:27 - error TS2339: Property 'email' does not exist on type 'never'.

108       if (existingProfile.email !== authUser.email) {
                              ~~~~~

src/lib/supabase/auth.ts:111:19 - error TS2345: Argument of type '{ email: string | undefined; updated_at: string; }' is not assignable to parameter of type 'never'.

111           .update({
                      ~
112             email: authUser.email,
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
113             updated_at: new Date().toISOString()
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
114           })
    ~~~~~~~~~~~

src/lib/supabase/auth.ts:135:8 - error TS2769: No overload matches this 
call.
  Overload 1 of 2, '(values: never, options?: { count?: "exact" | "planned" | "estimated" | undefined; } | undefined): PostgrestFilterBuilder<{ 
PostgrestVersion: "12"; }, never, never, null, "users", never, "POST">', gave the following error.
    Argument of type '{ id: string; email: string | undefined; username: any; }' is not assignable to parameter of type 'never'.
  Overload 2 of 2, '(values: never[], options?: { count?: "exact" | "planned" | "estimated" | undefined; defaultToNull?: boolean | undefined; } 
| undefined): PostgrestFilterBuilder<{ PostgrestVersion: "12"; }, never, never, null, "users", never, "POST">', gave the following error.       
    Object literal may only specify known properties, and 'id' does not 
exist in type 'never[]'.

135       .insert({
           ~~~~~~


src/lib/supabase/auth.ts:183:8 - error TS2769: No overload matches this 
call.
  Overload 1 of 2, '(values: never, options?: { onConflict?: string | undefined; ignoreDuplicates?: boolean | undefined; count?: "exact" | "planned" | "estimated" | undefined; } | undefined): PostgrestFilterBuilder<{ ...; }, ... 5 more ..., "POST">', gave the following error.
    Argument of type '{ user_id: string; }' is not assignable to parameter of type 'never'.
  Overload 2 of 2, '(values: never[], options?: { onConflict?: string | 
undefined; ignoreDuplicates?: boolean | undefined; count?: "exact" | "planned" | "estimated" | undefined; defaultToNull?: boolean | undefined; } | undefined): PostgrestFilterBuilder<...>', gave the following error.  
    Object literal may only specify known properties, and 'user_id' does not exist in type 'never[]'.

183       .upsert({
           ~~~~~~


src/lib/supabase/auth.ts:245:13 - error TS2345: Argument of type '{ updated_at: string; username?: string; avatar_url?: string; }' is not assignable to parameter of type 'never'.

245     .update({ ...updates, updated_at: new Date().toISOString() })   
                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~    

src/lib/supabase/queries.ts:78:43 - error TS2345: Argument of type '{ target_date: string; }' is not assignable to parameter of type 'undefined'.

78     .rpc('get_or_create_daily_challenge', { target_date: date })     
                                             ~~~~~~~~~~~~~~~~~~~~~      

src/lib/supabase/queries.ts:231:3 - error TS2578: Unused '@ts-expect-error' directive.

231   // @ts-expect-error - RPC function return type not recognized by generated types
      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

src/lib/supabase/queries.ts:233:22 - error TS2339: Property 'success' does not exist on type 'never'.

233     success: data[0].success,
                         ~~~~~~~

src/lib/supabase/queries.ts:234:22 - error TS2339: Property 'message' does not exist on type 'never'.

234     message: data[0].message,
                         ~~~~~~~

src/lib/supabase/queries.ts:235:20 - error TS2339: Property 'final_score' does not exist on type 'never'.

235     score: data[0].final_score
                       ~~~~~~~~~~~

src/lib/supabase/queries.ts:329:3 - error TS2578: Unused '@ts-expect-error' directive.

329   // @ts-expect-error - RPC function return type not recognized by generated types
      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

src/lib/supabase/queries.ts:331:27 - error TS2339: Property 'has_completed' does not exist on type 'never'.

331     hasCompleted: data[0].has_completed,
                              ~~~~~~~~~~~~~

src/lib/supabase/queries.ts:332:20 - error TS2339: Property 'score' does not exist on type 'never'.

332     score: data[0].score,
                       ~~~~~

src/lib/supabase/queries.ts:333:26 - error TS2339: Property 'completed_at' does not exist on type 'never'.

333     completedAt: data[0].completed_at,
                             ~~~~~~~~~~~~

src/lib/supabase/queries.ts:334:28 - error TS2339: Property 'current_streak' does not exist on type 'never'.

334     currentStreak: data[0].current_streak,
                               ~~~~~~~~~~~~~~

src/lib/supabase/queries.ts:335:24 - error TS2339: Property 'best_score' does not exist on type 'never'.

335     bestScore: data[0].best_score
                           ~~~~~~~~~~

src/views/MultiplayerView.vue:7:10 - error TS2724: '"@/stores/lobbyStore"' has no exported member named 'lobbyStore'. Did you mean 'useLobbyStore'?

7 import { lobbyStore } from '@/stores/lobbyStore'
           ~~~~~~~~~~

  src/stores/lobbyStore.ts:6:14
    6 export const useLobbyStore = defineStore('lobby', () => {
                   ~~~~~~~~~~~~~
    'useLobbyStore' is declared here.

src/views/MultiplayerView.vue:19:33 - error TS2339: Property 'value' does not exist on type '{ id: string; room_code: string; host_id: string; status: LobbyStatus; current_round: number; figure_ids: string[]; created_at: string; expires_at: string; }'.

19   lobby: lobbyComposable.lobby?.value,
                                   ~~~~~

src/views/MultiplayerView.vue:20:35 - error TS2339: Property 'value' does not exist on type '{ id: string; lobby_id: string; user_id: string; username: string; score: number; ready: boolean; connected: boolean; joined_at: string; }'.

20   player: lobbyComposable.player?.value,
                                     ~~~~~

src/views/MultiplayerView.vue:21:41 - error TS2551: Property 'value' does not exist on type 'boolean'. Did you mean 'valueOf'?

21   isLoading: lobbyComposable.isLoading?.value
                                           ~~~~~

  node_modules/typescript/lib/lib.es5.d.ts:548:5
    548     valueOf(): boolean;
            ~~~~~~~~~~~~~~~~~~~
    'valueOf' is declared here.

src/views/MultiplayerView.vue:25:7 - error TS2769: No overload matches this call.
  The last overload gave the following error.
    Argument of type '{ id: string; room_code: string; host_id: string; 
status: LobbyStatus; current_round: number; figure_ids: string[]; created_at: string; expires_at: string; } | null' is not assignable to parameter of type 'object'.
      Type 'null' is not assignable to type 'object'.

25 watch(lobbyComposable.lobby, (newLobby, oldLobby) => {
         ~~~~~~~~~~~~~~~~~~~~~

  node_modules/@vue/runtime-core/dist/runtime-core.d.ts:1495:25
    1495 export declare function watch<T extends object, Immediate extends Readonly<boolean> = false>(source: T, cb: WatchCallback<T, MaybeUndefined<T, Immediate>>, options?: WatchOptions<Immediate>): WatchHandle;   
                                 ~~~~~
    The last overload is declared here.

src/views/MultiplayerView.vue:29:7 - error TS2769: No overload matches this call.
  The last overload gave the following error.
    Argument of type '{ id: string; lobby_id: string; user_id: string; username: string; score: number; ready: boolean; connected: boolean; joined_at: string; } | null' is not assignable to parameter of type 'object'.
      Type 'null' is not assignable to type 'object'.

29 watch(lobbyComposable.player, (newPlayer, oldPlayer) => {
         ~~~~~~~~~~~~~~~~~~~~~~

  node_modules/@vue/runtime-core/dist/runtime-core.d.ts:1495:25
    1495 export declare function watch<T extends object, Immediate extends Readonly<boolean> = false>(source: T, cb: WatchCallback<T, MaybeUndefined<T, Immediate>>, options?: WatchOptions<Immediate>): WatchHandle;   
                                 ~~~~~
    The last overload is declared here.

src/views/MultiplayerView.vue:33:7 - error TS2769: No overload matches this call.
  The last overload gave the following error.
    Argument of type 'boolean' is not assignable to parameter of type 'object'.

33 watch(lobbyComposable.isLoading, (newLoading, oldLoading) => {       
         ~~~~~~~~~~~~~~~~~~~~~~~~~

  node_modules/@vue/runtime-core/dist/runtime-core.d.ts:1495:25
    1495 export declare function watch<T extends object, Immediate extends Readonly<boolean> = false>(source: T, cb: WatchCallback<T, MaybeUndefined<T, Immediate>>, options?: WatchOptions<Immediate>): WatchHandle;   
                                 ~~~~~
    The last overload is declared here.

src/views/MultiplayerView.vue:41:35 - error TS2339: Property 'value' does not exist on type '{ id: string; room_code: string; host_id: string; status: LobbyStatus; current_round: number; figure_ids: string[]; created_at: string; expires_at: string; }'.

41     lobby: lobbyComposable.lobby?.value,
                                     ~~~~~

src/views/MultiplayerView.vue:42:37 - error TS2339: Property 'value' does not exist on type '{ id: string; lobby_id: string; user_id: string; username: string; score: number; ready: boolean; connected: boolean; joined_at: string; }'.

42     player: lobbyComposable.player?.value,
                                       ~~~~~

src/views/MultiplayerView.vue:43:43 - error TS2551: Property 'value' does not exist on type 'boolean'. Did you mean 'valueOf'?

43     isLoading: lobbyComposable.isLoading?.value
                                             ~~~~~

  node_modules/typescript/lib/lib.es5.d.ts:548:5
    548     valueOf(): boolean;
            ~~~~~~~~~~~~~~~~~~~
    'valueOf' is declared here.

src/views/MultiplayerView.vue:87:45 - error TS2551: Property 'value' does not exist on type 'boolean'. Did you mean 'valueOf'?

87       <div v-if="lobbyComposable.isLoading?.value" class="flex items-center justify-center min-h-[50vh]">
                                               ~~~~~

  node_modules/typescript/lib/lib.es5.d.ts:548:5
    548     valueOf(): boolean;
            ~~~~~~~~~~~~~~~~~~~
    'valueOf' is declared here.

src/views/MultiplayerView.vue:94:46 - error TS2551: Property 'value' does not exist on type 'string'. Did you mean 'valueOf'?

94       <div v-else-if="lobbyComposable.error?.value" class="flex items-center justify-center min-h-[50vh]">
                                                ~~~~~

  node_modules/typescript/lib/lib.es5.d.ts:529:5
    529     valueOf(): string;
            ~~~~~~~~~~~~~~~~~~
    'valueOf' is declared here.

src/views/MultiplayerView.vue:97:68 - error TS2551: Property 'value' does not exist on type 'string'. Did you mean 'valueOf'?

97           <p class="text-noir-text mb-4">{{ lobbyComposable.error?.value }}</p>
                                                                      ~~~~~

  node_modules/typescript/lib/lib.es5.d.ts:529:5
    529     valueOf(): string;
            ~~~~~~~~~~~~~~~~~~
    'valueOf' is declared here.

src/views/MultiplayerView.vue:112:64 - error TS2339: Property 'value' does not exist on type '{ id: string; room_code: string; host_id: string; 
status: LobbyStatus; current_round: number; figure_ids: string[]; created_at: string; expires_at: string; }'.

112           <p><strong>Lobby:</strong> {{ lobbyComposable.lobby?.value ? 'EXISTS' : 'NULL' }}</p>
                                                                   ~~~~~
src/views/MultiplayerView.vue:113:65 - error TS2339: Property 'value' does not exist on type '{ id: string; room_code: string; host_id: string; 
status: LobbyStatus; current_round: number; figure_ids: string[]; created_at: string; expires_at: string; }'.

113           <p><strong>Status:</strong> {{ lobbyComposable.lobby?.value?.status || 'N/A' }}</p>
                                                                    ~~~~~

src/views/MultiplayerView.vue:114:66 - error TS2339: Property 'value' does not exist on type '{ id: string; lobby_id: string; user_id: string; username: string; score: number; ready: boolean; connected: boolean; joined_at: string; }'.

114           <p><strong>Player:</strong> {{ lobbyComposable.player?.value ? 'EXISTS' : 'NULL' }}</p>
                                                                     ~~~~~

src/views/MultiplayerView.vue:115:74 - error TS2551: Property 'value' does not exist on type '{ id: string; lobby_id: string; user_id: string; username: string; score: number; ready: boolean; connected: boolean; joined_at: string; }[]'. Did you mean 'values'?

115           <p><strong>Players Count:</strong> {{ lobbyComposable.players?.value?.length || 0 }}</p>
    
     ~~~~~

  node_modules/typescript/lib/lib.es2015.iterable.d.ts:93:5
    93     values(): ArrayIterator<T>;
           ~~~~~~~~~~~~~~~~~~~~~~~~~~~
    'values' is declared here.

src/views/MultiplayerView.vue:116:70 - error TS2551: Property 'value' does not exist on type 'boolean'. Did you mean 'valueOf'?

116           <p><strong>Loading:</strong> {{ lobbyComposable.isLoading?.value }}</p>
    
 ~~~~~

  node_modules/typescript/lib/lib.es5.d.ts:548:5
    548     valueOf(): boolean;
            ~~~~~~~~~~~~~~~~~~~
    'valueOf' is declared here.

src/views/MultiplayerView.vue:126:44 - error TS2339: Property 'value' does not exist on type '{ id: string; room_code: string; host_id: string; 
status: LobbyStatus; current_round: number; figure_ids: string[]; created_at: string; expires_at: string; }'.

126         <div v-if="!lobbyComposable.lobby?.value" class="border-2 border-red-500 p-4">
                                               ~~~~~

src/views/MultiplayerView.vue:138:48 - error TS2339: Property 'value' does not exist on type '{ id: string; room_code: string; host_id: string; 
status: LobbyStatus; current_round: number; figure_ids: string[]; created_at: string; expires_at: string; }'.

138         <div v-else-if="lobbyComposable.lobby?.value && lobbyComposable.lobby.value.status === 'waiting'" class="border-2 border-green-500 p-4">
                                                   ~~~~~

src/views/MultiplayerView.vue:138:79 - error TS2339: Property 'value' does not exist on type '{ id: string; room_code: string; host_id: string; 
status: LobbyStatus; current_round: number; figure_ids: string[]; created_at: string; expires_at: string; }'.

138         <div v-else-if="lobbyComposable.lobby?.value && lobbyComposable.lobby.value.status === 'waiting'" class="border-2 border-green-500 p-4">
    
          ~~~~~

src/views/MultiplayerView.vue:141:43 - error TS2339: Property 'value' does not exist on type '{ id: string; room_code: string; host_id: string; 
status: LobbyStatus; current_round: number; figure_ids: string[]; created_at: string; expires_at: string; }'.

141             :lobby="lobbyComposable.lobby.value"
                                              ~~~~~

src/views/MultiplayerView.vue:142:48 - error TS2551: Property 'value' does not exist on type '{ id: string; lobby_id: string; user_id: string; username: string; score: number; ready: boolean; connected: boolean; joined_at: string; }[]'. Did you mean 'values'?

142             :players="lobbyComposable.players?.value || []"
                                                   ~~~~~

  node_modules/typescript/lib/lib.es2015.iterable.d.ts:93:5
    93     values(): ArrayIterator<T>;
           ~~~~~~~~~~~~~~~~~~~~~~~~~~~
    'values' is declared here.

src/views/MultiplayerView.vue:143:54 - error TS2339: Property 'value' does not exist on type '{ id: string; lobby_id: string; user_id: string; username: string; score: number; ready: boolean; connected: boolean; joined_at: string; }'.

143             :current-player="lobbyComposable.player?.value"
                                                         ~~~~~

src/views/MultiplayerView.vue:148:48 - error TS2339: Property 'value' does not exist on type '{ id: string; room_code: string; host_id: string; 
status: LobbyStatus; current_round: number; figure_ids: string[]; created_at: string; expires_at: string; }'.

148         <div v-else-if="lobbyComposable.lobby?.value && lobbyComposable.lobby.value.status === 'in_progress' && lobbyComposable.isRoundActive?.value" class="border-2 border-blue-500 p-4">
                                                   ~~~~~

src/views/MultiplayerView.vue:148:79 - error TS2339: Property 'value' does not exist on type '{ id: string; room_code: string; host_id: string; 
status: LobbyStatus; current_round: number; figure_ids: string[]; created_at: string; expires_at: string; }'.

148         <div v-else-if="lobbyComposable.lobby?.value && lobbyComposable.lobby.value.status === 'in_progress' && lobbyComposable.isRoundActive?.value" class="border-2 border-blue-500 p-4">
    
          ~~~~~

src/views/MultiplayerView.vue:148:144 - error TS2551: Property 'value' does not exist on type 'boolean'. Did you mean 'valueOf'?

148         <div v-else-if="lobbyComposable.lobby?.value && lobbyComposable.lobby.value.status === 'in_progress' && lobbyComposable.isRoundActive?.value" class="border-2 border-blue-500 p-4">
    

   ~~~~~

  node_modules/typescript/lib/lib.es5.d.ts:548:5
    548     valueOf(): boolean;
            ~~~~~~~~~~~~~~~~~~~
    'valueOf' is declared here.

src/views/MultiplayerView.vue:151:43 - error TS2339: Property 'value' does not exist on type '{ id: string; room_code: string; host_id: string; 
status: LobbyStatus; current_round: number; figure_ids: string[]; created_at: string; expires_at: string; }'.

151             :lobby="lobbyComposable.lobby.value"
                                              ~~~~~

src/views/MultiplayerView.vue:152:48 - error TS2551: Property 'value' does not exist on type '{ id: string; lobby_id: string; user_id: string; username: string; score: number; ready: boolean; connected: boolean; joined_at: string; }[]'. Did you mean 'values'?

152             :players="lobbyComposable.players?.value || []"
                                                   ~~~~~

  node_modules/typescript/lib/lib.es2015.iterable.d.ts:93:5
    93     values(): ArrayIterator<T>;
           ~~~~~~~~~~~~~~~~~~~~~~~~~~~
    'values' is declared here.

src/views/MultiplayerView.vue:153:59 - error TS2551: Property 'value' does not exist on type 'number'. Did you mean 'valueOf'?

153             :current-round="lobbyComposable.currentRound?.value || 0"
                                                              ~~~~~     

  node_modules/typescript/lib/lib.es5.d.ts:585:5
    585     valueOf(): number;
            ~~~~~~~~~~~~~~~~~~
    'valueOf' is declared here.

src/views/MultiplayerView.vue:158:48 - error TS2339: Property 'value' does not exist on type '{ id: string; room_code: string; host_id: string; 
status: LobbyStatus; current_round: number; figure_ids: string[]; created_at: string; expires_at: string; }'.

158         <div v-else-if="lobbyComposable.lobby?.value && lobbyComposable.lobby.value.status === 'finished'" class="border-2 border-purple-500 p-4">
                                                   ~~~~~

src/views/MultiplayerView.vue:158:79 - error TS2339: Property 'value' does not exist on type '{ id: string; room_code: string; host_id: string; 
status: LobbyStatus; current_round: number; figure_ids: string[]; created_at: string; expires_at: string; }'.

158         <div v-else-if="lobbyComposable.lobby?.value && lobbyComposable.lobby.value.status === 'finished'" class="border-2 border-purple-500 p-4">
    
          ~~~~~

src/views/MultiplayerView.vue:161:43 - error TS2339: Property 'value' does not exist on type '{ id: string; room_code: string; host_id: string; 
status: LobbyStatus; current_round: number; figure_ids: string[]; created_at: string; expires_at: string; }'.

161             :lobby="lobbyComposable.lobby.value"
                                              ~~~~~

src/views/MultiplayerView.vue:162:48 - error TS2551: Property 'value' does not exist on type '{ id: string; lobby_id: string; user_id: string; username: string; score: number; ready: boolean; connected: boolean; joined_at: string; }[]'. Did you mean 'values'?

162             :players="lobbyComposable.players?.value || []"
                                                   ~~~~~

  node_modules/typescript/lib/lib.es2015.iterable.d.ts:93:5
    93     values(): ArrayIterator<T>;
           ~~~~~~~~~~~~~~~~~~~~~~~~~~~
    'values' is declared here.

src/views/MultiplayerView.vue:169:62 - error TS2339: Property 'value' does not exist on type '{ id: string; room_code: string; host_id: string; 
status: LobbyStatus; current_round: number; figure_ids: string[]; created_at: string; expires_at: string; }'.

169           <p>Lobby: {{ JSON.stringify(lobbyComposable.lobby?.value, 
null, 2) }}</p>
                                                                 ~~~~~  

src/views/MultiplayerView.vue:170:64 - error TS2339: Property 'value' does not exist on type '{ id: string; lobby_id: string; user_id: string; username: string; score: number; ready: boolean; connected: boolean; joined_at: string; }'.

170           <p>Player: {{ JSON.stringify(lobbyComposable.player?.value, null, 2) }}</p>
                                                                   ~~~~~

Found 68 errors in 7 files.

Errors  Files
     1  src/components/lobby/LobbyGameplay.vue:5
     7  src/composables/useLobby.ts:29
     7  src/composables/useMap.ts:62
     1  src/lib/geography/haversine.ts:63
     5  src/lib/supabase/auth.ts:108
    11  src/lib/supabase/queries.ts:78
    36  src/views/MultiplayerView.vue:7