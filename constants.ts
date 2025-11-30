import { Category, CommandItem, PotatoPack } from './types';

export const HUD_COMMANDS: CommandItem[] = [
  { id: 'hud-1', title: 'Field of View', description: 'Changes your field of view (default: 80).', command: 'fov [number]', category: Category.HUD },
  { id: 'hud-2', title: 'FPS Display', description: 'Toggles FPS display overlay.', command: 'stat fps', category: Category.HUD },
  { id: 'hud-3', title: 'Set Resolution', description: 'Changes the game resolution.', command: 'setres 1920x1080', category: Category.HUD },
  { id: 'hud-4', title: 'Frame Times', description: 'Toggles displaying frametimes breakdown.', command: 'stat unit', category: Category.HUD },
  { id: 'hud-5', title: 'Debug Coordinates', description: 'Toggles displaying world coordinates.', command: 'showdebug', category: Category.HUD },
  { id: 'hud-6', title: 'Console HUD', description: 'Adjusts console HUD safe zone.', command: 'r.DebugSafeZone.TitleRatio 0.930', category: Category.HUD },
  { id: 'hud-7', title: 'Debug Camera', description: 'Toggles free-roam debug camera mode.', command: 'Toggledbugcamera', category: Category.HUD },
];

export const MISC_COMMANDS: CommandItem[] = [
  { id: 'misc-1', title: 'Change Skin', description: 'Changes the character skin by ID.', command: 'changeskin [id]', category: Category.MISC },
  { id: 'misc-2', title: 'Suicide', description: 'Eliminates yourself instantly.', command: 'suicide', category: Category.MISC },
  { id: 'misc-3', title: 'God Mode', description: 'Makes you invincible.', command: 'cheat god', category: Category.MISC },
  { id: 'misc-4', title: 'Teleport', description: 'Teleports you to where you are looking.', command: 'cheat teleport', category: Category.MISC },
  { id: 'misc-5', title: 'No Recoil / Double Pump', description: 'Enables double pump and removes weapon recoil.', command: 'weapon.TryToActivateAbilitySpecificLogic doublepump', category: Category.MISC },
  { id: 'misc-6', title: 'Set Game Speed', description: 'Changes game speed time dilation (1 = normal).', command: 'slomo [number]', category: Category.MISC },
  { id: 'misc-7', title: 'Disconnect', description: 'Disconnects from the current game session.', command: 'disconnect', category: Category.MISC },
  { id: 'misc-8', title: 'Exit Game', description: 'Fully exits the game application.', command: 'exit', category: Category.MISC },
  { id: 'misc-9', title: 'Restart Server', description: 'Restarts the current server instance.', command: 'restartserver', category: Category.MISC },
  { id: 'misc-10', title: 'Spawn Drone', description: 'Spawns a teleportation drone.', command: 'summon bp_teleportationdrone_c', category: Category.MISC },
  { id: 'misc-11', title: 'Spawn Supply Drop', description: 'Summons a supply drop at cursor.', command: 'summon athenaSupplyDrop_c', category: Category.MISC },
  { id: 'misc-12', title: 'Spawn Llama', description: 'Summons a loot Llama.', command: 'summon athenaLootproxy_1Llama_c', category: Category.MISC },
  { id: 'misc-13', title: 'Spawn Permanent Items', description: 'Spawns permanent loot items.', command: 'summon /game/pr.../athena_loot_permanent_items_c', category: Category.MISC },
  { id: 'misc-14', title: 'Spawn Traps', description: 'Spawns a floor fire trap.', command: 'summon trap_Floor_fire_C', category: Category.MISC },
  { id: 'misc-15', title: 'Spawn Fire Stack', description: 'Spawns a lit fire prop.', command: 'summon prop_LitFire01_c', category: Category.MISC },
];

export const POTATO_PACKS: PotatoPack[] = [
  {
    id: 'pack-1',
    title: 'Pack 1 — Ultra Potato Mode',
    description: 'Maximum performance, lowest visual fidelity. Unlit viewmode.',
    category: Category.POTATO,
    commandBlock: 'viewmode unlit | r.MipMapLODBias 99999999999 | r.StaticMeshLODDistanceScale 99999999999 | r.ScreenPercentage 50 | r.ShadowQuality 0 | r.LODScale 0.1 | r.MaterialQualityLevel 0 | foliage.DensityScale 0 | r.DefaultFeature.AmbientOcclusion 0'
  },
  {
    id: 'pack-2',
    title: 'Pack 2 — Extreme LOD Boost',
    description: 'Forces lowest level of detail for meshes at all distances.',
    category: Category.POTATO,
    commandBlock: 'r.StaticMeshLODDistanceScale 10000'
  },
  {
    id: 'pack-3',
    title: 'Pack 3 — Balanced FPS Boost',
    description: 'Good balance between visibility and framerate. Disables heavy effects.',
    category: Category.POTATO,
    commandBlock: 't.MaxFPS 240 | r.OneFrameThreadLag 0 | r.ShadowQuality 1 | r.PostProcessAAQuality 3 | r.ViewDistanceScale 0.7 | r.TextureStreaming 1 | r.Streaming.PoolSize 1000 | r.Tonemapper.Sharpen 0.6 | r.MotionBlurQuality 0 | r.BloomQuality 0 | r.LensFlareQuality 0 | r.SceneColorFringeQuality 0 | r.DepthOfFieldQuality 0 | r.Fog 0 | r.VolumetricFog 0 | r.AmbientOcclusionLevels 0 | r.SSR.Quality 0 | r.RefractionQuality 0 | r.EyeAdaptationQuality 0 | r.DefaultFeature.MotionBlur 0'
  },
  {
    id: 'pack-4',
    title: 'Pack 4 — Competitive Opt. (Ver A)',
    description: 'Optimized for competitive play. Removes fog, foliage, and effects.',
    category: Category.POTATO,
    commandBlock: 'r.Fog 0 | r.Atmosphere 0 | viewmode lit | r.TranslucencyLightingVolumeDim 4 | foliage.DensityScale 0 | foliage.DiscardDataOnLoad 1 | foliage.OnlyLOD 1 | grass.DensityScale 0 | grass.DiscardDataOnLoad 1 | r.Streaming.MipBias 10 | r.MaxAnisotropy 0 | FX.MaxCPUParticlesPerEmitter 20 | r.DefaultFeature.AutoExposure 0 | r.DefaultFeature.AmbientOcclusion 0 | r.AmbientOcclusionLevels 0 | r.DefaultFeature.Bloom 0 | r.BloomQuality 0 | r.DefaultFeature.MotionBlur 0 | r.LightFunctionQuality 0 | r.HZBOcclusion 0 | r.ParticleLODBias -5 | r.Tonemapper.Quality 1 | r.Tonemapper.Sharpen 1 | r.TonemapperGamma 2.2 | r.Upscale.Quality 0 | r.EyeAdaptationQuality 0 | r.ShadowQuality 0 | r.Shadow.MaxResolution 32 | r.Shadow.CSM.MaxCascades 1 | t.MaxFPS 240 | r.VSync 0 | r.OneFrameThreadLag 1'
  },
  {
    id: 'pack-5',
    title: 'Pack 5 — Competitive Opt. (Ver B)',
    description: 'Similar to Pack 4 but with different MipBias and Gamma.',
    category: Category.POTATO,
    commandBlock: 'r.Fog 0 | r.Atmosphere 0 | viewmode lit | r.TranslucencyLightingVolumeDim 4 | foliage.DensityScale 0 | foliage.DiscardDataOnLoad 1 | foliage.OnlyLOD 1 | grass.DensityScale 0 | grass.DiscardDataOnLoad 1 | r.Streaming.MipBias 8 | r.MaxAnisotropy 0 | FX.MaxCPUParticlesPerEmitter 20 | r.DefaultFeature.AutoExposure 0 | r.DefaultFeature.AmbientOcclusion 0 | r.AmbientOcclusionLevels 0 | r.DefaultFeature.Bloom 0 | r.BloomQuality 0 | r.DefaultFeature.MotionBlur 0 | r.LightFunctionQuality 0 | r.HZBOcclusion 0 | r.ParticleLODBias -5 | r.Tonemapper.Quality 1 | r.Tonemapper.Sharpen 1 | r.TonemapperGamma 2.5 | r.Upscale.Quality 0 | r.EyeAdaptationQuality 0 | r.ShadowQuality 0 | r.Shadow.MaxResolution 32 | r.Shadow.CSM.MaxCascades 1 | t.MaxFPS 240 | r.VSync 0 | r.OneFrameThreadLag 1'
  },
  {
    id: 'pack-6',
    title: 'Pack 6 — Competitive Opt. (Ver C)',
    description: 'Zero sharpening and adjusted gamma for specific monitors.',
    category: Category.POTATO,
    commandBlock: 'r.Fog 0 | r.Atmosphere 0 | viewmode lit | r.TranslucencyLightingVolumeDim 4 | foliage.DensityScale 0 | foliage.DiscardDataOnLoad 1 | foliage.OnlyLOD 1 | grass.DensityScale 0 | grass.DiscardDataOnLoad 1 | r.Streaming.MipBias 8 | r.MaxAnisotropy 0 | FX.MaxCPUParticlesPerEmitter 20 | r.DefaultFeature.AutoExposure 0 | r.DefaultFeature.AmbientOcclusion 0 | r.AmbientOcclusionLevels 0 | r.DefaultFeature.Bloom 0 | r.BloomQuality 0 | r.DefaultFeature.MotionBlur 0 | r.LightFunctionQuality 0 | r.HZBOcclusion 0 | r.ParticleLODBias -5 | r.Tonemapper.Quality 1 | r.Tonemapper.Sharpen 0 | r.TonemapperGamma 2.4 | r.Upscale.Quality 0 | r.EyeAdaptationQuality 0 | r.ShadowQuality 0 | r.Shadow.MaxResolution 32 | r.Shadow.CSM.MaxCascades 1 | t.MaxFPS 240 | r.VSync 0 | r.OneFrameThreadLag 1'
  },
  {
    id: 'pack-7',
    title: 'Pack 7 — Light Potato (Fast)',
    description: 'A simpler configuration for quick FPS gains without breaking everything.',
    category: Category.POTATO,
    commandBlock: 'r.fog 0 | grass.DensityScale 0 | r.MipMapLODBias 2 | r.TranslucencyLightingVolumeDim 16 | foliage.DensityScale 0 | r.Streaming.MipBias 10 | r.MaxAnisotropy 0 | FX.MaxCPUParticlesPerEmitter 500 | r.Atmosphere 0 | r.DefaultFeature.AutoExposure 0 | r.Upscale.Quality 0 | r.DefaultFeature.AmbientOcclusion 0 | r.ParticleLODBias -15 | r.DefaultFeature.Bloom 0 | r.DefaultFeature.MotionBlur 0 | r.LightFunctionQuality 0 | r.HZBOcclusion 1 | r.AmbientOcclusionLevels 0 | grass.DiscardDataOnLoad 1 | foliage.DiscardDataOnLoad 1 | foliage.OnlyLOD 0'
  }
];