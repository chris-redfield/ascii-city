/*
 * ASCII CITY LIVE - unminified / deobfuscated source
 *
 * Recovered from assets/main-dde3851d74899d75.js (obfuscated build).
 * Verified semantically IDENTICAL to that file: both parse to the same AST
 * after canonical alpha-renaming (sha256 531d052c..., 7942 bindings).
 *
 * The original build file (main-dde3851d74899d75.js) is left untouched; index.html
 * loads this file instead, via the dynamic import() in its mode-select boot script.
 *
 * Naming: identifiers were auto-renamed from _0x-hex form; the core systems
 * carry curated names (view, pedestrians, cars, renderGrid, queueSprite,
 * stepPedestrian, classifyPopulation, quality, zone, PHASE, ...). Remaining
 * fnN / vN / argN names are mechanical and still to be named.
 */
(() => {
  var freeze = Object.freeze({
    __wbindgen_placeholder__: Object.freeze({
      __wbindgen_describe() {},
    }),
    __wbindgen_externref_xform__: Object.freeze({
      __wbindgen_externref_table_grow: () => 0,
      __wbindgen_externref_table_set_null() {},
    }),
  });
  function fn(arg) {
    return Object.freeze({
      state: arg.state,
      reason: arg.reason,
      checkedHash2: arg.checkedHash2,
      hash2Mismatches: arg.hash2Mismatches,
    });
  }
  var elCv = document.getElementById("cv"),
    ctx = elCv.getContext("2d"),
    elUiCapture = document.getElementById("ui-capture"),
    elRelayTransfer = document.getElementById("relay-transfer"),
    elRelayTransferText = document.getElementById("relay-transfer-text"),
    elPreludePrompt = document.getElementById("prelude-prompt"),
    elMobileHud = document.getElementById("mobile-hud"),
    elMobileHudZone = document.getElementById("mobile-hud-zone"),
    elMobileHudBearing = document.getElementById("mobile-hud-bearing"),
    elMobileContext = document.getElementById("mobile-context"),
    elMobileContextLabel = document.getElementById("mobile-context-label"),
    elMobileContextTitle = document.getElementById("mobile-context-title"),
    elMobileContextCopy = document.getElementById("mobile-context-copy"),
    elOrientationGuide = document.getElementById("orientation-guide"),
    elOrientationContinue = document.getElementById("orientation-continue"),
    elTouchControls = document.getElementById("touch-controls"),
    elTouchMove = document.getElementById("touch-move"),
    elTouchLook = document.getElementById("touch-look"),
    elTouchAction = document.getElementById("touch-action"),
    elTouchBack = document.getElementById("touch-back"),
    elTouchPanel = document.getElementById("touch-panel"),
    elTouchPause = document.getElementById("touch-pause"),
    elTouchResume = document.getElementById("touch-resume"),
    elTouchPauseMenu = document.getElementById("touch-pause-menu"),
    elTouchChoiceControls = document.getElementById("touch-choice-controls"),
    v = elTouchChoiceControls
      ? Array.from(elTouchChoiceControls.querySelectorAll("[data-touch-choice]"))
      : [],
    elUiSector = document.getElementById("ui-sector"),
    elUiCoord = document.getElementById("ui-coord"),
    elUiBearing = document.getElementById("ui-bearing"),
    elUiFps = document.getElementById("ui-fps"),
    elUiWeather = document.getElementById("ui-weather"),
    elUiAutoTour = document.getElementById("ui-auto-tour"),
    elUiPopulation = document.getElementById("ui-population"),
    elUiNpcs = document.getElementById("ui-npcs"),
    elUiCars = document.getElementById("ui-cars"),
    elUiStatic = document.getElementById("ui-static"),
    elUiVisible = document.getElementById("ui-visible"),
    elUiProps = document.getElementById("ui-props"),
    elUiSigns = document.getElementById("ui-signs"),
    elUiPath = document.getElementById("ui-path"),
    elUiCrossings = document.getElementById("ui-crossings"),
    elContextPanel = document.getElementById("context-panel"),
    elUiContextLabel = document.getElementById("ui-context-label"),
    elUiContextTitle = document.getElementById("ui-context-title"),
    elUiContextCopy = document.getElementById("ui-context-copy"),
    elUiContextChoices = document.getElementById("ui-context-choices"),
    elUiZone = document.getElementById("ui-zone"),
    elUiPortalDistance = document.getElementById("ui-portal-distance"),
    elUiPortalState = document.getElementById("ui-portal-state"),
    elUiDestination = document.getElementById("ui-destination"),
    elInterface = document.getElementById("interface"),
    elInterfaceAscii = document.getElementById("interface-ascii"),
    v2 = elInterfaceAscii ? elInterfaceAscii.getContext("2d") : null;
  elInterface && elInterfaceAscii && elInterface.classList.add("ascii-ui-active");
  var v3 = (function ({
      fetchImpl: arg2 = fetch,
      manifestUrl: arg3 = "./release-manifest.json",
    } = {}) {
      let obj28 = {
          state: "loading",
          reason: null,
          checkedHash2: 0,
          hash2Mismatches: 0,
        },
        v85 = null,
        n139 = 0,
        v86 = (async () => {
          try {
            let v87 = await arg2(arg3, {
              cache: "no-store",
            });
            if (!v87.ok) return ((obj28.state = "unavailable"), fn(obj28));
            let v88 = (await v87.json())?.["assets"]?.["wasm"]?.["file"];
            if ("string" != typeof v88 || 0 === v88.length)
              return ((obj28.state = "unavailable"), fn(obj28));
            let v89 =
                v87.url ||
                new URL(arg3, typeof location > "u" ? "http://localhost/" : location.href).href,
              href = new URL(v88, v89).href,
              v90 = await arg2(href, {
                cache: "no-store",
              });
            if (!v90.ok) return ((obj28.state = "unavailable"), fn(obj28));
            let v91 = await WebAssembly.instantiate(await v90.arrayBuffer(), freeze);
            if ("function" != typeof v91.instance.exports.ascii_city_hash2)
              return ((obj28.state = "unavailable"), fn(obj28));
            ((v85 = v91.instance.exports), (obj28.state = "shadow-ready"));
          } catch (err) {
            ((obj28.state = "unavailable"),
              (obj28.reason = err instanceof Error ? err.message : String(err)));
          }
          return fn(obj28);
        })();
      return Object.freeze({
        ready: v86,
        sampleHash2(arg4, arg5, arg6) {
          !v85 ||
            255 & n139++ ||
            ((obj28.checkedHash2 += 1),
            Object.is(v85.ascii_city_hash2(arg4, arg5), arg6) || (obj28.hash2Mismatches += 1));
        },
        getStatus: () => fn(obj28),
      });
    })(),
    freeze2 = Object.freeze({
      high: Object.freeze({
        id: "high",
        label: "High",
        rows: 80,
        cols: 180,
        populationAiHz: 25,
        backgroundSimHz: 10,
        npcFullRadius: 175,
        carFullRadius: 185,
        populationClassifyMs: 0,
        spriteFarScale: 1,
        vehicleFarScale: 1,
        vehicleVolumeFar: 44,
        vehicleVolumeMax: 18,
        windowPortalRefreshMs: 34,
        windowStaticRadius: 72,
        windowVehicleVolumeMax: 10,
        windowCachePitchTolerancePx: 0,
      }),
      balanced: Object.freeze({
        id: "balanced",
        label: "Balanced",
        rows: 72,
        cols: 162,
        populationAiHz: 20,
        backgroundSimHz: 8,
        npcFullRadius: 160,
        carFullRadius: 170,
        populationClassifyMs: 50,
        spriteFarScale: 0.9,
        vehicleFarScale: 0.92,
        vehicleVolumeFar: 38,
        vehicleVolumeMax: 10,
        windowPortalRefreshMs: 50,
        windowStaticRadius: 60,
        windowVehicleVolumeMax: 6,
        windowCachePitchTolerancePx: 0.35,
      }),
      performance: Object.freeze({
        id: "performance",
        label: "Performance",
        rows: 64,
        cols: 144,
        populationAiHz: 15,
        backgroundSimHz: 6,
        npcFullRadius: 140,
        carFullRadius: 150,
        populationClassifyMs: 100,
        spriteFarScale: 0.76,
        vehicleFarScale: 0.8,
        vehicleVolumeFar: 32,
        vehicleVolumeMax: 6,
        windowPortalRefreshMs: 67,
        windowStaticRadius: 48,
        windowVehicleVolumeMax: 4,
        windowCachePitchTolerancePx: 0.75,
      }),
    }),
    quality =
      freeze2[
        typeof location < "u"
          ? (new URLSearchParams(location.search).get("quality") || "high").toLowerCase()
          : "high"
      ] || freeze2.high;
  document.body?.["dataset"] && (document.body.dataset.quality = quality.id);
  var n = 240,
    freeze3 = Object.freeze([
      "cpuFrame",
      "frameInterval",
      "playerStep",
      "streaming",
      "population",
      "populationAI",
      "populationBackground",
      "aerialStep",
      "rainStep",
      "projection",
      "windowVisibility",
      "windowPrepare",
      "windowCache",
      "farSkylinePrepare",
      "mainPass",
      "windowTraffic",
      "reversePortal",
      "aerialDraw",
      "rainDraw",
      "sprites",
      "nearTrees",
      "gpuFlush",
      "ui",
    ]),
    freeze4 = Object.freeze(Object.fromEntries(freeze3.map((arg7, arg8) => [arg7, arg8]))),
    float64Array = new Float64Array(freeze3.length),
    from = Array.from(
      {
        length: freeze3.length,
      },
      () => new Float32Array(n),
    ),
    v5 = (new Float32Array(n), 0),
    n2 = 0,
    stats = {
      nearTrees: 0,
      populationAIRuns: 0,
      populationBackgroundTicks: 0,
      fullSimNPCs: 0,
      backgroundNPCs: 0,
      fullSimCars: 0,
      backgroundCars: 0,
      windowCacheBuilds: 0,
      windowCacheReuses: 0,
      windowCacheWallInfoBuilds: 0,
      atlasNewSlots: 0,
      atlasUploads: 0,
      atlasResets: 0,
      atlasEmergencyRollovers: 0,
      atlasGlyphMisses: 0,
      atlasSolidMisses: 0,
    },
    preEl = document.createElement("pre");
  function fn2(arg9, arg10) {
    float64Array[freeze4[arg9]] += performance.now() - arg10;
  }
  ((preEl.id = "performance-profiler"),
    preEl.setAttribute("aria-hidden", "true"),
    Object.assign(preEl.style, {
      position: "fixed",
      left: "12px",
      bottom: "12px",
      zIndex: "9999",
      margin: "0",
      padding: "10px 12px",
      width: "min(430px, calc(100vw - 24px))",
      maxHeight: "calc(100vh - 24px)",
      overflow: "hidden",
      pointerEvents: "none",
      whiteSpace: "pre",
      font: '11px/1.35 Consolas, "Courier New", monospace',
      color: "#b9ffd1",
      background: "rgba(0,8,4,.88)",
      border: "1px solid rgba(111,255,171,.45)",
      boxShadow: "0 0 24px rgba(80,255,140,.12)",
      textShadow: "0 0 5px rgba(111,255,171,.18)",
      display: "none",
    }),
    document.body.appendChild(preEl));
  var rows = quality.rows,
    s10pxConsolasCourier = '10px Consolas, "Courier New", monospace';
  ctx.font = s10pxConsolasCourier;
  var width = ctx.measureText("M").width,
    cols = quality.cols;
  ((elCv.width = Math.ceil(cols * width)),
    (elCv.height = 9 * rows),
    (ctx.font = s10pxConsolasCourier),
    (ctx.textBaseline = "alphabetic"),
    (ctx.imageSmoothingEnabled = false));
  var v6 = Math.ceil(width) + 2,
    n3 = 11,
    n4 = 1024,
    v7 = "function" == typeof document.createElement ? document.createElement("canvas") : null,
    map = new Map(),
    v8 = null,
    n5 = 0,
    n6 = 0,
    n7 = 0;
  v7 &&
    ((v7.width = v7.height = n4),
    ((v8 = v7.getContext("2d")).font = s10pxConsolasCourier),
    (v8.textBaseline = "alphabetic"),
    (v8.imageSmoothingEnabled = false),
    (n7 = 93 * (n6 = (n4 / v6) | 0)));
  var max = Math.max(1, Math.floor(0.78 * n7)),
    n8 = 0,
    worldN = 512,
    n10 = 8192,
    ceil = Math.ceil(64),
    n11 = 215,
    n12 = 128,
    recordedView = Object.freeze({
      PREVIOUS_RECORDED: Object.freeze({
        worldX: 4083.044,
        worldZ: 4095.413,
        yaw: -2.1288,
        pitch: 0.3536,
        bearing: "SOUTH-WEST",
        recordedOriginX: 3840,
        recordedOriginZ: 3840,
      }),
      RECORDED_VIEW_02: Object.freeze({
        worldX: 3843.319,
        worldZ: 4116.232,
        yaw: 5.433593,
        pitch: 0.1624,
        bearing: "NORTH-WEST",
        recordedOriginX: 3840,
        recordedOriginZ: 4096,
      }),
      RECORDED_VIEW_03: Object.freeze({
        worldX: 4012.258,
        worldZ: 4028.266,
        yaw: -2.6472,
        pitch: 0.534623,
        bearing: "SOUTH-WEST",
        recordedOriginX: 3712,
        recordedOriginZ: 3840,
      }),
      RECORDED_VIEW_04: Object.freeze({
        worldX: 3970.372,
        worldZ: 4256.423,
        yaw: -4.068,
        pitch: 0.646415,
        bearing: "SOUTH-EAST",
        recordedOriginX: 3712,
        recordedOriginZ: 3968,
      }),
      RECORDED_VIEW_05: Object.freeze({
        worldX: 3961.326,
        worldZ: 4255.343,
        yaw: -10.2888,
        pitch: 0.155015,
        bearing: "SOUTH-EAST",
        recordedOriginX: 3712,
        recordedOriginZ: 3968,
      }),
    }).RECORDED_VIEW_05,
    recordedOriginX = recordedView.recordedOriginX,
    recordedOriginZ = recordedView.recordedOriginZ,
    toWorldX = (x) => recordedOriginX + x,
    toWorldZ = (z) => recordedOriginZ + z;
  function fn5(arg13, arg14, arg15) {
    return (
      "building:" +
      Math.floor(toWorldX(arg13) / n30) +
      ":" +
      Math.floor(toWorldZ(arg14) / n30) +
      ":" +
      arg15
    );
  }
  var fn6 = (arg16) => 0 !== uint16Array7[arg16];
  function fn7(arg17, arg18) {
    let fn12Result = hash2(131 * arg17 + 17003, 137 * arg18 + 19001);
    return {
      chunkX: arg17,
      chunkZ: arg18,
      type:
        Math.hypot(arg17 - 0.5 * ceil, arg18 - 0.5 * ceil) < 8
          ? "CORE"
          : fn12Result < 0.18
            ? "INDUSTRIAL"
            : fn12Result < 0.34
              ? "OLD_TOWN"
              : fn12Result < 0.5
                ? "RESIDENTIAL"
                : fn12Result < 0.64
                  ? "COMMERCIAL"
                  : fn12Result < 0.76
                    ? "PARKLAND"
                    : fn12Result < 0.88
                      ? "TOWER_ESTATE"
                      : "MIXED",
      seed: ((73856093 * arg17) ^ (19349663 * arg18)) >>> 0,
    };
  }
  var n13 = 512;
  function fn8(arg19, arg20) {
    let v92 = Math.ceil(16) - 1,
      max4 = Math.max(0, Math.min(v92, Math.floor(arg19 / n13))),
      max5 = Math.max(0, Math.min(v92, Math.floor(arg20 / n13))),
      fn7Result = fn7(4 * max4 + 2, 4 * max5 + 2);
    return {
      districtX: max4,
      districtZ: max5,
      type: fn7Result.type,
      seed: fn7Result.seed,
    };
  }
  var n14 = 1.2,
    n15 = 0.22,
    n16 = 165,
    n17 = 24,
    v9 = rows / 2 / Math.tan(0.35),
    v10 = 2 * Math.atan((Math.tan(0.35) * (cols * width)) / (9 * rows)),
    v11 = rows / 2,
    float32Array = new Float32Array(cols),
    v12 = cols / 2,
    v13 = 1 / 150,
    v14 = v12 / Math.tan(v10 / 2),
    float32Array2 = new Float32Array(cols),
    float32Array3 = new Float32Array(cols);
  for (let n140 = 0; n140 < cols; n140++)
    ((float32Array2[n140] = (n140 + 0.5 - v12) / v14), (float32Array3[n140] = 1));
  var from2 = Array.from(
      {
        length: cols,
      },
      () =>
        Array.from(
          {
            length: 32,
          },
          () => ({
            perp: 0,
            side: 0,
            cx: 0,
            cz: 0,
            h: 0,
            wallPos: 0,
            texX: 0,
            r0: 0,
            r1: -1,
            wi: null,
          }),
        ),
    ),
    n18 = 72,
    uint8Array = new Uint8Array(cols),
    float32Array4 = new Float32Array(cols * n18),
    float32Array5 = new Float32Array(cols * n18),
    float32Array6 = new Float32Array(cols * n18),
    int16Array = new Int16Array(cols * n18),
    int16Array2 = new Int16Array(cols * n18),
    uint16Array = new Uint16Array(cols * n18),
    float32Array7 = new Float32Array(cols * rows),
    n19 = 0,
    uint8Array2 = new Uint8Array(cols),
    uint8Array3 = new Uint8Array(cols),
    float32Array8 = new Float32Array(cols * n17),
    float32Array9 = new Float32Array(cols * n17),
    float32Array10 = new Float32Array(cols * n17),
    int16Array3 = new Int16Array(cols * n17),
    int16Array4 = new Int16Array(cols * n17),
    uint16Array2 = new Uint16Array(cols * n17),
    uint8Array4 = new Uint8Array(cols * n17),
    uint8Array5 = new Uint8Array(cols * n17),
    uint8Array6 = new Uint8Array(cols * n17),
    uint8Array7 = new Uint8Array(cols * n17),
    uint8Array8 = new Uint8Array(cols * n17),
    int16Array5 = new Int16Array(cols * n17),
    int16Array6 = new Int16Array(cols * n17),
    n20 = 56,
    uint8Array9 = new Uint8Array(cols),
    float32Array11 = new Float32Array(cols * n20),
    float32Array12 = new Float32Array(cols * n20),
    float32Array13 = new Float32Array(cols * n20),
    int16Array7 = new Int16Array(cols * n20),
    int16Array8 = new Int16Array(cols * n20),
    uint16Array3 = new Uint16Array(cols * n20),
    uint16Array4 = new Uint16Array(cols * n20),
    v15 = n14,
    v16 = NaN,
    map2 = new Map(),
    v17 = v9,
    v18 = v10,
    v19 = v14,
    tan = Math.tan(0.5 * v10),
    v20 = float32Array2,
    v21 = float32Array3;
  function fn9() {
    ((v17 = v9),
      (v18 = v10),
      (v19 = v14),
      (tan = Math.tan(0.5 * v18)),
      (v20 = float32Array2),
      (v21 = float32Array3));
  }
  // Projection model. "shift" keeps the camera level and offsets the principal
  // point (a tilt-shift lens); "rotate" is the original, which tilted the camera.
  //
  // The renderer casts a 2D ray fan in the ground plane, so a screen column is a
  // world-VERTICAL plane. A rotated camera's columns are tilted planes, so the
  // old vertical rotation disagreed with the horizontal fan: column offset stayed
  // f*u/d when a rotated camera needs f*u/Z' with Z' = d*cos p + dh*sin p. The
  // mismatch factor cos p + (dh/d)*sin p is 1 at pitch 0 and grows with dh/d, so
  // tall buildings seen from close up while looking up splayed outward - bowed
  // edges, domed roofs, and a squat look. Shifting instead of rotating keeps the
  // columns world-vertical, which is exactly what the 2D fan already assumes.
  var perspShiftMode = true;
  function fn10(arg21, arg22, arg23 = fn191()) {
    if (perspShiftMode) {
      let v94 = v11 + v17 * Math.tan(view.pitch) - (v17 * (arg21 - arg23)) / Math.max(0.0001, arg22);
      return v94 < -1000000 ? -1000000 : v94 > 1000000 ? 1000000 : v94;
    }
    let v93 = Math.atan2(arg21 - arg23, Math.max(0.0001, arg22)) - view.pitch;
    return v93 >= Math.PI / 2 - 0.00001
      ? -1000000
      : v93 <= -Math.PI / 2 + 0.00001
        ? 1000000
        : v11 - v17 * Math.tan(v93);
  }
  var float32Array14 = new Float32Array(rows),
    float32Array15 = new Float32Array(rows),
    float32Array16 = new Float32Array(rows),
    float32Array17 = new Float32Array(rows),
    float32Array18 = new Float32Array(rows),
    float32Array19 = new Float32Array(rows),
    float32Array20 = new Float32Array(cols),
    float32Array21 = new Float32Array(cols),
    float32Array22 = new Float32Array(cols),
    float32Array23 = new Float32Array(cols),
    int16Array9 = new Int16Array(cols),
    int16Array10 = new Int16Array(cols),
    uint8Array10 = new Uint8Array(cols),
    uint8Array11 = new Uint8Array(cols),
    float32Array24 = new Float32Array(6 * cols),
    float32Array25 = new Float32Array(6 * cols),
    float32Array26 = new Float32Array(6 * cols),
    int16Array11 = new Int16Array(6 * cols),
    int16Array12 = new Int16Array(6 * cols),
    uint8Array12 = new Uint8Array(6 * cols),
    uint16Array5 = new Uint16Array(6 * cols),
    v22 = 6 * cols,
    int16Array13 = new Int16Array(v22),
    int16Array14 = new Int16Array(v22),
    array = new Array(v22),
    uint8Array13 = new Uint8Array(cols * rows),
    uint16Array6 = new Uint16Array(cols * rows),
    float32Array27 = new Float32Array(cols * rows),
    uint8Array14 = new Uint8Array(rows),
    int16Array15 = new Int16Array(cols),
    int16Array16 = new Int16Array(cols),
    uint8Array15 = new Uint8Array(cols * rows),
    float32Array28 = new Float32Array(cols * rows),
    n21 = 0,
    n22 = 0,
    n23 = 0,
    n24 = 0,
    n25 = 1,
    v23 = n14,
    n26 = 0,
    windowPortalRefreshMs = quality.windowPortalRefreshMs,
    windowStaticRadius = quality.windowStaticRadius,
    windowVehicleVolumeMax = quality.windowVehicleVolumeMax,
    v24 = -1000000000,
    s = "",
    v25 = NaN,
    v26 = NaN,
    v27 = NaN,
    v28 = NaN,
    v29 = NaN,
    n27 = 0,
    v30 = -1,
    v31 = NaN,
    flag = false,
    n28 = 0,
    n29 = 0,
    fn11 = (arg24) => "hsl(135,100%," + arg24 + "%)";
  function hash2(a, b) {
    let v94 = (Math.imul(a, 374761393) + Math.imul(b, 668265263)) | 0;
    v94 = Math.imul(v94 ^ (v94 >>> 13), 1274126177);
    let v95 = ((v94 ^ (v94 >>> 16)) >>> 0) / 4294967296;
    return (v3.sampleHash2(a, b, v95), v95);
  }
  var PHASE = Object.freeze({
      BOOT: "BOOT",
      INTRO_TEXT: "INTRO_TEXT",
      TITLE: "TITLE",
      RESOLVING: "RESOLVING",
      LIVE: "LIVE",
    }),
    freeze6 = Object.freeze({
      boot: 0.48,
      text: 9.48,
      title: 10.78,
      live: 14.81,
    }),
    freeze7 = Object.freeze([
      "Once, we dreamed of cyberspace as a place we could visit.",
      "All these years later, we finally found it.",
      "Welcome to The ASCII Plane.",
    ]),
    s2 = "#@%+/\\:.|=*",
    v32 = (document.body, true),
    flag2 = false,
    v33 = null,
    float32Array29 = new Float32Array(cols * rows);
  for (let n141 = 0; n141 < rows; n141++)
    for (let n142 = 0; n142 < cols; n142++) {
      let v96 = n141 / (rows - 1),
        v97 = ((5 * n142 + 11 * n141) % 29) / 29,
        fn12Result2 = hash2(17 * n142 + 71, 23 * n141 + 19);
      float32Array29[n141 * cols + n142] = Math.max(
        0,
        Math.min(1, 0.02 + 0.59 * fn12Result2 + 0.27 * v96 + 0.12 * v97),
      );
    }
  var PHASE_LIVE = PHASE.LIVE,
    now = performance.now(),
    live = freeze6.live,
    v34 = v32;
  function fn13(arg27) {
    !document.body ||
      !document.body.classList ||
      document.body.classList.toggle("intro-active", arg27);
  }
  function fn14(arg28) {
    PHASE_LIVE !== arg28 &&
      ((PHASE_LIVE = arg28), elCv.dataset && (elCv.dataset.introState = arg28));
  }
  function fn15() {
    ((live = freeze6.live), fn14(PHASE.LIVE), (v34 = true), fn13(false));
    for (let v98 in keysDown) keysDown[v98] = false;
    flag4 = false;
  }
  function fn16() {
    PHASE_LIVE !== PHASE.LIVE && fn15();
  }
  (elCv.dataset && (elCv.dataset.introState = PHASE_LIVE), fn13(false));
  var float32Array30 = new Float32Array(
    [
      0, 32, 8, 40, 2, 34, 10, 42, 48, 16, 56, 24, 50, 18, 58, 26, 12, 44, 4, 36, 14, 46, 6, 38, 60,
      28, 52, 20, 62, 30, 54, 22, 3, 35, 11, 43, 1, 33, 9, 41, 51, 19, 59, 27, 49, 17, 57, 25, 15,
      47, 7, 39, 13, 45, 5, 37, 63, 31, 55, 23, 61, 29, 53, 21,
    ].map((arg29) => (arg29 + 0.5) / 64),
  );
  function fn17(arg30) {
    let max6 = Math.max(1, 2 * arg30);
    return max6 < 2 ? 1 : max6 < 4 ? 2 : max6 < 8 ? 4 : max6 < 16 ? 8 : max6 < 32 ? 16 : 32;
  }
  var n30 = 32,
    n31 = 16,
    v35 = Math.floor(256 / n30) * n30 + 8,
    obj2 = {
      x0: v35 + 8,
      x1: v35 + 56,
      z0: v35 - 24,
      z1: v35 + 24,
      cx: v35 + 32,
      cz: v35,
    },
    obj3 = {
      x: obj2.x0 + 8,
      z: obj2.cz,
      h: 5.8,
      w: 3.8,
      d: 1.6,
    },
    freeze8 = Object.freeze({
      x0: recordedOriginX + obj2.x0,
      x1: recordedOriginX + obj2.x1,
      z0: recordedOriginZ + obj2.z0,
      z1: recordedOriginZ + obj2.z1,
      cx: recordedOriginX + obj2.cx,
      cz: recordedOriginZ + obj2.cz,
    }),
    v36 = 2 * n30,
    freeze9 = Object.freeze({
      x0: freeze8.x0 - v36,
      x1: freeze8.x1 + v36,
      z0: freeze8.z0 - v36,
      z1: freeze8.z1 + v36,
    });
  function fn18(arg31, arg32, arg33 = 0) {
    return (
      arg31 >= freeze9.x0 - arg33 &&
      arg31 < freeze9.x1 + arg33 &&
      arg32 >= freeze9.z0 - arg33 &&
      arg32 < freeze9.z1 + arg33
    );
  }
  function fn19(arg34, arg35) {
    let v99 = ((Math.floor(arg35 / n30) % 7) + 7) % 7;
    return (
      ("Z" === arg34 && (arg35 === freeze8.x0 - n31 || arg35 === freeze8.x1)) ||
      ("X" === arg34 && (arg35 === freeze8.z0 - n31 || arg35 === freeze8.z1)) ||
      0 === v99 ||
      2 === v99 ||
      4 === v99
    );
  }
  function fn20(arg36, arg37) {
    return fn19("Z", arg36) && fn19("X", arg37);
  }
  function fn21(arg38, arg39, arg40 = 0) {
    let v100 = "X" === arg38 ? recordedOriginZ : recordedOriginX,
      round6 = Math.round(arg39 / n30);
    for (let n143 = 0; n143 < 10; n143++) {
      let v101 = 1 & arg40 ? [round6 + n143, round6 - n143] : [round6 - n143, round6 + n143];
      for (let v102 of v101) {
        let v103 = Math.max(1, Math.min(((worldN / n30) | 0) - 2, v102)) * n30;
        if (fn19(arg38, v100 + v103)) return v103;
      }
    }
    return Math.max(n30, Math.min(worldN - 2 * n30, round6 * n30));
  }
  function fn22(arg41 = 0) {
    return (
      obj2.x1 >= -arg41 && obj2.z1 >= -arg41 && obj2.x0 < worldN + arg41 && obj2.z0 < worldN + arg41
    );
  }
  function fn23(arg42, arg43, arg44 = 0) {
    return (
      arg42 >= obj2.x0 - arg44 &&
      arg42 < obj2.x1 + arg44 &&
      arg43 >= obj2.z0 - arg44 &&
      arg43 < obj2.z1 + arg44
    );
  }
  var uint8Array16 = new Uint8Array(worldN * worldN),
    uint8Array17 = new Uint8Array(worldN * worldN),
    uint8Array18 = new Uint8Array(worldN * worldN),
    uint8Array19 = new Uint8Array(worldN * worldN),
    uint8Array20 = new Uint8Array(worldN * worldN),
    uint8Array21 = new Uint8Array(worldN * worldN),
    uint8Array22 = new Uint8Array(worldN * worldN),
    uint16Array7 = new Uint16Array(worldN * worldN),
    uint8Array23 = new Uint8Array(worldN * worldN),
    map3 = new Map(),
    worldIndex = (x, z) => z * worldN + x,
    arr = [40, 55, 70, 160, 175, 190, 205, 220, 275, 325],
    freeze10 = Object.freeze({
      CORE: [40, 55, 70, 160, 175, 190, 205, 220, 275, 325],
      INDUSTRIAL: [24, 34, 44, 52, 170, 188, 205],
      OLD_TOWN: [24, 34, 42, 52, 62, 72, 158],
      RESIDENTIAL: [38, 48, 58, 72, 145, 175, 195, 215],
      COMMERCIAL: [175, 188, 200, 215, 270, 292, 315, 330],
      PARKLAND: [72, 92, 112, 135, 158, 178, 195],
      TOWER_ESTATE: [155, 175, 190, 205, 220, 235],
      MIXED: [40, 55, 70, 160, 175, 190, 205, 220, 275, 325],
      LEGACY: [40, 55, 70, 160, 175, 190, 205, 220, 275, 325],
    });
  function fn25(arg47, arg48, arg49 = "LEGACY") {
    let fn12Result3 = hash2(7919 * arg47 + 11, 104729 * arg48 + 7),
      v104 = arg49 || "LEGACY",
      v105 = freeze10[v104] || freeze10.MIXED,
      v106 = v105[(fn12Result3 * v105.length) | 0];
    if ("LEGACY" === v104)
      return {
        hue: v106,
        sat: 52 + ((48 * hash2(32771 * arg47 + 3, 65537 * arg48 + 19)) | 0),
        win: (4 * hash2(3 * arg47 + 1, 5 * arg48 + 1)) | 0,
        lit: [30, 45, 60, 75, 90][(5 * hash2(7 * arg47 + 2, 11 * arg48 + 2)) | 0],
      };
    let fn12Result4 = hash2(32771 * arg47 + 3, 65537 * arg48 + 19),
      fn12Result5 = hash2(3 * arg47 + 1, 5 * arg48 + 1),
      fn12Result6 = hash2(7 * arg47 + 2, 11 * arg48 + 2);
    return "INDUSTRIAL" === v104
      ? {
          hue: v106,
          sat: 38 + ((34 * fn12Result4) | 0),
          win: fn12Result5 < 0.62 ? 1 : 2,
          lit: [15, 25, 35, 45][(4 * fn12Result6) | 0],
        }
      : "OLD_TOWN" === v104
        ? {
            hue: v106,
            sat: 48 + ((34 * fn12Result4) | 0),
            win: fn12Result5 < 0.68 ? 0 : 1,
            lit: [35, 45, 60, 75][(4 * fn12Result6) | 0],
          }
        : "RESIDENTIAL" === v104
          ? {
              hue: v106,
              sat: 40 + ((35 * fn12Result4) | 0),
              win: fn12Result5 < 0.74 ? 0 : 1,
              lit: [45, 60, 75, 90][(4 * fn12Result6) | 0],
            }
          : "COMMERCIAL" === v104
            ? {
                hue: v106,
                sat: 62 + ((34 * fn12Result4) | 0),
                win: fn12Result5 < 0.5 ? 3 : fn12Result5 < 0.78 ? 2 : 0,
                lit: [60, 75, 90, 90][(4 * fn12Result6) | 0],
              }
            : "PARKLAND" === v104
              ? {
                  hue: v106,
                  sat: 42 + ((30 * fn12Result4) | 0),
                  win: fn12Result5 < 0.65 ? 0 : 1,
                  lit: [30, 45, 60, 75][(4 * fn12Result6) | 0],
                }
              : "TOWER_ESTATE" === v104
                ? {
                    hue: v106,
                    sat: 44 + ((34 * fn12Result4) | 0),
                    win: fn12Result5 < 0.55 ? 0 : 2,
                    lit: [35, 50, 65, 80][(4 * fn12Result6) | 0],
                  }
                : "CORE" === v104
                  ? {
                      hue: v106,
                      sat: 58 + ((38 * fn12Result4) | 0),
                      win: (4 * fn12Result5) | 0,
                      lit: [45, 60, 75, 90][(4 * fn12Result6) | 0],
                    }
                  : {
                      hue: v106,
                      sat: 50 + ((42 * fn12Result4) | 0),
                      win: (4 * fn12Result5) | 0,
                      lit: [30, 45, 60, 75, 90][(5 * fn12Result6) | 0],
                    };
  }
  function fn26(arg50, arg51, arg52, arg53, arg54 = 0, arg55 = "LEGACY") {
    ((uint8Array16[arg50] = Math.min(70, arg53)),
      (uint8Array17[arg50] = 1),
      (uint8Array23[arg50] = arg54));
    let v107 =
      (Math.imul(arg51, 40503) ^ Math.imul(arg52, 21701) ^ (arg51 >>> 3) ^ (arg52 << 5)) >>> 0;
    uint16Array7[arg50] = (v107 % 65534) + 1;
    let fn25Result = fn25(arg51, arg52, arg55);
    ((uint8Array19[arg50] = fn25Result.hue),
      (uint8Array20[arg50] = fn25Result.sat),
      (uint8Array21[arg50] = fn25Result.win),
      (uint8Array22[arg50] = fn25Result.lit));
  }
  function fn27(arg56, arg57, arg58, arg59 = 0) {
    let v108 = 7 + ((19 * hash2(13 * arg56 + 5, 17 * arg57 + 9)) | 0) + ((19 * arg58) | 0) + arg59;
    return (
      hash2(arg56 + 71, arg57 + 71) > 0.84 &&
        (v108 += 8 + ((15 * hash2(3 * arg56 + 1, 3 * arg57 + 1)) | 0)),
      Math.min(70, v108)
    );
  }
  function fn28(arg60, arg61, arg62, arg63, arg64 = 0) {
    let fn12Result7 = hash2(13 * arg61 + 5, 17 * arg62 + 9),
      fn12Result8 = hash2(101 * arg61 + 71, 103 * arg62 + 73);
    return "INDUSTRIAL" === arg60
      ? 5 + ((7 * fn12Result7) | 0) + (fn12Result8 > 0.9 ? 4 : 0)
      : "RESIDENTIAL" === arg60
        ? 4 + ((7 * fn12Result7) | 0) + ((4 * arg63) | 0)
        : "OLD_TOWN" === arg60
          ? 6 + ((8 * fn12Result7) | 0) + ((2 * arg63) | 0)
          : "PARKLAND" === arg60
            ? 4 + ((6 * fn12Result7) | 0) + ((2 * arg63) | 0)
            : "TOWER_ESTATE" === arg60
              ? Math.min(52, 23 + ((18 * fn12Result7) | 0) + ((9 * arg63) | 0))
              : "COMMERCIAL" === arg60
                ? Math.min(58, Math.round(0.94 * fn27(arg61, arg62, arg63, arg64)) + 5)
                : "CORE" === arg60
                  ? Math.min(66, fn27(arg61, arg62, arg63, arg64 + 5))
                  : fn27(arg61, arg62, arg63, arg64);
  }
  function fn29(arg65, arg66, arg67, arg68, arg69) {
    return "RESIDENTIAL" === arg65
      ? arg66 <= 1 ||
        arg66 >= 14 ||
        arg67 <= 1 ||
        arg67 >= 14 ||
        hash2(17 * arg68 + 31, 19 * arg69 + 37) > 0.86
        ? 3
        : 1
      : "TOWER_ESTATE" === arg65 ||
          ("PARKLAND" === arg65 && hash2(23 * arg68 + 11, 29 * arg69 + 13) > 0.36)
        ? 3
        : 1;
  }
  function fn30(arg70) {
    return "PARKLAND" === arg70
      ? 0.2
      : "TOWER_ESTATE" === arg70
        ? 0.12
        : "RESIDENTIAL" === arg70
          ? 0.1
          : 0;
  }
  var freeze11 = Object.freeze(["FORMAL", "GROVE", "POND", "PLAZA"]);
  function fn31(arg71) {
    return freeze11[(hash2(601 * arg71.bx + 17011, 607 * arg71.bz + 19013) * freeze11.length) | 0];
  }
  function fn32(arg72, arg73, arg74) {
    let fn31Result = fn31(arg72),
      v109 = arg73 - 7.5,
      v110 = arg74 - 7.5;
    if ("FORMAL" === fn31Result) {
      let v113 = Math.abs(v109) < 1.05 || Math.abs(v110) < 1.05,
        v114 = arg73 <= 1 || arg73 >= 14 || arg74 <= 1 || arg74 >= 14,
        v115 = Math.abs(v109) < 3.1 && Math.abs(v110) < 3.1;
      return {
        type: fn31Result,
        surface: v113 || v114 || v115 ? 5 : 3,
        treeChance: 0.12,
      };
    }
    if ("GROVE" === fn31Result) {
      let v116 = 7.5 + 2.25 * Math.sin(0.62 * (arg73 + 0.73 * arg72.bx));
      return {
        type: fn31Result,
        surface: Math.abs(arg74 - v116) < 1.05 || arg73 <= 1 || arg73 >= 14 ? 5 : 3,
        treeChance: 0.3,
      };
    }
    if ("POND" === fn31Result) {
      let v117 = (v109 * v109) / 18.49 + (v110 * v110) / 9.610000000000001;
      return v117 < 1
        ? {
            type: fn31Result,
            surface: 4,
            treeChance: 0,
          }
        : v117 < 1.72 || arg73 <= 1 || arg73 >= 14 || arg74 <= 1 || arg74 >= 14
          ? {
              type: fn31Result,
              surface: 5,
              treeChance: 0,
            }
          : {
              type: fn31Result,
              surface: 3,
              treeChance: 0.18,
            };
    }
    let v111 = Math.abs(v109) > 3.8 && Math.abs(v110) > 3.8,
      v112 = Math.abs(v109) < 2.2 && Math.abs(v110) < 2.2;
    return {
      type: fn31Result,
      surface: v111 && !v112 ? 3 : 5,
      treeChance: 0.1,
    };
  }
  function fn33(arg75, arg76, arg77, arg78, arg79, arg80, arg81) {
    let v118 = hash2(173 * arg79 + 19, 181 * arg80 + 23) > 0.5,
      v119 = v118 ? arg77 : arg78,
      v120 = v118 ? arg78 : arg77;
    if ("RESIDENTIAL" === arg75) {
      let v121 = v119;
      return (
        0 === arg76 && (v121 = (((v119 - 1) % 8) + 8) % 8),
        Math.max(
          0,
          (0 === arg76 ? 2.35 : 1.9) -
            Math.abs(v121 - (0 === arg76 ? 3 : 7.5)) * (0 === arg76 ? 0.58 : 0.34),
        ) + (v120 <= 2 || v120 >= 13 ? -0.28 : 0)
      );
    }
    if ("OLD_TOWN" === arg75) {
      let v122 = 0 === arg76 ? (((v119 - 1) % 8) + 8) % 8 : v119;
      return (
        Math.max(
          0,
          (0 === arg76 ? 2.7 : 2.45) -
            Math.abs(v122 - (0 === arg76 ? 3.5 : 7.5)) * (0 === arg76 ? 0.62 : 0.4),
        ) + (v120 <= 2 || v120 >= 13 ? -0.18 : 0)
      );
    }
    if ("INDUSTRIAL" === arg75) {
      let v123 = (4 * hash2(409 * arg79 + 91, 419 * arg80 + 103)) | 0;
      if (
        0 === arg76 &&
        (0 === v123 ? arg77 <= 3 : 1 === v123 ? arg77 >= 12 : 2 === v123 ? arg78 <= 3 : arg78 >= 12)
      )
        return 9.5 + Math.max(0, 1.2 - 0.1 * Math.abs(v120 - 7.5));
      if (
        2 === arg76 &&
        ((v123 < 2 &&
          arg77 >= (0 === v123 ? 11 : 2) &&
          arg77 <= (0 === v123 ? 14 : 5) &&
          arg78 >= 8) ||
          (v123 >= 2 &&
            arg78 >= (2 === v123 ? 11 : 2) &&
            arg78 <= (2 === v123 ? 14 : 5) &&
            arg77 >= 8))
      )
        return 6.5;
      if (0 === arg76 || 1 === arg76) {
        let v124 = ((((v118 ? arg77 : arg78) + 64) % 4) + 4) % 4;
        return 1 === v124 ? 1.55 : 2 === v124 ? 0.72 : 0;
      }
      return 2 === arg76
        ? Math.max(0, 2.15 - 0.18 * ((v118 ? arg78 : arg77) - 1))
        : Math.max(0, 1.1 - 0.16 * Math.abs((v118 ? arg77 : arg78) - 7.5));
    }
    return "PARKLAND" === arg75 && arg81 < 11
      ? Math.max(0, 0.9 - 0.22 * Math.abs((v118 ? arg77 : arg78) - 7.5))
      : 0;
  }
  function fn34(arg82, arg83, arg84, arg85, arg86, arg87, arg88) {
    let flag18 = false,
      v125 = 8 * arg87,
      v126 = 8 * arg88,
      n144 = 0;
    if ("INDUSTRIAL" === arg82)
      0 === arg84
        ? ((flag18 = arg85 >= 1 && arg85 <= 14 && arg86 >= 1 && arg86 <= 10),
          (v125 += 2),
          (v126 += 2))
        : 1 === arg84
          ? ((flag18 =
              arg85 >= 1 &&
              arg85 <= 14 &&
              ((arg86 >= 1 && arg86 <= 5) || (arg86 >= 10 && arg86 <= 14))),
            (v125 += 2),
            (v126 += arg86 < 8 ? 2 : 3))
          : 2 === arg84
            ? ((flag18 =
                (arg85 >= 1 && arg85 <= 9 && arg86 >= 1 && arg86 <= 14) ||
                (arg85 >= 11 && arg85 <= 14 && arg86 >= 8 && arg86 <= 14)),
              (v125 += arg85 < 10 ? 3 : 4),
              (v126 += 3))
            : ((flag18 = arg85 >= 2 && arg85 <= 13 && arg86 >= 3 && arg86 <= 12),
              (v125 += 4),
              (v126 += 4));
    else if ("RESIDENTIAL" === arg82) {
      if (0 === arg84) {
        let v127 = 7 & arg85,
          v128 = 7 & arg86;
        ((flag18 = v127 >= 1 && v127 <= 5 && v128 >= 1 && v128 <= 5),
          (v125 += arg85 < 8 ? 0 : 1),
          (v126 += arg86 < 8 ? 0 : 1));
      } else
        1 === arg84
          ? ((flag18 =
              (arg85 >= 1 && arg85 <= 6 && arg86 >= 1 && arg86 <= 14) ||
              (arg85 >= 10 && arg85 <= 14 && arg86 >= 1 && arg86 <= 14)),
            (v125 += arg85 < 8 ? 2 : 3),
            (v126 += 2))
          : 2 === arg84
            ? ((flag18 =
                arg85 >= 2 &&
                arg85 <= 13 &&
                ((arg86 >= 1 && arg86 <= 5) || (arg86 >= 10 && arg86 <= 14))),
              (v125 += 4),
              (v126 += arg86 < 8 ? 2 : 3))
            : ((flag18 =
                arg85 >= 2 &&
                arg85 <= 13 &&
                arg86 >= 2 &&
                arg86 <= 13 &&
                !(arg85 >= 5 && arg85 <= 10 && arg86 >= 5 && arg86 <= 10)),
              (v125 += 5),
              (v126 += 5));
    } else if ("OLD_TOWN" === arg82) {
      if (0 === arg84) {
        let v129 = 7 & arg85,
          v130 = 7 & arg86;
        ((flag18 = v129 >= 1 && v129 <= 6 && v130 >= 1 && v130 <= 6),
          (v125 += arg85 < 8 ? 0 : 1),
          (v126 += arg86 < 8 ? 0 : 1));
      } else if (1 === arg84) {
        flag18 =
          arg85 >= 1 &&
          arg85 <= 14 &&
          arg86 >= 1 &&
          arg86 <= 14 &&
          !(arg85 >= 5 && arg85 <= 10 && arg86 >= 5 && arg86 <= 10);
        let v131 = arg86 < 5 ? 0 : arg85 > 10 ? 1 : arg86 > 10 ? 2 : 3;
        ((v125 += v131), (v126 += 4 + v131));
      } else
        2 === arg84
          ? ((flag18 =
              (arg85 >= 1 && arg85 <= 5) ||
              (arg85 >= 10 && arg85 <= 14) ||
              (arg86 >= 1 && arg86 <= 4) ||
              (arg86 >= 11 && arg86 <= 14)),
            (v125 += 3),
            (v126 += 3))
          : ((flag18 =
              arg85 >= 1 &&
              arg85 <= 14 &&
              arg86 >= 2 &&
              arg86 <= 13 &&
              !(arg85 >= 7 && arg85 <= 8 && arg86 >= 5 && arg86 <= 10)),
            (v125 += 5),
            (v126 += 2));
    } else if ("TOWER_ESTATE" === arg82)
      0 === arg84
        ? ((flag18 = arg85 >= 5 && arg85 <= 10 && arg86 >= 2 && arg86 <= 13),
          (v125 += 6),
          (v126 += 2))
        : 1 === arg84
          ? ((flag18 =
              (arg85 >= 2 && arg85 <= 6 && arg86 >= 3 && arg86 <= 12) ||
              (arg85 >= 10 && arg85 <= 14 && arg86 >= 3 && arg86 <= 12)),
            (v125 += arg85 < 8 ? 4 : 5),
            (v126 += 4))
          : 2 === arg84
            ? ((flag18 = arg85 >= 2 && arg85 <= 13 && arg86 >= 5 && arg86 <= 10),
              (v125 += 4),
              (v126 += 6))
            : ((flag18 =
                (arg85 >= 3 && arg85 <= 7 && arg86 >= 2 && arg86 <= 13) ||
                (arg85 >= 9 && arg85 <= 13 && arg86 >= 2 && arg86 <= 13)),
              (v125 += arg85 < 8 ? 6 : 7),
              (v126 += 5));
    else if ("PARKLAND" === arg82)
      0 === arg84
        ? ((flag18 = arg85 >= 5 && arg85 <= 10 && arg86 >= 5 && arg86 <= 10),
          (v125 += 2),
          (v126 += 6))
        : 1 === arg84
          ? ((flag18 = arg85 >= 2 && arg85 <= 7 && arg86 >= 4 && arg86 <= 11),
            (v125 += 3),
            (v126 += 6))
          : 2 === arg84
            ? ((flag18 = arg85 >= 9 && arg85 <= 14 && arg86 >= 4 && arg86 <= 11),
              (v125 += 4),
              (v126 += 6))
            : ((flag18 = arg85 >= 4 && arg85 <= 11 && arg86 >= 6 && arg86 <= 9),
              (v125 += 5),
              (v126 += 6));
    else if ("COMMERCIAL" === arg82)
      0 === arg84
        ? ((flag18 = arg85 >= 2 && arg85 <= 13 && arg86 >= 2 && arg86 <= 13),
          (v125 += 6),
          (v126 += 6),
          (n144 = 5))
        : 1 === arg84
          ? ((flag18 =
              arg85 >= 1 &&
              arg85 <= 14 &&
              arg86 >= 1 &&
              arg86 <= 14 &&
              !(arg85 >= 6 && arg85 <= 9 && arg86 >= 6 && arg86 <= 9)),
            (v125 += 6),
            (v126 += 5),
            (n144 = 4))
          : 2 === arg84
            ? ((flag18 = arg85 >= 3 && arg85 <= 12 && arg86 >= 1 && arg86 <= 14),
              (v125 += 5),
              (v126 += 6),
              (n144 = 6))
            : ((flag18 = arg85 >= 1 && arg85 <= 14 && arg86 >= 3 && arg86 <= 12),
              (v125 += 6),
              (v126 += 4),
              (n144 = 5));
    else if ("CORE" === arg82) {
      if (0 === arg83) {
        let v132 = 7 & arg85,
          v133 = 7 & arg86;
        ((flag18 = v132 >= 1 && v132 <= 6 && v133 >= 1 && v133 <= 6),
          (v125 += arg85 >> 3),
          (v126 += arg86 >> 3),
          (n144 = 4));
      } else if (1 === arg83) {
        flag18 =
          arg85 >= 1 &&
          arg85 <= 14 &&
          arg86 >= 1 &&
          arg86 <= 14 &&
          !(arg85 >= 5 && arg85 <= 10 && arg86 >= 5 && arg86 <= 10);
        let v134 = arg86 < 5 ? 0 : arg85 > 10 ? 1 : arg86 > 10 ? 2 : 3;
        ((v125 += v134), (v126 += 4 + v134), (n144 = 5));
      } else
        2 === arg83
          ? (hash2(arg87 + 2800, arg88 + 3100) > 0.5
              ? ((flag18 =
                  arg86 >= 1 &&
                  arg86 <= 14 &&
                  ((arg85 >= 1 && arg85 <= 6) || (arg85 >= 9 && arg85 <= 14))),
                (v125 += arg85 < 8 ? 0 : 1))
              : ((flag18 =
                  arg85 >= 1 &&
                  arg85 <= 14 &&
                  ((arg86 >= 1 && arg86 <= 6) || (arg86 >= 9 && arg86 <= 14))),
                (v126 += arg86 < 8 ? 0 : 1)),
            (n144 = 5))
          : ((flag18 =
              hash2(arg87 + 3500, arg88 + 3700) > 0.5
                ? arg85 >= 3 && arg85 <= 12 && arg86 >= 1 && arg86 <= 14
                : arg85 >= 1 && arg85 <= 14 && arg86 >= 3 && arg86 <= 12),
            (n144 = 8));
    } else if (0 === arg83) {
      let v135 = 7 & arg85,
        v136 = 7 & arg86;
      ((flag18 = v135 >= 1 && v135 <= 6 && v136 >= 1 && v136 <= 6),
        (v125 += arg85 >> 3),
        (v126 += arg86 >> 3));
    } else if (1 === arg83) {
      flag18 =
        arg85 >= 1 &&
        arg85 <= 14 &&
        arg86 >= 1 &&
        arg86 <= 14 &&
        !(arg85 >= 5 && arg85 <= 10 && arg86 >= 5 && arg86 <= 10);
      let v137 = arg86 < 5 ? 0 : arg85 > 10 ? 1 : arg86 > 10 ? 2 : 3;
      ((v125 += v137), (v126 += 4 + v137));
    } else
      2 === arg83
        ? hash2(arg87 + 2800, arg88 + 3100) > 0.5
          ? ((flag18 =
              arg86 >= 1 &&
              arg86 <= 14 &&
              ((arg85 >= 1 && arg85 <= 6) || (arg85 >= 9 && arg85 <= 14))),
            (v125 += arg85 < 8 ? 0 : 1))
          : ((flag18 =
              arg85 >= 1 &&
              arg85 <= 14 &&
              ((arg86 >= 1 && arg86 <= 6) || (arg86 >= 9 && arg86 <= 14))),
            (v126 += arg86 < 8 ? 0 : 1))
        : ((flag18 =
            hash2(arg87 + 3500, arg88 + 3700) > 0.5
              ? arg85 >= 4 && arg85 <= 11 && arg86 >= 2 && arg86 <= 13
              : arg85 >= 2 && arg85 <= 13 && arg86 >= 4 && arg86 <= 11),
          (n144 = 7));
    return {
      occupied: flag18,
      idX: v125,
      idZ: v126,
      boost: n144,
    };
  }
  function fn35(arg89, arg90) {
    let v138 = arg89 + arg90 * (n10 / n30),
      get = map2.get(v138);
    if (get) return get;
    let v139 = n10 / n30,
      v140 = 0.5 * v139,
      max7 = Math.max(Math.abs(arg89 - v140), Math.abs(arg90 - v140)),
      max8 = Math.max(0, 1 - max7 / (0.32 * v139)),
      v141 = (4 * hash2(arg89 + 1700, arg90 + 1900)) | 0,
      fn12Result9 = hash2(211 * arg89 + 8100, 197 * arg90 + 9100),
      v142 = fn12Result9 > 0.935 ? 1 + ((3 * hash2(17 * arg89 + 77, 23 * arg90 + 91)) | 0) : 0,
      v143 = hash2(arg89 + 4000, arg90 + 4000) < 0.1,
      v144 = (function (arg91, arg92) {
        return fn18(arg91 * n30 + 0.75 * n30, arg92 * n30 + 0.75 * n30);
      })(arg89, arg90),
      fn8Result = fn8(arg89 * n30 + 0.75 * n30, arg90 * n30 + 0.75 * n30),
      v145 = v144 ? "LEGACY" : fn8Result.type,
      fn12Result10 = hash2(arg89 + 4000, arg90 + 4000),
      v146 =
        v142 || v144
          ? v143
          : fn12Result10 <
            (function (arg93) {
              return "PARKLAND" === arg93
                ? 0.42
                : "TOWER_ESTATE" === arg93
                  ? 0.12
                  : "RESIDENTIAL" === arg93
                    ? 0.13
                    : "OLD_TOWN" === arg93
                      ? 0.045
                      : "COMMERCIAL" === arg93
                        ? 0.055
                        : "INDUSTRIAL" === arg93
                          ? 0.035
                          : "CORE" === arg93
                            ? 0.045
                            : 0.1;
            })(v145),
      v147 = (4 * hash2(353 * arg89 + 7103, 359 * arg90 + 7901)) | 0;
    if (
      ((get = {
        bx: arg89,
        bz: arg90,
        park: v146,
        legacyPark: v143,
        t: max8,
        layout: v141,
        landmarkSeed: fn12Result9,
        architecture: v142,
        vertical: 2 === v141 && hash2(arg89 + 2800, arg90 + 3100) > 0.5,
        narrow: 3 === v141 && hash2(arg89 + 3500, arg90 + 3700) > 0.5,
        morph: v147,
        type: v145,
        heritage: v144,
        districtX: fn8Result.districtX,
        districtZ: fn8Result.districtZ,
      }),
      map2.set(v138, get),
      map2.size > 4096)
    ) {
      let n145 = 0;
      for (let v148 of map2.keys()) if ((map2["delete"](v148), ++n145 >= 2048)) break;
    }
    return get;
  }
  var obj4 = {
    height: 0,
    idX: 0,
    idZ: 0,
    architecture: 0,
    loaded: false,
    hue: 0,
    sat: 0,
    win: 0,
    lit: 0,
  };
  function fn36(arg94, arg95, arg96 = obj4) {
    let floor3 = Math.floor(arg94),
      floor4 = Math.floor(arg95);
    if (((arg96.loaded = false), floor3 <= 0 || floor4 <= 0 || floor3 >= 8191 || floor4 >= 8191))
      return false;
    let v149 = floor3 - recordedOriginX,
      v150 = floor4 - recordedOriginZ;
    if (v149 >= 0 && v150 >= 0 && v149 < worldN && v150 < worldN) {
      let fn24Result = worldIndex(v149, v150);
      return (
        1 === uint8Array17[fn24Result] &&
        0 !== uint8Array16[fn24Result] &&
        ((arg96.loaded = true),
        (arg96.height = uint8Array16[fn24Result]),
        (arg96.architecture = uint8Array23[fn24Result]),
        (arg96.hue = uint8Array19[fn24Result]),
        (arg96.sat = uint8Array20[fn24Result]),
        (arg96.win = uint8Array21[fn24Result]),
        (arg96.lit = uint8Array22[fn24Result]),
        (arg96.idX = uint16Array7[fn24Result] || floor3),
        (arg96.idZ = uint16Array7[fn24Result] || floor4),
        true)
      );
    }
    if (floor3 >= freeze8.x0 && floor3 < freeze8.x1 && floor4 >= freeze8.z0 && floor4 < freeze8.z1)
      return false;
    let v151 = ((floor3 % n30) + n30) % n30,
      v152 = ((floor4 % n30) + n30) % n30;
    if (v151 < n31 || v152 < n31) return false;
    let floor5 = Math.floor(floor3 / n30),
      floor6 = Math.floor(floor4 / n30),
      fn35Result = fn35(floor5, floor6);
    if (fn35Result.park) return false;
    let v153 = v151 - n31,
      v154 = v152 - n31,
      v155 = v153 - 7.5,
      v156 = v154 - 7.5,
      flag19 = false,
      v157 = 8 * floor5,
      v158 = 8 * floor6,
      n146 = 0,
      n147 = 0,
      architecture = fn35Result.architecture;
    if (1 === architecture) {
      let sqrt = Math.sqrt((v155 * v155) / 46.239999999999995 + (v156 * v156) / 46.239999999999995);
      ((flag19 = v153 >= 2 && v153 <= 13 && v154 >= 1 && v154 <= 14), (v157 += 6), (v158 += 6));
      let v159 = 44 + ((17 * fn35Result.t) | 0) + ((9 * fn35Result.landmarkSeed) | 0);
      n147 = Math.max(24, v159 - Math.floor(16 * sqrt));
    } else if (2 === architecture) {
      let max9 = Math.max(Math.abs(v155), Math.abs(v156));
      ((flag19 = v153 >= 1 && v153 <= 14 && v154 >= 1 && v154 <= 14), (v157 += 6), (v158 += 5));
      let v160 = 46 + ((16 * fn35Result.t) | 0) + ((7 * fn35Result.landmarkSeed) | 0);
      ((n147 = v160 - (max9 > 5 ? 20 : max9 > 3 ? 11 : max9 > 1.4 ? 5 : 0)),
        Math.abs(v155) < 0.7 && Math.abs(v156) < 0.7 && (n147 = Math.min(70, v160 + 10)));
    } else if (3 === architecture) {
      let v161 = Math.abs(v155) + Math.abs(v156);
      ((flag19 = v153 >= 1 && v153 <= 14 && v154 >= 2 && v154 <= 13), (v157 += 5), (v158 += 6));
      let v162 = 42 + ((18 * fn35Result.t) | 0) + ((8 * fn35Result.landmarkSeed) | 0);
      ((n147 = Math.max(22, v162 - Math.floor(1.7 * v161))),
        Math.abs(v155) < 1.2 && Math.abs(v156) < 1.2 && (n147 = Math.min(70, v162 + 13)));
    } else {
      let fn34Result = fn34(
        fn35Result.type,
        fn35Result.layout,
        fn35Result.morph,
        v153,
        v154,
        floor5,
        floor6,
      );
      ((flag19 = fn34Result.occupied),
        (v157 = fn34Result.idX),
        (v158 = fn34Result.idZ),
        (n146 = fn34Result.boost));
    }
    if (!flag19) return false;
    ((arg96.height = Math.min(70, n147 || fn28(fn35Result.type, v157, v158, fn35Result.t, n146))),
      (arg96.idX = v157),
      (arg96.idZ = v158),
      (arg96.architecture = architecture));
    let fn25Result2 = fn25(v157, v158, fn35Result.type);
    return (
      (arg96.hue = fn25Result2.hue),
      (arg96.sat = fn25Result2.sat),
      (arg96.win = fn25Result2.win),
      (arg96.lit = fn25Result2.lit),
      true
    );
  }
  function fn37(arg97, arg98) {
    uint8Array3[arg98] = uint8Array3[arg97];
    for (let n148 = 0; n148 < uint8Array3[arg97]; n148++) {
      let v163 = arg97 * n17 + n148,
        v164 = arg98 * n17 + n148;
      ((float32Array8[v164] = float32Array8[v163]),
        (float32Array9[v164] = float32Array9[v163]),
        (float32Array10[v164] = float32Array10[v163]),
        (int16Array3[v164] = int16Array3[v163]),
        (int16Array4[v164] = int16Array4[v163]),
        (uint16Array2[v164] = uint16Array2[v163]),
        (uint8Array4[v164] = uint8Array4[v163]),
        (uint8Array5[v164] = uint8Array5[v163]),
        (uint8Array6[v164] = uint8Array6[v163]),
        (uint8Array7[v164] = uint8Array7[v163]),
        (uint8Array8[v164] = uint8Array8[v163]),
        (int16Array5[v164] = int16Array5[v163]),
        (int16Array6[v164] = int16Array6[v163]));
    }
    uint8Array9[arg98] = uint8Array9[arg97];
    for (let n149 = 0; n149 < uint8Array9[arg97]; n149++) {
      let v165 = arg97 * n20 + n149,
        v166 = arg98 * n20 + n149;
      ((float32Array11[v166] = float32Array11[v165]),
        (float32Array12[v166] = float32Array12[v165]),
        (float32Array13[v166] = float32Array13[v165]),
        (int16Array7[v166] = int16Array7[v165]),
        (int16Array8[v166] = int16Array8[v165]),
        (uint16Array3[v166] = uint16Array3[v165]),
        (uint16Array4[v166] = uint16Array4[v165]));
    }
  }
  function fn38(arg99, arg100, arg101, arg102, arg103, arg104 = false) {
    let now3 = performance.now();
    (uint8Array3.fill(0), uint8Array9.fill(0), (v15 = arg103));
    for (let n150 = 0; n150 < cols; n150 += 1) {
      let v167 = arg101 * v21[n150] + arg102 * v20[n150],
        v168 = arg101 * v20[n150] - arg102 * v21[n150],
        v169 = -1 / 0,
        n151 = 0,
        n152 = 0,
        n153 = 0,
        flag20 = false,
        n154 = 0,
        flag21 = false,
        n155 = 0,
        n156 = 0,
        n157 = 0,
        n158 = 0,
        n159 = 0,
        n160 = 188,
        n161 = 0,
        n162 = 0,
        n163 = 0,
        v170 = 2.25 * 0.56,
        fn417 = () => {
          if (flag21) {
            if (n154 < n20) {
              let v171 = n150 * n20 + n154++;
              ((float32Array11[v171] = Math.max(148, n155)),
                (float32Array12[v171] = Math.min(420, n156)),
                (float32Array13[v171] = n157),
                (int16Array7[v171] = n158),
                (int16Array8[v171] = n159),
                (uint16Array3[v171] = n160),
                (uint16Array4[v171] = n161));
            }
            flag21 = false;
          }
        };
      for (let v172 = 148 + 0.17 * ((n150 >> 1) & 3); v172 <= 420; v172 += 2.25) {
        let v173 = arg99 + v167 * v172,
          v174 = arg100 + v168 * v172,
          fn36Result = fn36(v173, v174, obj4);
        if (fn36Result) {
          let floor9 = Math.floor(v173),
            floor10 = Math.floor(v174),
            idX = obj4.idX,
            idZ = obj4.idZ,
            height2 = obj4.height;
          ((flag21 && idX === n162 && idZ === n163 && Math.abs(height2 - n157) < 0.04) ||
            (fn417(),
            (flag21 = true),
            (n155 = v172 - v170),
            (n157 = height2),
            (n158 = floor9),
            (n159 = floor10),
            (n160 = obj4.hue || 188),
            (n161 = (65535 * hash2(7919 * idX + 11, 104729 * idZ + 7)) & 65535),
            (n162 = idX),
            (n163 = idZ)),
            (n156 = v172 + v170));
        } else fn417();
        if (!fn36Result) {
          flag20 = false;
          continue;
        }
        let floor7 = Math.floor(v173),
          floor8 = Math.floor(v174);
        if (flag20 && floor7 === n152 && floor8 === n153) continue;
        ((flag20 = true), (n152 = floor7), (n153 = floor8));
        let v175 = (obj4.height - arg103) / Math.max(0.1, v172);
        if (v175 <= v169 + 0.004) continue;
        ((v169 = v175), n151 >= n17 && (n151 = 23));
        let v176 = n150 * n17 + n151,
          fn12Result11 = hash2(7919 * obj4.idX + 11, 104729 * obj4.idZ + 7);
        ((float32Array8[v176] = v172),
          (float32Array9[v176] = obj4.height),
          (int16Array3[v176] = floor7),
          (int16Array4[v176] = floor8),
          (uint16Array2[v176] = obj4.hue || arr[(fn12Result11 * arr.length) | 0]),
          (uint8Array4[v176] = obj4.sat || 52),
          (uint8Array5[v176] = obj4.win),
          (uint8Array6[v176] = obj4.lit || 45),
          (uint8Array7[v176] = obj4.architecture),
          (uint8Array8[v176] = Math.abs(v167) > Math.abs(v168) ? 0 : 1),
          (float32Array10[v176] = 0 === uint8Array8[v176] ? v174 : v173),
          (int16Array5[v176] = Math.max(0, Math.ceil(fn10(obj4.height, v172, arg103)))),
          (int16Array6[v176] = Math.min(rows - 1, Math.floor(fn10(0, v172, arg103)))),
          n151 < 23 ? n151++ : (n151 = n17));
      }
      (fn417(),
        (uint8Array3[n150] = Math.min(n151, n17)),
        (uint8Array9[n150] = n154),
        uint8Array3[n150]);
      for (let n164 = 1; n164 < 1 && n150 + n164 < cols; n164++) fn37(n150, n150 + n164);
    }
    ((v16 = view.pitch), fn2("farSkylinePrepare", now3));
  }
  function fn39(arg105, arg106, arg107) {
    let v177 = float32Array8[arg107],
      v178 = (float32Array9[arg107], int16Array5[arg107]),
      v179 = int16Array6[arg107];
    if (arg106 < v178 || arg106 > v179 || v179 < v178) return;
    let max10 = Math.max(0, Math.min(1, (400 - v177) / 252));
    if (max10 <= 0) return;
    let v180 = uint16Array2[arg107],
      v181 = uint8Array4[arg107],
      v182 = uint8Array5[arg107],
      v183 = uint8Array6[arg107] / 100,
      v184 = v15 + v177 * float32Array18[arg106],
      v185 = float32Array10[arg107],
      floor11 = Math.floor(0.55 * v185),
      floor12 = Math.floor(0.55 * v184),
      v186 = ((floor12 % 4) + 4) % 4,
      v187 = ((floor11 % 6) + 6) % 6,
      fn12Result12 = hash2(
        13 * int16Array3[arg107] + 29 * floor11,
        11 * int16Array4[arg107] + 17 * floor12,
      ),
      flag22 = false;
    flag22 =
      0 === v182
        ? v187 % 3 == 1 && 1 === v186
        : 1 === v182
          ? v187 % 3 == 1 && 1 === v186 && fn12Result12 < 0.48
          : 2 === v182
            ? (1 === v186 || 2 === v186) && v187 % 2 == 0
            : v187 % 2 == 0 && fn12Result12 < 0.68;
    let v188,
      v189,
      v190 = 0.07 + 0.27 * max10;
    (arg106 === v178 && v178 > 0
      ? ((v188 =
          1 === uint8Array7[arg107]
            ? "~"
            : 2 === uint8Array7[arg107]
              ? "^"
              : 3 === uint8Array7[arg107]
                ? "*"
                : "="),
        (v189 = "hsl(" + v180 + ",55%," + (15 + 28 * max10).toFixed(0) + "%)"))
      : flag22 && fn12Result12 < 0.72 * v183
        ? ((v188 = v177 > 300 ? "." : "0"),
          (v189 = "hsl(" + v180 + ",70%," + (19 + 31 * max10).toFixed(0) + "%)"))
        : flag22
          ? ((v188 = ":"), (v189 = "hsl(" + v180 + ",28%," + (9 + 18 * max10).toFixed(0) + "%)"))
          : ((v188 = fn12Result12 > 0.72 ? ":" : fn12Result12 > 0.34 ? "." : " "),
            (v189 =
              "hsl(" +
              v180 +
              "," +
              Math.max(18, 0.42 * v181).toFixed(0) +
              "%," +
              (7 + 24 * v190).toFixed(0) +
              "%)")),
      " " !== v188 && fn264(arg105, arg106, v188, v189));
  }
  function fn40(arg108) {
    let max11 = Math.max(0.08, 1 - arg108 * v13),
      max12 = Math.max(0.08, Math.min(1, (400 - arg108) / 252));
    return {
      base: 3.2 + Math.max(14.8 * max11, 7 * max12),
      ink: 8 + Math.max(24 * max11, 18 * max12),
      seam: 11 + Math.max(31 * max11, 24 * max12),
    };
  }
  function fn41(arg109, arg110, arg111, arg112, arg113, arg114) {
    let v191 = int16Array[arg111],
      v192 = int16Array2[arg111],
      fn24Result2 = worldIndex(v191, v192),
      v193 = uint8Array19[fn24Result2] || 188,
      v194 = uint16Array[arg111] || 1,
      v195 = view.x + arg113 * arg112,
      v196 = view.z + arg114 * arg112,
      fn40Result = fn40(arg112),
      v197 =
        Math.abs(v195 / 3 - Math.round(v195 / 3)) < 0.085 ||
        Math.abs(v196 / 3 - Math.round(v196 / 3)) < 0.085,
      fn12Result13 = hash2(Math.floor(2 * v195) + 13 * v194, Math.floor(2 * v196) + 7 * v194 + 17);
    (fn263(arg109, arg110, "hsl(" + v193 + ",22%," + fn40Result.base.toFixed(1) + "%)"),
      fn264(
        arg109,
        arg110,
        v197
          ? "+"
          : fn12Result13 > 0.965
            ? "H"
            : fn12Result13 > 0.86
              ? "o"
              : fn12Result13 > 0.44
                ? "="
                : ".",
        "hsl(" +
          v193 +
          "," +
          (v197 ? 48 : 27) +
          "%," +
          (v197 ? fn40Result.seam : fn40Result.ink).toFixed(0) +
          "%)",
      ));
  }
  function fn42(arg115, arg116, arg117, arg118, arg119, arg120) {
    let v198 = uint16Array3[arg117] || 188,
      v199 = uint16Array4[arg117] || 1,
      fn40Result2 = fn40(arg118),
      v200 = toWorldX(view.x) + arg119 * arg118,
      v201 = toWorldZ(view.z) + arg120 * arg118,
      v202 =
        Math.abs(v200 / 4 - Math.round(v200 / 4)) < 0.065 ||
        Math.abs(v201 / 4 - Math.round(v201 / 4)) < 0.065,
      fn12Result14 = hash2(
        Math.floor(0.7 * v200) + 11 * v199,
        Math.floor(0.7 * v201) + 5 * v199 + 23,
      );
    (fn263(arg115, arg116, "hsl(" + v198 + ",18%," + fn40Result2.base.toFixed(1) + "%)"),
      fn264(
        arg115,
        arg116,
        arg118 > 330
          ? fn12Result14 > 0.62
            ? "."
            : "·"
          : v202
            ? "+"
            : fn12Result14 > 0.94
              ? "H"
              : fn12Result14 > 0.78
                ? "o"
                : fn12Result14 > 0.38
                  ? "="
                  : ".",
        "hsl(" +
          v198 +
          "," +
          (v202 ? 38 : 24) +
          "%," +
          (v202 ? fn40Result2.seam : fn40Result2.ink).toFixed(0) +
          "%)",
      ));
  }
  function fn43(arg121, arg122) {
    let v203 = 1 / 0,
      v204 = uint8Array3[arg121];
    for (let n165 = 0; n165 < v204; n165++) {
      let v205 = arg121 * n17 + n165;
      arg122 >= int16Array5[v205] &&
        arg122 <= int16Array6[v205] &&
        float32Array8[v205] < v203 &&
        (v203 = float32Array8[v205]);
    }
    return v203;
  }
  function fn44(
    arg123,
    arg124 = null,
    arg125 = 0,
    arg126 = rows,
    arg127 = -1,
    arg128 = 1000000000,
  ) {
    let v206 = uint8Array3[arg123];
    if (!v206) return;
    let v207 = rows,
      v208 = -1;
    for (let n166 = 0; n166 < v206; n166++) {
      let v209 = arg123 * n17 + n166;
      ((v207 = Math.min(v207, int16Array5[v209])), (v208 = Math.max(v208, int16Array6[v209])));
    }
    if (!(v207 > v208))
      for (let max13 = Math.max(0, v207); max13 <= Math.min(rows - 1, v208); max13++) {
        let v210 = -1;
        for (let n167 = 0; n167 < v206; n167++) {
          let v211 = arg123 * n17 + n167;
          if (max13 >= int16Array5[v211] && max13 <= int16Array6[v211]) {
            v210 = v211;
            break;
          }
        }
        if (v210 >= 0) {
          let v212 = float32Array7[max13 * cols + arg123];
          (!Number.isFinite(v212) || v212 >= float32Array8[v210] - 0.02) &&
            fn39(arg123, max13, v210);
        }
      }
  }
  function fn45(arg129 = 0, arg130 = worldN, arg131 = 0, arg132 = worldN, arg133 = true) {
    if (arg133)
      (uint8Array16.fill(0),
        uint8Array17.fill(0),
        uint8Array18.fill(0),
        uint8Array19.fill(0),
        uint8Array20.fill(0),
        uint8Array21.fill(0),
        uint8Array22.fill(0),
        uint16Array7.fill(0),
        uint8Array23.fill(0),
        map3.clear());
    else
      for (let v213 = arg131; v213 < arg132; v213++)
        for (let v214 = arg129; v214 < arg130; v214++) {
          let fn24Result3 = worldIndex(v214, v213);
          ((uint8Array16[fn24Result3] = 0),
            (uint8Array17[fn24Result3] = 0),
            (uint8Array18[fn24Result3] = 0),
            (uint8Array19[fn24Result3] = 0),
            (uint8Array20[fn24Result3] = 0),
            (uint8Array21[fn24Result3] = 0),
            (uint8Array22[fn24Result3] = 0),
            (uint16Array7[fn24Result3] = 0),
            (uint8Array23[fn24Result3] = 0));
        }
    ((obj2.x0 = freeze8.x0 - recordedOriginX),
      (obj2.x1 = freeze8.x1 - recordedOriginX),
      (obj2.z0 = freeze8.z0 - recordedOriginZ),
      (obj2.z1 = freeze8.z1 - recordedOriginZ),
      (obj2.cx = freeze8.cx - recordedOriginX),
      (obj2.cz = freeze8.cz - recordedOriginZ),
      (obj3.x = obj2.x0 + 8),
      (obj3.z = obj2.cz));
    for (let v215 = arg129; v215 < arg130; v215++)
      for (let v216 = arg131; v216 < arg132; v216++) {
        let fn24Result4 = worldIndex(v215, v216),
          v217 = (recordedOriginX + v215) | 0,
          v218 = (recordedOriginZ + v216) | 0;
        if (v217 <= 0 || v218 <= 0 || v217 >= 8191 || v218 >= 8191) {
          ((uint8Array16[fn24Result4] = 60), (uint8Array17[fn24Result4] = 1));
          continue;
        }
        let v219 = ((v217 % n30) + n30) % n30,
          v220 = ((v218 % n30) + n30) % n30,
          v221 = v219 < n31,
          v222 = v220 < n31,
          v223 = v221 && fn19("Z", v217 - v219),
          v224 = v222 && fn19("X", v218 - v220);
        if (v221 && v222) {
          let v231 = v219 < 3 || v219 >= 13,
            v232 = v220 < 3 || v220 >= 13;
          uint8Array18[fn24Result4] =
            v223 && v224
              ? v231 && v232
                ? 1
                : v231 || v232
                  ? 2
                  : 0
              : v223
                ? v231
                  ? 1
                  : 0
                : v224
                  ? v232
                    ? 1
                    : 0
                  : v231 && v232
                    ? 1
                    : 6;
          continue;
        }
        if (v221 || v222) {
          let v233 = v221 ? v219 : v220,
            v234 = v221 ? v223 : v224;
          ((uint8Array18[fn24Result4] = v233 < 3 || v233 >= 13 ? 1 : v234 ? 0 : 6),
            1 === uint8Array18[fn24Result4] &&
              ((0 !== v233 && 15 !== v233) || (v217 + v218) % 8 != 0
                ? (2 === v233 || 13 === v233) &&
                  (v217 + v218) % 8 == 3 &&
                  ((uint8Array16[fn24Result4] = 2.6), (uint8Array17[fn24Result4] = 2))
                : ((uint8Array16[fn24Result4] = 3.2), (uint8Array17[fn24Result4] = 3))));
          continue;
        }
        let floor13 = Math.floor(v217 / n30),
          floor14 = Math.floor(v218 / n30),
          fn35Result2 = fn35(floor13, floor14);
        if (fn35Result2.park) {
          if (fn35Result2.heritage)
            ((uint8Array18[fn24Result4] = 3),
              hash2(v217, v218) < 0.16 &&
                ((uint8Array16[fn24Result4] = 2.6), (uint8Array17[fn24Result4] = 2)));
          else {
            let fn32Result = fn32(fn35Result2, v219 - n31, v220 - n31);
            uint8Array18[fn24Result4] = fn32Result.surface;
            let v235 =
              "PARKLAND" === fn35Result2.type
                ? 1.18
                : "RESIDENTIAL" === fn35Result2.type
                  ? 1.04
                  : 1;
            3 === fn32Result.surface &&
              hash2(31 * v217 + 1207, 37 * v218 + 1601) <
                Math.min(0.42, fn32Result.treeChance * v235) &&
              ((uint8Array16[fn24Result4] = 2.6), (uint8Array17[fn24Result4] = 2));
          }
          continue;
        }
        let t = fn35Result2.t,
          v225 = v219 - n31,
          v226 = v220 - n31,
          architecture2 = fn35Result2.architecture,
          flag23 = false,
          v227 = 8 * floor13,
          v228 = 8 * floor14,
          n168 = 0,
          n169 = 0,
          v229 = v225 - 7.5,
          v230 = v226 - 7.5;
        if (1 === architecture2) {
          let sqrt2 = Math.sqrt(
            (v229 * v229) / 46.239999999999995 + (v230 * v230) / 46.239999999999995,
          );
          ((flag23 = v225 >= 2 && v225 <= 13 && v226 >= 1 && v226 <= 14), (v227 += 6), (v228 += 6));
          let v236 = 44 + ((17 * t) | 0) + ((9 * fn35Result2.landmarkSeed) | 0);
          n169 = Math.max(24, v236 - Math.floor(16 * sqrt2));
        } else if (2 === architecture2) {
          let max14 = Math.max(Math.abs(v229), Math.abs(v230));
          ((flag23 = v225 >= 1 && v225 <= 14 && v226 >= 1 && v226 <= 14), (v227 += 6), (v228 += 5));
          let v237 = 46 + ((16 * t) | 0) + ((7 * fn35Result2.landmarkSeed) | 0);
          ((n169 = v237 - (max14 > 5 ? 20 : max14 > 3 ? 11 : max14 > 1.4 ? 5 : 0)),
            Math.abs(v229) < 0.7 && Math.abs(v230) < 0.7 && (n169 = Math.min(70, v237 + 10)));
        } else if (3 === architecture2) {
          let v238 = Math.abs(v229) + Math.abs(v230);
          ((flag23 = v225 >= 1 && v225 <= 14 && v226 >= 2 && v226 <= 13), (v227 += 5), (v228 += 6));
          let v239 = 42 + ((18 * t) | 0) + ((8 * fn35Result2.landmarkSeed) | 0);
          ((n169 = Math.max(22, v239 - Math.floor(1.7 * v238))),
            Math.abs(v229) < 1.2 && Math.abs(v230) < 1.2 && (n169 = Math.min(70, v239 + 13)));
        } else {
          let fn34Result2 = fn34(
            fn35Result2.type,
            fn35Result2.layout,
            fn35Result2.morph,
            v225,
            v226,
            floor13,
            floor14,
          );
          ((flag23 = fn34Result2.occupied),
            (v227 = fn34Result2.idX),
            (v228 = fn34Result2.idZ),
            (n168 = fn34Result2.boost));
        }
        if (flag23) {
          let v240 = n169 || fn28(fn35Result2.type, v227, v228, t, n168);
          fn26(
            fn24Result4,
            v227,
            v228,
            v240 +
              (architecture2
                ? 0
                : fn33(fn35Result2.type, fn35Result2.morph, v225, v226, floor13, floor14, v240)),
            architecture2,
            fn35Result2.type,
          );
        } else if (
          ("LEGACY" === fn35Result2.type || "MIXED" === fn35Result2.type) &&
          1 === fn35Result2.layout &&
          v225 >= 5 &&
          v225 <= 10 &&
          v226 >= 5 &&
          v226 <= 10
        )
          ((uint8Array18[fn24Result4] = 3),
            hash2(5 * v217, 7 * v218) < 0.09 &&
              ((uint8Array16[fn24Result4] = 2.6), (uint8Array17[fn24Result4] = 2)));
        else {
          let v241 = fn35Result2.heritage ? 1 : fn29(fn35Result2.type, v225, v226, v217, v218);
          uint8Array18[fn24Result4] = v241;
          let fn30Result = fn30(fn35Result2.type);
          3 === v241 &&
            fn30Result > 0 &&
            hash2(41 * v217 + 7, 43 * v218 + 13) < fn30Result &&
            ((uint8Array16[fn24Result4] = 2.6), (uint8Array17[fn24Result4] = 2));
        }
      }
  }
  function fn46() {
    if (!fn22()) return;
    let { x0: v242, x1: v243, z0: v244, z1: v245, cx: v246, cz: v247 } = obj2;
    for (let max15 = Math.max(0, v242); max15 < Math.min(worldN, v243); max15++)
      for (let max16 = Math.max(0, v244); max16 < Math.min(worldN, v245); max16++) {
        let fn24Result5 = worldIndex(max15, max16),
          v250 = max15 + 0.5 - v246,
          v251 = max16 + 0.5 - v247;
        ((uint8Array17[fn24Result5] = 0),
          (uint8Array16[fn24Result5] = 0),
          (uint16Array7[fn24Result5] = 0),
          (uint8Array23[fn24Result5] = 0),
          (uint8Array19[fn24Result5] = 0),
          (uint8Array20[fn24Result5] = 0),
          (uint8Array21[fn24Result5] = 0),
          (uint8Array22[fn24Result5] = 0),
          (uint8Array18[fn24Result5] = 3));
        let v252 = (v250 * v250) / 90.25 + (v251 * v251) / 51.84 <= 1,
          v253 = Math.abs(v251) < 1.15 && Math.abs(v250) > 10,
          v254 =
            (Math.abs(v250) < 1.15 && Math.abs(v251) > 9) ||
            (Math.abs(v251) < 1.15 && Math.abs(v250) > 10),
          v255 = Math.abs(Math.abs(v250) - 6.5) < 1.2 || Math.abs(Math.abs(v251) - 6.5) < 1.2;
        !v252 || v253 || v254
          ? v253 ||
            v254 ||
            v255 ||
            ((v250 * v250) / 156.25 + (v251 * v251) / (10.2 * 10.2) <= 1.18 && !v252) ||
            max15 < v242 + 2 ||
            max15 >= v243 - 2 ||
            max16 < v244 + 2 ||
            max16 >= v245 - 2
            ? (uint8Array18[fn24Result5] = 5)
            : hash2(31 * max15 + 17000, 37 * max16 + 19000) > 0.89 &&
              ((uint8Array17[fn24Result5] = 2), (uint8Array16[fn24Result5] = 2.6))
          : (uint8Array18[fn24Result5] = 4);
      }
    let v248 = 0.5 * obj3.d + n15,
      v249 = 0.5 * obj3.w + n15;
    for (let floor15 = Math.floor(obj3.x - v248); floor15 <= Math.floor(obj3.x + v248); floor15++)
      for (let floor16 = Math.floor(obj3.z - v249); floor16 <= Math.floor(obj3.z + v249); floor16++)
        floor15 >= 0 &&
          floor16 >= 0 &&
          floor15 < worldN &&
          floor16 < worldN &&
          (uint8Array17[worldIndex(floor15, floor16)] = 4);
    for (let [v256, v257] of [
      [v242 + 4, v244 + 4],
      [v242 + 4, v245 - 5],
      [v243 - 5, v244 + 4],
      [v243 - 5, v245 - 5],
      [v246 - 13, v247 - 9],
      [v246 + 13, v247 - 9],
      [v246 - 13, v247 + 9],
      [v246 + 13, v247 + 9],
    ]) {
      if (v256 < 0 || v257 < 0 || v256 >= worldN || v257 >= worldN) continue;
      let fn24Result6 = worldIndex(v256, v257);
      ((uint8Array17[fn24Result6] = 3),
        (uint8Array16[fn24Result6] = 3.2),
        (uint8Array18[fn24Result6] = 5));
    }
  }
  (fn45(), fn46());
  var arr2 = [],
    gridCell = 32,
    gridDim = Math.ceil(16),
    from3 = Array.from(
      {
        length: gridDim * gridDim,
      },
      () => [],
    ),
    renderGrid = Array.from(
      {
        length: gridDim * gridDim,
      },
      () => [],
    ),
    entityGrid = Array.from(
      {
        length: gridDim * gridDim,
      },
      () => [],
    ),
    n33 = 6,
    n34 = 7,
    n35 = 8,
    n36 = 9,
    n37 = 10,
    n38 = 11,
    n39 = 12,
    n40 = 13,
    n41 = 14,
    n42 = 15,
    n43 = 16,
    n44 = 17,
    n45 = 18,
    n46 = 19,
    n47 = 20,
    n48 = 21,
    n49 = 22,
    n50 = 23,
    n51 = 24,
    n52 = 25,
    n53 = 26,
    n54 = 27,
    n55 = 28,
    n56 = 29,
    n57 = 30,
    n58 = 31,
    n59 = 32,
    n60 = 33,
    arr3 = [],
    map4 = new Map([
      [6, 0.68],
      [7, 0.68],
      [8, 0.34],
      [9, 1],
      [n37, 0.44],
      [n38, 0.96],
      [n39, 0.86],
      [n41, 1.28],
      [n42, 0.62],
      [n45, 0.68],
      [n46, 1.55],
      [n47, 1.5],
      [n53, 1],
      [n54, 1.05],
      [n56, 0.95],
      [n57, 1.35],
      [n58, 0.78],
      [n59, 1.75],
      [n60, 1.85],
    ]);
  function fn47(arg134) {
    let get2 = map4.get(arg134.kind);
    return (
      get2 && !arg134.noVolume && ((arg134.d = arg134.d || get2), (arg134.volume = true)),
      arg134
    );
  }
  function fn48(arg135, arg136) {
    return Math.floor(arg135 / n13) + "," + Math.floor(arg136 / n13);
  }
  var floor = Math.floor(recordedView.worldX / n13),
    floor2 = Math.floor(recordedView.worldZ / n13),
    v37 = floor + "," + floor2,
    freeze12 = Object.freeze(
      (function () {
        let v258 = floor * n13,
          v259 = floor2 * n13,
          arr44 = [128, 384],
          v260 = null,
          v261 = 1 / 0;
        for (let v262 of arr44)
          for (let v263 of arr44) {
            let obj29 = {
                x: v258 + v263 + 13.5,
                z: v259 + v262 + 20.5,
                axis: 1,
              },
              hypot = Math.hypot(obj29.x - recordedView.worldX, obj29.z - recordedView.worldZ);
            hypot < v261 && ((v261 = hypot), (v260 = obj29));
          }
        return v260;
      })(),
    );
  function fn49(arg137) {
    if (!arg137 || arg137.kind !== n38) return arg137;
    let floor17 = Math.floor(arg137.x),
      floor18 = Math.floor(arg137.z),
      v264 = null,
      v265 = 1 / 0,
      arr45 = [
        {
          dx: 1,
          dz: 0,
          axis: 1,
          roadSign: 1,
        },
        {
          dx: -1,
          dz: 0,
          axis: 1,
          roadSign: -1,
        },
        {
          dx: 0,
          dz: 1,
          axis: 0,
          roadSign: 1,
        },
        {
          dx: 0,
          dz: -1,
          axis: 0,
          roadSign: -1,
        },
      ];
    for (let v266 of arr45)
      for (let n170 = 1; n170 <= 20; n170++) {
        let v267 = floor17 + v266.dx * n170,
          v268 = floor18 + v266.dz * n170;
        if (v267 < 0 || v268 < 0 || v267 >= worldN || v268 >= worldN) break;
        let fn24Result7 = worldIndex(v267, v268),
          v269 = uint8Array18[fn24Result7];
        if (0 === v269 || 2 === v269) {
          let v270 = n170 + (2 === v269 ? 0.18 : 0);
          v270 < v265 && ((v265 = v270), (v264 = v266));
          break;
        }
        if (0 !== uint8Array17[fn24Result7] || 4 === v269) break;
      }
    return (
      v264
        ? ((arg137.axis = v264.axis),
          (arg137.phoneFrontSign = -v264.roadSign),
          (arg137.phoneRoadSign = v264.roadSign))
        : Number.isFinite(arg137.phoneFrontSign) || (arg137.phoneFrontSign = -1),
      arg137
    );
  }
  function fn50(arg138, arg139, arg140, arg141, arg142 = 1, arg143 = 0) {
    let fn47Result = fn47({
      x: arg138,
      z: arg139,
      kind: arg140,
      h: arg141,
      w: arg142,
      axis: arg143,
      _depth: 0,
      _col: 0,
    });
    return (
      arg140 === n38 &&
        (function (arg144) {
          if (!arg144 || arg144.kind !== n38) return arg144;
          fn49(arg144);
          let fn3Result2 = toWorldX(arg144.x),
            fn4Result2 = toWorldZ(arg144.z);
          ((arg144.relayNodeId = "PHONE:" + fn3Result2.toFixed(1) + ":" + fn4Result2.toFixed(1)),
            (arg144.relayWorldX = fn3Result2),
            (arg144.relayWorldZ = fn4Result2),
            (arg144.relayDistrictKey = fn48(fn3Result2, fn4Result2)),
            (arg144.relayHomeCandidate =
              Math.hypot(fn3Result2 - freeze12.x, fn4Result2 - freeze12.z) < 1.25));
        })(fn47Result),
      arr2.push(fn47Result),
      from3[((arg139 / gridCell) | 0) * gridDim + ((arg138 / gridCell) | 0)].push(fn47Result),
      arg140 >= 6 && arr3.push(fn47Result),
      fn47Result
    );
  }
  function fn51(arg145, arg146) {
    let v271 = arg145 * n13,
      v272 = arg146 * n13,
      arr46 = [128, 384],
      arr47 = [];
    for (let v273 of arr46)
      for (let v274 of arr46) {
        let obj30 = {
            x: v271 + v274 + 13.5,
            z: v272 + v273 + 20.5,
            axis: 1,
            predictable: true,
          },
          v275 = Math.hypot(obj30.x - freeze12.x, obj30.z - freeze12.z) < 1.25;
        (!fn18(obj30.x, obj30.z) || v275) && arr47.push(obj30);
      }
    if (
      arg145 + "," + arg146 !== v37 ||
      arr47.some((arg147) => Math.hypot(arg147.x - freeze12.x, arg147.z - freeze12.z) < 1.25)
    ) {
      if (arg145 + "," + arg146 === v37) {
        let find = arr47.find(
          (arg148) => Math.hypot(arg148.x - freeze12.x, arg148.z - freeze12.z) < 1.25,
        );
        find && (find.home = true);
      }
    } else
      arr47.push({
        ...freeze12,
        home: true,
        predictable: true,
      });
    return arr47;
  }
  function fn52(arg149, arg150, arg151) {
    let v276 = (function (arg152) {
      let v278 = arg152.x - recordedOriginX,
        v279 = arg152.z - recordedOriginZ;
      if (v278 < 2 || v279 < 2 || v278 >= 510 || v279 >= 510) return null;
      for (let n171 = 0; n171 <= 5; n171++)
        for (let v280 = -n171; v280 <= n171; v280++)
          for (let v281 = -n171; v281 <= n171; v281++) {
            if (n171 && Math.max(Math.abs(v281), Math.abs(v280)) !== n171) continue;
            let v282 = Math.floor(v278) + v281,
              v283 = Math.floor(v279) + v280;
            if (v282 < 2 || v283 < 2 || v282 >= 510 || v283 >= 510) continue;
            let fn24Result8 = worldIndex(v282, v283);
            if (0 === uint8Array17[fn24Result8] && 1 === uint8Array18[fn24Result8])
              return {
                x: v282 + 0.5,
                z: v283 + 0.5,
              };
          }
      return null;
    })(arg149);
    if (!v276) return null;
    let v277 = null;
    for (let v284 of arr2)
      if (v284.kind === n38 && Math.hypot(v284.x - v276.x, v284.z - v276.z) < 1.35) {
        v277 = v284;
        break;
      }
    if (v277)
      return (
        fn49(v277),
        (v277.relayAnchor = true),
        (v277.relayPredictable = !!arg149.predictable),
        (arg149.home ||
          (arg150 + "," + arg151 === v37 &&
            Math.hypot(toWorldX(v277.x) - freeze12.x, toWorldZ(v277.z) - freeze12.z) < 2)) &&
          (v277.relayHomeCandidate = true),
        v277
      );
    let fn50Result = fn50(v276.x, v276.z, n38, 2.35, 1.22, arg149.axis ?? 1);
    return (
      (fn50Result.relayAnchor = true),
      (fn50Result.relayPredictable = !!arg149.predictable),
      (arg149.home ||
        (arg150 + "," + arg151 === v37 &&
          Math.hypot(toWorldX(fn50Result.x) - freeze12.x, toWorldZ(fn50Result.z) - freeze12.z) <
            2)) &&
        (fn50Result.relayHomeCandidate = true),
      fn50Result
    );
  }
  function fn53() {
    let max17 = Math.max(0, Math.floor(recordedOriginX / n13)),
      min4 = Math.min(Math.ceil(16) - 1, Math.floor((recordedOriginX + worldN - 1) / n13)),
      max18 = Math.max(0, Math.floor(recordedOriginZ / n13)),
      min5 = Math.min(Math.ceil(16) - 1, Math.floor((recordedOriginZ + worldN - 1) / n13));
    for (let v285 = max18; v285 <= min5; v285++)
      for (let v286 = max17; v286 <= min4; v286++)
        for (let v287 of fn51(v286, v285)) fn52(v287, v286, v285);
  }
  function fn54(arg153, arg154) {
    return fn18(arg153, arg154) ? "LEGACY" : fn8(arg153, arg154).type;
  }
  function fn55(arg155, arg156) {
    let fn35Result3 = fn35(Math.floor(arg155 / n30), Math.floor(arg156 / n30));
    return fn35Result3.park && !fn35Result3.heritage ? fn35Result3 : null;
  }
  function fn56(arg157, arg158, arg159, arg160, arg161, arg162, arg163, arg164, arg165) {
    if (
      !(function (arg166, arg167, arg168, arg169, arg170) {
        return (
          (1 === arg170 || 14 === arg170) &&
          !!(arg168 < n31 ? fn19("Z", arg166 - arg168) : fn19("X", arg167 - arg169))
        );
      })(arg160, arg161, arg162, arg163, arg165)
    )
      return null;
    let arg157Result = arg157(arg158 + 0.5, arg159 + 0.5, 9, 2.35, 2.7, arg164);
    return (
      arg157Result &&
        ((arg157Result.d = 1.3),
        (arg157Result.fixtureFrontSign = (function (arg171, arg172) {
          return 1 === arg172 ? 1 : -1;
        })(0, arg165))),
      arg157Result
    );
  }
  function fn57(arg173, arg174, arg175) {
    let fn24Result9 = worldIndex(arg173, arg174);
    if (0 !== uint8Array17[fn24Result9] || fn23(arg173 + 0.5, arg174 + 0.5)) return;
    let v288 = (recordedOriginX + arg173) | 0,
      v289 = (recordedOriginZ + arg174) | 0,
      v290 = ((v288 % n30) + n30) % n30,
      v291 = ((v289 % n30) + n30) % n30,
      v292 = v290 < n31,
      v293 = v291 < n31,
      v294 = uint8Array18[fn24Result9],
      fn12Result15 = hash2(43 * v288 + 17, 47 * v289 + 29),
      fn54Result = fn54(v288, v289);
    if ("LEGACY" !== fn54Result) {
      if (v292 && v293)
        (2 !== v290 && 13 !== v290) ||
        (2 !== v291 && 13 !== v291) ||
        !fn20(v288 - v290, v289 - v291)
          ? (3 === v290 || 12 === v290) &&
            (3 === v291 || 12 === v291) &&
            fn12Result15 > 0.35 &&
            arg175(arg173 + 0.5, arg174 + 0.5, 8, 0.9, 0.35)
          : fn79(
              arg175(arg173 + 0.5, arg174 + 0.5, n37, 2.8, 0.8, 2 === v290 ? 1 : 0),
              v288,
              v289,
              v290,
              v291,
            );
      else {
        if (1 === v294 && (v292 || v293)) {
          let v295 = v292 ? v290 : v291,
            v296 = v292 ? v289 : v288,
            v297 = v292 ? 1 : 0;
          return "INDUSTRIAL" === fn54Result
            ? void ((2 === v295 || 13 === v295) &&
              ((v296 % 24) + 24) % 24 == 6 &&
              fn12Result15 > 0.44
                ? arg175(arg173 + 0.5, arg174 + 0.5, n42, 0.8, 0.75)
                : (1 === v295 || 14 === v295) &&
                  ((v296 % 48) + 48) % 48 == 17 &&
                  fn12Result15 > 0.66 &&
                  arg175(arg173 + 0.5, arg174 + 0.5, 7, 1.05, 0.75))
            : "PARKLAND" === fn54Result
              ? void ((1 === v295 || 14 === v295) &&
                ((v296 % 32) + 32) % 32 == 10 &&
                fn12Result15 > 0.48
                  ? arg175(arg173 + 0.5, arg174 + 0.5, 6, 0.8, 1.9, v297)
                  : (2 === v295 || 13 === v295) &&
                    ((v296 % 32) + 32) % 32 == 18 &&
                    fn12Result15 > 0.58 &&
                    arg175(arg173 + 0.5, arg174 + 0.5, n53, 1, 1.2, v297))
              : "RESIDENTIAL" === fn54Result
                ? void ((1 === v295 || 14 === v295) &&
                  ((v296 % 40) + 40) % 40 == 14 &&
                  fn12Result15 > 0.56
                    ? arg175(arg173 + 0.5, arg174 + 0.5, 6, 0.8, 1.9, v297)
                    : (2 === v295 || 13 === v295) &&
                      ((v296 % 32) + 32) % 32 == 18 &&
                      fn12Result15 > 0.64 &&
                      arg175(arg173 + 0.5, arg174 + 0.5, n40, 1.05, 1.7, v297))
                : void (1 === v295 || 14 === v295
                    ? ((v296 % 32) + 32) % 32 == 22 && fn12Result15 > 0.42
                      ? arg175(arg173 + 0.5, arg174 + 0.5, 6, 0.8, 1.9, v297)
                      : ((v296 % 64) + 64) % 64 == 25 && fn12Result15 > 0.68
                        ? fn56(arg175, arg173, arg174, v288, v289, v290, v291, v297, v295)
                        : ((v296 % 64) + 64) % 64 == 29 &&
                          fn12Result15 > 0.8 &&
                          arg175(arg173 + 0.5, arg174 + 0.5, n38, 2.15, 1.05, v297)
                    : (2 === v295 || 13 === v295) &&
                      (((v296 % 16) + 16) % 16 == 6 && fn12Result15 > 0.55
                        ? arg175(arg173 + 0.5, arg174 + 0.5, 7, 1.05, 0.75)
                        : ((v296 % 32) + 32) % 32 == 26 && fn12Result15 > 0.6
                          ? arg175(arg173 + 0.5, arg174 + 0.5, n42, 0.8, 0.75)
                          : ((v296 % 32) + 32) % 32 == 18 &&
                            fn12Result15 > 0.72 &&
                            arg175(arg173 + 0.5, arg174 + 0.5, n40, 1.05, 1.7, v297)));
        }
        if (1 === v294 && !v292 && !v293) {
          if ("INDUSTRIAL" === fn54Result) {
            let v298 = v290 - n31,
              v299 = v291 - n31,
              floor19 = Math.floor(v288 / n30),
              floor20 = Math.floor(v289 / n30),
              v300 = (function (arg176, arg177) {
                let fn418 = (arg178) =>
                  2 === arg178 || 6 === arg178 || 10 === arg178 || 14 === arg178;
                return 0 === arg177 && fn418(arg176)
                  ? {
                      axis: 0,
                      edge: "N",
                    }
                  : 15 === arg177 && fn418(arg176)
                    ? {
                        axis: 0,
                        edge: "S",
                      }
                    : 0 === arg176 && fn418(arg177)
                      ? {
                          axis: 1,
                          edge: "W",
                        }
                      : 15 === arg176 && fn418(arg177)
                        ? {
                            axis: 1,
                            edge: "E",
                          }
                        : null;
              })(v298, v299);
            if (v300) {
              let v302 = arg173 + 0.5,
                v303 = arg174 + 0.5;
              "N" === v300.edge
                ? (v303 = arg174 + 0.08)
                : "S" === v300.edge
                  ? (v303 = arg174 + 0.92)
                  : "W" === v300.edge
                    ? (v302 = arg173 + 0.08)
                    : "E" === v300.edge && (v302 = arg173 + 0.92);
              let arg175Result = arg175(v302, v303, n43, 1.55, 4.08, v300.axis);
              return void (arg175Result && (arg175Result.industrialPerimeter = true));
            }
            let v301 = (function (arg179, arg180, arg181, arg182, arg183) {
              let v304 = [
                [2, 13],
                [2, 7],
                [12, 3],
                [1, 2],
              ][3 & arg179];
              if (arg180 === v304[0] && arg181 === v304[1]) return 1;
              let v305 = [
                [12, 13],
                [12, 7],
                [12, 5],
                [14, 13],
              ][3 & arg179];
              return hash2(829 * arg182 + 101, 839 * arg183 + 103) > 0.58 &&
                arg180 === v305[0] &&
                arg181 === v305[1]
                ? 2
                : 0;
            })(fn35(floor19, floor20).morph, v298, v299, floor19, floor20);
            if (v301) {
              let v306 = (function (arg184, arg185) {
                  let v307 =
                      arg184 - ((((((recordedOriginX + arg184) | 0) % n30) + n30) % n30) - n31),
                    v308 =
                      arg185 - ((((((recordedOriginZ + arg185) | 0) % n30) + n30) % n30) - n31),
                    n172 = 0;
                  for (let n173 = 0; n173 < 16; n173++)
                    for (let n174 = 0; n174 < 16; n174++) {
                      let v309 = v307 + n174,
                        v310 = v308 + n173;
                      if (v309 < 0 || v310 < 0 || v309 >= worldN || v310 >= worldN) continue;
                      let fn24Result10 = worldIndex(v309, v310);
                      1 === uint8Array17[fn24Result10] &&
                        uint8Array16[fn24Result10] > n172 &&
                        (n172 = uint8Array16[fn24Result10]);
                    }
                  return n172;
                })(arg173, arg174),
                max19 = Math.max(9, v306 + 4.5 + (2 === v301 ? 1.5 : 0)),
                arg175Result2 = arg175(arg173 + 0.5, arg174 + 0.5, n58, max19, 1, 0);
              arg175Result2 && (arg175Result2.factoryRoofHeight = v306);
            } else
              ((3 === v298 && 12 === v299) || (12 === v298 && 3 === v299)) && fn12Result15 > 0.38
                ? arg175(arg173 + 0.5, arg174 + 0.5, n57, 2.25, 1.7, (v288 + v289) & 1)
                : ((v288 % 8) + 8) % 8 == 2 &&
                  ((v289 % 8) + 8) % 8 == 5 &&
                  fn12Result15 > 0.44 &&
                  arg175(arg173 + 0.5, arg174 + 0.5, n56, 1.05, 1.25, 1 & v288);
            return;
          }
          if ("RESIDENTIAL" === fn54Result) {
            let v311 =
              (arg173 > 0 && 1 === uint8Array17[worldIndex(arg173 - 1, arg174)]) ||
              (arg173 < 511 && 1 === uint8Array17[worldIndex(arg173 + 1, arg174)]) ||
              (arg174 > 0 && 1 === uint8Array17[worldIndex(arg173, arg174 - 1)]) ||
              (arg174 < 511 && 1 === uint8Array17[worldIndex(arg173, arg174 + 1)]);
            return void (v311 && (((v288 + v289) % 9) + 9) % 9 == 2 && fn12Result15 > 0.58
              ? arg175(arg173 + 0.5, arg174 + 0.5, n53, 0.92, 1.35, (v288 + v289) & 1)
              : v311 && (((3 * v288 + v289) % 13) + 13) % 13 == 5 && fn12Result15 > 0.69
                ? arg175(arg173 + 0.5, arg174 + 0.5, n43, 1.05, 1.8, 1 & v288)
                : ((v288 % 11) + 11) % 11 == 3 &&
                    ((v289 % 13) + 13) % 13 == 4 &&
                    fn12Result15 > 0.72
                  ? arg175(arg173 + 0.5, arg174 + 0.5, n53, 1, 1.2, 1 & v288)
                  : ((v288 % 17) + 17) % 17 == 6 &&
                    ((v289 % 19) + 19) % 19 == 7 &&
                    fn12Result15 > 0.8 &&
                    arg175(arg173 + 0.5, arg174 + 0.5, 6, 0.8, 1.9, 1 & v288));
          }
          return "TOWER_ESTATE" === fn54Result || "PARKLAND" === fn54Result
            ? void (((v288 % 13) + 13) % 13 == 4 &&
              ((v289 % 11) + 11) % 11 == 3 &&
              fn12Result15 > 0.64
                ? arg175(arg173 + 0.5, arg174 + 0.5, n53, 1, 1.2, 1 & v288)
                : ((v288 % 17) + 17) % 17 == 8 &&
                  ((v289 % 17) + 17) % 17 == 8 &&
                  fn12Result15 > 0.76 &&
                  arg175(arg173 + 0.5, arg174 + 0.5, 6, 0.8, 1.9, 1 & v288))
            : "OLD_TOWN" === fn54Result
              ? void (((v288 % 7) + 7) % 7 == 2 && ((v289 % 7) + 7) % 7 == 2 && fn12Result15 > 0.58
                  ? arg175(arg173 + 0.5, arg174 + 0.5, n41, 1.1, 1.2, 1 & v288)
                  : ((v288 % 13) + 13) % 13 == 5 &&
                    ((v289 % 11) + 11) % 11 == 4 &&
                    fn12Result15 > 0.74 &&
                    arg175(arg173 + 0.5, arg174 + 0.5, n40, 1.05, 1.7, 1 & v289))
              : "COMMERCIAL" === fn54Result || "CORE" === fn54Result
                ? void (((v288 % 7) + 7) % 7 == 2 && ((v289 % 7) + 7) % 7 == 2 && fn12Result15 > 0.7
                    ? arg175(arg173 + 0.5, arg174 + 0.5, n41, 1.1, 1.2, 1 & v288)
                    : ((v288 % 11) + 11) % 11 == 4 &&
                        ((v289 % 9) + 9) % 9 == 5 &&
                        fn12Result15 > 0.76
                      ? arg175(arg173 + 0.5, arg174 + 0.5, n39, 1.8, 1, 1 & v289)
                      : "COMMERCIAL" === fn54Result &&
                        ((v288 % 19) + 19) % 19 == 7 &&
                        ((v289 % 17) + 17) % 17 == 8 &&
                        fn12Result15 > 0.84 &&
                        arg175(arg173 + 0.5, arg174 + 0.5, n54, 1.7, 1.1, 1 & v288))
                : void (((v288 % 7) + 7) % 7 == 2 &&
                  ((v289 % 7) + 7) % 7 == 2 &&
                  fn12Result15 > 0.72
                    ? arg175(arg173 + 0.5, arg174 + 0.5, n41, 1.1, 1.2, 1 & v288)
                    : ((v288 % 11) + 11) % 11 == 4 &&
                      ((v289 % 9) + 9) % 9 == 5 &&
                      fn12Result15 > 0.82 &&
                      arg175(arg173 + 0.5, arg174 + 0.5, n39, 1.8, 1, 1 & v289));
        }
        if (6 === v294) {
          let v312 = v292 ? 1 : 0,
            v313 = v292 ? v289 : v288,
            v314 = v292 ? v290 : v291;
          if (5 !== v314 && 10 !== v314) return;
          return void ("INDUSTRIAL" === fn54Result
            ? ((v313 % 32) + 32) % 32 == 6 && fn12Result15 > 0.55
              ? arg175(arg173 + 0.5, arg174 + 0.5, n56, 1.05, 1.25, v312)
              : ((v313 % 32) + 32) % 32 == 22 && fn12Result15 > 0.7
                ? arg175(arg173 + 0.5, arg174 + 0.5, n42, 0.8, 0.75)
                : ((v313 % 48) + 48) % 48 == 14 &&
                  fn12Result15 > 0.82 &&
                  arg175(arg173 + 0.5, arg174 + 0.5, n43, 1.25, 2.4, v312)
            : "OLD_TOWN" === fn54Result
              ? ((v313 % 24) + 24) % 24 == 5 && fn12Result15 > 0.48
                ? arg175(arg173 + 0.5, arg174 + 0.5, n41, 1.1, 1.2, v312)
                : ((v313 % 32) + 32) % 32 == 15 && fn12Result15 > 0.54
                  ? arg175(arg173 + 0.5, arg174 + 0.5, 6, 0.8, 1.9, v312)
                  : ((v313 % 40) + 40) % 40 == 26 &&
                    fn12Result15 > 0.68 &&
                    arg175(arg173 + 0.5, arg174 + 0.5, n40, 1.05, 1.7, v312)
              : "COMMERCIAL" === fn54Result || "CORE" === fn54Result
                ? ((v313 % 24) + 24) % 24 == 6 && fn12Result15 > 0.44
                  ? arg175(arg173 + 0.5, arg174 + 0.5, n53, 1, 1.2, v312)
                  : ((v313 % 32) + 32) % 32 == 14 && fn12Result15 > 0.58
                    ? arg175(arg173 + 0.5, arg174 + 0.5, n39, 1.8, 1, v312)
                    : ((v313 % 48) + 48) % 48 == 30 &&
                      fn12Result15 > 0.66 &&
                      arg175(arg173 + 0.5, arg174 + 0.5, n54, 1.7, 1.1, v312)
                : "PARKLAND" === fn54Result
                  ? ((v313 % 24) + 24) % 24 == 6 && fn12Result15 > 0.38
                    ? arg175(arg173 + 0.5, arg174 + 0.5, n53, 1, 1.2, v312)
                    : ((v313 % 32) + 32) % 32 == 18 && fn12Result15 > 0.48
                      ? arg175(arg173 + 0.5, arg174 + 0.5, 6, 0.8, 1.9, v312)
                      : ((v313 % 48) + 48) % 48 == 31 &&
                        fn12Result15 > 0.62 &&
                        arg175(arg173 + 0.5, arg174 + 0.5, n40, 1.05, 1.7, v312)
                  : "RESIDENTIAL" === fn54Result || "TOWER_ESTATE" === fn54Result
                    ? ((v313 % 32) + 32) % 32 == 8 && fn12Result15 > 0.5
                      ? arg175(arg173 + 0.5, arg174 + 0.5, 6, 0.8, 1.9, v312)
                      : ((v313 % 32) + 32) % 32 == 24 && fn12Result15 > 0.62
                        ? arg175(arg173 + 0.5, arg174 + 0.5, n53, 1, 1.2, v312)
                        : "RESIDENTIAL" === fn54Result &&
                          ((v313 % 48) + 48) % 48 == 34 &&
                          fn12Result15 > 0.74 &&
                          arg175(arg173 + 0.5, arg174 + 0.5, n40, 1.05, 1.7, v312)
                    : ((v313 % 32) + 32) % 32 == 6 && fn12Result15 > 0.68
                      ? arg175(arg173 + 0.5, arg174 + 0.5, 6, 0.8, 1.9, v312)
                      : ((v313 % 32) + 32) % 32 == 22 && fn12Result15 > 0.8
                        ? arg175(arg173 + 0.5, arg174 + 0.5, n53, 1, 1.2, v312)
                        : ((v313 % 16) + 16) % 16 == 2 &&
                          fn12Result15 > 0.91 &&
                          arg175(arg173 + 0.5, arg174 + 0.5, 8, 0.9, 0.35));
        }
        if (5 === v294) {
          let fn55Result = fn55(v288, v289);
          if (!fn55Result) return;
          let v315 = v290 - n31,
            v316 = v291 - n31,
            fn31Result2 = fn31(fn55Result);
          return void ("FORMAL" === fn31Result2 && 8 === v315 && 8 === v316
            ? arg175(arg173 + 0.5, arg174 + 0.5, n59, 1.9, 3, 0)
            : "PLAZA" === fn31Result2 && 8 === v315 && 8 === v316
              ? arg175(arg173 + 0.5, arg174 + 0.5, n60, 2.45, 2.4, 0)
              : (((v288 + v289) % 17) + 17) % 17 == 4 && fn12Result15 > 0.56
                ? arg175(arg173 + 0.5, arg174 + 0.5, 6, 0.8, 1.9, 1 & v288)
                : ("FORMAL" === fn31Result2 || "PLAZA" === fn31Result2) &&
                  (((3 * v288 + v289) % 19) + 19) % 19 == 7 &&
                  fn12Result15 > 0.62 &&
                  arg175(arg173 + 0.5, arg174 + 0.5, n53, 1, 1.2, 1 & v288));
        }
        if (3 === v294) {
          let fn55Result2 = fn55(v288, v289);
          if (fn55Result2) {
            let fn31Result3 = fn31(fn55Result2);
            return void (("GROVE" === fn31Result3 &&
              (((v288 + v289) % 23) + 23) % 23 == 3 &&
              fn12Result15 > 0.64) ||
            ("POND" === fn31Result3 &&
              (((5 * v288 + v289) % 29) + 29) % 29 == 11 &&
              fn12Result15 > 0.72)
              ? arg175(arg173 + 0.5, arg174 + 0.5, 6, 0.8, 1.9, 1 & v288)
              : ("FORMAL" === fn31Result3 || "PLAZA" === fn31Result3) &&
                (((v288 + v289) % 19) + 19) % 19 == 5 &&
                fn12Result15 > 0.74 &&
                arg175(arg173 + 0.5, arg174 + 0.5, n53, 1, 1.2, 1 & v288));
          }
          if (
            "RESIDENTIAL" === fn54Result ||
            "TOWER_ESTATE" === fn54Result ||
            "PARKLAND" === fn54Result
          )
            return void ((((v288 + v289) % 17) + 17) % 17 == 0 && fn12Result15 > 0.7
              ? arg175(arg173 + 0.5, arg174 + 0.5, 6, 0.8, 1.9, 1 & v288)
              : (((3 * v288 + v289) % 23) + 23) % 23 == 7 &&
                fn12Result15 > 0.78 &&
                arg175(arg173 + 0.5, arg174 + 0.5, n53, 1, 1.2, 1 & v288));
          (((v288 + v289) % 13) + 13) % 13 == 0 && fn12Result15 > 0.77
            ? arg175(arg173 + 0.5, arg174 + 0.5, 6, 0.8, 1.9, 1 & v288)
            : (v288 % 16 == 0 || v289 % 16 == 0) &&
              fn12Result15 > 0.91 &&
              arg175(arg173 + 0.5, arg174 + 0.5, n43, 1.25, 2.4, v288 % 16 == 0 ? 1 : 0);
        }
      }
    } else {
      if (v292 && v293)
        return void ((2 !== v290 && 13 !== v290) ||
        (2 !== v291 && 13 !== v291) ||
        !fn20(v288 - v290, v289 - v291)
          ? (3 === v290 || 12 === v290) &&
            (3 === v291 || 12 === v291) &&
            fn12Result15 > 0.35 &&
            arg175(arg173 + 0.5, arg174 + 0.5, 8, 0.9, 0.35)
          : fn79(
              arg175(arg173 + 0.5, arg174 + 0.5, n37, 2.8, 0.8, 2 === v290 ? 1 : 0),
              v288,
              v289,
              v290,
              v291,
            ));
      if (1 === v294 && (v292 || v293)) {
        let v317 = v292 ? v290 : v291,
          v318 = v292 ? v289 : v288,
          v319 = v292 ? 1 : 0;
        return void (1 === v317 || 14 === v317
          ? ((v318 % 32) + 32) % 32 == 22 && fn12Result15 > 0.42
            ? arg175(arg173 + 0.5, arg174 + 0.5, 6, 0.8, 1.9, v319)
            : ((v318 % 64) + 64) % 64 == 25 && fn12Result15 > 0.68
              ? fn56(arg175, arg173, arg174, v288, v289, v290, v291, v319, v317)
              : ((v318 % 64) + 64) % 64 == 29 &&
                fn12Result15 > 0.8 &&
                !fn18(v288 + 0.5, v289 + 0.5) &&
                arg175(arg173 + 0.5, arg174 + 0.5, n38, 2.15, 1.05, v319)
          : (2 === v317 || 13 === v317) &&
            (((v318 % 16) + 16) % 16 == 6 && fn12Result15 > 0.55
              ? arg175(arg173 + 0.5, arg174 + 0.5, 7, 1.05, 0.75)
              : ((v318 % 32) + 32) % 32 == 26 && fn12Result15 > 0.6
                ? arg175(arg173 + 0.5, arg174 + 0.5, n42, 0.8, 0.75)
                : ((v318 % 32) + 32) % 32 == 18 &&
                  fn12Result15 > 0.72 &&
                  arg175(arg173 + 0.5, arg174 + 0.5, n40, 1.05, 1.7, v319)));
      }
      if (1 === v294 && !v292 && !v293)
        return void (((v288 % 7) + 7) % 7 == 2 && ((v289 % 7) + 7) % 7 == 2 && fn12Result15 > 0.72
          ? arg175(arg173 + 0.5, arg174 + 0.5, n41, 1.1, 1.2, 1 & v288)
          : ((v288 % 11) + 11) % 11 == 4 &&
            ((v289 % 9) + 9) % 9 == 5 &&
            fn12Result15 > 0.82 &&
            arg175(arg173 + 0.5, arg174 + 0.5, n39, 1.8, 1, 1 & v289));
      if (6 === v294) {
        let v320 = v292 ? 1 : 0,
          v321 = v292 ? v289 : v288;
        return void (((v321 % 32) + 32) % 32 == 6 && fn12Result15 > 0.68
          ? arg175(arg173 + 0.5, arg174 + 0.5, 6, 0.8, 1.9, v320)
          : ((v321 % 32) + 32) % 32 == 22 && fn12Result15 > 0.8
            ? arg175(arg173 + 0.5, arg174 + 0.5, n53, 1, 1.2, v320)
            : ((v321 % 16) + 16) % 16 == 2 &&
              fn12Result15 > 0.91 &&
              arg175(arg173 + 0.5, arg174 + 0.5, 8, 0.9, 0.35));
      }
      3 === v294 &&
        ((((v288 + v289) % 13) + 13) % 13 == 0 && fn12Result15 > 0.77
          ? arg175(arg173 + 0.5, arg174 + 0.5, 6, 0.8, 1.9, 1 & v288)
          : (v288 % 16 == 0 || v289 % 16 == 0) &&
            fn12Result15 > 0.91 &&
            arg175(arg173 + 0.5, arg174 + 0.5, n43, 1.25, 2.4, v288 % 16 == 0 ? 1 : 0));
    }
  }
  function fn58() {
    if (!fn22(2)) return;
    let { x0: v322, x1: v323, z0: v324, z1: v325, cx: v326, cz: v327 } = obj2,
      fn419 = (arg186, arg187, arg188, arg189, arg190 = 1, arg191 = 0) => {
        arg186 >= 0 &&
          arg187 >= 0 &&
          arg186 < worldN &&
          arg187 < worldN &&
          fn50(arg186 + 0.5, arg187 + 0.5, arg188, arg189, arg190, arg191);
      };
    for (let [v328, v329, v330] of [
      [v326 - 11, v327 - 9, 0],
      [v326 - 4, v327 - 10, 0],
      [v326 + 4, v327 - 10, 0],
      [v326 + 11, v327 - 9, 0],
      [v326 - 11, v327 + 9, 0],
      [v326 - 4, v327 + 10, 0],
      [v326 + 4, v327 + 10, 0],
      [v326 + 11, v327 + 9, 0],
      [v326 - 13, v327 - 5, 1],
      [v326 - 13, v327 + 5, 1],
      [v326 + 13, v327 - 5, 1],
      [v326 + 13, v327 + 5, 1],
    ])
      fn419(v328, v329, 6, 0.8, 2, v330);
    for (let [v331, v332] of [
      [v322 + 3, v327 - 2],
      [v322 + 3, v327 + 2],
      [v323 - 4, v327 - 2],
      [v323 - 4, v327 + 2],
      [v326 - 14, v327 - 10],
      [v326 + 14, v327 - 10],
      [v326 - 14, v327 + 10],
      [v326 + 14, v327 + 10],
    ])
      fn419(v331, v332, 3, 3.2);
    if (obj3.x >= 0 && obj3.z >= 0 && obj3.x < worldN && obj3.z < worldN) {
      let fn50Result2 = fn50(obj3.x, obj3.z, n55, obj3.h, obj3.w, 1);
      ((fn50Result2.d = obj3.d),
        (fn50Result2.volume = true),
        (fn50Result2.landmark = "THE SIGNAL KEEPER"));
    }
  }
  function fn59() {
    ((arr2.length = 0), (arr3.length = 0));
    for (let v333 of from3) v333.length = 0;
    for (let n175 = 0; n175 < worldN; n175++)
      for (let n176 = 0; n176 < worldN; n176++) {
        let fn24Result11 = worldIndex(n175, n176);
        (2 === uint8Array17[fn24Result11] || 3 === uint8Array17[fn24Result11]) &&
          fn50(n175 + 0.5, n176 + 0.5, uint8Array17[fn24Result11], uint8Array16[fn24Result11]);
      }
    for (let n177 = 2; n177 < 510; n177++)
      for (let n178 = 2; n178 < 510; n178++) fn57(n177, n178, fn50);
    (fn58(), fn53());
  }
  fn59();
  var arr4 = [40, 55, 70, 160, 190, 220, 300, 340],
    pedestrians = [],
    n61 = 1.5,
    n62 = 14.5,
    arr6 = [-0.72, -0.24, 0.24, 0.72];
  function fn60(arg192, arg193, arg194) {
    return (
      (arg192.track = (function (arg195, arg196) {
        return arg196 > 0 ? arg195.trackSeed : 2 + arg195.trackSeed;
      })(arg192, arg194)),
      (arg192.sideBase = arg193),
      (arg192.side = arg193 + arr6[arg192.track]),
      arg192.side
    );
  }
  function makePedestrian(arg197 = 0) {
    let v334 = Math.random() < 0.5,
      v335 = 1 + ((14 * Math.random()) | 0),
      v336 = Math.random() < 0.5 ? n61 : n62,
      v337 = Math.random() < 0.5 ? 1 : -1,
      v338 = 1 & arg197,
      v339 = v337 > 0 ? v338 : 2 + v338,
      v340 = v336 + arr6[v339],
      v341 = 2 + 508 * Math.random(),
      obj31 = {
        x: v334 ? v341 : 32 * v335 + v340,
        z: v334 ? 32 * v335 + v340 : v341,
        hx: v334 ? v337 : 0,
        hz: v334 ? 0 : v337,
        side: v340,
        sideBase: v336,
        track: v339,
        trackSeed: v338,
        speed: 1.6 + 0.9 * Math.random(),
        phase: 6.28 * Math.random(),
        color: arr4[(Math.random() * arr4.length) | 0],
        body: "oH#0&%8"[(7 * Math.random()) | 0],
        kind: 4,
        _depth: 0,
        _col: 0,
      };
    return fn23(obj31.x, obj31.z) ? makePedestrian(arg197) : obj31;
  }
  for (let n179 = 0; n179 < 420; n179++) pedestrians.push(makePedestrian(n179));
  function fn62(arg198, arg199, arg200, arg201) {
    for (let n180 = 0; n180 < 12; n180++) {
      let v342 = hash2(41 * arg199 + (n67 = fn90()), 73 * n180 + 17) < 0.5,
        v343 = hash2(59 * arg199 + 7 * n180, n67 + 31) < 0.5 ? 1 : -1,
        v344 = (2 * hash2(83 * arg199 + 19 * n180, n67 + 47) - 1) * n11,
        v345 = (2 * hash2(97 * arg199 + 23 * n180, n67 + 61) - 1) * n11,
        v346 = Math.round((v342 ? arg201 + v345 : arg200 + v345) / n30) * n30,
        v347 = hash2(109 * arg199 + n180, n67 + 71) < 0.5 ? n61 : n62;
      if (
        ((arg198.trackSeed = 1 & arg199),
        fn60(arg198, v347, v343),
        (arg198.x = v342
          ? Math.max(2, Math.min(510, arg200 + v344))
          : Math.max(2, Math.min(510, v346 + arg198.side))),
        (arg198.z = v342
          ? Math.max(2, Math.min(510, v346 + arg198.side))
          : Math.max(2, Math.min(510, arg201 + v344))),
        !fn23(arg198.x, arg198.z, 1))
      )
        return (
          (arg198.hx = v342 ? v343 : 0),
          (arg198.hz = v342 ? 0 : v343),
          (arg198.crossing = false),
          (arg198.waitingCross = false),
          (arg198._pace = 1),
          (arg198.speed = 1.55 + 1 * hash2(127 * arg199 + n180, n67 + 89)),
          (arg198.phase = 6.28 * hash2(149 * arg199 + n180, n67 + 101)),
          (arg198.color = arr4[(hash2(163 * arg199 + n180, n67 + 107) * arr4.length) | 0]),
          (arg198.body = "oH#0&%8"[(7 * hash2(181 * arg199 + n180, n67 + 113)) | 0]),
          arg198
        );
    }
    return arg198;
  }
  function fn63(arg202, arg203, arg204, arg205) {
    if (arg203) {
      let hx = arg202.hx;
      ((arg202.hx = 0), (arg202.hz = arg205 ? -hx : hx));
      let fn60Result = fn60(arg202, hx > 0 ? n61 : n62, arg202.hz);
      arg202.x = arg204 + fn60Result;
    } else {
      let hz = arg202.hz;
      ((arg202.hz = 0), (arg202.hx = arg205 ? -hz : hz));
      let fn60Result2 = fn60(arg202, hz > 0 ? n61 : n62, arg202.hx);
      arg202.z = arg204 + fn60Result2;
    }
  }
  function fn64(arg206) {
    let v348 = arg206 % n30;
    return (
      v348 < 0 && (v348 += n30),
      (v348 >= 0.5 && v348 <= 3.5) || (v348 >= 12.5 && v348 <= 15.5)
    );
  }
  function fn65(arg207) {
    return !!arg207.crossing || (0 !== arg207.hx ? fn64(arg207.z) : fn64(arg207.x));
  }
  function fn66(arg208 = pedestrians) {
    let map24 = new Map();
    for (let n181 = 0; n181 < arg208.length; n181++) {
      let v349 = arg208[n181];
      if (((v349._pace = 1), v349.crossing)) continue;
      let v350 = 0 !== v349.hx,
        v351 = v350 ? v349.hx : v349.hz,
        v352 = (v350 ? "X" : "Z") + "|" + (v350 ? v349.z : v349.x).toFixed(2) + "|" + v351,
        get3 = map24.get(v352);
      (get3 || ((get3 = []), map24.set(v352, get3)), get3.push(v349));
    }
    for (let v353 of map24.values()) {
      let v354 = 0 !== v353[0].hx,
        v355 = v354 ? v353[0].hx : v353[0].hz;
      v353.sort(
        (arg209, arg210) => ((v354 ? arg209.x : arg209.z) - (v354 ? arg210.x : arg210.z)) * v355,
      );
      for (let n182 = 0; n182 < v353.length - 1; n182++) {
        let v356 = v353[n182],
          v357 = v353[n182 + 1],
          v358 = (v354 ? v357.x - v356.x : v357.z - v356.z) * v355;
        v358 > 0 && v358 < 1.35 && (v356._pace = Math.max(0.18, v358 / 1.35));
      }
    }
  }
  function fn67(arg211, arg212) {
    return fn20(arg211, arg212);
  }
  function fn68(arg213) {
    return (
      !!arg213.waitingCross &&
      (fn67(arg213.crossSignalWorldX, arg213.crossSignalWorldZ)
        ? ((function (arg214, arg215, arg216) {
            return !fn20(arg215, arg216) || "red" === fn78(arg215, arg216, arg214);
          })(arg213.crossSignalAxis, arg213.crossSignalWorldX, arg213.crossSignalWorldZ) &&
            ((arg213.waitingCross = false), (arg213.crossing = true), (arg213.crossT = 0)),
          true)
        : ((arg213.waitingCross = false), false))
    );
  }
  function stepPedestrian(ped, dt) {
    ped.phase += dt * ped.speed * 3;
    let v359 = 0 !== ped.hx;
    if (ped.waitingCross && fn68(ped)) return;
    if (ped.crossing) {
      ped.crossT += dt;
      let min6 = Math.min(1, ped.crossT / ped.crossDuration),
        v365 = ped.crossFrom + (ped.crossTo - ped.crossFrom) * min6;
      return fn23(v359 ? ped.x : ped.crossBase + v365, v359 ? ped.crossBase + v365 : ped.z, 0.1)
        ? ((ped.crossing = false), (ped.hx *= -1), void (ped.hz *= -1))
        : (v359 ? (ped.z = ped.crossBase + v365) : (ped.x = ped.crossBase + v365),
          void (
            min6 >= 1 &&
            ((ped.crossing = false),
            (ped.sideBase = ped.crossDestinationBase),
            (ped.side = ped.crossTo))
          ));
    }
    let v360 = v359 ? ped.x : ped.z,
      v361 = v360 % 32;
    v361 < 0 && (v361 += 32);
    let v362 =
        undefined === ped._pace
          ? (function (arg219, arg220 = pedestrians) {
              if (arg219.crossing) return 1;
              let v366 = 0 !== arg219.hx,
                v367 = v366 ? arg219.hx : arg219.hz;
              for (let n183 = 0; n183 < arg220.length; n183++) {
                let v368 = arg220[n183];
                if (v368 === arg219 || v368.crossing || (0 !== v368.hx) !== v366) continue;
                if (v367 * (v366 ? v368.hx : v368.hz) <= 0) continue;
                let abs = Math.abs((v366 ? arg219.z : arg219.x) - (v366 ? v368.z : v368.x)),
                  v369 = (v366 ? v368.x - arg219.x : v368.z - arg219.z) * v367;
                if (abs < 0.18 && v369 > 0 && v369 < 1.35) return Math.max(0.18, v369 / 1.35);
              }
              return 1;
            })(ped)
          : ped._pace,
      v363 = v360 + (v359 ? ped.hx : ped.hz) * ped.speed * v362 * dt;
    if (fn23(v359 ? v363 : ped.x, v359 ? ped.z : v363, 0.1)) {
      ((ped.hx *= -1), (ped.hz *= -1));
      let fn60Result3 = fn60(ped, ped.sideBase, ped.hx || ped.hz);
      return void (v359
        ? (ped.z = Math.floor(ped.z / n30) * n30 + fn60Result3)
        : (ped.x = Math.floor(ped.x / n30) * n30 + fn60Result3));
    }
    let v364 = v363 % 32;
    if ((v364 < 0 && (v364 += 32), v361 >= 16 && v364 < 16)) {
      let v370 =
          "function" == typeof window.__CCTV_DECISION__
            ? window.__CCTV_DECISION__(ped, v363)
            : Math.random(),
        v371 = Math.floor(v363 / n30) * n30;
      if (!(v370 < 0.45))
        if (v370 < 0.63) fn63(ped, v359, v371, true);
        else if (v370 < 0.81) fn63(ped, v359, v371, false);
        else if (v370 < 0.92) {
          if (
            (function (arg221, arg222, arg223) {
              let v372 = Math.floor((arg222 ? arg221.z : arg221.x) / n30) * n30,
                v373 = recordedOriginX + (arg222 ? arg223 : v372),
                v374 = recordedOriginZ + (arg222 ? v372 : arg223);
              if (!fn67(v373, v374)) return false;
              ((arg221.crossT = 0), (arg221.crossBase = v372), (arg221.crossFrom = arg221.side));
              let v375 = arg221.sideBase === n61 ? n62 : n61;
              return (
                (arg221.crossTo = v375 + arr6[arg221.track]),
                (arg221.crossDestinationBase = v375),
                (arg221.crossDuration = Math.abs(arg221.crossTo - arg221.crossFrom) / arg221.speed),
                (arg221.crossSignalAxis = arg222 ? "X" : "Z"),
                (arg221.crossSignalWorldX = v373),
                (arg221.crossSignalWorldZ = v374),
                (arg221.waitingCross = true),
                (arg221.crossing = false),
                true
              );
            })(ped, v359, v371)
          )
            return void fn68(ped);
        } else {
          ((ped.hx *= -1), (ped.hz *= -1));
          let fn60Result4 = fn60(ped, ped.sideBase, ped.hx || ped.hz);
          v359
            ? (ped.z = Math.floor(ped.z / n30) * n30 + fn60Result4)
            : (ped.x = Math.floor(ped.x / n30) * n30 + fn60Result4);
        }
    }
    if (
      ((ped.x += ped.hx * ped.speed * v362 * dt),
      (ped.z += ped.hz * ped.speed * v362 * dt),
      ped.x < 2 || ped.z < 2 || ped.x > 510 || ped.z > 510)
    ) {
      ((ped.x = Math.max(2, Math.min(510, ped.x))),
        (ped.z = Math.max(2, Math.min(510, ped.z))),
        (ped.hx *= -1),
        (ped.hz *= -1));
      let fn60Result5 = fn60(ped, ped.sideBase, ped.hx || ped.hz);
      0 !== ped.hx
        ? (ped.z = Math.floor(ped.z / n30) * n30 + fn60Result5)
        : (ped.x = Math.floor(ped.x / n30) * n30 + fn60Result5);
    }
  }
  var freeze13 = Object.freeze({
      compact: {
        id: "compact",
        label: "HATCH",
        width: 1.78,
        length: 3.85,
        height: 1.13,
        roofInset: 0.18,
        speed: 1,
        weight: 0.25,
        glyph: "=",
      },
      saloon: {
        id: "saloon",
        label: "SALOON",
        width: 1.99,
        length: 4.85,
        height: 1.22,
        roofInset: 0.19,
        speed: 1,
        weight: 0.21,
        glyph: "=",
      },
      suv: {
        id: "suv",
        label: "SUV",
        width: 2.12,
        length: 5,
        height: 1.47,
        roofInset: 0.11,
        speed: 0.92,
        weight: 0.14,
        glyph: "#",
      },
      van: {
        id: "van",
        label: "VAN",
        width: 2.13,
        length: 5.1,
        height: 1.58,
        roofInset: 0.06,
        speed: 0.84,
        weight: 0.1,
        glyph: "#",
      },
      sport: {
        id: "sport",
        label: "COUPE",
        width: 2.01,
        length: 4.55,
        height: 1,
        roofInset: 0.27,
        speed: 1.1,
        weight: 0.08,
        glyph: "-",
      },
      motorbike: {
        id: "motorbike",
        label: "MOTORBIKE",
        width: 0.64,
        length: 2.05,
        height: 1.36,
        roofInset: 0.35,
        speed: 1.12,
        weight: 0.08,
        glyph: "o",
      },
      taxi: {
        id: "taxi",
        label: "TAXI",
        width: 2,
        length: 4.82,
        height: 1.25,
        roofInset: 0.18,
        speed: 0.96,
        weight: 0.06,
        glyph: "T",
      },
      cyclist: {
        id: "cyclist",
        label: "CYCLIST",
        width: 0.5,
        length: 1.68,
        height: 1.42,
        roofInset: 0.35,
        speed: 0.58,
        weight: 0.08,
        glyph: "o",
      },
    }),
    values = Object.values(freeze13);
  function fn70(arg224) {
    let max20 = Math.max(0, Math.min(0.999999, arg224));
    for (let v376 of values) if ((max20 -= v376.weight) < 0) return v376.id;
    return "compact";
  }
  function carDims(car) {
    return freeze13[car.vehicleType] || freeze13.compact;
  }
  function fn72(arg226, arg227) {
    return "taxi" === arg226 ? 48 : arg227;
  }
  function fn73(arg228, arg229, arg230, arg231) {
    let v377 = arg228.hx || 0,
      v378 = arg228.hz || 0,
      v379 = -v378,
      v380 = v377;
    return (
      Math.abs(v377 * arg230 + v378 * arg231) * arg229.length +
      Math.abs(v379 * arg230 + v380 * arg231) * arg229.width
    );
  }
  function fn74(arg232, arg233, arg234) {
    let v381 = Math.hypot(arg233, arg234) || 1,
      v382 = arg233 / v381,
      v383 = arg234 / v381,
      v384 = arg232.hx || 0,
      v385 = arg232.hz || 0,
      v386 = v384 * v382 + v385 * v383,
      abs2 = Math.abs(v386);
    return {
      facing: v386,
      front: v386 > 0,
      sideSign: v384 * v383 - v385 * v382 >= 0 ? 1 : -1,
      endness: abs2,
      mode: abs2 > 0.86 ? "end" : abs2 < 0.2 ? "side" : "three",
    };
  }
  function fn75(arg235, arg236) {
    return "X" === arg235 ? (arg236 >= 0 ? 10.5 : 5.5) : arg236 >= 0 ? 5.5 : 10.5;
  }
  function fn76(arg237, arg238, arg239) {
    return "cyclist" === arg237
      ? (function (arg240, arg241) {
          return "X" === arg240 ? (arg241 >= 0 ? 11.85 : 4.15) : arg241 >= 0 ? 4.15 : 11.85;
        })(arg238, arg239)
      : fn75(arg238, arg239);
  }
  function fn77(arg242, arg243, arg244) {
    return fn76(arg242 && arg242.vehicleType, arg243, arg244);
  }
  var n63 = 8,
    n64 = 1.8,
    n65 = 1,
    v38 = 2 * (n63 + n64 + n65),
    n66 = 13.5;
  function fn78(arg245, arg246, arg247) {
    return (function (arg248, arg249) {
      let v387 =
        (n70 +
          (function (arg250, arg251) {
            let floor21 = Math.floor(arg250 / n30),
              floor22 = Math.floor(arg251 / n30);
            return (
              ((((floor21 + 2 * floor22) % 5) + 5) % 5) * 0.62 +
              1.35 * hash2(313 * floor21 + 1709, 337 * floor22 + 1901)
            );
          })(arg248, arg249)) %
        v38;
      return (
        v387 < 0 && (v387 += v38),
        v387 < n63
          ? {
              X: "green",
              Z: "red",
              phase: "X_GREEN",
            }
          : ((v387 -= n63),
            v387 < n64
              ? {
                  X: "amber",
                  Z: "red",
                  phase: "X_AMBER",
                }
              : ((v387 -= n64),
                v387 < n65
                  ? {
                      X: "red",
                      Z: "red",
                      phase: "ALL_RED_XZ",
                    }
                  : ((v387 -= n65),
                    v387 < n63
                      ? {
                          X: "red",
                          Z: "green",
                          phase: "Z_GREEN",
                        }
                      : ((v387 -= n63),
                        v387 < n64
                          ? {
                              X: "red",
                              Z: "amber",
                              phase: "Z_AMBER",
                            }
                          : {
                              X: "red",
                              Z: "red",
                              phase: "ALL_RED_ZX",
                            }))))
      );
    })(arg245, arg246)[arg247];
  }
  function fn79(arg252, arg253, arg254, arg255, arg256) {
    return (
      arg252 &&
      ((arg252.signalAxis = arg255 < 8 == arg256 < 8 ? "Z" : "X"),
      (arg252.axis = "X" === arg252.signalAxis ? 1 : 0),
      (arg252.signalFacingSign =
        "X" === arg252.signalAxis ? (arg255 < 8 ? -1 : 1) : arg256 < 8 ? -1 : 1),
      (arg252.signalWorldX = arg253 - arg255),
      (arg252.signalWorldZ = arg254 - arg256),
      (arg252.trafficSignal = true),
      arg252)
    );
  }
  function fn80(arg257) {
    let v388 = (function (arg258) {
        let v389,
          v390,
          v391 = arg258.hx ? "X" : "Z",
          v392 = arg258.hx || arg258.hz,
          v393 = "X" === v391 ? arg258.x : arg258.z,
          v394 = (function (arg259, arg260, arg261) {
            let v397 = ((arg260 % n30) + n30) % n30,
              v398 = arg260 - v397,
              v399 = arg261 > 0 ? v398 + n30 : v397 >= n31 ? v398 : v398 - n30,
              v400 = "X" === arg259 ? "Z" : "X",
              v401 = "X" === arg259 ? recordedOriginX : recordedOriginZ;
            for (let n184 = 0; n184 < 10; n184++, v399 += arg261 * n30)
              if (fn19(v400, v401 + v399)) return v399;
            return v399;
          })(v391, v393, v392),
          v395 = v392 > 0 ? v394 : v394 + n31,
          v396 = v392 > 0 ? v395 - v393 - 0.72 : v393 - v395 - 0.72;
        return (
          "X" === v391
            ? ((v389 = v394), (v390 = Math.floor(arg258.z / n30) * n30))
            : ((v389 = Math.floor(arg258.x / n30) * n30), (v390 = v394)),
          {
            axis: v391,
            dir: v392,
            distance: v396,
            jxLocal: v389,
            jzLocal: v390,
            absX: recordedOriginX + v389,
            absZ: recordedOriginZ + v390,
          }
        );
      })(arg257),
      fn78Result = fn78(v388.absX, v388.absZ, v388.axis);
    return {
      approach: v388,
      state: fn78Result,
      stop: "red" === fn78Result || ("amber" === fn78Result && v388.distance > 4.2),
    };
  }
  function fn81(arg262, arg263, arg264 = cars) {
    if (arg263.distance < -0.05) return true;
    let v402 = (function (arg265, arg266) {
        let v406,
          v407,
          axis = arg266.axis,
          dir = arg266.dir,
          fn94Result = fn94(arg265, arg266.absX, arg266.absZ),
          v408 = axis,
          v409 = dir;
        return (
          "straight" === fn94Result
            ? "X" === v408
              ? ((v406 = arg266.jzLocal + fn77(arg265, "X", dir)),
                (v407 = dir > 0 ? arg266.jxLocal + n31 : arg266.jxLocal))
              : ((v406 = arg266.jxLocal + fn77(arg265, "Z", dir)),
                (v407 = dir > 0 ? arg266.jzLocal + n31 : arg266.jzLocal))
            : "X" === axis
              ? ((v408 = "Z"),
                (v409 = "right" === fn94Result ? dir : -dir),
                (v406 = arg266.jxLocal + fn77(arg265, "Z", v409)),
                (v407 = v409 > 0 ? arg266.jzLocal + n31 : arg266.jzLocal))
              : ((v408 = "X"),
                (v409 = "right" === fn94Result ? -dir : dir),
                (v406 = arg266.jzLocal + fn77(arg265, "X", v409)),
                (v407 = v409 > 0 ? arg266.jxLocal + n31 : arg266.jxLocal)),
          {
            axis: v408,
            dir: v409,
            fixed: v406,
            exitBoundary: v407,
            intent: fn94Result,
          }
        );
      })(arg262, arg263),
      fn71Result = carDims(arg262),
      v403 = "cyclist" === arg262.vehicleType,
      v404 = fn71Result.length + 1.35,
      v405 = 1 / 0;
    for (let v410 of arg264) {
      if (v410 === arg262 || ("cyclist" === v410.vehicleType) !== v403) continue;
      let fn71Result2 = carDims(v410),
        v411 = v410.hx ? "X" : "Z",
        v412 = v410.hx || v410.hz;
      if (v411 !== v402.axis || Math.sign(v412) !== Math.sign(v402.dir)) continue;
      let v413 = "X" === v411 ? v410.z : v410.x;
      if (Math.floor(v413 / n30) !== Math.floor(v402.fixed / n30)) continue;
      let v414 =
        (("X" === v411 ? v410.x : v410.z) - v402.exitBoundary) * v402.dir -
        0.5 * fn71Result2.length;
      v414 >= -fn71Result2.length && v414 < v405 && (v405 = v414);
    }
    return v405 >= v404;
  }
  function fn82(arg267, arg268 = cars) {
    let fn80Result = fn80(arg267),
      distance = fn80Result.approach.distance,
      v415 = distance >= -0.05 && distance <= n66 && !fn81(arg267, fn80Result.approach, arg268);
    ((arg267._signalState = fn80Result.state),
      (arg267._signalDistance = distance),
      (arg267._boxBlocked = v415));
    let v416 = fn80Result.stop || v415,
      v417 = v415 ? n66 : 11.5;
    if (!v416 || distance > v417 || distance < -0.35) return 1;
    if (distance <= 0.22) return 0;
    let max21 = Math.max(0, Math.min(1, (distance - 0.22) / (v417 - 0.22)));
    return Math.pow(max21, 0.62);
  }
  function fn83(arg269) {
    return (
      arg269.hx
        ? (arg269.z = Math.floor(arg269.z / n30) * n30 + fn77(arg269, "X", arg269.hx))
        : arg269.hz && (arg269.x = Math.floor(arg269.x / n30) * n30 + fn77(arg269, "Z", arg269.hz)),
      arg269
    );
  }
  function fn84(arg270, arg271) {
    if (!!arg270.hx != !!arg271.hx) return false;
    let v418 = arg270.hx || arg270.hz,
      v419 = arg271.hx || arg271.hz;
    if (Math.sign(v418) !== Math.sign(v419)) return false;
    let v420 = arg270.hx ? arg270.z : arg270.x,
      v421 = arg271.hx ? arg271.z : arg271.x;
    return Math.floor(v420 / n30) === Math.floor(v421 / n30);
  }
  function fn85(arg272, arg273 = 5.2) {
    let v422 = arg272.hx ? arg272.x : arg272.z,
      v423 = 0.5 * carDims(arg272).length;
    for (let v424 of cars) {
      if (v424 === arg272 || !fn84(arg272, v424)) continue;
      let v425 = v424.hx ? v424.x : v424.z;
      if (Math.abs(v422 - v425) < arg273 + v423 + 0.5 * carDims(v424).length) return false;
    }
    return true;
  }
  function fn86(arg274 = cars) {
    let map25 = new Map();
    for (let v426 of arg274) {
      ((v426._trafficTarget = fn82(v426, arg274)), (v426._cyclistFiltering = false));
      let v427 = v426.hx || v426.hz,
        v428 = v426.hx ? v426.z : v426.x,
        v429 = v426.hx ? v426.x : v426.z,
        v430 = (v426.hx ? "X" : "Z") + ":" + Math.floor(v428 / n30) + ":" + Math.sign(v427),
        get4 = map25.get(v430);
      get4 ||
        ((get4 = {
          motors: [],
          bikes: [],
        }),
        map25.set(v430, get4));
      let obj32 = {
        c: v426,
        p: v429 * Math.sign(v427),
      };
      ("cyclist" === v426.vehicleType ? get4.bikes : get4.motors).push(obj32);
    }
    function fn420(arg275) {
      arg275.sort((arg276, arg277) => arg276.p - arg277.p);
      for (let n185 = 0; n185 < arg275.length - 1; n185++) {
        let v431 = arg275[n185],
          v432 = arg275[n185 + 1],
          fn71Result3 = carDims(v431.c),
          fn71Result4 = carDims(v432.c),
          v433 = v432.p - v431.p - 0.5 * (fn71Result3.length + fn71Result4.length),
          n186 = 1;
        (v433 < 0.65
          ? (n186 = 0)
          : v433 < 2.2
            ? (n186 = ((v433 - 0.65) / 1.55) * 0.42)
            : v433 < 4.8 && (n186 = 0.42 + ((v433 - 2.2) / 2.6) * 0.58),
          (v431.c._trafficTarget = Math.min(v431.c._trafficTarget, n186)));
      }
    }
    for (let v434 of map25.values()) {
      if ((fn420(v434.motors), fn420(v434.bikes), !v434.bikes.length || !v434.motors.length))
        continue;
      (v434.motors.sort((arg278, arg279) => arg278.p - arg279.p),
        v434.bikes.sort((arg280, arg281) => arg280.p - arg281.p));
      let n187 = 0;
      for (let v435 of v434.bikes) {
        for (; n187 < v434.motors.length && v434.motors[n187].p <= v435.p;) n187++;
        if (n187 >= v434.motors.length) break;
        let v436 = v434.motors[n187],
          fn71Result5 = carDims(v435.c),
          fn71Result6 = carDims(v436.c),
          v437 = v436.p - v435.p - 0.5 * (fn71Result5.length + fn71Result6.length);
        if (
          (Number.isFinite(v436.c._trafficTarget) ? v436.c._trafficTarget : 1) < 0.62 ||
          (Number.isFinite(v436.c._trafficPace) ? v436.c._trafficPace : 1) < 0.62
        ) {
          v435.c._cyclistFiltering = true;
          continue;
        }
        let n188 = 1;
        (v437 < 0.45
          ? (n188 = 0)
          : v437 < 1.7
            ? (n188 = ((v437 - 0.45) / 1.25) * 0.55)
            : v437 < 3.2 && (n188 = 0.55 + ((v437 - 1.7) / 1.5) * 0.45),
          (v435.c._trafficTarget = Math.min(v435.c._trafficTarget, n188)));
      }
    }
  }
  function fn87(arg282, arg283 = cars) {
    let min7 = Math.min(1, 4.5 * Math.max(0, arg282));
    for (let v438 of arg283)
      (Number.isFinite(v438._trafficTarget) || (v438._trafficTarget = 1),
        Number.isFinite(v438._trafficPace) || (v438._trafficPace = 1),
        (v438._trafficPace += (v438._trafficTarget - v438._trafficPace) * min7));
  }
  function fn88(arg284, arg285 = cars) {
    (fn86(arg285), fn87(arg284, arg285));
  }
  var cars = [];
  function fn89(arg286 = 0) {
    let fn70Result = fn70(hash2(409 * arg286 + 71, 613 * arg286 + 97)),
      v439 = freeze13[fn70Result];
    for (let n189 = 0; n189 < 18; n189++) {
      let v444 = Math.random() < 0.5,
        v445 = Math.random() < 0.5 ? 1 : -1,
        v446 = v444 ? "X" : "Z",
        fn21Result2 = fn21(v446, (1 + ((14 * Math.random()) | 0)) * n30, arg286 + n189),
        fn76Result2 = fn76(fn70Result, v446, v445),
        v447 = 2 + 508 * Math.random(),
        v448 = [25, 40, 55, 70, 160, 190, 220, 300, 340][(9 * Math.random()) | 0],
        obj33 = {
          x: v444 ? v447 : fn21Result2 + fn76Result2,
          z: v444 ? fn21Result2 + fn76Result2 : v447,
          hx: v444 ? v445 : 0,
          hz: v444 ? 0 : v445,
          parkTurn: Math.random() < 0.5 ? -1 : 1,
          speed: (5.5 + 3 * Math.random()) * v439.speed,
          color: fn72(fn70Result, v448),
          vehicleType: fn70Result,
          kind: 5,
          _depth: 0,
          _col: 0,
          _trafficPace: 1,
          _trafficTarget: 1,
          _cyclistFiltering: false,
          _id: arg286,
          _turnSerial: 0,
          _lastJunction: "",
        };
      if (!fn23(obj33.x, obj33.z) && fn85(obj33)) return obj33;
    }
    let v440 = 1 & arg286 ? 1 : -1,
      v441 = !!(2 & arg286),
      v442 = v441 ? "X" : "Z",
      fn21Result = fn21(v442, (1 + (arg286 % (worldN / n30 - 2))) * n30, arg286),
      fn76Result = fn76(fn70Result, v442, v440),
      v443 = 2 + ((17.37 * arg286) % 508);
    return {
      x: v441 ? v443 : fn21Result + fn76Result,
      z: v441 ? fn21Result + fn76Result : v443,
      hx: v441 ? v440 : 0,
      hz: v441 ? 0 : v440,
      parkTurn: 4 & arg286 ? 1 : -1,
      speed: 6 * v439.speed,
      color: fn72(fn70Result, 190),
      vehicleType: fn70Result,
      kind: 5,
      _depth: 0,
      _col: 0,
      _trafficPace: 1,
      _trafficTarget: 1,
      _cyclistFiltering: false,
      _id: arg286,
      _turnSerial: 0,
      _lastJunction: "",
    };
  }
  for (let n190 = 0; n190 < 380; n190++) cars.push(fn89(n190));
  var n67 = 1,
    n68 = 0;
  function fn90() {
    return "function" == typeof window.__CCTV_TICK_SERIAL__
      ? window.__CCTV_TICK_SERIAL__(n67)
      : n67 + 1;
  }
  function fn91(arg287, arg288, arg289, arg290) {
    for (let n191 = 0; n191 < 32; n191++) {
      let v449 = hash2(191 * arg288 + n191, n67 + 127) < 0.5,
        v450 = hash2(211 * arg288 + n191, n67 + 131) < 0.5 ? 1 : -1,
        v451 = (2 * hash2(223 * arg288 + n191, n67 + 137) - 1) * n11,
        v452 = (2 * hash2(227 * arg288 + n191, n67 + 139) - 1) * n11,
        v453 = v449 ? "X" : "Z",
        v454 = v449 ? arg290 + v452 : arg289 + v452;
      arg287.vehicleType ||
        (arg287.vehicleType = fn70(hash2(409 * arg288 + 71, 613 * arg288 + 97)));
      let fn21Result3 = fn21(v453, v454, arg288 + n191),
        fn77Result = fn77(arg287, v453, v450);
      if (
        ((arg287.x = v449
          ? Math.max(2, Math.min(510, arg289 + v451))
          : Math.max(2, Math.min(510, fn21Result3 + fn77Result))),
        (arg287.z = v449
          ? Math.max(2, Math.min(510, fn21Result3 + fn77Result))
          : Math.max(2, Math.min(510, arg290 + v451))),
        (arg287.hx = v449 ? v450 : 0),
        (arg287.hz = v449 ? 0 : v450),
        fn83(arg287),
        fn23(arg287.x, arg287.z, 1) || !fn85(arg287, 4.4))
      )
        continue;
      let fn71Result7 = carDims(arg287);
      arg287.speed = (4.2 + 4.4 * hash2(239 * arg288 + n191, n67 + 151)) * fn71Result7.speed;
      let v455 = arr4[(hash2(251 * arg288 + n191, n67 + 157) * arr4.length) | 0];
      return (
        (arg287.color = fn72(arg287.vehicleType, v455)),
        (arg287._trafficPace = 1),
        (arg287._trafficTarget = 1),
        (arg287._cyclistFiltering = false),
        (arg287._lastJunction = ""),
        (arg287._occupantGeneration = (arg287._occupantGeneration || 0) + 1),
        (arg287._occupants = null),
        (arg287._occupantKey = ""),
        Number.isFinite(arg287._turnSerial) || (arg287._turnSerial = 0),
        Number.isFinite(arg287._id) || (arg287._id = arg288),
        arg287
      );
    }
    return arg287;
  }
  function fn92(arg291 = false, arg292 = null, arg293 = null) {
    if (typeof view > "u") return;
    let v456 = Number.isFinite(arg292) ? arg292 : view.x,
      v457 = Number.isFinite(arg293) ? arg293 : view.z;
    for (let n192 = 0; n192 < pedestrians.length; n192++) {
      let v458 = pedestrians[n192],
        v459 = v458.x - v456,
        v460 = v458.z - v457;
      (arg291 || v459 * v459 + v460 * v460 > 55225) && fn62(v458, n192, v456, v457);
    }
    for (let n193 = 0; n193 < cars.length; n193++) {
      let v461 = cars[n193],
        v462 = v461.x - v456,
        v463 = v461.z - v457;
      (arg291 || v462 * v462 + v463 * v463 > 55225) && fn91(v461, n193, v456, v457);
    }
  }
  function fn93(arg294, arg295) {
    if ("function" != typeof window.__CCTV_RESET__) {
      n67++;
      for (let n194 = 0; n194 < pedestrians.length; n194++)
        fn62(pedestrians[n194], n194, arg294, arg295);
      for (let n195 = 0; n195 < cars.length; n195++)
        ((cars[n195].x = -10000 - 11 * n195),
          (cars[n195].z = -10000 - 7 * n195),
          (cars[n195]._trafficPace = 1),
          (cars[n195]._cyclistFiltering = false));
      for (let n196 = 0; n196 < cars.length; n196++) fn91(cars[n196], n196, arg294, arg295);
      for (let v464 of cars) fn83(v464);
      fn88(0);
    } else window.__CCTV_RESET__(arg294, arg295);
  }
  function fn94(arg296, arg297, arg298) {
    let v465 = arg297 + "|" + arg298;
    if (arg296._turnChoiceKey === v465) return arg296._turnIntent || "straight";
    let v466 = arg296._turnSerial || 0;
    arg296._turnSerial = v466 + 1;
    let fn12Result16 = hash2(
      911 * (arg296._id || 0) + 37 * v466 + Math.floor(arg297),
      Math.floor(arg298) + 613 * (arg296._id || 0) + 53 * v466,
    );
    return (
      (arg296._turnChoiceKey = v465),
      (arg296._turnIntent =
        fn12Result16 < 0.7 ? "straight" : fn12Result16 < 0.85 ? "right" : "left"),
      arg296._turnIntent
    );
  }
  function stepCar(car, dt, arg301 = true, arg302 = cars) {
    let v467 = Number.isFinite(car._trafficPace) ? car._trafficPace : 1,
      v468 = car.speed * v467 * dt,
      fn80Result2 = fn80(car),
      distance2 = fn80Result2.approach.distance,
      v469 =
        arg301 &&
        distance2 >= -0.05 &&
        distance2 <= n66 &&
        !fn81(car, fn80Result2.approach, arg302);
    ((car._boxBlocked = v469),
      (fn80Result2.stop || v469) &&
        distance2 >= -0.05 &&
        distance2 < v468 + 0.18 &&
        (v468 = Math.max(0, distance2 - 0.1)));
    let v470 = car.x + car.hx * v468,
      v471 = car.z + car.hz * v468;
    if (!(
      v468 <= 0.00001 ||
      (function (arg303, arg304, arg305) {
        let { x0: v472, x1: v473, z0: v474, z1: v475 } = obj2,
          v476 = arg303.parkTurn || 1;
        if (arg303.hx && arg303.z >= v474 && arg303.z < v475) {
          let v477 = v476,
            v478 = arg303.hx > 0 ? v472 - fn77(arg303, "Z", v477) : v473 + fn77(arg303, "Z", v477);
          if ((arg303.hx > 0 && arg304 >= v478) || (arg303.hx < 0 && arg304 <= v478))
            return (
              (arg303.x = v478),
              (arg303.hx = 0),
              (arg303.hz = v477),
              (arg303.parkTurn *= -1),
              fn83(arg303),
              true
            );
        }
        if (arg303.hz && arg303.x >= v472 && arg303.x < v473) {
          let v479 = v476,
            v480 = arg303.hz > 0 ? v474 - fn77(arg303, "X", v479) : v475 + fn77(arg303, "X", v479);
          if ((arg303.hz > 0 && arg305 >= v480) || (arg303.hz < 0 && arg305 <= v480))
            return (
              (arg303.z = v480),
              (arg303.hz = 0),
              (arg303.hx = v479),
              (arg303.parkTurn *= -1),
              fn83(arg303),
              true
            );
        }
        return false;
      })(car, v470, v471)
    ))
      return fn23(v470, v471, 0.15)
        ? ((car.hx *= -1), (car.hz *= -1), void fn83(car))
        : void (
            (function (arg306, arg307, arg308) {
              let v481 = 0 !== arg306.hx,
                v482 = v481 ? arg306.hx : arg306.hz,
                v483 = v481 ? arg306.x : arg306.z,
                v484 = v481 ? arg307 : arg308,
                v485 = ((v483 % n30) + n30) % n30;
              if (v485 >= n31) return false;
              let v486 = v483 - v485,
                v487 = v486 + 8;
              if (!(v482 > 0 ? v483 < v487 && v484 >= v487 : v483 > v487 && v484 <= v487))
                return false;
              let v488 = v481 ? v486 : Math.floor(arg306.x / n30) * n30,
                v489 = v481 ? Math.floor(arg306.z / n30) * n30 : v486,
                v490 = recordedOriginX + v488,
                v491 = recordedOriginZ + v489,
                v492 = v490 + "|" + v491;
              if (!fn20(v490, v491) || arg306._lastJunction === v492) return false;
              arg306._lastJunction = v492;
              let fn94Result2 = fn94(arg306, v490, v491);
              if ("straight" === fn94Result2) return false;
              if (v481) {
                let v493 = "right" === fn94Result2 ? v482 : -v482;
                ((arg306.x = v488 + fn77(arg306, "Z", v493)),
                  (arg306.hx = 0),
                  (arg306.hz = v493),
                  fn83(arg306));
              } else {
                let v494 = "right" === fn94Result2 ? -v482 : v482;
                ((arg306.z = v489 + fn77(arg306, "X", v494)),
                  (arg306.hz = 0),
                  (arg306.hx = v494),
                  fn83(arg306));
              }
              return true;
            })(car, v470, v471) ||
            ((car.x = v470),
            (car.z = v471),
            ((("X" == (car.hx ? "X" : "Z") ? car.x : car.z) % n30) + n30) % n30 > 19 &&
              (car._turnChoiceKey = ""),
            (car.x < 2 || car.z < 2 || car.x > 510 || car.z > 510) &&
              ((car.hx *= -1), (car.hz *= -1), (car._lastJunction = ""), fn83(car)))
          );
  }
  function binIntoRenderGrid(entity) {
    let max22 = Math.max(0, Math.min(gridDim - 1, (entity.x / gridCell) | 0)),
      max23 = Math.max(0, Math.min(gridDim - 1, (entity.z / gridCell) | 0));
    renderGrid[max23 * gridDim + max22].push(entity);
  }
  function binIntoEntityGrid(entity) {
    let max24 = Math.max(0, Math.min(gridDim - 1, (entity.x / gridCell) | 0)),
      max25 = Math.max(0, Math.min(gridDim - 1, (entity.z / gridCell) | 0));
    entityGrid[max25 * gridDim + max24].push(entity);
  }
  function rebuildEntityGrid() {
    for (let n197 = 0; n197 < entityGrid.length; n197++) entityGrid[n197].length = 0;
    for (let n198 = 0; n198 < pedestrians.length; n198++) binIntoEntityGrid(pedestrians[n198]);
    for (let n199 = 0; n199 < cars.length; n199++) binIntoEntityGrid(cars[n199]);
  }
  rebuildEntityGrid();
  var v39 = 1 / quality.populationAiHz,
    npcFullRadius = quality.npcFullRadius,
    npcFullRadiusSq = npcFullRadius * npcFullRadius,
    carFullRadius = quality.carFullRadius,
    carFullRadiusSq = carFullRadius * carFullRadius,
    v42 = 1 / quality.backgroundSimHz,
    nearPedestrians = [],
    farPedestrians = [],
    nearCars = [],
    farCars = [],
    v43 = quality.populationClassifyMs / 1000,
    v44 = v39,
    v45 = v42,
    v46 = v43,
    n69 = 0;
  function classifyPopulation() {
    ((nearPedestrians.length = 0),
      (farPedestrians.length = 0),
      (nearCars.length = 0),
      (farCars.length = 0));
    for (let n200 = 0; n200 < pedestrians.length; n200++) {
      let v495 = pedestrians[n200],
        v496 = v495.x - view.x,
        v497 = v495.z - view.z;
      v496 * v496 + v497 * v497 <= npcFullRadiusSq
        ? nearPedestrians.push(v495)
        : farPedestrians.push(v495);
    }
    for (let n201 = 0; n201 < cars.length; n201++) {
      let v498 = cars[n201],
        v499 = v498.x - view.x,
        v500 = v498.z - view.z;
      v499 * v499 + v500 * v500 <= carFullRadiusSq ? nearCars.push(v498) : farCars.push(v498);
    }
    ((stats.fullSimNPCs = nearPedestrians.length),
      (stats.backgroundNPCs = farPedestrians.length),
      (stats.fullSimCars = nearCars.length),
      (stats.backgroundCars = farCars.length));
  }
  function runNearPopulationAI() {
    let now4 = performance.now();
    (fn66(nearPedestrians),
      fn86(nearCars),
      (float64Array[freeze4.populationAI] += performance.now() - now4),
      stats.populationAIRuns++);
  }
  function runFarPopulationAI(arg311) {
    let now5 = performance.now();
    for (let n202 = 0; n202 < farPedestrians.length; n202++) {
      let v501 = farPedestrians[n202];
      ((v501._pace = 1), stepPedestrian(v501, arg311));
    }
    for (let n203 = 0; n203 < farCars.length; n203++)
      ((farCars[n203]._trafficTarget = 1), (farCars[n203]._cyclistFiltering = false));
    fn87(arg311, farCars);
    for (let n204 = 0; n204 < farCars.length; n204++)
      stepCar(farCars[n204], arg311, false, farCars);
    ((float64Array[freeze4.populationBackground] += performance.now() - now5),
      stats.populationBackgroundTicks++);
  }
  var view = {
      x: recordedView.worldX - recordedOriginX,
      z: recordedView.worldZ - recordedOriginZ,
      yaw: recordedView.yaw,
      pitch: recordedView.pitch,
    },
    v47 = null,
    n70 = 0;
  (fn93(view.x, view.z), rebuildEntityGrid());
  var keysDown = {},
    pointerLocked = false,
    flag4 = false,
    moveAxis = {
      forward: 0,
      strafe: 0,
    },
    touchSticks = {
      move: null,
      look: null,
    },
    flag5 = false,
    flag6 = false,
    flag7 = false,
    flag8 = false,
    n71 = 0.0024,
    n72 = 0.0021,
    n73 = 120,
    yaw = view.yaw,
    pitch = view.pitch;
  function resetLookFromView() {
    ((yaw = view.yaw), (pitch = view.pitch));
  }
  var n74 = 0.055,
    n75 = 0.56,
    n76 = 0.16,
    arr12 = [0, 0.261799, -0.261799, 0.523599, -0.523599, 0.785398, -0.785398, 1.047198, -1.047198],
    arr13 = [0.9, 1.5, 2.4, 3.6, 5.2, 7.2, 9.5],
    flag9 = false,
    populationVisible = true,
    yaw2 = view.yaw,
    n77 = 2.5,
    n78 = 0,
    n79 = 0,
    v48 = n74,
    n80 = 0,
    x = view.x,
    z = view.z,
    n81 = 0,
    n82 = 0,
    s3 = "",
    arr14 = [],
    n83 = 0,
    n84 = 0,
    n85 = 1,
    v49 = (view.x, view.z, recordedOriginX),
    v50 = recordedOriginZ,
    n86 = 0,
    v51 = -1,
    n87 = 0,
    n88 = 0,
    n89 = 0,
    n90 = 0,
    yaw3 = view.yaw,
    n91 = 0,
    fn3Result = toWorldX(view.x),
    fn4Result = toWorldZ(view.z),
    n92 = 0,
    flag11 = false,
    yaw4 = view.yaw,
    n93 = 0,
    n94 = 0,
    v52 = null,
    s4 = "",
    set = new Set(),
    map5 = new Map(),
    arr15 = [],
    map6 = new Map();
  function fn103(arg312) {
    return "MONUMENT" === arg312?.["kind"] ? 9 : 24;
  }
  function fn104(arg313, arg314 = toWorldX(view.x), arg315 = toWorldZ(view.z)) {
    return arg313 ? Math.hypot(arg313.x - arg314, arg313.z - arg315) : 1 / 0;
  }
  function fn105(arg316, arg317, arg318 = v52) {
    return arg318
      ? Math.hypot(
          arg318.x - (recordedOriginX + arg316 + 0.5),
          arg318.z - (recordedOriginZ + arg317 + 0.5),
        )
      : 1 / 0;
  }
  function fn106(arg319, arg320) {
    if (!v52) return 0;
    let v502 = fn104(v52) - fn105(arg319, arg320);
    return v502 >= 0 ? 2.8 * v502 : 4.2 * v502;
  }
  function fn107(arg321, arg322) {
    return v52
      ? fn106(arg321, arg322)
      : (function (arg323, arg324) {
          let fn109Result = fn109(view.x, view.z),
            fn110Result = fn110(arg323, arg324),
            v503 = fn110Result - fn109Result;
          return (v503 >= 0 ? 1.35 * v503 : 2.35 * v503) - 0.7 * Math.max(0, n92 - fn110Result);
        })(arg321, arg322);
  }
  function fn108(arg325 = true) {
    if (typeof v57 > "u" || !v57.length) return ((v52 = null), null);
    let filter = v57.filter((arg326) => !set.has(arg326.id) && arg326.id !== s4);
    filter.length || (set.clear(), (filter = v57.filter((arg327) => arg327.id !== s4)));
    let fn3Result3 = toWorldX(view.x),
      fn4Result3 = toWorldZ(view.z);
    return (
      (filter = filter.filter(
        (arg328) => fn104(arg328, fn3Result3, fn4Result3) > 1.12 * fn103(arg328),
      )),
      filter.length || (filter = v57.filter((arg329) => arg329.id !== s4)),
      filter.sort(
        (arg330, arg331) =>
          fn104(arg330, fn3Result3, fn4Result3) - fn104(arg331, fn3Result3, fn4Result3) ||
          arg330.id.localeCompare(arg331.id),
      ),
      (v52 = filter[0] || null),
      (arr14.length = 0),
      (n83 = 0),
      (n84 = 0),
      (n88 = 0),
      (n87 = 0),
      (n89 = 0),
      v52 && arg325 && (v52.shortName, performance.now()),
      v52
    );
  }
  function fn109(arg332, arg333) {
    return Math.hypot(recordedOriginX + arg332 - fn3Result, recordedOriginZ + arg333 - fn4Result);
  }
  function fn110(arg334, arg335) {
    return fn109(arg334 + 0.5, arg335 + 0.5);
  }
  function fn111(arg336) {
    ((flag9 = !!arg336)
      ? ((yaw2 = view.yaw),
        (n77 = 6),
        (n78 = 0),
        (n79 = 0),
        (v48 = Math.max(n74, Math.min(0.18, view.pitch))),
        (x = view.x),
        (z = view.z),
        (n81 = 0),
        (n80 = 0),
        (s3 = ""),
        (arr14.length = 0),
        (n83 = 0),
        (n84 = 0),
        (n85 = 1),
        (n87 = 0),
        (n88 = 0),
        (n89 = 0),
        (n90 = 0),
        (n91 = 0),
        (fn3Result = toWorldX(view.x)),
        (fn4Result = toWorldZ(view.z)),
        (n92 = 0),
        (flag11 = false),
        (yaw4 = view.yaw),
        (n93 = 0),
        (n94 = 0),
        map5.clear(),
        (arr15.length = 0),
        map6.clear(),
        (n86 = 0),
        (v51 = -1),
        set.clear(),
        (s4 = ""),
        (v52 = null),
        fn118(),
        fn108(false))
      : ((n78 = 0),
        (n80 = 0),
        (arr14.length = 0),
        (n83 = 0),
        (n85 = 1),
        (n87 = 0),
        (n88 = 0),
        (n89 = 0),
        (n90 = 0),
        (flag11 = false),
        (n93 = 0),
        (n94 = 0),
        map6.clear(),
        (v52 = null),
        set.clear(),
        (s4 = ""),
        resetLookFromView()),
      elUiAutoTour && (elUiAutoTour.textContent = flag9 ? "T / TOURING" : "T / OFF"),
      flag9 && v52 && v52.shortName,
      performance.now());
  }
  function fn112(arg337, arg338) {
    if ("city" !== zone) return 1;
    let floor23 = Math.floor(arg337),
      floor24 = Math.floor(arg338);
    return floor23 < 0 || floor24 < 0 || floor23 >= worldN || floor24 >= worldN
      ? 4
      : uint8Array18[worldIndex(floor23, floor24)];
  }
  function fn113(arg339) {
    return 6 === arg339 || 5 === arg339 || 1 === arg339 || 2 === arg339;
  }
  function fn114(arg340, arg341) {
    if ("city" !== zone) return true;
    let fn112Result = fn112(view.x, view.z),
      fn112Result2 = fn112(arg340, arg341);
    return !(
      0 === fn112Result2 ||
      ((1 === fn112Result || 6 === fn112Result || 5 === fn112Result) &&
        (3 === fn112Result2 || 4 === fn112Result2))
    );
  }
  function fn115(arg342, arg343) {
    if ("city" !== zone) return false;
    let v504 = arg343.x - arg342.x,
      v505 = arg343.z - arg342.z,
      hypot2 = Math.hypot(v504, v505),
      max26 = Math.max(2, Math.ceil(4 * hypot2));
    for (let n205 = 1; n205 < max26; n205++) {
      let v506 = n205 / max26;
      if (0 === fn112(arg342.x + v504 * v506, arg342.z + v505 * v506)) return true;
    }
    return false;
  }
  function fn116(arg344, arg345) {
    if ("city" !== zone) return 1;
    let v507 = 0 | arg344,
      v508 = 0 | arg345;
    if (v507 < 0 || v508 < 0 || v507 >= worldN || v508 >= worldN) return -20;
    let v509 = uint8Array18[worldIndex(v507, v508)];
    return 6 === v509 || 5 === v509
      ? 5.8
      : 1 === v509
        ? 5.2
        : 2 === v509
          ? 4.6
          : 0 === v509
            ? -0.8
            : 3 === v509
              ? 0.4
              : 4 === v509
                ? -20
                : 1;
  }
  function fn117(arg346, arg347) {
    let v510 = uint8Array18[worldIndex(arg346, arg347)];
    return 6 === v510
      ? 0.76
      : 5 === v510
        ? 0.8
        : 1 === v510
          ? 1
          : 2 === v510
            ? 1.06
            : 0 === v510
              ? 50
              : 3 === v510
                ? 3.1
                : 1.5;
  }
  function fn118() {
    if ("city" !== zone) return;
    let floor25 = Math.floor(toWorldX(view.x)),
      floor26 = Math.floor(toWorldZ(view.z)),
      v511 = floor25 * n10 + floor26;
    if (v511 === v51) return;
    v51 = v511;
    let v512 = ++n86;
    for (map5.set(v511, v512), arr15.push([v511, v512]); arr15.length > 170;) {
      let shift = arr15.shift();
      map5.get(shift[0]) === shift[1] && map5["delete"](shift[0]);
    }
  }
  function fn119(arg348, arg349) {
    let v513 = (recordedOriginX + arg348) * n10 + (recordedOriginZ + arg349),
      get5 = map5.get(v513);
    if (undefined === get5) return 0;
    let v514 = n86 - get5;
    return v514 >= 170 ? 0 : 3.2 * (1 - v514 / 170);
  }
  function fn120(arg350, arg351) {
    let v515 = (recordedOriginX + arg350) * n10 + (recordedOriginZ + arg351),
      get6 = map6.get(v515);
    return undefined === get6
      ? 0
      : get6 <= n91
        ? (map6["delete"](v515), 0)
        : 7.5 * Math.min(1, (get6 - n91) / 8 + 0.25);
  }
  function fn121(arg352 = 2) {
    if ("city" !== zone) return;
    let floor27 = Math.floor(view.x),
      floor28 = Math.floor(view.z),
      v516 = n91 + 8;
    for (let v517 = -arg352; v517 <= arg352; v517++)
      for (let v518 = -arg352; v518 <= arg352; v518++) {
        if (v518 * v518 + v517 * v517 > arg352 * arg352 + 1) continue;
        let v519 = recordedOriginX + floor27 + v518,
          v520 = recordedOriginZ + floor28 + v517;
        v519 < 0 || v520 < 0 || v519 >= n10 || v520 >= n10 || map6.set(v519 * n10 + v520, v516);
      }
  }
  function fn122(arg353, arg354) {
    if ("city" !== zone) return;
    let v521 = n91 + 6;
    for (let v522 = -1; v522 <= 1; v522++)
      for (let v523 = -1; v523 <= 1; v523++) {
        let v524 = recordedOriginX + arg353 + v523,
          v525 = recordedOriginZ + arg354 + v522;
        if (v524 < 0 || v525 < 0 || v524 >= n10 || v525 >= n10) continue;
        let v526 = v524 * n10 + v525;
        v521 > (map6.get(v526) || 0) && map6.set(v526, v521);
      }
  }
  function fn123(arg355) {
    if (2 === arg355.kind) return null;
    if (3 === arg355.kind)
      return {
        x: 0.62,
        z: 0.62,
      };
    if (arg355.kind < 6) return null;
    if (arg355.volume)
      return {
        x: 1 === arg355.axis ? arg355.d || 0.5 : arg355.w || 1,
        z: 1 === arg355.axis ? arg355.w || 1 : arg355.d || 0.5,
      };
    let v527 = arg355.kind === n43 ? 0.42 : arg355.kind === n40 ? 0.62 : 0.54,
      v528 = arg355.w || 1;
    return {
      x: 0 === arg355.axis ? v528 : v527,
      z: 0 === arg355.axis ? v527 : v528,
    };
  }
  function fn124(arg356, arg357, arg358 = n15) {
    return !(
      !(function (arg359, arg360, arg361 = n15) {
        if ("city" !== zone) return fn250(arg359, arg360, arg361);
        let fn194Result = fn194(),
          fn421 = (arg362, arg363) => {
            if (arg362 < 0 || arg363 < 0 || arg362 >= worldN || arg363 >= worldN) return false;
            let fn24Result12 = worldIndex(arg362, arg363),
              v529 = fn194Result[fn24Result12];
            return (2 === v529 || 3 === v529 || 0 === v529) && 4 !== uint8Array18[fn24Result12];
          };
        return (
          fn421((arg359 - arg361) | 0, (arg360 - arg361) | 0) &&
          fn421((arg359 - arg361) | 0, (arg360 + arg361) | 0) &&
          fn421((arg359 + arg361) | 0, (arg360 - arg361) | 0) &&
          fn421((arg359 + arg361) | 0, (arg360 + arg361) | 0)
        );
      })(arg356, arg357, arg358) ||
      ("city" === zone &&
        (function (arg364, arg365, arg366 = 0.12) {
          if ("city" !== zone || typeof uint8Array37 > "u" || typeof uint8Array36 > "u")
            return false;
          let max27 = Math.max(0, Math.floor(arg364 - arg366)),
            min8 = Math.min(511, Math.floor(arg364 + arg366)),
            max28 = Math.max(0, Math.floor(arg365 - arg366)),
            min9 = Math.min(511, Math.floor(arg365 + arg366));
          for (let v530 = max28; v530 <= min9; v530++)
            for (let v531 = max27; v531 <= min8; v531++) {
              let fn24Result13 = worldIndex(v531, v530);
              if (uint8Array37[fn24Result13] || uint8Array36[fn24Result13]) return true;
            }
          return false;
        })(arg356, arg357, Math.max(0.12, 0.35 * arg358))) ||
      ("city" === zone &&
        (function (arg367, arg368, arg369 = n75) {
          if ("city" !== zone) return false;
          let n206 = 3.2,
            max29 = Math.max(0, Math.floor((arg367 - n206) / gridCell)),
            min10 = Math.min(gridDim - 1, Math.floor((arg367 + n206) / gridCell)),
            max30 = Math.max(0, Math.floor((arg368 - n206) / gridCell)),
            min11 = Math.min(gridDim - 1, Math.floor((arg368 + n206) / gridCell));
          for (let v532 = max30; v532 <= min11; v532++)
            for (let v533 = max29; v533 <= min10; v533++) {
              let v534 = from3[v532 * gridDim + v533];
              for (let n207 = 0; n207 < v534.length; n207++) {
                let v535 = v534[n207],
                  fn123Result = fn123(v535);
                if (
                  fn123Result &&
                  Math.abs(arg367 - v535.x) <= 0.5 * fn123Result.x + arg369 &&
                  Math.abs(arg368 - v535.z) <= 0.5 * fn123Result.z + arg369
                )
                  return true;
              }
            }
          return false;
        })(arg356, arg357, arg358 + 0.12))
    );
  }
  function fn125(arg370, arg371, arg372, arg373 = 5) {
    ((arg371 = Math.max(arg370.minX, Math.min(arg370.maxX, Math.round(arg371)))),
      (arg372 = Math.max(arg370.minZ, Math.min(arg370.maxZ, Math.round(arg372)))));
    let v536 = null,
      v537 = -1000000000;
    for (let n208 = 0; n208 <= arg373; n208++)
      for (let v538 = -n208; v538 <= n208; v538++)
        for (let v539 = -n208; v539 <= n208; v539++) {
          if (n208 && Math.max(Math.abs(v539), Math.abs(v538)) !== n208) continue;
          let v540 = arg371 + v539,
            v541 = arg372 + v538;
          if (
            v540 < arg370.minX ||
            v540 > arg370.maxX ||
            v541 < arg370.minZ ||
            v541 > arg370.maxZ ||
            arg370.blocked[arg370.idx(v540, v541)]
          )
            continue;
          let v542 =
            1.8 * fn116(v540 + 0.5, v541 + 0.5) -
            0.55 * Math.hypot(v539, v538) -
            2 * fn119(v540, v541) -
            2.4 * fn120(v540, v541) +
            0.28 * fn107(v540, v541);
          v542 > v537 &&
            ((v537 = v542),
            (v536 = {
              x: v540,
              z: v541,
              score: v542,
            }));
        }
    return v536;
  }
  function fn126(arg374, arg375, arg376, arg377) {
    let length = arg374.length;
    for (arg374.push(arg376), arg375.push(arg377); length > 0;) {
      let v543 = (length - 1) >> 1;
      if (arg375[v543] <= arg377) break;
      ((arg374[length] = arg374[v543]), (arg375[length] = arg375[v543]), (length = v543));
    }
    ((arg374[length] = arg376), (arg375[length] = arg377));
  }
  function fn127(arg378, arg379) {
    if (!arg378.length) return -1;
    let v544 = arg378[0],
      pop = arg378.pop(),
      pop2 = arg379.pop();
    if (arg378.length) {
      let n209 = 0;
      for (;;) {
        let v545 = 2 * n209 + 1;
        if (v545 >= arg378.length) break;
        let v546 = v545 + 1,
          v547 = v546 < arg378.length && arg379[v546] < arg379[v545] ? v546 : v545;
        if (arg379[v547] >= pop2) break;
        ((arg378[n209] = arg378[v547]), (arg379[n209] = arg379[v547]), (n209 = v547));
      }
      ((arg378[n209] = pop), (arg379[n209] = pop2));
    }
    return v544;
  }
  function fn128(arg380, arg381, arg382) {
    let cx = arg380.cx,
      cz = arg380.cz;
    if (
      arg381 < arg380.minX ||
      arg381 > arg380.maxX ||
      arg382 < arg380.minZ ||
      arg382 > arg380.maxZ
    )
      return null;
    let v548 = arg380.w * arg380.h,
      idx = arg380.idx(cx, cz),
      idx2 = arg380.idx(arg381, arg382),
      float32Array36 = new Float32Array(v548);
    (float32Array36.fill(1 / 0), (float32Array36[idx] = 0));
    let int32Array2 = new Int32Array(v548);
    int32Array2.fill(-1);
    let uint8Array43 = new Uint8Array(v548),
      arr48 = [],
      arr49 = [];
    fn126(arr48, arr49, idx, Math.hypot(arg381 - cx, arg382 - cz));
    let arr50 = [
        [1, 0, 1],
        [-1, 0, 1],
        [0, 1, 1],
        [0, -1, 1],
        [1, 1, 1.414],
        [-1, 1, 1.414],
        [1, -1, 1.414],
        [-1, -1, 1.414],
      ],
      n210 = 0,
      flag24 = false;
    for (; arr48.length && n210 < 5200;) {
      let fn127Result = fn127(arr48, arr49);
      if (fn127Result < 0 || uint8Array43[fn127Result]) continue;
      if (((uint8Array43[fn127Result] = 1), n210++, fn127Result === idx2)) {
        flag24 = true;
        break;
      }
      let v550 = fn127Result % arg380.w,
        v551 = (fn127Result / arg380.w) | 0,
        v552 = arg380.minX + v550,
        v553 = arg380.minZ + v551;
      for (let n211 = 0; n211 < arr50.length; n211++) {
        let v554 = arr50[n211][0],
          v555 = arr50[n211][1],
          v556 = v552 + v554,
          v557 = v553 + v555;
        if (v556 < arg380.minX || v556 > arg380.maxX || v557 < arg380.minZ || v557 > arg380.maxZ)
          continue;
        let idx3 = arg380.idx(v556, v557);
        if (
          arg380.blocked[idx3] ||
          uint8Array43[idx3] ||
          (v554 &&
            v555 &&
            (arg380.blocked[arg380.idx(v552 + v554, v553)] ||
              arg380.blocked[arg380.idx(v552, v553 + v555)]))
        )
          continue;
        let v558,
          fn119Result = fn119(v556, v557),
          fn120Result = fn120(v556, v557);
        if (v52) {
          let fn105Result = fn105(v552, v553),
            v560 = fn105(v556, v557) - fn105Result;
          v558 = v560 > 0 ? 1.25 * v560 : 0.14 * v560;
        } else {
          let fn110Result2 = fn110(v552, v553),
            v561 = fn110(v556, v557) - fn110Result2;
          v558 = v561 < 0 ? 0.85 * -v561 : 0.06 * -v561;
        }
        let max31 = Math.max(
            0.12,
            arr50[n211][2] * fn117(v556, v557) + 0.72 * fn119Result + fn120Result + v558,
          ),
          v559 = float32Array36[fn127Result] + max31;
        v559 >= float32Array36[idx3] ||
          ((float32Array36[idx3] = v559),
          (int32Array2[idx3] = fn127Result),
          fn126(arr48, arr49, idx3, v559 + 0.88 * Math.hypot(arg381 - v556, arg382 - v557)));
      }
    }
    if (!flag24) return null;
    let arr51 = [],
      v549 = idx2;
    for (; v549 !== idx && v549 >= 0;) {
      let v562 = v549 % arg380.w,
        v563 = (v549 / arg380.w) | 0;
      (arr51.push({
        x: arg380.minX + v562 + 0.5,
        z: arg380.minZ + v563 + 0.5,
      }),
        (v549 = int32Array2[v549]));
    }
    return (arr51.reverse(), arr51);
  }
  function fn129(arg383, arg384, arg385) {
    let v564 = arg385.x - arg384.x,
      v565 = arg385.z - arg384.z,
      hypot3 = Math.hypot(v564, v565),
      max32 = Math.max(2, Math.ceil(3 * hypot3)),
      v566 = fn113(fn112(arg384.x, arg384.z)) && fn113(fn112(arg385.x, arg385.z));
    for (let n212 = 1; n212 < max32; n212++) {
      let v567 = n212 / max32,
        v568 = arg384.x + v564 * v567,
        v569 = arg384.z + v565 * v567,
        floor29 = Math.floor(v568),
        floor30 = Math.floor(v569);
      if (
        floor29 < arg383.minX ||
        floor29 > arg383.maxX ||
        floor30 < arg383.minZ ||
        floor30 > arg383.maxZ ||
        arg383.blocked[arg383.idx(floor29, floor30)] ||
        (v566 && 0 === fn112(v568, v569))
      )
        return false;
    }
    return true;
  }
  function fn130(arg386, arg387) {
    if (!arg386 || arg386.length < 2) return arg386 || [];
    let arr52 = [],
      obj34 = {
        x: view.x,
        z: view.z,
      },
      n213 = 0;
    for (; n213 < arg386.length;) {
      let v570 = n213,
        min12 = Math.min(arg386.length - 1, n213 + 10);
      for (let v571 = n213 + 1; v571 <= min12 && fn129(arg387, obj34, arg386[v571]); v571++)
        v570 = v571;
      (arr52.push(arg386[v570]), (obj34 = arg386[v570]), (n213 = v570 + 1));
    }
    return arr52;
  }
  function fn131(arg388 = false) {
    if ("city" !== zone) return false;
    let v572 = (function () {
        let floor31 = Math.floor(view.x),
          floor32 = Math.floor(view.z),
          max33 = Math.max(1, floor31 - 30),
          min13 = Math.min(510, floor31 + 30),
          max34 = Math.max(1, floor32 - 30),
          min14 = Math.min(510, floor32 + 30),
          v573 = min13 - max33 + 1,
          v574 = min14 - max34 + 1,
          uint8Array44 = new Uint8Array(v573 * v574),
          fn422 = (arg389, arg390) => (arg390 - max34) * v573 + (arg389 - max33);
        for (let v575 = max34; v575 <= min14; v575++)
          for (let v576 = max33; v576 <= min13; v576++) {
            let fn24Result14 = worldIndex(v576, v575),
              v577 = uint8Array17[fn24Result14];
            ((0 !== v577 && 2 !== v577 && 3 !== v577) ||
              4 === uint8Array18[fn24Result14] ||
              0 === uint8Array18[fn24Result14]) &&
              (uint8Array44[fn422(v576, v575)] = 1);
          }
        let n214 = 3.4,
          max35 = Math.max(0, Math.floor((max33 - n214) / gridCell)),
          min15 = Math.min(gridDim - 1, Math.floor((min13 + 1 + n214) / gridCell)),
          max36 = Math.max(0, Math.floor((max34 - n214) / gridCell)),
          min16 = Math.min(gridDim - 1, Math.floor((min14 + 1 + n214) / gridCell));
        for (let v578 = max36; v578 <= min16; v578++)
          for (let v579 = max35; v579 <= min15; v579++) {
            let v580 = from3[v578 * gridDim + v579];
            for (let n215 = 0; n215 < v580.length; n215++) {
              let v581 = v580[n215],
                fn123Result2 = fn123(v581);
              if (!fn123Result2) continue;
              let v582 = 0.5 * fn123Result2.x + n75,
                v583 = 0.5 * fn123Result2.z + n75,
                max37 = Math.max(max33, Math.floor(v581.x - v582)),
                min17 = Math.min(min13, Math.floor(v581.x + v582)),
                max38 = Math.max(max34, Math.floor(v581.z - v583)),
                min18 = Math.min(min14, Math.floor(v581.z + v583));
              for (let v584 = max38; v584 <= min18; v584++)
                for (let v585 = max37; v585 <= min17; v585++) {
                  let v586 = v585 + 0.5,
                    v587 = v584 + 0.5;
                  Math.abs(v586 - v581.x) <= v582 &&
                    Math.abs(v587 - v581.z) <= v583 &&
                    (uint8Array44[fn422(v585, v584)] = 1);
                }
            }
          }
        if (typeof uint8Array37 < "u" && typeof uint8Array36 < "u")
          for (let v588 = max34; v588 <= min14; v588++)
            for (let v589 = max33; v589 <= min13; v589++) {
              let fn24Result15 = worldIndex(v589, v588);
              (uint8Array37[fn24Result15] || uint8Array36[fn24Result15]) &&
                (uint8Array44[fn422(v589, v588)] = 1);
            }
        return (
          floor31 >= max33 &&
            floor31 <= min13 &&
            floor32 >= max34 &&
            floor32 <= min14 &&
            (uint8Array44[fn422(floor31, floor32)] = 0),
          {
            minX: max33,
            maxX: min13,
            minZ: max34,
            maxZ: min14,
            w: v573,
            h: v574,
            blocked: uint8Array44,
            idx: fn422,
            cx: floor31,
            cz: floor32,
          }
        );
      })(),
      arr53 = [];
    if (v52) {
      let fn3Result4 = toWorldX(view.x),
        fn4Result4 = toWorldZ(view.z),
        v590 = v52,
        atan2 = Math.atan2(v590.x - fn3Result4, -(v590.z - fn4Result4)),
        v591 = arg388
          ? [0.78, -0.78, 1.15, -1.15, 0.38, -0.38, 0]
          : [0, 0.38, -0.38, 0.78, -0.78, 1.15, -1.15],
        arr54 = [29, 24, 19];
      for (let n216 = 0; n216 < v591.length; n216++)
        for (let n217 = 0; n217 < arr54.length; n217++) {
          let v592 = atan2 + v591[n216],
            v593 = arr54[n217],
            fn125Result = fn125(
              v572,
              view.x + Math.sin(v592) * v593,
              view.z - Math.cos(v592) * v593,
              5,
            );
          if (!fn125Result) continue;
          let fn119Result2 = fn119(fn125Result.x, fn125Result.z),
            fn120Result2 = fn120(fn125Result.x, fn125Result.z),
            fn106Result = fn106(fn125Result.x, fn125Result.z),
            v594 =
              0.7 *
              (hash2(311 * n82 + 37 * n216 + 13 * n217, 29 * fn125Result.x + 31 * fn125Result.z) -
                0.5),
            v595 =
              fn106Result +
              1.4 * (3 - n217) +
              (0 === v591[n216] ? 5 : Math.max(0, 2.4 - 1.7 * Math.abs(v591[n216]))) +
              fn125Result.score -
              3.2 * fn119Result2 -
              3 * fn120Result2 +
              v594;
          arr53.push({
            cell: fn125Result,
            score: v595,
            yaw: v592,
          });
        }
    } else {
      let v596 = Math.round(yaw2 / (Math.PI / 2)) * (Math.PI / 2),
        fn12Result17 = hash2(
          193 * n82 + 53,
          17 * Math.floor(toWorldX(view.x)) + 23 * Math.floor(toWorldZ(view.z)),
        ),
        n218 = 0;
      (arg388 || fn12Result17 > 0.7) && (n218 = fn12Result17 > 0.85 ? Math.PI / 2 : -Math.PI / 2);
      let v597 = 0 === n218 ? [0, Math.PI / 2, -Math.PI / 2] : [n218, 0, -n218],
        arr55 = [29, 24, 19];
      for (let n219 = 0; n219 < v597.length; n219++)
        for (let n220 = 0; n220 < arr55.length; n220++) {
          let v599 = v596 + v597[n219],
            v600 = arr55[n220],
            fn125Result3 = fn125(
              v572,
              view.x + Math.sin(v599) * v600,
              view.z - Math.cos(v599) * v600,
              5,
            );
          if (!fn125Result3) continue;
          let fn119Result3 = fn119(fn125Result3.x, fn125Result3.z),
            fn120Result3 = fn120(fn125Result3.x, fn125Result3.z),
            v601 =
              1.3 *
              (hash2(311 * n82 + 37 * n219 + 13 * n220, 29 * fn125Result3.x + 31 * fn125Result3.z) -
                0.5),
            fn107Result = fn107(fn125Result3.x, fn125Result3.z),
            abs3 = Math.abs(fn197(v599 - yaw2)),
            max39 = Math.max(0, 1 - abs3 / (Math.PI / 2)),
            v602 =
              4.6 * (3 - n219) +
              0.08 * v600 +
              fn125Result3.score -
              4.5 * fn119Result3 -
              3 * fn120Result3 +
              fn107Result +
              v601 +
              3.2 * max39;
          arr53.push({
            cell: fn125Result3,
            score: v602,
            yaw: v599,
          });
        }
      let v598 = v596 + Math.PI,
        fn125Result2 = fn125(v572, view.x + 18 * Math.sin(v598), view.z - 18 * Math.cos(v598), 4);
      fn125Result2 &&
        arr53.push({
          cell: fn125Result2,
          score:
            -18 +
            fn125Result2.score -
            6 * fn119(fn125Result2.x, fn125Result2.z) +
            fn107(fn125Result2.x, fn125Result2.z),
          yaw: v598,
        });
    }
    arr53.sort((arg391, arg392) => arg392.score - arg391.score);
    for (let n221 = 0; n221 < arr53.length; n221++) {
      let fn128Result = fn128(v572, arr53[n221].cell.x, arr53[n221].cell.z);
      if (!fn128Result || fn128Result.length < 2) {
        fn122(arr53[n221].cell.x, arr53[n221].cell.z);
        continue;
      }
      let fn130Result = fn130(fn128Result, v572);
      if (fn130Result.length)
        return (
          (arr14 = fn130Result),
          (n83 = 0),
          arr53[n221].cell.x,
          arr53[n221].cell.z,
          (v49 = recordedOriginX),
          (v50 = recordedOriginZ),
          (n84 = v52 ? 9 : 14),
          (n87 = 2.15),
          (n88 = 1.15),
          (n89 = 0),
          n82++,
          true
        );
      fn122(arr53[n221].cell.x, arr53[n221].cell.z);
    }
    return ((arr14.length = 0), (n83 = 0), n82++, false);
  }
  function fn132(arg393) {
    if ("city" !== zone) return 0;
    let sin = Math.sin(yaw2),
      v603 = -Math.cos(yaw2),
      cos = Math.cos(yaw2),
      sin2 = Math.sin(yaw2),
      arr56 = [1.2, 2, 3, 4.2, 5.6, 7],
      arr57 = [0, 2.2, 4.8, 7.5],
      n222 = 0;
    for (let n223 = 0; n223 < arr57.length; n223++)
      for (let n224 = 0; n224 < arr56.length; n224++) {
        let v604 = arr56[n224],
          v605 = (view.x + sin * arr57[n223] + cos * arg393 * v604) | 0,
          v606 = (view.z + v603 * arr57[n223] + sin2 * arg393 * v604) | 0;
        if (v605 < 0 || v606 < 0 || v605 >= worldN || v606 >= worldN) continue;
        let fn24Result16 = worldIndex(v605, v606);
        1 === uint8Array17[fn24Result16] &&
          (n222 +=
            Math.max(0.15, 1 - v604 / 8) *
            (1 - 0.12 * n223) *
            (uint8Array16[fn24Result16] >= 24 ? 1.18 : 1));
      }
    return n222;
  }
  function fn133(arg394) {
    if (!flag9 || PHASE_LIVE !== PHASE.LIVE) return;
    (s3 !== zone &&
      ((s3 = zone),
      (yaw2 = view.yaw),
      (n77 = 6),
      (n78 = 0),
      (n79 = 0),
      (v48 = "city" === zone ? n74 : 0),
      (x = view.x),
      (z = view.z),
      (n81 = 0),
      (arr14.length = 0),
      (n83 = 0),
      (n84 = 0),
      (n85 = 1),
      (n87 = 0),
      (n88 = 0),
      (n89 = 0),
      (n90 = 0),
      "city" === zone && !v52 && fn108(false)),
      (n91 += arg394),
      fn118(),
      (n92 = Math.max(n92, fn109(view.x, view.z))),
      Math.hypot(view.x - x, view.z - z) < Math.max(0.012, 0.18 * arg394)
        ? (n81 += arg394)
        : (n81 = Math.max(0, n81 - 2.8 * arg394)),
      (x = view.x),
      (z = view.z),
      (n84 -= arg394),
      (n87 = Math.max(0, n87 - arg394)),
      (n88 = Math.max(0, n88 - arg394)),
      (n90 = Math.max(0, n90 - arg394)),
      "city" === zone &&
        (function () {
          let v610 = v52;
          if (!v610 || fn104(v610) > fn103(v610)) return false;
          (set.add(v610.id), (s4 = v610.id));
          v610.shortName;
          v52 = null;
          let fn108Result = fn108(false);
          (fn108Result && fn108Result.shortName, performance.now());
        })());
    let v607 = yaw2;
    if ("city" === zone) {
      if (
        ((v49 !== recordedOriginX || v50 !== recordedOriginZ) &&
          ((arr14.length = 0), (n83 = 0), (n87 = 0), (n88 = 0)),
        n90 > 0)
      )
        v607 = yaw3;
      else {
        for (; n83 < arr14.length;) {
          let v612 = arr14[n83];
          if (Math.hypot(v612.x - view.x, v612.z - view.z) > 0.6) break;
          n83++;
        }
        let sin3 = Math.sin(yaw2),
          v611 = -Math.cos(yaw2);
        if (
          (fn124(view.x + 0.78 * sin3, view.z + 0.78 * v611)
            ? (n89 = Math.max(0, n89 - 2.5 * arg394))
            : (n89 += arg394),
          n81 > 0.92 || n89 > 0.42
            ? (fn121(2),
              (yaw3 = (function () {
                let arr58 = [
                    Math.PI / 2,
                    -Math.PI / 2,
                    0.72 * Math.PI,
                    0.72 * -Math.PI,
                    Math.PI,
                    0.42,
                    -0.42,
                  ],
                  fn197Result2 = fn197(yaw2 + Math.PI / 2),
                  v613 = -1000000000;
                for (let n225 = 0; n225 < arr58.length; n225++) {
                  let v614 = yaw2 + arr58[n225],
                    sin4 = Math.sin(v614),
                    v615 = -Math.cos(v614),
                    n226 = 0,
                    n227 = 0;
                  for (let v618 of [0.65, 1.15, 1.8, 2.6, 3.6, 4.8]) {
                    if (!fn124(view.x + sin4 * v618, view.z + v615 * v618, n75)) {
                      n226 -= 38;
                      break;
                    }
                    ((n227 = v618), (n226 += 6));
                  }
                  let v616 = view.x + sin4 * Math.max(1.2, n227),
                    v617 = view.z + v615 * Math.max(1.2, n227);
                  (fn113(fn112(view.x, view.z)) &&
                    fn115(
                      {
                        x: view.x,
                        z: view.z,
                      },
                      {
                        x: v616,
                        z: v617,
                      },
                    ) &&
                    (n226 -= 90),
                    (n226 += 1.8 * fn116(v616, v617)),
                    (n226 -= 2.2 * fn119(Math.floor(v616), Math.floor(v617))),
                    (n226 -= 2.8 * fn120(Math.floor(v616), Math.floor(v617))),
                    (n226 += 1.15 * fn107(Math.floor(v616), Math.floor(v617))),
                    Math.abs(arr58[n225]) > 0.9 * Math.PI && (n226 -= 8),
                    (n226 +=
                      0.4 *
                      (hash2(
                        401 * n82 + 43 * n225,
                        17 * Math.floor(toWorldX(view.x)) + 19 * Math.floor(toWorldZ(view.z)),
                      ) -
                        0.5)),
                    n226 > v613 && ((v613 = n226), (fn197Result2 = v614)));
                }
                return fn197Result2;
              })()),
              (n90 = 1.05),
              (arr14.length = 0),
              (n83 = 0),
              (n89 = 0),
              (n81 = 0),
              (n94 = 0),
              (n87 = 1.05),
              (n88 = 1.15),
              n82++,
              (v607 = yaw3))
            : n83 >= arr14.length
              ? n88 <= 0 && (fn131(false), (n81 = 0))
              : n84 <= 0 && arr14.length - n83 <= 1 && n87 <= 0 && n88 <= 0 && fn131(false),
          n90 <= 0 && n83 < arr14.length)
        ) {
          let v619 = arr14[n83],
            v620 = v619.x - view.x,
            v621 = v619.z - view.z;
          v607 = Math.atan2(v620, -v621);
        }
      }
    } else
      n81 > 0.75 &&
        ((v607 = (function (arg395 = false) {
          let v622 = arg395
              ? [Math.PI / 2, -Math.PI / 2, Math.PI]
              : [0, Math.PI / 3, -Math.PI / 3, Math.PI / 2, -Math.PI / 2],
            v623 = yaw2,
            v624 = -1000000000;
          for (let n228 = 0; n228 < v622.length; n228++) {
            let v625 = yaw2 + v622[n228],
              sin5 = Math.sin(v625),
              v626 = -Math.cos(v625),
              n229 = 0;
            for (let v629 of [0.8, 1.5, 2.5, 3.8]) {
              if (!fn124(view.x + sin5 * v629, view.z + v626 * v629)) {
                n229 -= 30;
                break;
              }
              n229 += 5;
            }
            let v627 = view.x + 3.8 * sin5,
              v628 = view.z + 3.8 * v626;
            ((n229 += 0.65 * fn107(Math.floor(v627), Math.floor(v628))),
              n229 > v624 && ((v624 = n229), (v623 = v625)));
          }
          return v623;
        })(true)),
        (n81 = 0));
    let fn197Result = fn197(v607 - yaw2),
      abs4 = Math.abs(fn197Result),
      v608 = "city" === zone && abs4 > 0.15,
      abs5 = Math.abs(fn197(v607 - view.yaw)),
      v609 = 2.15 * (v608 && abs5 > n76 ? 0.48 : 1) * arg394;
    yaw2 += Math.max(-v609, Math.min(v609, fn197Result));
    let max40 = Math.max(0.36, 1 - abs4 / 1.35);
    if (v608) {
      let max41 = Math.max(0.001, 0.62 - n76),
        v630 = 0.4 + 0.6 * (1 - Math.max(0, Math.min(1, (abs5 - n76) / max41)));
      max40 = Math.min(max40, v630);
    }
    if (
      ((n85 = max40),
      (n80 = Math.max(0, n80 - arg394)),
      (n77 -= arg394),
      (n78 = Math.max(0, n78 - arg394)) <= 0 && n77 <= 0)
    ) {
      let v631 = (function () {
        if ("city" !== zone) return null;
        let fn191Result = fn191(),
          v632 = null,
          v633 = -1000000000,
          v634 = (function () {
            let fn132Result = fn132(-1),
              fn132Result2 = fn132(1);
            return fn132Result > 2.4 && fn132Result > 1.28 * fn132Result2 + 0.8
              ? 1
              : fn132Result2 > 2.4 && fn132Result2 > 1.28 * fn132Result + 0.8
                ? -1
                : 0;
          })(),
          v635 =
            v634 > 0
              ? [0.06, 0.12, 0.18, 0.26]
              : v634 < 0
                ? [-0.06, -0.12, -0.18, -0.26]
                : [-0.22, -0.12, 0, 0.12, 0.22];
        for (let n230 = 0; n230 < v635.length; n230++) {
          let v636 = v635[n230],
            v637 = yaw2 + v636,
            sin6 = Math.sin(v637),
            v638 = -Math.cos(v637);
          for (let n231 = 20; n231 <= 76; n231 += 4) {
            let v639 = (view.x + sin6 * n231) | 0,
              v640 = (view.z + v638 * n231) | 0;
            if (v639 < 0 || v640 < 0 || v639 >= worldN || v640 >= worldN) break;
            let fn24Result17 = worldIndex(v639, v640);
            if (1 !== uint8Array17[fn24Result17] || uint8Array16[fn24Result17] < 18) continue;
            let v641 = uint8Array16[fn24Result17],
              atan22 = Math.atan2(Math.max(1, v641 - fn191Result), Math.max(1, n231)),
              v642 = 0.85 * v641 - 0.15 * n231 - 15 * Math.abs(v636) + 11 * Math.min(0.45, atan22);
            (v634 && Math.sign(v636) === v634 && (v642 += 4.5),
              v642 > v633 &&
                ((v633 = v642),
                (v632 = {
                  yawOffset: v636,
                  pitch: Math.max(0.16, Math.min(0.36, 0.09 + 0.44 * atan22)),
                  height: v641,
                  distance: n231,
                })));
            break;
          }
        }
        return v632;
      })();
      (v631
        ? ((n79 = v631.yawOffset),
          (v48 = v631.pitch),
          (n78 = 1.55 + Math.min(0.75, v631.height / 90)))
        : ((n79 = 0), (v48 = n74), (n78 = 0.9)),
        (n77 = 10 + 7 * hash2(211 * n82 + 71, 29 * (0 | view.x) + 31 * (0 | view.z))));
    } else
      n78 <= 0 &&
        ((n79 *= Math.max(0, 1 - 1.25 * arg394)), (v48 += (n74 - v48) * Math.min(1, 1.1 * arg394)));
    if (n80 <= 0) {
      let v643 = v608 ? 1.65 : 0.72,
        v644 = fn197((v608 ? v607 : yaw2 + n79) - yaw) * Math.min(1, arg394 * v643),
        v645 = 1.15 * Math.max(0, arg394);
      ((yaw += Math.max(-v645, Math.min(v645, v644))),
        (pitch += (v48 - pitch) * Math.min(1, 0.68 * arg394)));
    }
  }
  function fn134() {
    let v646 = n90 > 0 ? yaw3 : yaw2,
      v647 = v646,
      v648 = -1000000000,
      arr59 = [
        0,
        0.261799,
        -0.261799,
        0.523599,
        -0.523599,
        0.785398,
        -0.785398,
        1.047198,
        -1.047198,
        1.570796,
        -1.570796,
        Math.PI,
      ];
    for (let n232 = 0; n232 < arr59.length; n232++) {
      let v649 = v646 + arr59[n232],
        sin7 = Math.sin(v649),
        v650 = -Math.cos(v649);
      for (let n233 = 0; n233 < arr13.length; n233++) {
        let v651 = arr13[n233],
          v652 = view.x + sin7 * v651,
          v653 = view.z + v650 * v651;
        if (v652 < 2 || v653 < 2 || v652 > 510 || v653 > 510 || !fn124(v652, v653, 0.25)) continue;
        let v654 =
            fn113(fn112(view.x, view.z)) &&
            fn115(
              {
                x: view.x,
                z: view.z,
              },
              {
                x: v652,
                z: v653,
              },
            ),
          v655 =
            18 -
            2.8 * Math.abs(arr59[n232]) -
            0.18 * v651 +
            ("city" === zone ? 0.3 * fn107(Math.floor(v652), Math.floor(v653)) : 0) +
            (fn113(fn112(v652, v653)) ? 5 : 0) -
            (v654 ? 110 : 0);
        v655 > v648 && ((v648 = v655), (v647 = v649));
        break;
      }
    }
    return v647;
  }
  var n95 = 1.15,
    roomN = 32,
    uint8Array24 = new Uint8Array(roomN * roomN),
    uint8Array25 = new Uint8Array(roomN * roomN),
    uint16Array8 = new Uint16Array(roomN * roomN),
    float32Array31 = new Float32Array(roomN * roomN),
    uint8Array26 = new Uint8Array(roomN * roomN),
    uint8Array27 = new Uint8Array(roomN * roomN),
    fn135 = (arg396, arg397) => arg397 * roomN + arg396,
    n97 = 9.2,
    n98 = 32,
    uint8Array28 = new Uint8Array(n98 * n98),
    uint8Array29 = new Uint8Array(n98 * n98),
    uint16Array9 = new Uint16Array(n98 * n98),
    float32Array32 = new Float32Array(n98 * n98),
    uint8Array30 = new Uint8Array(n98 * n98),
    uint8Array31 = new Uint8Array(n98 * n98),
    fn136 = (arg398, arg399) => arg399 * n98 + arg398,
    n99 = 18,
    uint8Array32 = new Uint8Array(n99 * n99),
    uint8Array33 = new Uint8Array(n99 * n99),
    uint16Array10 = new Uint16Array(n99 * n99),
    float32Array33 = new Float32Array(n99 * n99),
    uint8Array34 = new Uint8Array(n99 * n99),
    uint8Array35 = new Uint8Array(n99 * n99),
    fn137 = (arg400, arg401) => arg401 * n99 + arg400,
    int16Array17 = new Int16Array(worldN * worldN);
  int16Array17.fill(-1);
  var arr16 = [];
  function fn138() {
    (int16Array17.fill(-1), (arr16.length = 0));
    let int32Array3 = new Int32Array(worldN * worldN);
    for (let n234 = 0; n234 < worldN * worldN; n234++) {
      if (!fn6(n234) || -1 !== int16Array17[n234]) continue;
      let length2 = arr16.length,
        v656 = uint16Array7[n234],
        n235 = 0,
        n236 = 0;
      ((int32Array3[n236++] = n234), (int16Array17[n234] = length2));
      let arr60 = [];
      for (; n235 < n236;) {
        let v657 = int32Array3[n235++],
          v658 = v657 % worldN,
          v659 = (v657 / worldN) | 0;
        arr60.push({
          x: v658,
          z: v659,
        });
        for (let [v660, v661] of [
          [v658 - 1, v659],
          [v658 + 1, v659],
          [v658, v659 - 1],
          [v658, v659 + 1],
        ]) {
          if (v660 < 1 || v661 < 1 || v660 >= 511 || v661 >= 511) continue;
          let fn24Result18 = worldIndex(v660, v661);
          -1 !== int16Array17[fn24Result18] ||
            !fn6(fn24Result18) ||
            uint16Array7[fn24Result18] !== v656 ||
            ((int16Array17[fn24Result18] = length2), (int32Array3[n236++] = fn24Result18));
        }
      }
      let n237 = 0;
      for (let v662 of arr60) n237 = Math.max(n237, uint8Array16[worldIndex(v662.x, v662.z)]);
      let reduce = arr60.reduce(
          (arg402, arg403) =>
            arg403.z < arg402.z || (arg403.z === arg402.z && arg403.x < arg402.x) ? arg403 : arg402,
          arr60[0],
        ),
        fn5Result = fn5(reduce.x, reduce.z, v656);
      arr16.push({
        id: length2,
        worldId: fn5Result,
        cells: arr60,
        height: n237,
        planId: v656,
        architecture: uint8Array23[n234],
        front: true,
        left: false,
        right: false,
      });
    }
  }
  function fn139() {
    let map26 = new Map(),
      arr61 = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ];
    for (let n238 = 1; n238 < 511; n238++)
      for (let n239 = 1; n239 < 511; n239++) {
        let v663 = int16Array17[worldIndex(n239, n238)];
        if (!(v663 < 0))
          for (let [v664, v665] of arr61) {
            let v666 = -v665,
              v667 = v664,
              fn423 = (arg404) => {
                let v670 = n239 + v666 * arg404,
                  v671 = n238 + v667 * arg404,
                  v672 = v670 + v664,
                  v673 = v671 + v665,
                  v674 = v670 - v664,
                  v675 = v671 - v665;
                if (
                  v670 < 1 ||
                  v671 < 1 ||
                  v670 >= 511 ||
                  v671 >= 511 ||
                  v672 < 0 ||
                  v673 < 0 ||
                  v672 >= worldN ||
                  v673 >= worldN ||
                  v674 < 0 ||
                  v675 < 0 ||
                  v674 >= worldN ||
                  v675 >= worldN
                )
                  return false;
                let fn24Result19 = worldIndex(v672, v673);
                return (
                  int16Array17[worldIndex(v670, v671)] === v663 &&
                  !fn6(fn24Result19) &&
                  1 === uint8Array18[fn24Result19] &&
                  int16Array17[worldIndex(v674, v675)] === v663
                );
              };
            if (!fn423(0) || !fn423(1)) continue;
            let n240 = 0,
              n241 = 0;
            for (; n240 < 24 && fn423(-1 - n240);) n240++;
            for (; n241 < 24 && fn423(2 + n241);) n241++;
            if (n240 < 1 || n241 < 1) continue;
            let map27 = [0, 1].map((arg405) => {
                let v676 = n239 + v666 * arg405,
                  v677 = n238 + v667 * arg405;
                return {
                  fx: v676,
                  fz: v677,
                  ox: v676 + v664,
                  oz: v677 + v665,
                  ix: v676 - v664,
                  iz: v677 - v665,
                };
              }),
              v668 = (map27[0].ox + map27[1].ox + 1) / 2,
              v669 = (map27[0].oz + map27[1].oz + 1) / 2,
              obj35 = {
                x: n239,
                z: n238,
                dx: v664,
                dz: v665,
                tx: v666,
                tz: v667,
                cells: map27,
                outCenterX: v668,
                outCenterZ: v669,
                innerCenterX: (map27[0].ix + map27[1].ix + 1) / 2,
                innerCenterZ: (map27[0].iz + map27[1].iz + 1) / 2,
                leftRun: n240,
                rightRun: n241,
                d: (v668 - v35) ** 2 + (v669 - v35) ** 2,
                buildingId: v663,
                doorWorldX: Math.floor(toWorldX(v668)),
                doorWorldZ: Math.floor(toWorldZ(v669)),
              };
            obj35.cluttered = map27.some((arg406) =>
              arr2.some(
                (arg407) =>
                  (arg407.x - arg406.ox - 0.5) ** 2 + (arg407.z - arg406.oz - 0.5) ** 2 < 1.5,
              ),
            );
            let floor33 = Math.floor(toWorldX(v668)),
              floor34 = Math.floor(toWorldZ(v669));
            ((obj35.score =
              (Math.min(n240, n241) < 2 ? 1000 : 0) +
              100 * Math.abs(n240 - n241) +
              0.01 * hash2(131 * floor33 + 17, 137 * floor34 + 29)),
              (obj35.signature = floor33 + "," + floor34 + ":" + v664 + "," + v665),
              (!map26.has(v663) || obj35.score < map26.get(v663).score) && map26.set(v663, obj35));
          }
      }
    return Array.from(map26.values()).sort((arg408, arg409) => arg408.d - arg409.d);
  }
  fn138();
  var fn139Result = fn139(),
    v53 = fn139Result[0],
    v54 = arr16[v53.buildingId],
    worldId = v54.worldId,
    v55 =
      (fn139Result.slice(1),
      fn139Result.map((arg410, arg411) => {
        let v678 = arr16[arg410.buildingId],
          fn424 = (arg412, arg413) =>
            v678.cells.some(
              (arg414) =>
                int16Array17[worldIndex(arg414.x + arg412, arg414.z + arg413)] !== v678.id &&
                1 === uint8Array18[worldIndex(arg414.x + arg412, arg414.z + arg413)],
            );
        return (
          (v678.left = fn424(-arg410.tx, -arg410.tz)),
          (v678.right = fn424(arg410.tx, arg410.tz)),
          {
            entrance: arg410,
            building: v678,
            hero: v678.worldId === worldId,
            index: arg411,
            worldId: v678.worldId,
          }
        );
      })),
    uint8Array36 = new Uint8Array(worldN * worldN),
    uint8Array37 = new Uint8Array(worldN * worldN),
    int16Array18 = new Int16Array(worldN * worldN);
  int16Array18.fill(-1);
  var uint8Array38 = new Uint8Array(worldN * worldN),
    int16Array19 = new Int16Array(worldN * worldN);
  int16Array19.fill(-1);
  var arr17 = [];
  for (let n242 = 0; n242 < v55.length; n242++) {
    let v679 = v55[n242],
      entrance = v679.entrance;
    for (let v680 of v679.building.cells)
      ((uint8Array38[worldIndex(v680.x, v680.z)] = 1),
        (int16Array19[worldIndex(v680.x, v680.z)] = n242));
    for (let v681 of entrance.cells) {
      for (let [v682, v683] of [
        [v681.fx, v681.fz],
        [v681.ix, v681.iz],
      ])
        ((uint8Array17[worldIndex(v682, v683)] = 0),
          (uint8Array16[worldIndex(v682, v683)] = 0),
          (uint8Array18[worldIndex(v682, v683)] = 1),
          (uint8Array36[worldIndex(v682, v683)] = 1),
          (int16Array18[worldIndex(v682, v683)] = n242));
      uint8Array37[worldIndex(v681.ix - entrance.dx, v681.iz - entrance.dz)] = 1;
    }
    let obj36 = {
      x: (entrance.cells[0].fx + entrance.cells[1].fx + 1) / 2 + 0.025 * entrance.dx,
      z: (entrance.cells[0].fz + entrance.cells[1].fz + 1) / 2 + 0.025 * entrance.dz,
      kind: n48,
      h: 3.65,
      w: 2.35,
      axis: 1 === Math.abs(entrance.tx) ? 0 : 1,
      _depth: 0,
      _col: 0,
      siteIndex: n242,
    };
    ((v679.frame = obj36), arr17.push(obj36));
    for (let v684 of arr2)
      (v684.x - obj36.x) ** 2 + (v684.z - obj36.z) ** 2 < 2.1 && (v684.entranceOccluded = true);
  }
  function fn140(arg415, arg416) {
    let arr62 = [];
    for (let n243 = 0; n243 <= 3; n243++)
      for (let v685 = -2; v685 <= 3; v685++) {
        let floor35 = Math.floor(arg415.outCenterX + arg415.dx * n243 + arg415.tx * v685),
          floor36 = Math.floor(arg415.outCenterZ + arg415.dz * n243 + arg415.tz * v685);
        if (floor35 < 1 || floor36 < 1 || floor35 >= 511 || floor36 >= 511) continue;
        let fn24Result20 = worldIndex(floor35, floor36);
        ((2 === uint8Array17[fn24Result20] || 3 === uint8Array17[fn24Result20]) &&
          ((uint8Array17[fn24Result20] = 0), (uint8Array16[fn24Result20] = 0)),
          arr62.push([floor35 + 0.5, floor36 + 0.5]));
      }
    for (let v686 of arr2) {
      let v687 = v686.x - arg416.x,
        v688 = v686.z - arg416.z;
      v687 * v687 + v688 * v688 < 11.2225 && (v686.entranceOccluded = true);
    }
  }
  for (let n244 = 0; n244 < v55.length; n244++) fn140(v55[n244].entrance, arr17[n244]);
  var v56 = arr17[0],
    freeze14 = Object.freeze([
      Object.freeze({
        name: "MERIDIAN TOWER",
        target: [0.14, 0.15],
        architecture: 1,
      }),
      Object.freeze({
        name: "ATLAS SPIRE",
        target: [0.5, 0.13],
        architecture: 2,
      }),
      Object.freeze({
        name: "ZENITH TOWER",
        target: [0.84, 0.18],
        architecture: 3,
      }),
      Object.freeze({
        name: "FOUNDRY STACK",
        target: [0.18, 0.43],
        architecture: 2,
      }),
      Object.freeze({
        name: "GLASS CROWN",
        target: [0.68, 0.4],
        architecture: 3,
      }),
      Object.freeze({
        name: "VECTOR SPIRE",
        target: [0.85, 0.52],
        architecture: 1,
      }),
      Object.freeze({
        name: "RELAY STACK",
        target: [0.26, 0.76],
        architecture: 2,
      }),
      Object.freeze({
        name: "HORIZON TOWER",
        target: [0.76, 0.78],
        architecture: 1,
      }),
    ]);
  function fn141(arg417) {
    let filter2 = String(arg417)
      .replace(/^THE\s+/, "")
      .split(/\s+/)
      .filter(Boolean);
    return (filter2[0][0] + (filter2[1] ? filter2[1][0] : filter2[0][1] || "X")).toUpperCase();
  }
  function fn142(arg418, arg419, arg420) {
    let v689 = 8 * arg418,
      v690 = 8 * arg419;
    return (
      1 === arg420
        ? ((v689 += 6), (v690 += 6))
        : 2 === arg420
          ? ((v689 += 6), (v690 += 5))
          : 3 === arg420 && ((v689 += 5), (v690 += 6)),
      (((Math.imul(v689, 40503) ^ Math.imul(v690, 21701) ^ (v689 >>> 3) ^ (v690 << 5)) >>> 0) %
        65534) +
        1
    );
  }
  var v57 = (function () {
      let arr63 = [
        {
          id: "signal_keeper",
          name: "THE SIGNAL KEEPER",
          shortName: "SIGNAL KEEPER",
          code: "SK",
          x: freeze8.x0 + 8,
          z: freeze8.cz,
          glyph: "*",
          kind: "MONUMENT",
          worldId: null,
        },
      ];
      for (let n245 = 0; n245 < freeze14.length; n245++) {
        let v691 = freeze14[n245],
          target = v691.target,
          floor37 = Math.floor((target[0] * n10) / n30),
          floor38 = Math.floor((target[1] * n10) / n30),
          v692 = null,
          v693 = -1000000000;
        for (let v695 = -12; v695 <= 12; v695++)
          for (let v696 = -12; v696 <= 12; v696++) {
            let v697 = floor37 + v696,
              v698 = floor38 + v695;
            if (v697 < 2 || v698 < 2 || v697 >= n10 / n30 - 2 || v698 >= n10 / n30 - 2) continue;
            let fn35Result4 = fn35(v697, v698);
            if (fn35Result4.park || fn35Result4.architecture !== v691.architecture) continue;
            let v699 = v697 * n30 + 0.5 * n30,
              v700 = v698 * n30 + 0.5 * n30;
            if (arr63.some((arg421) => Math.hypot(arg421.x - v699, arg421.z - v700) < 420))
              continue;
            let v701 = 8 * fn35Result4.landmarkSeed - 0.1 * Math.hypot(v696, v695);
            v701 > v693 &&
              ((v693 = v701),
              (v692 = {
                bx: v697,
                bz: v698,
                x: v699,
                z: v700,
                architecture: fn35Result4.architecture,
              }));
          }
        if (!v692) continue;
        let fn142Result = fn142(v692.bx, v692.bz, v692.architecture),
          v694 = "building:" + v692.bx + ":" + v692.bz + ":" + fn142Result;
        arr63.push({
          id: v691.name.toLowerCase().replace(/[^a-z0-9]+/g, "_"),
          name: v691.name,
          shortName: v691.name,
          code: fn141(v691.name),
          x: v692.x,
          z: v692.z,
          glyph: "*",
          kind: "BUILDING",
          architecture: v692.architecture,
          blockX: v692.bx,
          blockZ: v692.bz,
          planId: fn142Result,
          worldId: v694,
        });
      }
      return Object.freeze(arr63.map((arg422) => Object.freeze(arg422)));
    })(),
    map7 = new Map(
      v57.filter((arg423) => arg423.worldId).map((arg424) => [arg424.worldId, arg424]),
    );
  function fn143(arg425) {
    return (arg425 && map7.get(arg425)) || null;
  }
  var freeze15 = Object.freeze([
      Object.freeze({
        name: "ORCHARD",
        era: "MUNICIPAL",
        character: "older residential expansion and civic parkland",
      }),
      Object.freeze({
        name: "LANTERN",
        era: "FIRST",
        character: "old mixed-use streets, markets and night districts",
      }),
      Object.freeze({
        name: "ATLAS",
        era: "VERTICAL",
        character: "monumental administrative and corporate development",
      }),
      Object.freeze({
        name: "HORIZON",
        era: "MUNICIPAL",
        character: "planned residential expansion and tower estates",
      }),
      Object.freeze({
        name: "FOUNDRY",
        era: "INDUSTRIAL",
        character: "early heavy industry and manufacturing",
      }),
      Object.freeze({
        name: "CALDER",
        era: "CIVIC",
        character: "old municipal works and mixed historic neighbourhoods",
      }),
      Object.freeze({
        name: "MERIDIAN",
        era: "VERTICAL",
        character: "commercial centre and vertical-era redevelopment",
      }),
      Object.freeze({
        name: "TERMINAL",
        era: "RELAY",
        character: "freight, warehouses and interchange infrastructure",
      }),
      Object.freeze({
        name: "HALCYON",
        era: "MUNICIPAL",
        character: "green civic and residential districts",
      }),
      Object.freeze({
        name: "SIGNAL",
        era: "FIRST",
        character: "the First Grid, Central Park and early communications history",
      }),
      Object.freeze({
        name: "VECTOR",
        era: "VERTICAL",
        character: "dense metropolitan redevelopment",
      }),
      Object.freeze({
        name: "CROWN",
        era: "VERTICAL",
        character: "prestige commercial towers and old wealth",
      }),
      Object.freeze({
        name: "CONDUIT",
        era: "RELAY",
        character: "utilities, logistics and service corridors",
      }),
      Object.freeze({
        name: "RELAY",
        era: "RELAY",
        character: "switching yards and communications infrastructure",
      }),
      Object.freeze({
        name: "AURORA",
        era: "MUNICIPAL",
        character: "later planned mixed residential development",
      }),
      Object.freeze({
        name: "VANTAGE",
        era: "VERTICAL",
        character: "high-rise prestige development and skyline towers",
      }),
    ]),
    freeze16 = Object.freeze({
      FIRST: Object.freeze([
        "MERCER",
        "CHARTER",
        "BELL",
        "ASSEMBLY",
        "MARKET",
        "STATION",
        "CHAPEL",
        "EXCHANGE",
        "GUILD",
        "ARCHIVE",
        "COURT",
        "FERRY",
        "UNION",
        "CROWN",
        "MARR",
        "ORRELL",
        "SAYER",
        "RENN",
        "IVES",
        "FENN",
      ]),
      INDUSTRIAL: Object.freeze([
        "CALDER",
        "FOUNDRY",
        "IRON",
        "COPPER",
        "CINDER",
        "FURNACE",
        "BOILER",
        "WORKS",
        "MILL",
        "FORGE",
        "KILN",
        "DOCK",
        "FREIGHT",
        "STEEL",
        "SMELTER",
        "VOSS",
        "MARR",
        "HALDEN",
        "LOWE",
        "TORR",
      ]),
      RELAY: Object.freeze([
        "SIGNAL",
        "RELAY",
        "CABLE",
        "JUNCTION",
        "TERMINAL",
        "CIRCUIT",
        "CONDUIT",
        "SWITCH",
        "CARRIER",
        "LINK",
        "DIAL",
        "TOWER",
        "LINE",
        "BEACON",
        "STATIC",
        "TERN",
        "WYNN",
        "CORREN",
        "ARDEN",
        "VALE",
      ]),
      VERTICAL: Object.freeze([
        "MERIDIAN",
        "ATLAS",
        "ZENITH",
        "VANTAGE",
        "GLASS",
        "VECTOR",
        "PINNACLE",
        "PRISM",
        "SUMMIT",
        "ORBIT",
        "APEX",
        "CITADEL",
        "CRESCENT",
        "CROWN",
        "PARALLAX",
        "BLAKE",
        "HART",
        "DANE",
        "ROWAN",
        "ELLIS",
      ]),
      MUNICIPAL: Object.freeze([
        "HORIZON",
        "PROSPECT",
        "ORCHARD",
        "GARDEN",
        "UNITY",
        "PIONEER",
        "HALCYON",
        "AURORA",
        "MEADOW",
        "PARK",
        "GROVE",
        "COMMON",
        "TERRACE",
        "GREEN",
        "BEACON",
        "ASH",
        "ARDEN",
        "VALE",
        "ELLIS",
        "ROWAN",
      ]),
      CIVIC: Object.freeze([
        "CALDER",
        "MERCER",
        "CHARTER",
        "BELL",
        "VALE",
        "ORRELL",
        "SAYER",
        "UNION",
        "ASSEMBLY",
        "ARCHIVE",
        "GUILD",
        "MARKET",
        "CROWN",
        "STATION",
        "PROSPECT",
        "MARR",
        "IVES",
        "HART",
        "FENN",
        "DANE",
      ]),
    }),
    freeze17 = Object.freeze(Array.from(new Set(Object.values(freeze16).flat()))),
    freeze18 = Object.freeze(["STREET", "ROAD", "LANE", "ROW", "AVENUE", "WAY", "DRIVE", "PLACE"]),
    freeze19 = Object.freeze({
      CORE: [
        "MERIDIAN",
        "MERCER",
        "CROWN",
        "GLASS",
        "ATLAS",
        "CHARTER",
        "VANTAGE",
        "BELL",
        "VECTOR",
        "EXCHANGE",
        "CALDER",
        "PRISM",
      ],
      INDUSTRIAL: [
        "CINDER",
        "CALDER",
        "IRON",
        "COPPER",
        "FURNACE",
        "FOUNDRY",
        "BOILER",
        "CABLE",
        "RELAY",
        "TERMINAL",
        "MARR",
        "VOSS",
        "SWITCH",
        "FREIGHT",
      ],
      OLD_TOWN: [
        "MERCER",
        "BELL",
        "CHARTER",
        "LANTERN",
        "MARR",
        "ORRELL",
        "CROWN",
        "MARKET",
        "CALDER",
        "SIGNAL",
        "VALE",
        "SAYER",
        "ASSEMBLY",
      ],
      RESIDENTIAL: [
        "HORIZON",
        "PROSPECT",
        "ORCHARD",
        "HALCYON",
        "BEACON",
        "VALE",
        "ASH",
        "ROWAN",
        "ARDEN",
        "GARDEN",
        "BELL",
        "MERCER",
        "AURORA",
      ],
      COMMERCIAL: [
        "MERIDIAN",
        "CROWN",
        "ATLAS",
        "GLASS",
        "PRISM",
        "VANTAGE",
        "VECTOR",
        "MERCER",
        "EXCHANGE",
        "LANTERN",
        "BELL",
        "CALDER",
      ],
      PARKLAND: [
        "HALCYON",
        "ORCHARD",
        "CHARTER",
        "SIGNAL",
        "AURORA",
        "PROSPECT",
        "GARDEN",
        "COMMON",
        "VALE",
        "BELL",
        "MEADOW",
        "GREEN",
      ],
      TOWER_ESTATE: [
        "HORIZON",
        "VANTAGE",
        "BEACON",
        "SUMMIT",
        "HALCYON",
        "PROSPECT",
        "ATLAS",
        "ARDEN",
        "ROWAN",
        "CROWN",
        "AURORA",
        "VALE",
      ],
      MIXED: [
        "MERCER",
        "CALDER",
        "BELL",
        "SIGNAL",
        "LANTERN",
        "VALE",
        "RELAY",
        "CHARTER",
        "ARDEN",
        "MARR",
        "VECTOR",
        "ORCHARD",
      ],
    }),
    freeze20 = Object.freeze({
      CORE: ["QUARTER", "EXCHANGE", "CENTRE", "GATE", "CROSS", "WARD"],
      INDUSTRIAL: ["YARDS", "WORKS", "WARD", "BASIN", "DEPOT", "END", "FIELDS"],
      OLD_TOWN: ["QUARTER", "WARD", "MARKET", "END", "CROSS", "GATE"],
      RESIDENTIAL: ["ROW", "GARDENS", "ESTATE", "HEIGHTS", "RISE", "FIELDS", "TERRACE"],
      COMMERCIAL: ["QUARTER", "EXCHANGE", "ARCADE", "MARKET", "CENTRE", "GATE"],
      PARKLAND: ["GARDENS", "GREEN", "COMMON", "FIELDS", "PARK", "MEADOW"],
      TOWER_ESTATE: ["ESTATE", "HEIGHTS", "TOWERS", "BLOCKS", "COURT", "RISE"],
      MIXED: ["WARD", "QUARTER", "CROSS", "END", "ROW", "GATE"],
    }),
    freeze21 = Object.freeze([
      "MERCER",
      "CALDER",
      "VOSS",
      "MARR",
      "HALDEN",
      "ORRELL",
      "SAYER",
      "RENN",
      "VALE",
      "TERN",
      "WYNN",
      "CORREN",
      "ELLIS",
      "ARDEN",
      "LOWE",
      "HART",
      "FENN",
      "DANE",
      "ROWAN",
      "IVES",
      "BLAKE",
      "TORR",
    ]);
  function fn144(arg426, arg427) {
    return ((arg426 % arg427) + arg427) % arg427;
  }
  function fn145(arg428, arg429) {
    return Math.max(0, Math.min(15, 4 * arg429 + arg428));
  }
  function fn146(arg430, arg431) {
    return {
      ix: Math.max(0, Math.min(3, Math.floor((arg430 / n10) * 4))),
      iz: Math.max(0, Math.min(3, Math.floor((arg431 / n10) * 4))),
    };
  }
  function fn147(arg432) {
    let filter3 = String(arg432 || "")
      .trim()
      .split(/\s+/)
      .filter(Boolean);
    for (
      ;
      filter3.length &&
      ["THE", "OLD", "NEW", "LOWER", "UPPER", "NORTH", "SOUTH", "EAST", "WEST"].includes(
        filter3[0],
      );
    )
      filter3.shift();
    return filter3[0] || String(arg432 || "").trim();
  }
  function fn148(arg433) {
    let v702 =
      String(arg433 || "")
        .trim()
        .split(/\s+/)[0] || "";
    return ["THE", "OLD", "NEW", "LOWER", "UPPER", "NORTH", "SOUTH", "EAST", "WEST"].includes(v702)
      ? v702
      : "";
  }
  function fn149(arg434) {
    let filter4 = String(arg434 || "")
      .trim()
      .split(/\s+/)
      .filter(Boolean);
    for (
      ;
      filter4.length > 1 &&
      ["THE", "OLD", "NEW", "LOWER", "UPPER", "NORTH", "SOUTH", "EAST", "WEST"].includes(
        filter4[0],
      );
    )
      filter4.shift();
    if (filter4.length < 2) return true;
    let fn425 = (arg435) =>
      String(arg435).replace(/IES$/, "Y").replace(/S$/, "").replace(/EN$/, "").toUpperCase();
    return fn425(filter4[0]) !== fn425(filter4[filter4.length - 1]);
  }
  function fn150(arg436, arg437, arg438, arg439, arg440) {
    let v703 = freeze19[arg438] || freeze19.MIXED,
      v704 = freeze20[arg438] || freeze20.MIXED,
      v705 = freeze16[arg439.era] || freeze17,
      from12 = Array.from(new Set([...v703, ...v705, ...freeze21, ...freeze17])),
      v706 = 181 * arg436 + 197 * arg437 + 3911 + 977 * arg440,
      v707 =
        arg440 < 48
          ? v703
          : arg440 < 112
            ? Array.from(new Set([...v703, ...v705, ...freeze21]))
            : from12,
      v708 =
        v707[
          Math.floor(hash2(v706 + 17, 73 * arg436 + 29 * arg437 + 11 * arg440) * v707.length) %
            v707.length
        ],
      v709 =
        v704[
          Math.floor(hash2(v706 + 43, 89 * arg437 + 31 * arg436 + 17 * arg440) * v704.length) %
            v704.length
        ],
      fn144Result = fn144(Math.floor(12 * hash2(v706 + 71, 53 * arg440 + arg436 - arg437)), 12);
    return 0 === fn144Result && "INDUSTRIAL" === arg438
      ? ["THE YARDS", "THE WORKS", "THE BASIN"][
          fn144(Math.floor(3 * hash2(v706 + 97, arg440 + 7 * arg436 + 13 * arg437)), 3)
        ]
      : 0 === fn144Result && "PARKLAND" === arg438
        ? ["THE COMMON", "THE GREEN", "THE MEADOW"][
            fn144(Math.floor(3 * hash2(v706 + 101, arg440 + 11 * arg436 + 5 * arg437)), 3)
          ]
        : 1 === fn144Result
          ? "LOWER " + v708
          : 2 === fn144Result && "OLD_TOWN" === arg438
            ? "OLD " + v708
            : 3 === fn144Result && ["RESIDENTIAL", "MIXED"].includes(arg438)
              ? "NEW " + v708
              : 4 === fn144Result && arg439.name !== v708
                ? arg439.name + " " + v709
                : v708 + " " + v709;
  }
  var v58 = (function () {
    let n246 = 2048,
      map28 = freeze15.map((arg441, arg442) => {
        let v711 = arg442 % 4,
          v712 = (arg442 / 4) | 0,
          v713 = (v711 + 0.5) * n246,
          v714 = (v712 + 0.5) * n246,
          fn7Result2 = fn7(Math.floor(v713 / 128), Math.floor(v714 / 128));
        return Object.freeze({
          ...arg441,
          ix: v711,
          iz: v712,
          type: fn7Result2.type,
          x0: v711 * n246,
          z0: v712 * n246,
        });
      }),
      ceil3 = Math.ceil(16),
      array2 = new Array(ceil3 * ceil3),
      set3 = new Set(["CHARTER WARD"]),
      map29 = new Map(),
      map30 = new Map(),
      map31 = new Map();
    for (let n247 = 0; n247 < ceil3; n247++)
      for (let n248 = 0; n248 < ceil3; n248++) {
        let fn7Result3 = fn7(4 * n248 + 2, 4 * n247 + 2),
          fn146Result = fn146((n248 + 0.5) * n13, (n247 + 0.5) * n13),
          v715 = map28[fn145(fn146Result.ix, fn146Result.iz)],
          v716 = v715.ix + ":" + v715.iz;
        (map29.has(v716) || map29.set(v716, new Set()),
          map31.has(v716) || map31.set(v716, new Map()));
        let get7 = map29.get(v716),
          get8 = map31.get(v716),
          s7 = "";
        if (n248 === floor && n247 === floor2) s7 = "CHARTER WARD";
        else
          for (let n249 = 0; n249 < 360 && !s7; n249++) {
            let fn150Result = fn150(n248, n247, fn7Result3.type, v715, n249),
              fn147Result2 = fn147(fn150Result),
              fn148Result2 = fn148(fn150Result),
              v717 = fn147Result2 === v715.name,
              v718 = map30.get(v716) || 0,
              v719 = "OLD" === fn148Result2 ? 2 : fn148Result2 ? 1 : 999,
              v720 = (fn148Result2 && get8.get(fn148Result2)) || 0;
            set3.has(fn150Result) ||
              get7.has(fn147Result2) ||
              (v717 && v718 >= 1) ||
              v720 >= v719 ||
              !fn149(fn150Result) ||
              (s7 = fn150Result);
          }
        if (!s7) {
          s7 =
            (freeze21.find((arg443) => !get7.has(arg443)) ||
              "WARD" + String(n247 * ceil3 + n248 + 1).padStart(3, "0")) +
            " " +
            (freeze20[fn7Result3.type] || freeze20.MIXED)[
              fn144(n248 + n247, (freeze20[fn7Result3.type] || freeze20.MIXED).length)
            ];
          let n250 = 2,
            v721 = s7;
          for (; set3.has(s7);) s7 = v721 + " " + n250++;
        }
        let fn147Result = fn147(s7),
          fn148Result = fn148(s7);
        (set3.add(s7),
          get7.add(fn147Result),
          fn147Result === v715.name && map30.set(v716, (map30.get(v716) || 0) + 1),
          fn148Result && get8.set(fn148Result, (get8.get(fn148Result) || 0) + 1),
          (array2[n247 * ceil3 + n248] = Object.freeze({
            type: fn7Result3.type,
            name: s7,
            core: fn147Result,
            districtX: n248,
            districtZ: n247,
            x0: n248 * n13,
            z0: n247 * n13,
            sector: v715.name,
            era: v715.era,
          })));
      }
    let v710 = Math.floor(n10 / n30) + 1,
      obj37 = {
        X: new Array(v710),
        Z: new Array(v710),
      },
      set4 = new Set(),
      map32 = new Map(),
      fn426 = (arg444, arg445, arg446) => {
        let round7 = Math.round(arg445 / n30);
        round7 >= 0 &&
          round7 < v710 &&
          !set4.has(arg446) &&
          (map32.set(arg444 + ":" + round7, arg446), set4.add(arg446));
      };
    (fn426("Z", freeze8.x0 - n31, "MERCER STREET"),
      fn426("Z", freeze8.x1, "CHARTER STREET"),
      fn426("X", freeze8.z0 - n31, "BELL ROW"),
      fn426("X", freeze8.z1, "CROWN ROAD"));
    for (let v722 of ["X", "Z"])
      for (let n251 = 0; n251 < v710; n251++) {
        let v723 = v722 + ":" + n251,
          get9 = map32.get(v723);
        if (get9) {
          let split = get9.split(" ");
          obj37[v722][n251] = Object.freeze({
            axis: v722,
            index: n251,
            base: n251 * n30,
            root: split.slice(0, -1).join(" "),
            suffix: split.at(-1),
            name: get9,
            authored: true,
          });
          continue;
        }
        let v724 = n251 * n30,
          max42 = Math.max(0, Math.min(3, Math.floor(v724 / 2048))),
          floor39 = Math.floor(4 * hash2(113 * n251 + ("X" === v722 ? 17 : 31), 71 * max42 + 1907)),
          v725 =
            "X" === v722
              ? {
                  ix: floor39,
                  iz: max42,
                }
              : {
                  ix: max42,
                  iz: floor39,
                },
          v726 = map28[fn145(v725.ix, v725.iz)],
          v727 = freeze16[v726.era] || freeze17,
          s8 = "",
          s9 = "",
          s10 = "";
        for (let n252 = 0; n252 < 900 && !s8; n252++) {
          let v728 = n252 < 2 * v727.length ? v727 : freeze17;
          s9 =
            v728[
              fn144(
                Math.floor(
                  hash2(
                    79 * n251 + 37 * n252 + ("X" === v722 ? 1907 : 1709),
                    41 * max42 + 19 * n252,
                  ) * v728.length,
                ),
                v728.length,
              )
            ];
          let v729 = 0 === fn144(n251, 7) ? ["AVENUE", "ROAD", "WAY", "DRIVE"] : freeze18;
          s10 =
            v729[
              fn144(
                Math.floor(
                  hash2(43 * n251 + 23 * n252, 67 * n252 + ("X" === v722 ? 7 : 13)) * v729.length,
                ),
                v729.length,
              )
            ];
          let v730 = s9 + " " + s10;
          set4.has(v730) || ((s8 = v730), set4.add(v730));
        }
        (s8 ||
          ((s9 = v726.name),
          (s10 = "ROUTE"),
          (s8 = s9 + " " + s10 + " " + String(n251 + 1).padStart(3, "0")),
          set4.add(s8)),
          (obj37[v722][n251] = Object.freeze({
            axis: v722,
            index: n251,
            base: v724,
            name: s8,
            root: s9,
            suffix: s10,
            authored: false,
            sectorHint: v726.name,
            era: v726.era,
          })));
      }
    return Object.freeze({
      sectors: Object.freeze(map28),
      districts: Object.freeze(array2),
      streets: Object.freeze({
        X: Object.freeze(obj37.X),
        Z: Object.freeze(obj37.Z),
      }),
      districtCount: ceil3,
      streetCount: v710,
    });
  })();
  function fn151(arg447, arg448) {
    let fn146Result2 = fn146(arg447, arg448);
    return {
      ...v58.sectors[fn145(fn146Result2.ix, fn146Result2.iz)],
    };
  }
  function fn152(arg449, arg450) {
    let v731 = v58.districtCount - 1,
      max43 = Math.max(0, Math.min(v731, Math.floor(arg449 / n13))),
      max44 = Math.max(0, Math.min(v731, Math.floor(arg450 / n13)));
    return {
      ...v58.districts[max44 * v58.districtCount + max43],
    };
  }
  function fn153(arg451, arg452) {
    let v732 = "X" === arg451 ? "X" : "Z",
      max45 = Math.max(0, Math.min(v58.streetCount - 1, Math.round(arg452 / n30)));
    return {
      ...v58.streets[v732][max45],
    };
  }
  var arr18 = [
      {
        id: "retail",
        label: "RETAIL",
        hues: [165, 190, 42],
        layout: "aisles",
      },
      {
        id: "cafe",
        label: "CAFE",
        hues: [28, 42, 175],
        layout: "tables",
      },
      {
        id: "office",
        label: "OFFICE",
        hues: [205, 188, 220],
        layout: "desks",
      },
      {
        id: "clinic",
        label: "CLINIC",
        hues: [175, 195, 45],
        layout: "rooms",
      },
      {
        id: "workshop",
        label: "WORKSHOP",
        hues: [28, 12, 195],
        layout: "bays",
      },
      {
        id: "lobby",
        label: "RESIDENTIAL",
        hues: [42, 188, 292],
        layout: "lobby",
      },
      {
        id: "laundrette",
        label: "LAUNDRETTE",
        hues: [190, 205, 48],
        layout: "machines",
      },
      {
        id: "arcade",
        label: "ARCADE",
        hues: [292, 205, 48],
        layout: "arcade",
      },
    ],
    arr19 = [
      {
        id: "NEON_GRID",
        frameHue: 178,
        accentHue: 292,
        glassHue: 205,
        lightHue: 48,
        pattern: 0,
      },
      {
        id: "AMBER_BANDS",
        frameHue: 38,
        accentHue: 12,
        glassHue: 222,
        lightHue: 54,
        pattern: 1,
      },
      {
        id: "VIOLET_PANES",
        frameHue: 276,
        accentHue: 188,
        glassHue: 238,
        lightHue: 325,
        pattern: 2,
      },
      {
        id: "MINT_ARCADE",
        frameHue: 148,
        accentHue: 48,
        glassHue: 192,
        lightHue: 164,
        pattern: 3,
      },
      {
        id: "COBALT_STRIP",
        frameHue: 215,
        accentHue: 28,
        glassHue: 232,
        lightHue: 190,
        pattern: 4,
      },
      {
        id: "RED_TERMINAL",
        frameHue: 4,
        accentHue: 45,
        glassHue: 218,
        lightHue: 18,
        pattern: 5,
      },
    ];
  function fn154(arg453, arg454, arg455) {
    return (
      (Math.imul(arg453 + 1, 73856093) ^
        Math.imul(arg454 + 1, 19349663) ^
        Math.imul(arg455 + 1, 83492791)) >>>
      0
    );
  }
  var freeze22 = Object.freeze({
      retail: ["METROMART", "ATLAS SUPPLY", "CROWN PHARMACY", "VECTOR ELECTRICS"],
      cafe: ["RELAY COFFEE", "NIGHT SHIFT", "COPPER CUP", "LANTERN COFFEE"],
      office: ["MERIDIAN SYSTEMS", "CROWN DATA SERVICES", "ATLAS HOLDINGS"],
      clinic: ["CENTRAL MEDICAL", "HALCYON HEALTH", "MERIDIAN CLINIC"],
      workshop: ["CITY MOTOR WORKS", "RELAY REPAIRS", "CALDER INDUSTRIAL"],
      laundrette: ["QUICKWASH", "NIGHT WASH", "HORIZON LAUNDRY"],
      arcade: ["CIRCUIT HOUSE", "CROWN LEISURE", "VECTOR GAMES"],
    }),
    freeze23 = Object.freeze({
      CORE: ["HOUSE", "CHAMBERS", "TOWER", "EXCHANGE"],
      INDUSTRIAL: ["WORKS", "BUILDINGS", "YARD HOUSE", "DEPOT"],
      OLD_TOWN: ["HOUSE", "COURT", "CHAMBERS", "BUILDINGS"],
      RESIDENTIAL: ["HOUSE", "COURT", "MANSIONS", "TERRACE"],
      COMMERCIAL: ["HOUSE", "TOWER", "EXCHANGE", "ARCADE"],
      PARKLAND: ["HOUSE", "LODGE", "COURT"],
      TOWER_ESTATE: ["HOUSE", "COURT", "TOWER", "BLOCK"],
      MIXED: ["HOUSE", "COURT", "CHAMBERS", "BUILDINGS"],
      LEGACY: ["HOUSE", "COURT", "CHAMBERS", "BUILDINGS"],
    }),
    map8 = new Map();
  function fn155(arg456, arg457, arg458, arg459, arg460 = null) {
    let v733 =
        arg456 + ":" + arg457 + ":" + arg458 + ":" + arg459 + (arg460 ? ":" + arg460.id : ""),
      get10 = map8.get(v733);
    if (get10) return get10;
    let fn154Result = fn154(arg456, arg457, arg458),
      v734 = (function (arg461, arg462, arg463) {
        let fn154Result2 = fn154(arg461, arg462, arg463),
          v743 = hash2(fn154Result2 + 211, 31 * arg461 + 47 * arg462) > 0.5,
          v744 = hash2(fn154Result2 + 317, 59 * arg461 + 23 * arg462) > 0.5,
          v745 = v743 ? "Z" : "X",
          fn153Result = fn153(v745, ((v743 ? arg461 : arg462) + (v744 ? 1 : 0)) * n30),
          v746 = v743 ? arg462 : arg461,
          fn144Result2 = fn144(arg463, 8),
          max46 = Math.max(1, 16 * v746 + 2 * fn144Result2 + (v744 ? 2 : 1)),
          v747 = arg461 * n30 + 0.5 * n30,
          v748 = arg462 * n30 + 0.5 * n30,
          fn152Result = fn152(v747, v748),
          fn151Result = fn151(v747, v748);
        return {
          number: max46,
          street: fn153Result,
          address: max46 + " " + fn153Result.name,
          axis: v745,
          district: fn152Result,
          sector: fn151Result,
        };
      })(arg456, arg457, arg458),
      v735 = fn18(arg456 * n30 + 0.5 * n30, arg457 * n30 + 0.5 * n30)
        ? "LEGACY"
        : fn156(arg456, arg457),
      arr64 = [
        v734.street.root,
        v734.district.name.replace(/^(THE|OLD|NEW|LOWER)\s+/, "").split(" ")[0],
        freeze21[(fn154Result >>> 7) % freeze21.length],
      ],
      v736 = freeze23[v735] || freeze23.MIXED,
      v737 = ["CORE", "COMMERCIAL", "TOWER_ESTATE", "OLD_TOWN"].includes(v735) ? 0.56 : 0.28,
      v738 = arg460
        ? arg460.name
        : hash2(fn154Result + 811, 19 * arg456 + 13 * arg457) < v737
          ? arr64[(fn154Result >>> 9) % arr64.length] +
            " " +
            v736[(fn154Result >>> 13) % v736.length]
          : v734.address,
      v739 = freeze22[arg459] || [],
      v740 =
        v739.length && hash2(fn154Result + 977, 29 * arg456 + 37 * arg457) < 0.085
          ? v739[(fn154Result >>> 17) % v739.length]
          : null,
      v741 =
        "lobby" === arg459 || arg460
          ? null
          : v740 ||
            (function (arg464, arg465, arg466) {
              let v749 = freeze21[(arg465 >>> 5) % freeze21.length],
                v750 = freeze21[(arg465 >>> 11) % freeze21.length],
                v751 =
                  v749 +
                  " & " +
                  (v750 === v749 ? freeze21[((arg465 >>> 11) + 7) % freeze21.length] : v750) +
                  " " +
                  arg466.street.root,
                fn427 = (arg467, arg468) => arg467[(arg465 >>> arg468) % arg467.length];
              return "cafe" === arg464
                ? v751 + " " + fn427(["CAFE", "COFFEE", "COFFEE HOUSE", "TEA ROOM"], 3)
                : "workshop" === arg464
                  ? v751 +
                    " " +
                    fn427(["ENGINEERING", "FABRICATION", "WORKS", "MOTOR WORKS", "INDUSTRIAL"], 3)
                  : "retail" === arg464
                    ? v751 + " " + fn427(["GOODS", "SUPPLY", "HARDWARE", "MARKET", "TRADING"], 3)
                    : "clinic" === arg464
                      ? v751 +
                        " " +
                        fn427(["CLINIC", "MEDICAL", "HEALTH", "MEDICAL ROOMS", "SURGERY"], 3)
                      : "laundrette" === arg464
                        ? v751 + " " + fn427(["LAUNDRETTE", "LAUNDRY", "WASH"], 3)
                        : "arcade" === arg464
                          ? v751 + " " + fn427(["ARCADE", "LEISURE", "CIRCUIT HOUSE", "GAMES"], 3)
                          : "office" === arg464
                            ? v751 +
                              " " +
                              fn427(["SYSTEMS", "ASSOCIATES", "HOLDINGS", "SERVICES", "CO."], 3)
                            : null;
            })(arg459, fn154Result, v734),
      v742 = arg460 ? arg460.name : "lobby" === arg459 ? v738 : v741 || v738,
      freeze36 = Object.freeze({
        seed: fn154Result,
        address: v734.address,
        addressNumber: v734.number,
        street: v734.street.name,
        streetIdentity: v734.street,
        district: v734.district.name,
        sector: v734.sector.name,
        buildingName: v738,
        businessName: v741,
        displayName: v742,
        chain: !!v740,
      });
    if ((map8.set(v733, freeze36), map8.size > 4096)) {
      let n253 = 0;
      for (let v752 of map8.keys()) if ((map8["delete"](v752), ++n253 >= 2048)) break;
    }
    return freeze36;
  }
  var map9 = new Map();
  function fn156(arg469, arg470) {
    let v753 = arg469 * n30 + 0.5 * n30,
      v754 = arg470 * n30 + 0.5 * n30;
    return fn18(v753, v754) ? "LEGACY" : fn8(v753, v754).type;
  }
  function fn157(arg471, arg472, arg473) {
    let fn156Result = fn156(arg472, arg473),
      v755 = ((arg471 >>> 2) & 255) / 256,
      fn428 = (arg474) => arr18.find((arg475) => arg475.id === arg474);
    return "INDUSTRIAL" === fn156Result
      ? fn428(v755 < 0.62 ? "workshop" : v755 < 0.78 ? "office" : v755 < 0.9 ? "retail" : "clinic")
      : "RESIDENTIAL" === fn156Result
        ? fn428(v755 < 0.56 ? "lobby" : v755 < 0.76 ? "laundrette" : v755 < 0.9 ? "cafe" : "retail")
        : "TOWER_ESTATE" === fn156Result
          ? fn428(v755 < 0.66 ? "lobby" : v755 < 0.84 ? "laundrette" : "office")
          : "OLD_TOWN" === fn156Result
            ? fn428(
                v755 < 0.34 ? "cafe" : v755 < 0.62 ? "retail" : v755 < 0.82 ? "lobby" : "workshop",
              )
            : "PARKLAND" === fn156Result
              ? fn428(
                  v755 < 0.44 ? "cafe" : v755 < 0.72 ? "lobby" : v755 < 0.88 ? "clinic" : "retail",
                )
              : "COMMERCIAL" === fn156Result
                ? fn428(
                    v755 < 0.34
                      ? "office"
                      : v755 < 0.58
                        ? "retail"
                        : v755 < 0.74
                          ? "cafe"
                          : v755 < 0.88
                            ? "clinic"
                            : "arcade",
                  )
                : "CORE" === fn156Result
                  ? fn428(
                      v755 < 0.32
                        ? "office"
                        : v755 < 0.54
                          ? "retail"
                          : v755 < 0.7
                            ? "cafe"
                            : v755 < 0.84
                              ? "arcade"
                              : "clinic",
                    )
                  : arr18[(arg471 >>> 2) % arr18.length];
  }
  function fn158(arg476, arg477) {
    if (arg476 < 0 || arg477 < 0 || arg476 >= worldN || arg477 >= worldN) return null;
    let fn24Result21 = worldIndex(arg476, arg477),
      v756 = uint16Array7[fn24Result21];
    if (!v756) return null;
    let floor40 = Math.floor(toWorldX(arg476) / n30),
      floor41 = Math.floor(toWorldZ(arg477) / n30),
      v757 = floor40 + ":" + floor41 + ":" + v756,
      get11 = map9.get(v757);
    if (get11) return get11;
    let fn154Result3 = fn154(floor40, floor41, v756),
      v758 = "building:" + floor40 + ":" + floor41 + ":" + v756,
      fn143Result = fn143(v758),
      v759 = v758 === worldId,
      v760 = v759
        ? arr18.find((arg478) => "retail" === arg478.id)
        : fn143Result
          ? arr18.find((arg479) => "office" === arg479.id)
          : fn157(fn154Result3, floor40, floor41),
      fn155Result = fn155(floor40, floor41, v756, v760.id, fn143Result),
      v761 = v759 ? "NOCTURNE MART" : fn155Result.displayName,
      v762 = arr19[(fn154Result3 >>> 11) % arr19.length];
    if (
      ((get11 = {
        seed: fn154Result3,
        descriptor: {
          seed: fn154Result3,
          label: v761,
          archetype: v760.id,
          typeLabel: v759 ? "AUTHORED RETAIL" : fn143Result ? "LANDMARK TOWER" : v760.label,
          landmark: !!fn143Result,
          hero: v759,
          worldId: v758,
          address: fn155Result.address,
          buildingName: fn155Result.buildingName,
          businessName: v759 ? "NOCTURNE MART" : fn155Result.businessName,
          district: fn155Result.district,
          sector: fn155Result.sector,
          chain: !v759 && fn155Result.chain,
        },
        facadeStyle: v762,
      }),
      map9.set(v757, get11),
      map9.size > 2048)
    ) {
      let n254 = 0;
      for (let v763 of map9.keys()) if ((map9["delete"](v763), ++n254 >= 1024)) break;
    }
    return get11;
  }
  function fn159(arg480, arg481) {
    let v764 = (function (arg482) {
        let entrance3 = arg482.entrance;
        return fn154(
          Math.floor(toWorldX(entrance3.x) / n30),
          Math.floor(toWorldZ(entrance3.z) / n30),
          (arg482.building && arg482.building.planId) || 0,
        );
      })(arg480),
      entrance2 = arg480.entrance,
      floor42 = Math.floor(toWorldX(entrance2.x) / n30),
      floor43 = Math.floor(toWorldZ(entrance2.z) / n30),
      v765 = (arg480.building && arg480.building.planId) || 0;
    if (arg480.hero) {
      let fn155Result3 = fn155(floor42, floor43, v765, "retail", null);
      return {
        siteIndex: arg481,
        seed: v764,
        archetype: "hero",
        label: "NOCTURNE MART",
        typeLabel: "AUTHORED RETAIL",
        authored: true,
        palette: [190, 42, 165],
        layout: "nocturne",
        condition: "OPEN",
        address: fn155Result3.address,
        buildingName: fn155Result3.buildingName,
        businessName: "NOCTURNE MART",
        district: fn155Result3.district,
        sector: fn155Result3.sector,
        chain: false,
      };
    }
    let fn143Result2 = fn143(arg480.worldId);
    if (fn143Result2) {
      let fn155Result4 = fn155(floor42, floor43, v765, "office", fn143Result2);
      return {
        siteIndex: arg481,
        seed: v764,
        archetype: "office",
        label: fn143Result2.name,
        typeLabel: "LANDMARK TOWER",
        authored: false,
        landmark: true,
        landmarkId: fn143Result2.id,
        palette: [205, 188, 220],
        layout: "lobby",
        condition: "ACTIVE",
        address: fn155Result4.address,
        buildingName: fn143Result2.name,
        businessName: null,
        district: fn155Result4.district,
        sector: fn155Result4.sector,
        chain: false,
      };
    }
    let fn157Result = fn157(v764, floor42, floor43),
      fn155Result2 = fn155(floor42, floor43, v765, fn157Result.id, null);
    return {
      siteIndex: arg481,
      seed: v764,
      archetype: fn157Result.id,
      label: fn155Result2.displayName,
      typeLabel: fn157Result.label,
      authored: false,
      palette: fn157Result.hues.slice(),
      layout: fn157Result.layout,
      condition: ["PRISTINE", "ACTIVE", "WORN", "AFTER HOURS"][(v764 >>> 14) % 4],
      address: fn155Result2.address,
      buildingName: fn155Result2.buildingName,
      businessName: fn155Result2.businessName,
      district: fn155Result2.district,
      sector: fn155Result2.sector,
      chain: fn155Result2.chain,
    };
  }
  var map10 = new Map();
  for (let n255 = 0; n255 < v55.length; n255++) {
    let fn159Result = fn159(v55[n255], n255);
    fn159Result.worldId = v55[n255].worldId;
    let v766 = v55[n255].hero ? 0 : (fn159Result.seed >>> 11) % arr19.length;
    ((v55[n255].descriptor = fn159Result),
      (v55[n255].facadeStyle = arr19[v766]),
      map10.set(n255, fn159Result));
  }
  var map11 = new Map(),
    n100 = 0,
    worldId2 = v55[0].worldId,
    n101 = 0,
    descriptor = v55[0].descriptor;
  function fn160() {
    return (
      ((v767 = worldId2) ? v55.find((arg483) => arg483.worldId === v767) : null) ||
      v55[n100] ||
      v55[0]
    );
    var v767;
  }
  var flag12 = false;
  function fn161(arg484) {
    return Math.max(2, Math.floor(arg484.building.height) - 1);
  }
  function fn162(arg485) {
    if (arg485.hero) return [0, 31];
    let v768 = fn161(arg485) - 1,
      max47 = Math.max(1, Math.round(0.5 * v768));
    return Array.from(new Set([0, max47, v768]));
  }
  function fn163(arg486 = n100, arg487 = n101) {
    return (
      (((arg486 === n100 ? fn160() : v55[arg486]) || v55[0]).worldId || "site:" + arg486) +
      ":floor:" +
      arg487
    );
  }
  function fn164(arg488, arg489) {
    if (0 === arg489) return arg488.descriptor;
    let descriptor2 = arg488.descriptor,
      v769 = (descriptor2.seed ^ Math.imul(arg489 + 1, 2654435761)) >>> 0,
      v770 = (arg489 + (65535 & descriptor2.seed)) % 3;
    return Object.assign({}, descriptor2, {
      seed: v769,
      authored: false,
      layout: ["desks", "rooms", "lobby"][v770],
      archetype: ["office", "clinic", "lobby"][v770],
      typeLabel: ["OFFICE FLOOR", "SERVICE FLOOR", "RESIDENTIAL FLOOR"][v770],
      label: descriptor2.label + " / FLOOR " + String(arg489).padStart(2, "0"),
      condition: ["ACTIVE", "QUIET", "WORN", "SECURED"][(v769 >>> 9) % 4],
    });
  }
  function fn165(arg490, arg491) {
    let padEnd = arg490
        .replace(/[^A-Z0-9 ]/g, "")
        .slice(0, 15)
        .padStart(15, "-")
        .padEnd(15, "-"),
      v771 =
        1 === arg491.pattern ? "!" : 2 === arg491.pattern ? "[" : 3 === arg491.pattern ? "{" : "|",
      repeat = " ".repeat(15);
    return [
      "+" + padEnd + "+",
      v771 + repeat + v771,
      v771 + repeat + v771,
      v771 + repeat + v771,
      v771 + repeat + v771,
      v771 + repeat + v771,
      v771 + repeat + v771,
      v771 + repeat + v771,
      v771 + repeat + v771,
      "+" + (4 === arg491.pattern ? "-" : 5 === arg491.pattern ? "#" : "=").repeat(15) + "+",
    ];
  }
  for (let v772 of v55)
    ((v772.frame.facadeStyle = v772.facadeStyle),
      (v772.frame.customArt = fn165(v772.descriptor.label, v772.facadeStyle)));
  var map12 = v55.map((arg492, arg493) => ({
      id: 0 === arg493 ? "city-nocturne-entry" : "city-interior-" + String(arg493).padStart(2, "0"),
      sourceZone: "city",
      pairedId: "nocturne-city-exit",
      type: "doorway",
      activation: "auto",
      enabled: true,
      siteIndex: arg493,
      x: arg492.entrance.innerCenterX,
      z: arg492.entrance.innerCenterZ,
      radius: 0.82,
      destination: arg492.descriptor.label,
      destinationZone: "interior",
      arrival: {
        x: 16,
        z: 26.45,
        yaw: 0,
        pitch: -0.04,
      },
    })),
    v59 = (map12[0], v54),
    obj9 = {
      x: v56.x + 0.02 * v53.dx,
      z: v56.z + 0.02 * v53.dz,
      yaw: Math.atan2(v53.dx, -v53.dz),
      tx: v53.tx,
      tz: v53.tz,
    },
    min = Math.min(1, (v53.leftRun + 2 + v53.rightRun) / 24);
  !(function () {
    let arr65 = [];
    for (let n256 = 1; n256 <= 15; n256++) {
      let v779 = obj9.x + v53.dx * n256,
        v780 = obj9.z + v53.dz * n256;
      if (
        v779 < 1 ||
        v780 < 1 ||
        v779 >= 511 ||
        v780 >= 511 ||
        0 !== uint8Array18[worldIndex(0 | v779, 0 | v780)]
      )
        continue;
      let v781 = 1 === Math.abs(v53.tx) ? 0.5 + (0 | v780) : 0.5 + (0 | v779);
      arr65.includes(v781) || arr65.push(v781);
    }
    if (!arr65.length) return;
    let v773 = 1 === Math.abs(v53.tx),
      v774 = v773 ? obj9.x : obj9.z,
      v775 = Math.floor(arr65[0] / n30) * n30;
    for (let n257 = 0; n257 < 32 && n257 < cars.length; n257++) {
      let v782 = cars[n257],
        v783 = 1 & n257 ? 1 : -1,
        fn75Result = fn75(v773 ? "X" : "Z", v783),
        v784 = v774 + 4.4 * (n257 - 15.5),
        v785 = v773 ? v784 : v775 + fn75Result,
        v786 = v773 ? v775 + fn75Result : v784;
      if (fn23(v785, v786, 1)) {
        let v787 = 8 + (v773 ? obj2.x1 - obj2.x0 : obj2.z1 - obj2.z0);
        ((v784 = v774 + 4.4 * (n257 - 15.5) + (v783 > 0 ? v787 : -v787)),
          (v785 = v773 ? v784 : v775 + fn75Result),
          (v786 = v773 ? v775 + fn75Result : v784));
      }
      ((v782.x = v785),
        (v782.z = v786),
        (v782.hx = v773 ? v783 : 0),
        (v782.hz = v773 ? 0 : v783),
        (v782._lastJunction = ""),
        fn83(v782));
    }
    fn88(0);
    let v776 = v773 ? v53.outCenterZ : v53.outCenterX,
      v777 = Math.floor(v776 / n30) * n30,
      v778 = ((v776 % n30) + n30) % n30 < 8 ? n61 : n62;
    for (let n258 = 0; n258 < 32 && n258 < pedestrians.length; n258++) {
      let v788 = pedestrians[n258],
        v789 = v774 + 3.1 * (n258 - 15.5),
        v790 = (n258 >> 1) & 1 ? 1 : -1,
        v791 = v777 + fn60(v788, v778, v790);
      ((v788.x = v773 ? v789 : v791),
        (v788.z = v773 ? v791 : v789),
        (v788.hx = v773 ? v790 : 0),
        (v788.hz = v773 ? 0 : v790),
        (v788.crossing = false));
    }
  })();
  var obj10 = {
      id: "nocturne-city-exit",
      sourceZone: "interior",
      pairedId: "city-nocturne-entry",
      type: "doorway",
      activation: "auto",
      enabled: true,
      x: 16,
      z: 28.15,
      radius: 0.62,
      destination: "CITY / EXTERIOR",
      destinationZone: "city",
      arrival: {
        x: v53.outCenterX + 0.35 * v53.dx,
        z: v53.outCenterZ + 0.35 * v53.dz,
        yaw: Math.atan2(v53.dx, -v53.dz),
        pitch: -0.08,
      },
    },
    obj11 = {
      id: "nocturne-elevator-00",
      sourceZone: "interior",
      pairedId: "tower-observation-elevator",
      type: "elevator",
      activation: "use",
      enabled: true,
      x: 16,
      z: 4.35,
      radius: 2.45,
      destination: "FLOOR 31 / OBSERVATION",
      destinationZone: "observation",
      lockState: "READY",
      arrival: {
        x: 16,
        z: 25.8,
        yaw: 0,
        pitch: -0.04,
      },
    },
    obj12 = {
      id: "tower-observation-elevator",
      sourceZone: "observation",
      pairedId: "nocturne-elevator-00",
      type: "elevator",
      activation: "use",
      enabled: true,
      x: 16,
      z: 27.1,
      radius: 2.45,
      destination: "NOCTURNE MART / FLOOR 00",
      destinationZone: "interior",
      lockState: "READY",
      arrival: {
        x: 16,
        z: 5.8,
        yaw: Math.PI,
        pitch: -0.04,
      },
    },
    height = v54.height,
    max2 = Math.max(7, Math.min(34, height - 5.2)),
    obj13 = {
      id: "observation-balcony-door",
      sourceZone: "observation",
      pairedId: "balcony-observation-door",
      type: "doorway",
      activation: "use",
      enabled: true,
      x: 16,
      z: 4.35,
      radius: 2.4,
      destination: "FLOOR 31 / LIVE BALCONY",
      destinationZone: "balcony",
      lockState: "READY",
      arrival: {
        x: 9,
        z: 12.4,
        yaw: 0,
        pitch: -0.08,
      },
    },
    obj14 = {
      id: "balcony-observation-door",
      sourceZone: "balcony",
      pairedId: "observation-balcony-door",
      type: "doorway",
      activation: "use",
      enabled: true,
      x: 9,
      z: 13.2,
      radius: 1.75,
      destination: "FLOOR 31 / OBSERVATION",
      destinationZone: "observation",
      lockState: "READY",
      arrival: {
        x: 16,
        z: 5.8,
        yaw: Math.PI,
        pitch: -0.04,
      },
    },
    arr20 = [...map12, obj10, obj11, obj12, obj13, obj14],
    map13 = new Map(arr20.map((arg494) => [arg494.id, arg494])),
    zone = "city",
    n102 = 0,
    sStandby = "standby",
    n103 = 0,
    s5 = "",
    n104 = 0,
    map14 = new Map(),
    v60 = null,
    v61 = null,
    arr21 = [],
    arr22 = [],
    map15 = new Map(),
    n105 = 12,
    map16 = new Map([
      [
        "nocturne-7f",
        {
          id: "nocturne-7f",
          title: "UNLISTED DELIVERY",
          step: 0,
          status: "hidden",
          completedAt: -1,
        },
      ],
    ]),
    arr23 = [
      "",
      "Trace the unmarked transit case using Nocturne service terminal.",
      "Return to Nara and ask about container 7F.",
      "Take container 7F through Lift 00 to the receiver on Floor 31.",
      "Delivery complete. Container 7F was accepted on Floor 31.",
    ];
  function fn166(arg495, arg496, arg497 = 1) {
    let v792 = map15.get(arg495) || {
      id: arg495,
      label: arg496,
      quantity: 0,
    };
    return ((v792.quantity += arg497), map15.set(arg495, v792), v792.quantity);
  }
  function fn167() {
    return map15.size
      ? Array.from(map15.values())
          .map((arg498) => arg498.label + (arg498.quantity > 1 ? " x" + arg498.quantity : ""))
          .join(" / ")
      : "EMPTY";
  }
  function fn168(arg499 = "nocturne-7f") {
    return map16.get(arg499);
  }
  function fn169(arg500) {
    let fn168Result = fn168();
    return !(
      arg500 <= fn168Result.step ||
      ((fn168Result.step = arg500),
      (fn168Result.status = arg500 >= 4 ? "complete" : "active"),
      arg500 >= 4 && (fn168Result.completedAt = n70),
      (s5 = (arg500 >= 4 ? "OBJECTIVE COMPLETE :: " : "OBJECTIVE UPDATED :: ") + fn168Result.title),
      (n104 = 3),
      0)
    );
  }
  var obj15 = {
    "nocturne-clerk": {
      start: "greeting",
      nodes: {
        greeting: {
          title: "NARA // NIGHT CLERK",
          text: (arg501) =>
            arg501.returning
              ? "Back again. The city is still awake, even if nothing else admits it."
              : "Evening. Mind the aisle lights. They remember movement longer than they should.",
          choices: () =>
            fn168().step >= 2 && fn168().step < 4
              ? [
                  ["Ask about container 7F", "handoff"],
                  ["Ask about the city", "city"],
                  ["Leave", "end"],
                ]
              : [
                  ["Ask about Nocturne", "store"],
                  ["Ask about the city", "city"],
                  ["Leave", "end"],
                ],
        },
        store: {
          title: "NOCTURNE_MART",
          text: "We sell ordinary things at unusual hours. The sealed stock on aisle one arrived without a manifest.",
          choices: [
            ["Ask about the sealed stock", "stock"],
            ["Back", "greeting"],
          ],
        },
        stock: {
          title: "UNLISTED_DELIVERY",
          text: "The terminal might identify it. I have learned not to scan parcels that hum after midnight.",
          choices: [
            ["I will take a look", "end"],
            ["Back", "greeting"],
          ],
        },
        city: {
          title: "CITY_RUMOUR_01",
          text: "Floor 31 has been lit all week. Nobody rents Floor 31. If the lift opens, listen before stepping out.",
          choices: [
            ["Thanks", "end"],
            ["Ask about Nocturne", "store"],
          ],
        },
        handoff: {
          title: "CONTAINER_7F",
          text: () =>
            fn168().step < 2
              ? "The case is not on any local manifest. Inspect it, then run its identifier through the service terminal."
              : 2 === fn168().step
                ? "The terminal found its destination. I need a courier who can take it to the receiver on Floor 31."
                : 3 === fn168().step
                  ? "The receiver is beside the central console on Floor 31. Keep the case upright."
                  : "The receiver logged delivery. Whatever was inside is no longer our inventory problem.",
          choices: () =>
            2 === fn168().step
              ? [
                  ["Accept courier handoff", "accept"],
                  ["Back", "greeting"],
                ]
              : [["Back", "greeting"]],
        },
      },
    },
  };
  function fn170(arg502) {
    return "function" == typeof arg502.choices ? arg502.choices() : arg502.choices;
  }
  function fn171(arg503) {
    return (map14.has(arg503) || map14.set(arg503, {}), map14.get(arg503));
  }
  function fn172() {
    let v793 = null;
    for (let v794 of "city" === zone || "balcony" === zone
      ? []
      : fn195().filter((arg504) => arg504.interaction)) {
      let hypot4 = Math.hypot(view.x - v794.x, view.z - v794.z);
      hypot4 <= (v794.interaction.radius || 2.4) &&
        (!v793 || hypot4 < v793.distance) &&
        (v793 = {
          target: v794,
          distance: hypot4,
        });
    }
    return v793;
  }
  function fn173() {
    ((v60 = null), (v61 = null));
  }
  function fn174(arg505) {
    let id = arg505.interaction.id,
      fn171Result = fn171(id);
    return obj15[id]
      ? (function (arg506) {
          let v795 = obj15[arg506.interaction.id];
          if (!v795) return false;
          ((v60 = arg506), (v61 = v795.start));
          let fn171Result2 = fn171(arg506.interaction.id);
          return (
            (fn171Result2.returning = !!fn171Result2.spoken),
            (fn171Result2.spoken = true),
            true
          );
        })(arg505)
      : ((fn171Result.used = true),
        (fn171Result.uses = (fn171Result.uses || 0) + 1),
        (v60 = arg505),
        (v61 = null),
        "nocturne-sealed-stock" === id && ((fn171Result.inspected = true), fn169(1)),
        "nocturne-terminal" === id &&
          ((fn171Result.accessed = true), fn171("nocturne-sealed-stock").inspected && fn169(2)),
        "floor31-receiver" === id &&
          (3 !== fn168().step ||
            !(function (arg507, arg508 = 1) {
              let get12 = map15.get(arg507);
              return !(
                !get12 ||
                get12.quantity < arg508 ||
                ((get12.quantity -= arg508), 0 === get12.quantity && map15["delete"](arg507), 0)
              );
            })("container-7f") ||
            ((n105 += 18), fn169(4))),
        true);
  }
  function fn175(arg509) {
    if (!v60 || !v61) return false;
    let v796 = obj15[v60.interaction.id],
      v797 = v796 && v796.nodes[v61],
      v798 = v797 && fn170(v797),
      v799 = v798 && v798[arg509];
    if (!v799) return false;
    if (((fn171(v60.interaction.id).lastChoice = v799[0]), "accept" === v799[1])) {
      if (2 !== fn168().step || (fn166("container-7f", "CONTAINER_7F"), fn169(3), 0)) return false;
      fn173();
    } else "end" === v799[1] ? fn173() : (v61 = v799[1]);
    return true;
  }
  function fn176(arg510) {
    if (!v60 || v61 || 0 !== arg510) return false;
    let id2 = v60.interaction.id,
      fn171Result3 = fn171(id2);
    return (
      "nocturne-vending" === id2 &&
      (n105 < 4
        ? ((fn171Result3.message = "PAYMENT DECLINED :: 4 CREDITS REQUIRED"), false)
        : ((n105 -= 4),
          fn166("neon-cola", "NEON_COLA"),
          (fn171Result3.purchased = (fn171Result3.purchased || 0) + 1),
          (fn171Result3.message = "DISPENSED :: NEON_COLA"),
          true))
    );
  }
  function fn177() {
    if (!v60) return null;
    let id3 = v60.interaction.id,
      fn171Result4 = fn171(id3);
    if (v61) {
      let v800 = obj15[id3].nodes[v61],
        fn170Result = fn170(v800);
      return {
        label: "03::DIALOGUE_LINK",
        title: v800.title,
        text: "function" == typeof v800.text ? v800.text(fn171Result4) : v800.text,
        choices: fn170Result.map((arg511, arg512) => ({
          key: String(arg512 + 1),
          text: arg511[0],
        })),
      };
    }
    return "nocturne-sealed-stock" === id3
      ? {
          label: "03::OBJECT_SCAN",
          title: "SEALED_STOCK",
          text:
            "A black transit case with no barcode. Its metal shell vibrates faintly beside the refrigeration conduit.\n\nOBJECTIVE :: " +
            arr23[fn168().step],
          choices: [
            {
              key: "E",
              text: "close inspection",
            },
          ],
        }
      : "nocturne-terminal" === id3
        ? {
            label: "03::TERMINAL_LINK",
            title: "NOCTURNE_SERVICE_NODE",
            text: fn171("nocturne-sealed-stock").inspected
              ? "MANIFEST QUERY :: container 7F has no registered sender. Destination field reads: FLOOR 31."
              : "LOCAL INVENTORY ONLINE :: one manifest exception detected. Inspect the unlisted container on aisle one.",
            choices: [
              {
                key: "E",
                text: "disconnect terminal",
              },
            ],
          }
        : "nocturne-vending" === id3
          ? {
              label: "03::SHOP_LINK",
              title: "NOCTURNE_VENDING_04",
              text:
                (fn171Result4.message || "NEON_COLA :: 4 CREDITS") +
                "\n\nCREDITS :: " +
                n105 +
                "\nINVENTORY :: " +
                fn167(),
              choices: [
                {
                  key: "1",
                  text: "purchase NEON_COLA / 4 credits",
                },
                {
                  key: "E",
                  text: "close shop link",
                },
              ],
            }
          : "floor31-receiver" === id3
            ? {
                label: "03::DELIVERY_LINK",
                title: "FLOOR_31_RECEIVER",
                text:
                  fn168().step >= 4
                    ? "TRANSFER ACCEPTED :: courier payment 18 credits."
                    : "RECEIVER ONLINE :: no assigned package detected.",
                choices: [
                  {
                    key: "E",
                    text: "close receiver link",
                  },
                ],
              }
            : v60.localNPC
              ? {
                  label: "03::LOCAL_VOICE",
                  title: v60.interaction.label,
                  text:
                    v60.genericText || "They acknowledge you, then glance back toward their route.",
                  choices: [
                    {
                      key: "E",
                      text: "end conversation",
                    },
                  ],
                }
              : null;
  }
  function fn178() {
    (uint8Array24.fill(0),
      uint8Array25.fill(0),
      uint16Array8.fill(0),
      float32Array31.fill(0),
      uint8Array26.fill(0),
      uint8Array27.fill(0),
      (arr21.length = 0),
      (arr22.length = 0));
  }
  function fn179(arg513, arg514) {
    arg513 >= 3 &&
      arg514 >= 3 &&
      arg513 < roomN - 3 &&
      arg514 < roomN - 3 &&
      (uint8Array27[fn135(arg513, arg514)] = 1);
  }
  function fn180(arg515, arg516) {
    if (arg515 < 3 || arg516 < 3 || arg515 >= roomN - 3 || arg516 >= roomN - 3) return;
    let fn135Result = fn135(arg515, arg516);
    ((uint8Array24[fn135Result] = 1),
      (float32Array31[fn135Result] = n97),
      (uint8Array27[fn135Result] = 1));
  }
  function fn181(arg517, arg518, arg519, arg520, arg521 = 1, arg522 = 0, arg523 = {}) {
    arr21.push(
      fn47(
        Object.assign(
          {
            x: arg517,
            z: arg518,
            kind: arg519,
            h: arg520,
            w: arg521,
            axis: arg522,
          },
          arg523,
        ),
      ),
    );
  }
  var v62 = map4;
  function fn182(arg524) {
    let v801 = 1 === arg524.axis ? arg524.d : arg524.w,
      v802 = 1 === arg524.axis ? arg524.w : arg524.d;
    return {
      x0: Math.floor(arg524.x - 0.5 * v801),
      x1: Math.floor(arg524.x + 0.5 * v801),
      z0: Math.floor(arg524.z - 0.5 * v802),
      z1: Math.floor(arg524.z + 0.5 * v802),
    };
  }
  function fn183(arg525, arg526) {
    return (
      arg525 >= 3 &&
      arg526 >= 3 &&
      arg525 < roomN - 3 &&
      arg526 < roomN - 3 &&
      0 === uint8Array24[fn135(arg525, arg526)] &&
      0 === uint8Array27[fn135(arg525, arg526)]
    );
  }
  var int16Array20 = new Int16Array(roomN * roomN),
    int16Array21 = new Int16Array(roomN * roomN),
    int8Array = new Int8Array([1, -1, 0, 0]),
    int8Array2 = new Int8Array([0, 0, 1, -1]);
  function fn184(arg527, arg528, arg529, arg530) {
    let floor44 = Math.floor(arg527),
      floor45 = Math.floor(arg528),
      floor46 = Math.floor(arg529),
      floor47 = Math.floor(arg530);
    if (!fn183(floor44, floor45) || !fn183(floor46, floor47)) return [];
    int16Array20.fill(-1);
    let n259 = 0,
      n260 = 0,
      fn135Result2 = fn135(floor44, floor45),
      fn135Result3 = fn135(floor46, floor47);
    for (
      int16Array21[n260++] = fn135Result2, int16Array20[fn135Result2] = fn135Result2;
      n259 < n260 && -1 === int16Array20[fn135Result3];
    ) {
      let v804 = int16Array21[n259++],
        v805 = v804 % roomN,
        v806 = (v804 / roomN) | 0;
      for (let n261 = 0; n261 < 4; n261++) {
        let v807 = v805 + int8Array[n261],
          v808 = v806 + int8Array2[n261];
        if (!fn183(v807, v808)) continue;
        let fn135Result4 = fn135(v807, v808);
        -1 === int16Array20[fn135Result4] &&
          ((int16Array20[fn135Result4] = v804), (int16Array21[n260++] = fn135Result4));
      }
    }
    if (-1 === int16Array20[fn135Result3]) return [];
    let arr66 = [],
      v803 = fn135Result3;
    for (; v803 !== fn135Result2;)
      (arr66.push({
        x: (v803 % roomN) + 0.5,
        z: 0.5 + ((v803 / roomN) | 0),
      }),
        (v803 = int16Array20[v803]));
    return (arr66.reverse(), arr66);
  }
  function fn185(arg531) {
    let assign = Object.assign(
      {
        kind: 4,
        h: 1.35,
        w: 0.55,
        phase: 0,
        speed: 1.05,
        color: 190,
        body: "o",
        localNPC: true,
        routeIndex: 0,
        path: [],
        pathIndex: 0,
        wait: 0,
        hx: 0,
        hz: 0,
      },
      arg531,
    );
    return (arr22.push(assign), arr21.push(assign), assign);
  }
  function fn186(arg532, arg533) {
    !arg533 ||
      !fn183(0 | arg533.x, 0 | arg533.z) ||
      ((arg532.x = arg533.x),
      (arg532.z = arg533.z),
      (arg532.routeIndex = arg533.routeIndex || 0),
      (arg532.wait = Math.min(arg533.wait || 0, 2)));
  }
  var obj16 = {
    retail: ["CLERK", "CUSTOMER"],
    cafe: ["BARISTA", "CUSTOMER"],
    office: ["RECEPTION", "WORKER"],
    clinic: ["RECEPTION", "PATIENT"],
    workshop: ["MECHANIC", "COURIER"],
    lobby: ["CONCIERGE", "RESIDENT"],
    laundrette: ["ATTENDANT", "CUSTOMER"],
    arcade: ["ATTENDANT", "PLAYER"],
  };
  function fn187(arg534 = n100) {
    if (!arr22.length) return;
    let fn163Result = fn163(arg534, n101),
      v809 = map11.get(fn163Result) || {};
    ((v809.occupants = arr22.map((arg535) => ({
      id: arg535.id,
      x: arg535.x,
      z: arg535.z,
      routeIndex: arg535.routeIndex,
      wait: arg535.wait,
    }))),
      map11["delete"](fn163Result),
      map11.set(fn163Result, v809));
  }
  function fn188(arg536) {
    if (!arg536.route || !arg536.route.length) return;
    arg536.routeIndex = (arg536.routeIndex + 1) % arg536.route.length;
    let v810 = arg536.route[arg536.routeIndex];
    ((arg536.path = fn184(arg536.x, arg536.z, v810.x, v810.z)),
      (arg536.pathIndex = 0),
      arg536.path.length || (arg536.wait = 0.8));
  }
  function fn189(arg537, arg538 = 0) {
    let v811 = v55[arg537] || v55[0];
    "city" === zone && (sStandby = "standby");
    let fn163Result2 = fn163(arg537, (arg538 = Math.max(0, Math.min(fn161(v811) - 1, 0 | arg538)))),
      get13 = map11.get(fn163Result2);
    ((n100 = arg537),
      (worldId2 = v811.worldId),
      (n101 = arg538),
      (descriptor = fn164(v811, arg538)),
      (flag12 = false),
      v811.entrance,
      (v59 = v811.building),
      fn92(
        false,
        (obj9 = {
          x: v811.frame.x + 0.02 * v811.entrance.dx,
          z: v811.frame.z + 0.02 * v811.entrance.dz,
          yaw: Math.atan2(v811.entrance.dx, -v811.entrance.dz),
          tx: v811.entrance.tx,
          tz: v811.entrance.tz,
        }).x,
        obj9.z,
      ),
      rebuildEntityGrid(),
      (min = Math.min(1, (v811.entrance.leftRun + 2 + v811.entrance.rightRun) / 24)),
      (obj10.arrival = {
        x: v811.entrance.outCenterX + 0.35 * v811.entrance.dx,
        z: v811.entrance.outCenterZ + 0.35 * v811.entrance.dz,
        yaw: Math.atan2(v811.entrance.dx, -v811.entrance.dz),
        pitch: -0.08,
      }),
      (obj10.destination = "CITY / " + descriptor.label),
      (obj10.siteIndex = arg537),
      (obj10.pairedId = map12[arg537].id),
      (obj10.enabled = 0 === arg538),
      (obj11.enabled = true),
      (obj11.destination =
        v811.hero && 0 === arg538 ? "FLOOR 31 / OBSERVATION" : "BUILDING FLOOR DIRECTORY"),
      fn178(),
      (function (arg539) {
        arg539.entrance;
        let building = arg539.building,
          descriptor3 = arg539.descriptor;
        for (let n262 = 0; n262 < roomN; n262++)
          for (let n263 = 0; n263 < roomN; n263++) {
            let fn135Result5 = fn135(n263, n262),
              v812 = n263 < 3 || n262 < 3 || n263 >= roomN - 3 || n262 >= roomN - 3;
            ((uint8Array24[fn135Result5] = v812 ? 1 : 0),
              (float32Array31[fn135Result5] = v812 ? n97 : 0),
              (uint8Array25[fn135Result5] = 4));
            let v813 = descriptor3.authored ? [190, 42, 165] : descriptor3.palette;
            uint16Array8[fn135Result5] = v812
              ? n263 < 8
                ? v813[0]
                : n263 > 23
                  ? v813[1]
                  : v813[2]
              : 0;
          }
        for (let n264 = 5; n264 <= 12; n264++) uint8Array26[fn135(n264, roomN - 3)] = 1;
        for (let n265 = 19; n265 <= 26; n265++) uint8Array26[fn135(n265, roomN - 3)] = 1;
        if (building.left) for (let n266 = 6; n266 <= 24; n266++) uint8Array26[fn135(2, n266)] = 1;
        if (building.right)
          for (let n267 = 6; n267 <= 24; n267++) uint8Array26[fn135(roomN - 3, n267)] = 1;
        if (0 === n101)
          for (let n268 = 15; n268 <= 16; n268++)
            ((uint8Array24[fn135(n268, roomN - 3)] = 0),
              (float32Array31[fn135(n268, roomN - 3)] = 0));
        else for (let n269 = 13; n269 <= 18; n269++) uint8Array26[fn135(n269, roomN - 3)] = 1;
      })(v811),
      v811.hero && 0 === arg538
        ? (function () {
            function fn429(arg540, arg541) {
              let fn135Result6 = fn135(arg540, arg541);
              ((uint8Array24[fn135Result6] = 1), (float32Array31[fn135Result6] = n97));
            }
            function fn430(arg542, arg543) {
              fn179(arg542, arg543);
            }
            for (let n270 = 5; n270 <= 11; n270++) fn429(7, n270);
            for (let n271 = 7; n271 <= 12; n271++) fn429(n271, 11);
            for (let n272 = 20; n272 <= 25; n272++) fn430(n272, 8);
            for (let n273 = 8; n273 <= 13; n273++) fn430(25, n273);
            for (let v814 of [11, 16, 21])
              for (let n274 = 15; n274 <= 21; n274++) fn430(v814, n274);
            arr21.push(
              {
                x: 5.5,
                z: 6.5,
                kind: n54,
                h: 1.7,
                w: 1.1,
                axis: 0,
                interaction: {
                  id: "nocturne-terminal",
                  label: "SERVICE_TERMINAL",
                  verb: "ACCESS",
                  radius: 2.5,
                },
              },
              {
                x: 5.5,
                z: 9,
                kind: n39,
                h: 1.8,
                w: 1,
                axis: 0,
                interaction: {
                  id: "nocturne-vending",
                  label: "VENDING_04",
                  verb: "SHOP",
                  radius: 2.4,
                },
              },
              {
                x: 26,
                z: 17,
                kind: 7,
                h: 1.05,
                w: 0.75,
                axis: 0,
              },
              {
                x: 24,
                z: 24,
                kind: n41,
                h: 1.1,
                w: 1.2,
                axis: 0,
              },
              {
                x: 8.5,
                z: 24,
                kind: 6,
                h: 0.8,
                w: 1.7,
                axis: 0,
              },
              {
                x: 8.2,
                z: 3.4,
                kind: n45,
                h: 7.8,
                w: 0.7,
                axis: 0,
              },
              {
                x: 22.8,
                z: 3.4,
                kind: n45,
                h: 7.8,
                w: 0.7,
                axis: 0,
              },
              {
                x: 11.5,
                z: 18.5,
                kind: n46,
                h: 1.9,
                w: 4.4,
                axis: 1,
                interaction: {
                  id: "nocturne-sealed-stock",
                  label: "SEALED_STOCK",
                  verb: "INSPECT",
                  radius: 2.8,
                },
              },
              {
                x: 16.5,
                z: 18.5,
                kind: n46,
                h: 1.9,
                w: 4.4,
                axis: 1,
              },
              {
                x: 21.5,
                z: 18.5,
                kind: n46,
                h: 1.9,
                w: 4.4,
                axis: 1,
              },
              {
                x: 22.5,
                z: 8.5,
                kind: n47,
                h: 1.1,
                w: 5.7,
                axis: 0,
              },
              {
                x: 25.5,
                z: 11,
                kind: n47,
                h: 1.1,
                w: 5.2,
                axis: 1,
              },
              {
                x: 16,
                z: 3.18,
                kind: n49,
                h: 4.4,
                w: 5.2,
                axis: 0,
                elevator: true,
              },
              {
                x: 16,
                z: 28.45,
                kind: n48,
                h: 3.65,
                w: 2.35,
                axis: 0,
                exit: true,
              },
            );
          })()
        : (function (arg544) {
            let v815 = (arg544.seed >>> 18) % 4,
              layout = arg544.layout,
              fn431 = (arg545, arg546, arg547, arg548, arg549, arg550, arg551, arg552, arg553) => {
                for (let n275 = 0; n275 < arg547; n275++) {
                  let v816 = arg545 + arg548 * n275,
                    v817 = arg546 + arg549 * n275;
                  fn181(v816, v817, arg550, arg551, arg552, arg553);
                  let v818 = 0 | v816,
                    v819 = 0 | v817;
                  for (let v820 = -1; v820 <= 1; v820++)
                    fn179(v818 + (arg553 ? v820 : 0), v819 + (arg553 ? 0 : v820));
                }
              };
            if ("aisles" === layout) {
              for (let v821 of [10, 16, 22]) fn431(v821, 11 + v815, 3, 0, 4, n46, 1.9, 4, 1);
              fn431(23, 7, 1, 0, 0, n47, 1.1, 5.5, 0);
            } else if ("tables" === layout) {
              for (let v822 of [9, 16, 23])
                for (let v823 of [11, 18])
                  (fn181(v822, v823, n41, 1.1, 1.2, (v822 + v823) & 1), fn179(v822, v823));
              fn431(22, 7, 1, 0, 0, n47, 1.1, 6, 0);
            } else if ("desks" === layout || "rooms" === layout) {
              for (let v824 of [10, 15, 20]) fn431(9, v824, 3, 7, 0, n47, 1.05, 3.5, 0);
              if ("rooms" === layout)
                for (let v825 of [12, 20])
                  for (let n276 = 6; n276 <= 23; n276++) 15 !== n276 && fn180(v825, n276);
            } else if ("bays" === layout) {
              for (let v826 of [9, 16, 23]) fn431(v826, 12, 2, 0, 7, n47, 1.1, 5.2, 1);
              fn431(7, 7, 3, 8, 0, n39, 1.7, 1, 0);
            } else if ("lobby" === layout) {
              (fn431(9, 15, 3, 7, 0, 6, 0.8, 2.6, 0), fn431(16, 8, 1, 0, 0, n47, 1.1, 7, 0));
              for (let v827 of [7, 25])
                fn181(v827, 6, n53, 1, 1.6, 0, {
                  d: 1,
                  volume: true,
                });
            } else if ("machines" === layout) {
              for (let v828 of [6, 26]) fn431(v828, 8, 5, 0, 4, n39, 1.6, 1.1, 1);
              fn431(16, 11, 3, 0, 5, 6, 0.8, 3, 0);
            } else {
              for (let v829 of [7, 12, 20, 25]) fn431(v829, 8, 4, 0, 5, n39, 1.7, 1.1, 1);
              fn431(16, 22, 1, 0, 0, n47, 1.1, 7, 0);
            }
            (0 === n101 &&
              fn181(16, 28.45, n48, 3.65, 2.35, 0, {
                exit: true,
              }),
              fn181(5.5, 6.5, 7, 1.05, 0.75, 0),
              fn181(16, 3.18, n49, 4.4, 5.2, 0, {
                elevator: true,
              }));
          })(descriptor));
    for (let v830 of arr21)
      v830.exit && ((v830.facadeStyle = v811.facadeStyle), (v830.siteIndex = arg537));
    for (
      (function () {
        for (let v831 of arr21) {
          let get14 = v62.get(v831.kind);
          if (
            (get14 &&
              !v831.exit &&
              !v831.elevator &&
              ((v831.d = v831.d || get14), (v831.volume = true)),
            !v831.volume || !v831.d)
          )
            continue;
          let fn182Result = fn182(v831);
          for (let z0 = fn182Result.z0; z0 <= fn182Result.z1; z0++)
            for (let x0 = fn182Result.x0; x0 <= fn182Result.x1; x0++) fn179(x0, z0);
        }
      })(),
        (function (arg554, arg555 = []) {
          if (arg554.hero && 0 === n101) {
            let fn185Result = fn185({
                id: "nocturne-nara",
                x: 22.5,
                z: 11.5,
                color: 175,
                body: "N",
                role: "CLERK",
                route: [
                  {
                    x: 21.5,
                    z: 11.5,
                  },
                  {
                    x: 23.5,
                    z: 11.5,
                  },
                  {
                    x: 22.5,
                    z: 13.5,
                  },
                ],
                interaction: {
                  id: "nocturne-clerk",
                  label: "NARA // CLERK",
                  verb: "TALK",
                  radius: 2.6,
                },
              }),
              fn185Result2 = fn185({
                id: "nocturne-customer",
                x: 13.5,
                z: 14.5,
                color: 292,
                body: "8",
                role: "CUSTOMER",
                speed: 0.9,
                route: [
                  {
                    x: 13.5,
                    z: 14.5,
                  },
                  {
                    x: 13.5,
                    z: 22.5,
                  },
                  {
                    x: 19.5,
                    z: 22.5,
                  },
                  {
                    x: 19.5,
                    z: 14.5,
                  },
                ],
                genericText:
                  'They lower a humming carton and whisper: "I thought this aisle was somewhere else yesterday."',
                interaction: {
                  id: "nocturne-customer",
                  label: "LATE_CUSTOMER",
                  verb: "TALK",
                  radius: 2.4,
                },
              });
            return (
              fn186(
                fn185Result,
                arg555.find((arg556) => arg556.id === fn185Result.id),
              ),
              void fn186(
                fn185Result2,
                arg555.find((arg557) => arg557.id === fn185Result2.id),
              )
            );
          }
          let v832 = descriptor,
            v833 = obj16[v832.archetype] || ["OCCUPANT"],
            v834 = (function (arg558, arg559 = 4) {
              let arr67 = [];
              for (let n277 = 0; n277 < roomN * roomN && arr67.length < arg559; n277++) {
                let v835 = (arg558 + 37 * n277) % (roomN * roomN),
                  v836 = v835 % roomN,
                  v837 = (v835 / roomN) | 0;
                if (!fn183(v836, v837) || v837 > 25 || v837 < 6) continue;
                let obj38 = {
                  x: v836 + 0.5,
                  z: v837 + 0.5,
                };
                (arr67.length && 0 === fn184(arr67[0].x, arr67[0].z, obj38.x, obj38.z).length) ||
                  (arr67.every(
                    (arg560) => Math.hypot(arg560.x - obj38.x, arg560.z - obj38.z) > 5,
                  ) &&
                    arr67.push(obj38));
              }
              return arr67;
            })(v832.seed, 3 * v833.length);
          for (let n278 = 0; n278 < v833.length && n278 < v834.length; n278++) {
            let v838 = v833[n278],
              v839 = v834[n278],
              slice = v834.filter((arg561, arg562) => arg562 % v833.length === n278).slice(0, 3);
            slice.length < 2 && v834[n278 + v833.length] && slice.push(v834[n278 + v833.length]);
            let v840 =
              "interior-" + arg554.descriptor.siteIndex + "-floor-" + n101 + "-npc-" + n278;
            fn186(
              fn185({
                id: v840,
                x: v839.x,
                z: v839.z,
                color: v832.palette[n278 % v832.palette.length],
                body: "oH#8"[n278 % 4],
                role: v838,
                speed: 0.8 + 0.12 * n278,
                route: slice,
                genericText: v838 + " // " + v832.label + " :: local route active.",
                interaction: {
                  id: v840,
                  label: v838 + " // " + v832.label,
                  verb: "TALK",
                  radius: 2.4,
                },
              }),
              arg555.find((arg563) => arg563.id === v840),
            );
          }
        })(v811, get13?.["occupants"] || []),
        map11["delete"](fn163Result2),
        map11.set(
          fn163Result2,
          Object.assign({}, get13, {
            visits: (get13?.["visits"] || 0) + 1,
            discovered: true,
            condition: descriptor.condition,
          }),
        );
      map11.size > 128;
    )
      map11["delete"](map11.keys().next().value);
  }
  fn189(0);
  var n106 = 4.65,
    freeze24 = Object.freeze({
      x: 15.82,
      z: 15.38,
      y: 0.835,
    }),
    freeze25 = Object.freeze({
      x: 16,
      z: 15.25,
      w: 2.08,
      d: 1.16,
      h: 0.82,
    }),
    freeze26 = Object.freeze({
      x: 15.86,
      z: 15.55,
      y: 4.57,
    }),
    freeze27 = Object.freeze({
      x: 7.15,
      z: 2.13,
      y: 0,
      w: 1.62,
      h: 3.05,
      axis: 1,
    }),
    freeze28 = Object.freeze({
      stretch: 0.3,
      digitize: 1.06,
      entry: 1.36,
    });
  (flag2 &&
    (function () {
      ((function () {
        fn178();
        for (let n279 = 0; n279 < roomN; n279++)
          for (let n280 = 0; n280 < roomN; n280++) {
            let fn135Result7 = fn135(n280, n279),
              v841 = n280 < 2 || n279 < 2 || n280 >= roomN - 2 || n279 >= roomN - 2;
            ((uint8Array24[fn135Result7] = v841 ? 1 : 0),
              (float32Array31[fn135Result7] = v841 ? n106 : 0),
              (uint8Array25[fn135Result7] = 4),
              (uint16Array8[fn135Result7] = v841 ? 205 : 0));
          }
        for (let n281 = 14; n281 <= 16; n281++)
          for (let n282 = 14; n282 <= 17; n282++) uint8Array27[fn135(n282, n281)] = 1;
        ((arr21.length = 0), (arr22.length = 0));
      })(),
        (zone = "intro_room"),
        (view.x = 16),
        (view.z = 24.2),
        (view.yaw = 0),
        (view.pitch = -0.055),
        resetLookFromView());
      for (let v842 in keysDown) keysDown[v842] = false;
      ((n102 = 1), fn173(), document.body?.["classList"]?.["add"]("prelude-room"), fn13(true));
    })(),
    (function () {
      for (let n283 = 0; n283 < n98; n283++)
        for (let n284 = 0; n284 < n98; n284++) {
          let fn136Result = fn136(n284, n283),
            v843 = n284 < 3 || n283 < 3 || n284 >= n98 - 3 || n283 >= n98 - 3;
          ((uint8Array28[fn136Result] = v843 ? 1 : 0),
            (float32Array32[fn136Result] = v843 ? 7.4 : 0),
            (uint8Array29[fn136Result] = 4),
            (uint16Array9[fn136Result] = v843
              ? n283 < 5
                ? 205
                : n284 < 6 || n284 > 25
                  ? 188
                  : 292
              : 0));
        }
      for (let n285 = 4; n285 <= 27; n285++)
        (n285 < 13 || n285 > 18) &&
          ((uint8Array30[fn136(n285, 2)] = 1), (uint8Array30[fn136(n285, n98 - 3)] = 1));
      for (let n286 = 4; n286 <= 27; n286++)
        ((uint8Array30[fn136(2, n286)] = 1), (uint8Array30[fn136(n98 - 3, n286)] = 1));
      let fn432 = (arg564, arg565) => (uint8Array31[fn136(arg564, arg565)] = 1);
      for (let n287 = 8; n287 <= 11; n287++)
        for (let n288 = 11; n288 <= 13; n288++) fn432(n287, n288);
      for (let n289 = 20; n289 <= 23; n289++)
        for (let n290 = 11; n290 <= 13; n290++) fn432(n289, n290);
      for (let n291 = 13; n291 <= 18; n291++)
        for (let n292 = 18; n292 <= 19; n292++) fn432(n291, n292);
    })(),
    (function () {
      for (let n293 = 0; n293 < n99; n293++)
        for (let n294 = 0; n294 < n99; n294++) {
          let fn137Result = fn137(n294, n293),
            v844 = n294 < 3 || n293 < 3 || n294 >= n99 - 3 || n293 >= n99 - 3;
          ((uint8Array32[fn137Result] = v844 ? 1 : 0),
            (float32Array33[fn137Result] = v844 ? 6.4 : 0),
            (uint8Array33[fn137Result] = 4),
            (uint16Array10[fn137Result] = v844 ? (n293 >= n99 - 3 ? 205 : 188) : 0));
        }
      for (let n295 = 3; n295 <= n99 - 4; n295++) uint8Array34[fn137(n295, 2)] = 1;
      for (let n296 = 3; n296 <= n99 - 4; n296++)
        ((uint8Array34[fn137(2, n296)] = 1), (uint8Array34[fn137(n99 - 3, n296)] = 1));
    })());
  var arr24 = [
      {
        x: 16,
        z: 28.45,
        kind: n49,
        h: 4.4,
        w: 5.2,
        axis: 0,
        elevator: true,
        returnLift: true,
      },
      {
        x: 16,
        z: 3.18,
        kind: n50,
        h: 4.5,
        w: 8.4,
        axis: 0,
      },
      {
        x: 9.5,
        z: 12.5,
        kind: n41,
        h: 1.1,
        w: 1.2,
        axis: 0,
      },
      {
        x: 22,
        z: 12.5,
        kind: n41,
        h: 1.1,
        w: 1.2,
        axis: 0,
      },
      {
        x: 15.5,
        z: 19,
        kind: n47,
        h: 1.1,
        w: 6.4,
        axis: 0,
        interaction: {
          id: "floor31-receiver",
          label: "FLOOR_31_RECEIVER",
          verb: "DELIVER",
          radius: 3.1,
        },
      },
      {
        x: 6.5,
        z: 7,
        kind: n39,
        h: 1.8,
        w: 1,
        axis: 1,
      },
      {
        x: 25.5,
        z: 7,
        kind: n39,
        h: 1.8,
        w: 1,
        axis: 1,
      },
      {
        x: 6,
        z: 23,
        kind: n45,
        h: 6.3,
        w: 0.7,
        axis: 0,
      },
      {
        x: 26,
        z: 23,
        kind: n45,
        h: 6.3,
        w: 0.7,
        axis: 0,
      },
    ],
    arr25 = [
      {
        x: 9,
        z: 14.45,
        kind: n52,
        h: 4.35,
        w: 8.2,
        axis: 0,
        balconyReturn: true,
      },
      {
        x: 5.4,
        z: 9.8,
        kind: n53,
        h: 1,
        w: 1.8,
        d: 1,
        volume: true,
      },
      {
        x: 12.6,
        z: 9.8,
        kind: n53,
        h: 1,
        w: 1.8,
        d: 1,
        volume: true,
      },
      {
        x: 4.4,
        z: 5.4,
        kind: n39,
        h: 1.6,
        w: 1.15,
        d: 0.9,
        volume: true,
      },
    ];
  for (let v845 of arr24) fn47(v845);
  for (let v846 of arr25) fn47(v846);
  for (let v847 of arr25)
    if (v847.volume) {
      let floor48 = Math.floor(v847.x - 0.5 * v847.w),
        floor49 = Math.floor(v847.x + 0.5 * v847.w),
        floor50 = Math.floor(v847.z - 0.5 * v847.d),
        floor51 = Math.floor(v847.z + 0.5 * v847.d);
      for (let v848 = floor50; v848 <= floor51; v848++)
        for (let v849 = floor48; v849 <= floor49; v849++)
          v849 >= 0 &&
            v848 >= 0 &&
            v849 < n99 &&
            v848 < n99 &&
            (uint8Array35[fn137(v849, v848)] = 1);
    }
  function fn190() {
    return "city" !== zone;
  }
  function fn191() {
    return v47?.["active"] ? v47.y : n14;
  }
  function fn192() {
    return "city" === zone
      ? worldN
      : "observation" === zone
        ? n98
        : "balcony" === zone
          ? n99
          : roomN;
  }
  function fn193(arg566, arg567) {
    return "city" === zone
      ? worldIndex(arg566, arg567)
      : "observation" === zone
        ? fn136(arg566, arg567)
        : "balcony" === zone
          ? fn137(arg566, arg567)
          : fn135(arg566, arg567);
  }
  function fn194() {
    return "city" === zone
      ? uint8Array17
      : "observation" === zone
        ? uint8Array28
        : "balcony" === zone
          ? uint8Array32
          : uint8Array24;
  }
  function fn195() {
    return "balcony" === zone ? arr25 : "observation" === zone ? arr24 : arr21;
  }
  function fn196() {
    return "intro_room" === zone
      ? n106
      : "observation" === zone
        ? 7.4
        : "balcony" === zone
          ? 6.4
          : n97;
  }
  function fn197(arg568) {
    for (; arg568 <= -Math.PI;) arg568 += 2 * Math.PI;
    for (; arg568 > Math.PI;) arg568 -= 2 * Math.PI;
    return arg568;
  }
  function fn198(arg569) {
    if (!arg569 || !arg569.enabled) return false;
    let v850 =
      "doorway" === arg569.type
        ? (function (arg570) {
            if ("city" === arg570.sourceZone && "interior" === arg570.destinationZone) {
              let v851 = v55[arg570.siteIndex || 0];
              if (!v851 || !v851.entrance) return null;
              let entrance4 = v851.entrance,
                atan23 = Math.atan2(-entrance4.dx, entrance4.dz);
              return {
                yaw: fn197(0 + fn197(view.yaw - atan23)),
                pitch: view.pitch,
              };
            }
            if (
              arg570 === obj10 ||
              ("interior" === arg570.sourceZone &&
                "city" === arg570.destinationZone &&
                "doorway" === arg570.type)
            ) {
              let fn160Result = fn160();
              if (!fn160Result || !fn160Result.entrance) return null;
              let entrance5 = fn160Result.entrance,
                pI = Math.PI;
              return {
                yaw: fn197(Math.atan2(entrance5.dx, -entrance5.dz) + fn197(view.yaw - pI)),
                pitch: view.pitch,
              };
            }
            return null;
          })(arg569)
        : null;
    if (
      ("interior" === zone && "interior" !== arg569.destinationZone && fn187(),
      fn173(),
      "city" === arg569.sourceZone &&
        "interior" === arg569.destinationZone &&
        fn189(arg569.siteIndex || 0),
      arg569 === obj12 && 0 !== n100 && fn189(0),
      arg569 === obj10)
    ) {
      let fn160Result2 = fn160();
      arg569.arrival = {
        x: fn160Result2.entrance.outCenterX + 0.35 * fn160Result2.entrance.dx,
        z: fn160Result2.entrance.outCenterZ + 0.35 * fn160Result2.entrance.dz,
        yaw: Math.atan2(fn160Result2.entrance.dx, -fn160Result2.entrance.dz),
        pitch: -0.08,
      };
    }
    ((zone = arg569.destinationZone), (v24 = -1000000000), (s = ""), (n102 = 0.9));
    let arrival = arg569.arrival;
    return (
      (view.x = arrival.x),
      (view.z = arrival.z),
      (view.yaw = v850 ? v850.yaw : arrival.yaw),
      (view.pitch = v850 ? v850.pitch : arrival.pitch),
      resetLookFromView(),
      true
    );
  }
  var map17 = new Map();
  for (let v852 of arr20)
    (map17.has(v852.sourceZone) || map17.set(v852.sourceZone, []),
      map17.get(v852.sourceZone).push(v852));
  var from6 = Array.from(
      {
        length: gridDim * gridDim,
      },
      () => [],
    ),
    from7 = Array.from(
      {
        length: gridDim * gridDim,
      },
      () => [],
    ),
    arr26 = [];
  for (let v853 of map12)
    from6[((v853.z / gridCell) | 0) * gridDim + ((v853.x / gridCell) | 0)].push(v853);
  for (let v854 of arr17)
    from7[((v854.z / gridCell) | 0) * gridDim + ((v854.x / gridCell) | 0)].push(v854);
  var int16Array22 = new Int16Array(worldN * worldN),
    int32Array = new Int32Array(worldN * worldN),
    uint8Array39 = new Uint8Array(worldN * worldN),
    uint8Array40 = new Uint8Array(worldN * worldN),
    int16Array23 = new Int16Array(worldN * worldN),
    uint8Array41 = new Uint8Array(worldN * worldN),
    int16Array24 = new Int16Array(worldN * worldN),
    v63 = null,
    n107 = 0,
    n108 = 0,
    v64 = null;
  function fn199(arg571) {
    let entrance6 = arg571.entrance,
      v855 = arg571.facadeStyle?.["id"] || "NONE";
    return (
      entrance6.doorWorldX +
      "," +
      entrance6.doorWorldZ +
      ":" +
      entrance6.dx +
      "," +
      entrance6.dz +
      "|" +
      v855
    );
  }
  function fn200(arg572, arg573, arg574, arg575) {
    if (!arg573) return;
    let abs6 = Math.abs(arg573);
    if ("x" === arg574)
      for (let n297 = 0; n297 < worldN; n297++) {
        let v856 = n297 * worldN;
        arg573 > 0
          ? (arg572.copyWithin(v856, v856 + abs6, v856 + worldN),
            arg572.fill(arg575, v856 + worldN - abs6, v856 + worldN))
          : (arg572.copyWithin(v856 + abs6, v856, v856 + worldN - abs6),
            arg572.fill(arg575, v856, v856 + abs6));
      }
    else {
      let v857 = (worldN - abs6) * worldN;
      arg573 > 0
        ? (arg572.copyWithin(0, abs6 * worldN, abs6 * worldN + v857),
          arg572.fill(arg575, v857, worldN * worldN))
        : (arg572.copyWithin(abs6 * worldN, 0, v857), arg572.fill(arg575, 0, abs6 * worldN));
    }
  }
  function fn201(arg576, arg577, arg578) {
    if (arg576) {
      ((arg576.x -= arg577),
        (arg576.z -= arg578),
        (arg576.outCenterX -= arg577),
        (arg576.outCenterZ -= arg578),
        (arg576.innerCenterX -= arg577),
        (arg576.innerCenterZ -= arg578));
      for (let v858 of arg576.cells)
        ((v858.fx -= arg577),
          (v858.ox -= arg577),
          (v858.ix -= arg577),
          (v858.fz -= arg578),
          (v858.oz -= arg578),
          (v858.iz -= arg578));
    }
  }
  function fn202() {
    for (let v859 of from6) v859.length = 0;
    for (let v860 of from7) v860.length = 0;
    for (let v861 of map12) {
      if (v861.x < 0 || v861.z < 0 || v861.x >= worldN || v861.z >= worldN) continue;
      let v862 = (v861.x / gridCell) | 0,
        v863 = (v861.z / gridCell) | 0;
      from6[v863 * gridDim + v862].push(v861);
    }
    for (let v864 of arr17) {
      if (v864.x < 0 || v864.z < 0 || v864.x >= worldN || v864.z >= worldN) continue;
      let v865 = (v864.x / gridCell) | 0,
        v866 = (v864.z / gridCell) | 0;
      from7[v866 * gridDim + v865].push(v864);
    }
  }
  function fn203(arg579) {
    for (let v867 of arg579) {
      let v868 = v867.ox + 0.5,
        v869 = v867.oz + 0.5,
        max48 = Math.max(0, Math.min(gridDim - 1, (v868 / gridCell) | 0)),
        max49 = Math.max(0, Math.min(gridDim - 1, (v869 / gridCell) | 0));
      for (let max50 = Math.max(0, max49 - 1); max50 <= Math.min(gridDim - 1, max49 + 1); max50++)
        for (
          let max51 = Math.max(0, max48 - 1);
          max51 <= Math.min(gridDim - 1, max48 + 1);
          max51++
        ) {
          let v870 = from3[max50 * gridDim + max51];
          for (let v871 of v870) if ((v871.x - v868) ** 2 + (v871.z - v869) ** 2 < 1.5) return true;
        }
    }
    return false;
  }
  function fn204(arg580, arg581) {
    let v872 = int16Array22,
      queue = arg580.queue;
    for (; arg580.cursor < worldN * worldN && performance.now() < arg581;) {
      let v873 = arg580.cursor++;
      if (!fn6(v873) || -1 !== v872[v873]) continue;
      let length3 = arg580.buildings.length,
        v874 = uint16Array7[v873],
        n298 = 0,
        n299 = 0;
      ((queue[n299++] = v873), (v872[v873] = length3));
      let arr68 = [],
        n300 = 0,
        v875 = worldN,
        v876 = worldN;
      for (; n298 < n299;) {
        let v877 = queue[n298++],
          v878 = v877 % worldN,
          v879 = (v877 / worldN) | 0;
        arr68.push({
          x: v878,
          z: v879,
        });
        let v880 = uint8Array16[v877];
        (v880 > n300 && (n300 = v880),
          (v879 < v876 || (v879 === v876 && v878 < v875)) && ((v875 = v878), (v876 = v879)));
        let v881 = v877 - 1,
          v882 = v877 + 1,
          v883 = v877 - worldN,
          v884 = v877 + worldN;
        (v878 > 1 &&
          -1 === v872[v881] &&
          fn6(v881) &&
          uint16Array7[v881] === v874 &&
          ((v872[v881] = length3), (queue[n299++] = v881)),
          v878 < 510 &&
            -1 === v872[v882] &&
            fn6(v882) &&
            uint16Array7[v882] === v874 &&
            ((v872[v882] = length3), (queue[n299++] = v882)),
          v879 > 1 &&
            -1 === v872[v883] &&
            fn6(v883) &&
            uint16Array7[v883] === v874 &&
            ((v872[v883] = length3), (queue[n299++] = v883)),
          v879 < 510 &&
            -1 === v872[v884] &&
            fn6(v884) &&
            uint16Array7[v884] === v874 &&
            ((v872[v884] = length3), (queue[n299++] = v884)));
      }
      arg580.buildings.push({
        id: length3,
        worldId: fn5(v875, v876, v874),
        cells: arr68,
        height: n300,
        planId: v874,
        architecture: uint8Array23[v873],
        front: true,
        left: false,
        right: false,
      });
    }
    arg580.cursor >= worldN * worldN && ((arg580.phase = "entrances"), (arg580.scan = 513));
  }
  function fn205(arg582, arg583) {
    let arr69 = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ],
      v885 = int16Array22;
    for (; arg582.scan < 261631 && performance.now() < arg583;) {
      let v886 = arg582.scan++,
        v887 = v886 % worldN,
        v888 = (v886 / worldN) | 0;
      if (v887 < 1 || v887 >= 511) continue;
      let v889 = v885[v886];
      if (!(v889 < 0))
        for (let [v890, v891] of arr69) {
          let v892 = -v891,
            v893 = v890,
            fn433 = (arg584) => {
              let v896 = v887 + v892 * arg584,
                v897 = v888 + v893 * arg584,
                v898 = v896 + v890,
                v899 = v897 + v891,
                v900 = v896 - v890,
                v901 = v897 - v891;
              if (
                v896 < 1 ||
                v897 < 1 ||
                v896 >= 511 ||
                v897 >= 511 ||
                v898 < 0 ||
                v899 < 0 ||
                v898 >= worldN ||
                v899 >= worldN ||
                v900 < 0 ||
                v901 < 0 ||
                v900 >= worldN
              )
                return false;
              let fn24Result22 = worldIndex(v898, v899);
              return (
                v885[worldIndex(v896, v897)] === v889 &&
                !fn6(fn24Result22) &&
                1 === uint8Array18[fn24Result22] &&
                v885[worldIndex(v900, v901)] === v889
              );
            };
          if (!fn433(0) || !fn433(1)) continue;
          let n301 = 0,
            n302 = 0;
          for (; n301 < 24 && fn433(-1 - n301);) n301++;
          for (; n302 < 24 && fn433(2 + n302);) n302++;
          if (n301 < 1 || n302 < 1) continue;
          let map33 = [0, 1].map((arg585) => {
              let v902 = v887 + v892 * arg585,
                v903 = v888 + v893 * arg585;
              return {
                fx: v902,
                fz: v903,
                ox: v902 + v890,
                oz: v903 + v891,
                ix: v902 - v890,
                iz: v903 - v891,
              };
            }),
            v894 = (map33[0].ox + map33[1].ox + 1) / 2,
            v895 = (map33[0].oz + map33[1].oz + 1) / 2,
            obj39 = {
              x: v887,
              z: v888,
              dx: v890,
              dz: v891,
              tx: v892,
              tz: v893,
              cells: map33,
              outCenterX: v894,
              outCenterZ: v895,
              innerCenterX: (map33[0].ix + map33[1].ix + 1) / 2,
              innerCenterZ: (map33[0].iz + map33[1].iz + 1) / 2,
              leftRun: n301,
              rightRun: n302,
              d: (v894 - v35) ** 2 + (v895 - v35) ** 2,
              buildingId: v889,
              doorWorldX: Math.floor(toWorldX(v894)),
              doorWorldZ: Math.floor(toWorldZ(v895)),
            };
          obj39.cluttered = fn203(map33);
          let floor52 = Math.floor(toWorldX(v894)),
            floor53 = Math.floor(toWorldZ(v895));
          ((obj39.score =
            (Math.min(n301, n302) < 2 ? 1000 : 0) +
            100 * Math.abs(n301 - n302) +
            0.01 * hash2(131 * floor52 + 17, 137 * floor53 + 29)),
            (obj39.signature = floor52 + "," + floor53 + ":" + v890 + "," + v891));
          let get15 = arg582.best.get(v889);
          (!get15 || obj39.score < get15.score) && arg582.best.set(v889, obj39);
        }
    }
    arg582.scan >= 261631 &&
      ((arg582.entries = Array.from(arg582.best.values()).sort(
        (arg586, arg587) => arg586.d - arg587.d,
      )),
      (arg582.phase = "sites"));
  }
  function fn206(arg588, arg589) {
    for (; arg588.siteCursor < arg588.entries.length && performance.now() < arg589;) {
      let v904 = arg588.siteCursor++,
        v905 = arg588.entries[v904],
        v906 = arg588.buildings[v905.buildingId],
        fn434 = (arg590, arg591) =>
          v906.cells.some((arg592) => {
            let v908 = arg592.x + arg590,
              v909 = arg592.z + arg591;
            return (
              v908 >= 0 &&
              v909 >= 0 &&
              v908 < worldN &&
              v909 < worldN &&
              int16Array22[worldIndex(v908, v909)] !== v906.id &&
              1 === uint8Array18[worldIndex(v908, v909)]
            );
          });
      ((v906.left = fn434(-v905.tx, -v905.tz)), (v906.right = fn434(v905.tx, v905.tz)));
      let obj40 = {
        entrance: v905,
        building: v906,
        hero: v906.worldId === worldId,
        index: v904,
        worldId: v906.worldId,
      };
      for (let v910 of v906.cells) {
        let fn24Result23 = worldIndex(v910.x, v910.z);
        ((uint8Array41[fn24Result23] = 1), (int16Array24[fn24Result23] = v904));
      }
      for (let v911 of v905.cells) {
        for (let [v914, v915] of [
          [v911.fx, v911.fz],
          [v911.ix, v911.iz],
        ])
          if (v914 >= 0 && v915 >= 0 && v914 < worldN && v915 < worldN) {
            let fn24Result24 = worldIndex(v914, v915);
            ((uint8Array39[fn24Result24] = 1), (int16Array23[fn24Result24] = v904));
          }
        let v912 = v911.ix - v905.dx,
          v913 = v911.iz - v905.dz;
        v912 >= 0 &&
          v913 >= 0 &&
          v912 < worldN &&
          v913 < worldN &&
          (uint8Array40[worldIndex(v912, v913)] = 1);
      }
      let obj41 = {
        x: (v905.cells[0].fx + v905.cells[1].fx + 1) / 2 + 0.025 * v905.dx,
        z: (v905.cells[0].fz + v905.cells[1].fz + 1) / 2 + 0.025 * v905.dz,
        kind: n48,
        h: 3.65,
        w: 2.35,
        axis: 1 === Math.abs(v905.tx) ? 0 : 1,
        _depth: 0,
        _col: 0,
        siteIndex: v904,
      };
      obj40.frame = obj41;
      let fn159Result2 = fn159(obj40, v904);
      ((fn159Result2.worldId = obj40.worldId), (obj40.descriptor = fn159Result2));
      let v907 = obj40.hero ? 0 : (fn159Result2.seed >>> 11) % arr19.length;
      ((obj40.facadeStyle = arr19[v907]),
        (obj41.facadeStyle = obj40.facadeStyle),
        (obj41.customArt = fn165(fn159Result2.label, obj40.facadeStyle)),
        arg588.descriptors.set(v904, fn159Result2));
      let replace = (obj40.worldId || "site:" + v904).replace(/[^A-Za-z0-9:_-]/g, "_");
      (arg588.portals.push({
        id: obj40.hero ? "city-nocturne-entry" : "city-" + replace,
        sourceZone: "city",
        pairedId: "nocturne-city-exit",
        type: "doorway",
        activation: "auto",
        enabled: true,
        siteIndex: v904,
        x: v905.innerCenterX,
        z: v905.innerCenterZ,
        radius: 0.82,
        destination: fn159Result2.label,
        destinationZone: "interior",
        arrival: {
          x: 16,
          z: 26.45,
          yaw: 0,
          pitch: -0.04,
        },
      }),
        arg588.sites.push(obj40),
        arg588.frames.push(obj41));
    }
    arg588.siteCursor >= arg588.entries.length && (arg588.phase = "commit");
  }
  function fn207(arg593) {
    (int16Array17.set(int16Array22),
      uint8Array36.set(uint8Array39),
      uint8Array37.set(uint8Array40),
      int16Array18.set(int16Array23),
      uint8Array38.set(uint8Array41),
      int16Array19.set(int16Array24),
      (arr16.length = 0),
      arr16.push(...arg593.buildings),
      (fn139Result.length = 0),
      fn139Result.push(...arg593.entries),
      (v55.length = 0),
      v55.push(...arg593.sites),
      (arr17.length = 0),
      arr17.push(...arg593.frames),
      map10.clear());
    for (let [v916, v917] of arg593.descriptors) map10.set(v916, v917);
    n108 = 0;
    for (let v918 of v55) {
      let v919 = v918.building.cells[0],
        v920 = v919 ? fn158(v919.x, v919.z) : null;
      v920 && v920.facadeStyle.id !== v918.facadeStyle.id && n108++;
    }
    n108 && console.warn("[ASCII Plane] facade identity mismatch", n108);
    for (let v921 of v55)
      for (let v922 of v921.entrance.cells)
        for (let [v923, v924] of [
          [v922.fx, v922.fz],
          [v922.ix, v922.iz],
        ])
          v923 >= 0 &&
            v924 >= 0 &&
            v923 < worldN &&
            v924 < worldN &&
            ((uint8Array17[worldIndex(v923, v924)] = 0),
            (uint8Array16[worldIndex(v923, v924)] = 0),
            (uint8Array18[worldIndex(v923, v924)] = 1));
    for (let v925 of arr2) v925.entranceOccluded = false;
    for (let n303 = 0; n303 < v55.length; n303++) fn140(v55[n303].entrance, arr17[n303]);
    if (worldId2) {
      let findIndex = v55.findIndex((arg594) => arg594.worldId === worldId2);
      findIndex >= 0 && (n100 = findIndex);
    }
    if (
      ((v53 = arg593.entries[0] || null),
      (v54 = v53 ? arr16[v53.buildingId] : null),
      arg593.entries.slice(1),
      (v56 = arr17[0] || null),
      (n107 = 0),
      v64)
    ) {
      for (let v926 of v55) {
        let get16 = v64.get(v926.worldId);
        undefined !== get16 && get16 !== fn199(v926) && n107++;
      }
      (n107 && console.warn("[ASCII Plane] streaming address determinism mismatch", n107),
        (v64 = null));
    }
    ((map12.length = 0),
      map12.push(...arg593.portals),
      map12[0],
      (arr20.length = 0),
      arr20.push(...map12, obj10, obj11, obj12, obj13, obj14),
      map13.clear());
    for (let v927 of arr20) map13.set(v927.id, v927);
    map17.clear();
    for (let v928 of arr20)
      (map17.has(v928.sourceZone) || map17.set(v928.sourceZone, []),
        map17.get(v928.sourceZone).push(v928));
    (fn202(), performance.now(), arg593.started, arg593.framesSpent, (v63 = null));
  }
  var arr27 = [
    uint8Array16,
    uint8Array17,
    uint8Array18,
    uint8Array19,
    uint8Array20,
    uint8Array21,
    uint8Array22,
    uint16Array7,
    uint8Array23,
  ];
  function fn208(arg595, arg596) {
    if (!arg596) return;
    let abs7 = Math.abs(arg596);
    for (let n304 = 0; n304 < worldN; n304++) {
      let v929 = n304 * worldN;
      arg596 > 0
        ? (arg595.copyWithin(v929, v929 + abs7, v929 + worldN),
          arg595.fill(0, v929 + worldN - abs7, v929 + worldN))
        : (arg595.copyWithin(v929 + abs7, v929, v929 + worldN - abs7),
          arg595.fill(0, v929, v929 + abs7));
    }
  }
  function fn209(arg597, arg598) {
    if (!arg598) return;
    let abs8 = Math.abs(arg598),
      v930 = (worldN - abs8) * worldN;
    arg598 > 0
      ? (arg597.copyWithin(0, abs8 * worldN, abs8 * worldN + v930),
        arg597.fill(0, v930, worldN * worldN))
      : (arg597.copyWithin(abs8 * worldN, 0, v930), arg597.fill(0, 0, abs8 * worldN));
  }
  function fn210() {
    if ("city" !== zone) return false;
    let n305 = 0,
      n306 = 0;
    return (
      view.x < 176 && recordedOriginX > 0
        ? (n305 = -n12)
        : view.x > 336 && recordedOriginX < 7680 && (n305 = n12),
      view.z < 176 && recordedOriginZ > 0
        ? (n306 = -n12)
        : view.z > 336 && recordedOriginZ < 7680 && (n306 = n12),
      (function (arg599, arg600) {
        if ("city" !== zone || (!arg599 && !arg600)) return false;
        let max52 = Math.max(0, Math.min(7680, recordedOriginX + arg599)),
          max53 = Math.max(0, Math.min(7680, recordedOriginZ + arg600));
        if (((arg600 = max53 - recordedOriginZ), !(arg599 = max52 - recordedOriginX) && !arg600))
          return false;
        (performance.now(),
          (recordedOriginX = max52),
          (recordedOriginZ = max53),
          (view.x -= arg599),
          (view.z -= arg600));
        for (let v931 of pedestrians)
          ((v931.x -= arg599),
            (v931.z -= arg600),
            (v931.crossing || v931.waitingCross) &&
              (v931.crossBase -= 0 !== v931.hx ? arg600 : arg599));
        for (let v932 of cars) ((v932.x -= arg599), (v932.z -= arg600));
        return (
          (function (arg601, arg602) {
            for (let v933 of arr27) (fn208(v933, arg601), fn209(v933, arg602));
            (arg601 > 0
              ? fn45(worldN - arg601, worldN, 0, worldN, false)
              : arg601 < 0 && fn45(0, -arg601, 0, worldN, false),
              arg602 > 0
                ? fn45(0, worldN, worldN - arg602, worldN, false)
                : arg602 < 0 && fn45(0, worldN, 0, -arg602, false),
              fn46());
          })(arg599, arg600),
          (function (arg603, arg604) {
            for (let v934 of arr2)
              ((v934.x -= arg603), (v934.z -= arg604), (v934.entranceOccluded = false));
            for (let v935 = arr2.length - 1; v935 >= 0; v935--) {
              let v936 = arr2[v935];
              (v936.x < 0 || v936.z < 0 || v936.x >= worldN || v936.z >= worldN) &&
                arr2.splice(v935, 1);
            }
            arr3.length = 0;
            for (let v937 of from3) v937.length = 0;
            for (let v938 of arr2)
              (from3[((v938.z / gridCell) | 0) * gridDim + ((v938.x / gridCell) | 0)].push(v938),
                v938.kind >= 6 && arr3.push(v938));
            let set5 = new Set(
                arr2.map(
                  (arg605) =>
                    arg605.kind +
                    "|" +
                    arg605.x.toFixed(2) +
                    "|" +
                    arg605.z.toFixed(2) +
                    "|" +
                    (arg605.axis || 0),
                ),
              ),
              fn435 = (arg606, arg607, arg608, arg609, arg610 = 1, arg611 = 0) => {
                let v939 =
                  arg608 + "|" + arg606.toFixed(2) + "|" + arg607.toFixed(2) + "|" + arg611;
                return set5.has(v939)
                  ? null
                  : (set5.add(v939), fn50(arg606, arg607, arg608, arg609, arg610, arg611));
              },
              fn436 = (arg612, arg613, arg614, arg615) => {
                for (let v940 = arg612; v940 < arg613; v940++)
                  for (let v941 = arg614; v941 < arg615; v941++) {
                    let fn24Result25 = worldIndex(v940, v941);
                    (2 === uint8Array17[fn24Result25] || 3 === uint8Array17[fn24Result25]) &&
                      fn435(
                        v940 + 0.5,
                        v941 + 0.5,
                        uint8Array17[fn24Result25],
                        uint8Array16[fn24Result25],
                      );
                  }
                for (let max54 = Math.max(2, arg612); max54 < Math.min(510, arg613); max54++)
                  for (let max55 = Math.max(2, arg614); max55 < Math.min(510, arg615); max55++)
                    fn57(max54, max55, fn435);
              };
            (arg603 > 0
              ? fn436(worldN - arg603, worldN, 0, worldN)
              : arg603 < 0 && fn436(0, -arg603, 0, worldN),
              arg604 > 0
                ? fn436(0, worldN, worldN - arg604, worldN)
                : arg604 < 0 && fn436(0, worldN, 0, -arg604),
              fn22(2) && !arr2.some((arg616) => "THE SIGNAL KEEPER" === arg616.landmark) && fn58(),
              fn53());
          })(arg599, arg600),
          (function (arg617, arg618) {
            (fn200(int16Array17, arg617, "x", -1),
              fn200(int16Array17, arg618, "z", -1),
              fn200(uint8Array36, arg617, "x", 0),
              fn200(uint8Array36, arg618, "z", 0),
              fn200(uint8Array37, arg617, "x", 0),
              fn200(uint8Array37, arg618, "z", 0),
              fn200(int16Array18, arg617, "x", -1),
              fn200(int16Array18, arg618, "z", -1),
              fn200(uint8Array38, arg617, "x", 0),
              fn200(uint8Array38, arg618, "z", 0),
              fn200(int16Array19, arg617, "x", -1),
              fn200(int16Array19, arg618, "z", -1));
            for (let v942 of v55)
              (fn201(v942.entrance, arg617, arg618),
                v942.frame && ((v942.frame.x -= arg617), (v942.frame.z -= arg618)));
            for (let v943 of map12) ((v943.x -= arg617), (v943.z -= arg618));
            ((v56 = arr17[0] || null), fn202());
          })(arg599, arg600),
          (function () {
            v64 = new Map();
            for (let v944 of v55) v64.set(v944.worldId, fn199(v944));
            (int16Array22.fill(-1),
              uint8Array39.fill(0),
              uint8Array40.fill(0),
              int16Array23.fill(-1),
              uint8Array41.fill(0),
              int16Array24.fill(-1),
              (v63 = {
                phase: "index",
                cursor: 0,
                buildings: [],
                queue: int32Array,
                best: new Map(),
                hero: null,
                scan: 0,
                entries: null,
                siteCursor: 0,
                sites: [],
                frames: [],
                portals: [],
                descriptors: new Map(),
                started: performance.now(),
                framesSpent: 0,
              }));
          })(),
          fn92(false),
          rebuildEntityGrid(),
          performance.now(),
          true
        );
      })(n305, n306)
    );
  }
  function fn211(arg619 = zone) {
    return "city" === arg619
      ? (function (arg620 = 32) {
          arr26.length = 0;
          let v945 = arr26,
            max56 = Math.max(0, ((view.x - arg620) / gridCell) | 0),
            min19 = Math.min(gridDim - 1, ((view.x + arg620) / gridCell) | 0),
            max57 = Math.max(0, ((view.z - arg620) / gridCell) | 0),
            min20 = Math.min(gridDim - 1, ((view.z + arg620) / gridCell) | 0);
          for (let v946 = max57; v946 <= min20; v946++)
            for (let v947 = max56; v947 <= min19; v947++)
              v945.push(...from6[v946 * gridDim + v947]);
          return v945;
        })()
      : map17.get(arg619) || [];
  }
  function fn212(arg621 = zone) {
    let v948 = null;
    for (let v949 of fn211(arg621)) {
      if (!v949.enabled) continue;
      let v950 = view.x - v949.x,
        v951 = view.z - v949.z,
        hypot5 = Math.hypot(v950, v951);
      (!v948 || hypot5 < v948.distance) &&
        (v948 = {
          portal: v949,
          distance: hypot5,
        });
    }
    return v948;
  }
  var obj17 = {
    2: "STREET_TREE",
    3: "STREET_LAMP",
    4: "PEDESTRIAN",
    5: "VEHICLE",
    [n33]: "BENCH",
    [n34]: "LITTER_BIN",
    [n35]: "BOLLARD",
    [n36]: "BUS_SHELTER",
    [n37]: "TRAFFIC_LIGHT",
    [n38]: "TELEPHONE_BOX",
    [n39]: "VENDING_MACHINE",
    [n40]: "PARKED_BICYCLE",
    [n41]: "CAFE_TABLE",
    [n42]: "HYDRANT",
    [n43]: "FENCE",
    [n44]: "DOOR",
    [n45]: "STRUCTURAL_COLUMN",
    [n46]: "STOCK_SHELVING",
    [n47]: "SERVICE_COUNTER",
    [n48]: "BUILDING_ENTRANCE",
    [n49]: "ELEVATOR_DOORS",
    [n50]: "BALCONY_DOORS",
    [n51]: "SAFETY_RAIL",
    [n52]: "TOWER_FACADE",
    [n53]: "PLANTER",
    [n54]: "SERVICE_TERMINAL",
    [n55]: "THE_SIGNAL_KEEPER // CITY_SCULPTURE",
    [n56]: "SUPPLY_CRATE",
    [n57]: "STORAGE_TANK",
    [n58]: "FACTORY_STACK",
    [n59]: "PARK_FOUNTAIN",
    [n60]: "PARK_MONUMENT",
  };
  function fn213(arg622) {
    let v952 = 0.5 * (arg622.w || 0.6),
      v953 = arg622.volume ? 0.5 * (arg622.d || 0.6) : 0.24,
      v954 = 1 === arg622.axis ? v953 : v952,
      v955 = 1 === arg622.axis ? v952 : v953,
      max58 = Math.max(0, Math.abs(view.x - arg622.x) - v954),
      max59 = Math.max(0, Math.abs(view.z - arg622.z) - v955);
    return Math.hypot(max58, max59);
  }
  function fn214(arg623) {
    if (arg623.interaction?.["label"]) return arg623.interaction.label;
    if (arg623.kind === n48) {
      let v956 = v55[arg623.siteIndex || 0];
      return v956.descriptor.label + " // " + v956.descriptor.typeLabel;
    }
    return arg623.localNPC && arg623.role ? arg623.role : obj17[arg623.kind] || "UNLISTED_OBJECT";
  }
  function fn215(arg624) {
    if (!flag12 || "interior" !== zone) return false;
    let v957 = v55[n100],
      v958 = fn162(v957)[arg624];
    return (
      undefined !== v958 &&
      ((flag12 = false),
      fn187(),
      v957.hero && 31 === v958
        ? ((s5 = "ASCENDING :: FLOOR 31"), (n104 = 1), fn198(obj11))
        : v958 === n101
          ? ((s5 = "LIFT REMAINS :: FLOOR " + String(v958).padStart(2, "0")), (n104 = 2), true)
          : (fn189(n100, v958),
            (view.x = 16),
            (view.z = 5.8),
            (view.yaw = Math.PI),
            (view.pitch = -0.04),
            resetLookFromView(),
            (n102 = 0.8),
            (s5 = "ARRIVED :: FLOOR " + String(v958).padStart(2, "0")),
            (n104 = 2),
            true))
    );
  }
  function fn216() {
    return Math.hypot(view.x - freeze24.x, view.z - freeze24.z);
  }
  function fn217() {
    if (!elPreludePrompt) return;
    let v959 = flag2 && "intro_room" === zone && !v33 && fn216() <= 3.15;
    elPreludePrompt.classList.toggle("show", v959);
  }
  function fn218() {
    if (!flag2 || "intro_room" !== zone || v33 || fn216() > 3.15) return false;
    for (let v960 in keysDown) keysDown[v960] = false;
    return (
      (flag4 = false),
      elPreludePrompt?.["classList"]["remove"]("show"),
      fn257(),
      (v33 = {
        timer: 0,
        moved: false,
        phase: "stretch",
      }),
      elRelayTransfer.classList.remove("resolve-release"),
      elRelayTransfer.classList.remove("active"),
      (elRelayTransferText.textContent = "LINE OPEN\nSIGNAL FOUND"),
      true
    );
  }
  function fn219() {
    if ("intro_room" === zone) return fn218();
    if (flag12 || v65) return false;
    if (v60 && !v61) return (fn173(), true);
    if (v61) return false;
    if ("city" === zone) {
      let fn232Result = fn232(2.25);
      if (fn232Result)
        return (function (arg625) {
          let fn225Result = fn225(arg625, false),
            fn224Result = fn224(arg625);
          if (!fn225Result || !fn224Result) return false;
          let v962 = fn224Result.districtKey === obj18.homeDistrictKey;
          return (
            (v65 = {
              mode: "root",
              page: 0,
              currentId: fn224Result.id,
              currentRecord: fn224Result,
              selectedSector: null,
              message: v962
                ? "HOME NODE ONLINE"
                : fn225Result.id === fn224Result.id
                  ? "NODE ONLINE"
                  : "DISTRICT RELAY ALREADY REGISTERED",
            }),
            flag9 && fn111(false),
            true
          );
        })(fn232Result.target);
    }
    let fn172Result = fn172(),
      fn212Result = fn212(),
      v961 =
        fn212Result &&
        "use" === fn212Result.portal.activation &&
        fn212Result.distance <= fn212Result.portal.radius
          ? fn212Result
          : null;
    return fn172Result && (!v961 || fn172Result.distance <= v961.distance)
      ? fn174(fn172Result.target)
      : !!v961 &&
          (function (arg626) {
            return arg626 === obj11
              ? ("standby" === sStandby
                  ? ((sStandby = "calling"),
                    (n103 = 1.25),
                    (s5 = "LIFT CALLED :: CAR DESCENDING"),
                    (n104 = 2.5))
                  : "calling" === sStandby
                    ? ((s5 = "LIFT IN TRANSIT :: PLEASE WAIT"), (n104 = 1.5))
                    : ((flag12 = true), (s5 = "FLOOR DIRECTORY ONLINE"), (n104 = 2)),
                true)
              : arg626 === obj12
                ? ((s5 = "DESCENDING :: FLOOR 00"), (n104 = 1), fn189(0, 0), fn198(obj12))
                : arg626 === obj13
                  ? ((s5 = "BALCONY SEAL RELEASED :: LIVE CITY LINK"), (n104 = 2.5), fn198(obj13))
                  : arg626 === obj14
                    ? ((s5 = "BALCONY SEALED :: FLOOR 31"), (n104 = 2), fn198(obj14))
                    : fn198(arg626);
          })(v961.portal);
  }
  function fn220(arg627) {
    (n104 > 0 && (n104 = Math.max(0, n104 - arg627)),
      "calling" === sStandby &&
        (n103 -= arg627) <= 0 &&
        ((sStandby = "open"), (s5 = "LIFT ARRIVED :: PRESS E FOR DIRECTORY"), (n104 = 3)));
  }
  function fn221(arg628) {
    let v963 = ((((180 * arg628) / Math.PI) % 360) + 360) % 360;
    return {
      degrees: v963,
      compass: [
        "NORTH",
        "NORTH-EAST",
        "EAST",
        "SOUTH-EAST",
        "SOUTH",
        "SOUTH-WEST",
        "WEST",
        "NORTH-WEST",
      ][Math.round(v963 / 45) % 8],
    };
  }
  var fill = Array(5).fill(null);
  function fn222(arg629, arg630) {
    ((arg629 = Math.max(2, Math.min(8189, Number(arg629) || 2))),
      (arg630 = Math.max(2, Math.min(8189, Number(arg630) || 2))),
      "interior" === zone && fn187(),
      fn173(),
      (flag12 = false),
      flag9 && fn111(false),
      (zone = "city"),
      (v24 = -1000000000),
      (s = ""),
      (n102 = 1),
      (v63 = null));
    let max60 = Math.max(0, Math.min(7680, Math.round((arg629 - 256) / n12) * n12)),
      max61 = Math.max(0, Math.min(7680, Math.round((arg630 - 256) / n12) * n12));
    return (
      (recordedOriginX = max60),
      (recordedOriginZ = max61),
      fn45(),
      fn46(),
      fn59(),
      (function () {
        (uint8Array36.fill(0),
          uint8Array37.fill(0),
          int16Array18.fill(-1),
          uint8Array38.fill(0),
          int16Array19.fill(-1),
          (arr17.length = 0),
          fn138());
        let fn139Result2 = fn139();
        ((fn139Result.length = 0),
          fn139Result.push(...fn139Result2),
          (v53 = fn139Result2[0] || null),
          (v54 = v53 ? arr16[v53.buildingId] : null),
          fn139Result2.slice(1),
          (v55.length = 0),
          map10.clear());
        for (let n307 = 0; n307 < fn139Result2.length; n307++) {
          let v964 = fn139Result2[n307],
            v965 = arr16[v964.buildingId],
            fn437 = (arg631, arg632) =>
              v965.cells.some((arg633) => {
                let v967 = arg633.x + arg631,
                  v968 = arg633.z + arg632;
                return (
                  v967 >= 0 &&
                  v968 >= 0 &&
                  v967 < worldN &&
                  v968 < worldN &&
                  int16Array17[worldIndex(v967, v968)] !== v965.id &&
                  1 === uint8Array18[worldIndex(v967, v968)]
                );
              });
          ((v965.left = fn437(-v964.tx, -v964.tz)), (v965.right = fn437(v964.tx, v964.tz)));
          let obj42 = {
            entrance: v964,
            building: v965,
            hero: v965.worldId === worldId,
            index: n307,
            worldId: v965.worldId,
          };
          for (let v969 of v965.cells)
            ((uint8Array38[worldIndex(v969.x, v969.z)] = 1),
              (int16Array19[worldIndex(v969.x, v969.z)] = n307));
          for (let v970 of v964.cells) {
            for (let [v973, v974] of [
              [v970.fx, v970.fz],
              [v970.ix, v970.iz],
            ])
              v973 < 0 ||
                v974 < 0 ||
                v973 >= worldN ||
                v974 >= worldN ||
                ((uint8Array17[worldIndex(v973, v974)] = 0),
                (uint8Array16[worldIndex(v973, v974)] = 0),
                (uint8Array18[worldIndex(v973, v974)] = 1),
                (uint8Array36[worldIndex(v973, v974)] = 1),
                (int16Array18[worldIndex(v973, v974)] = n307));
            let v971 = v970.ix - v964.dx,
              v972 = v970.iz - v964.dz;
            v971 >= 0 &&
              v972 >= 0 &&
              v971 < worldN &&
              v972 < worldN &&
              (uint8Array37[worldIndex(v971, v972)] = 1);
          }
          let obj43 = {
            x: (v964.cells[0].fx + v964.cells[1].fx + 1) / 2 + 0.025 * v964.dx,
            z: (v964.cells[0].fz + v964.cells[1].fz + 1) / 2 + 0.025 * v964.dz,
            kind: n48,
            h: 3.65,
            w: 2.35,
            axis: 1 === Math.abs(v964.tx) ? 0 : 1,
            _depth: 0,
            _col: 0,
            siteIndex: n307,
          };
          ((obj42.frame = obj43), arr17.push(obj43));
          let fn159Result3 = fn159(obj42, n307);
          ((fn159Result3.worldId = obj42.worldId), (obj42.descriptor = fn159Result3));
          let v966 = obj42.hero ? 0 : (fn159Result3.seed >>> 11) % arr19.length;
          ((obj42.facadeStyle = arr19[v966]),
            (obj43.facadeStyle = obj42.facadeStyle),
            (obj43.customArt = fn165(fn159Result3.label, obj42.facadeStyle)),
            map10.set(n307, fn159Result3),
            fn140(obj42.entrance, obj43),
            v55.push(obj42));
        }
        ((v56 = arr17[0] || null), (map12.length = 0));
        for (let n308 = 0; n308 < v55.length; n308++) {
          let v975 = v55[n308],
            replace2 = (v975.worldId || "site:" + n308).replace(/[^A-Za-z0-9:_-]/g, "_");
          map12.push({
            id: v975.hero ? "city-nocturne-entry" : "city-" + replace2,
            sourceZone: "city",
            pairedId: "nocturne-city-exit",
            type: "doorway",
            activation: "auto",
            enabled: true,
            siteIndex: n308,
            x: v975.entrance.innerCenterX,
            z: v975.entrance.innerCenterZ,
            radius: 0.82,
            destination: v975.descriptor.label,
            destinationZone: "interior",
            arrival: {
              x: 16,
              z: 26.45,
              yaw: 0,
              pitch: -0.04,
            },
          });
        }
        (map12[0],
          (arr20.length = 0),
          arr20.push(...map12, obj10, obj11, obj12, obj13, obj14),
          map13.clear());
        for (let v976 of arr20) map13.set(v976.id, v976);
        map17.clear();
        for (let v977 of arr20)
          (map17.has(v977.sourceZone) || map17.set(v977.sourceZone, []),
            map17.get(v977.sourceZone).push(v977));
        for (let v978 of from6) v978.length = 0;
        for (let v979 of from7) v979.length = 0;
        for (let v980 of map12) {
          let max62 = Math.max(0, Math.min(gridDim - 1, (v980.x / gridCell) | 0)),
            max63 = Math.max(0, Math.min(gridDim - 1, (v980.z / gridCell) | 0));
          from6[max63 * gridDim + max62].push(v980);
        }
        for (let v981 of arr17) {
          let max64 = Math.max(0, Math.min(gridDim - 1, (v981.x / gridCell) | 0)),
            max65 = Math.max(0, Math.min(gridDim - 1, (v981.z / gridCell) | 0));
          from7[max65 * gridDim + max64].push(v981);
        }
      })(),
      (view.x = arg629 - recordedOriginX),
      (view.z = arg630 - recordedOriginZ),
      fn93(view.x, view.z),
      rebuildEntityGrid(),
      (v44 = v39),
      (v45 = v42),
      (n69 = 0),
      true
    );
  }
  !(function () {
    try {
      let parse = JSON.parse(localStorage.getItem("asciiPlanePositionBookmarksV1") || "null");
      if (Array.isArray(parse))
        for (let n309 = 0; n309 < 5; n309++)
          parse[n309] &&
            Number.isFinite(parse[n309].worldX) &&
            Number.isFinite(parse[n309].worldZ) &&
            (fill[n309] = parse[n309]);
    } catch {}
  })();
  var sAsciiPlanePhoneRelayNetworkV1 = "asciiPlanePhoneRelayNetworkV1",
    obj18 = {
      version: 1,
      nodes: {},
      recent: [],
      homeDistrictKey: null,
    },
    v65 = null,
    v66 = null;
  function fn223() {
    try {
      localStorage.setItem(sAsciiPlanePhoneRelayNetworkV1, JSON.stringify(obj18));
    } catch {}
  }
  function fn224(arg634) {
    if (!arg634 || arg634.kind !== n38) return null;
    let v982 = Number.isFinite(arg634.relayWorldX) ? arg634.relayWorldX : toWorldX(arg634.x),
      v983 = Number.isFinite(arg634.relayWorldZ) ? arg634.relayWorldZ : toWorldZ(arg634.z),
      fn390Result = fn390(v982, v983),
      fn394Result = fn394(v982, v983),
      fn398Result = fn398(v982 - recordedOriginX, v983 - recordedOriginZ),
      fn48Result = fn48(v982, v983);
    return {
      version: 1,
      id: arg634.relayNodeId || "PHONE:" + v982.toFixed(1) + ":" + v983.toFixed(1),
      districtKey: fn48Result,
      worldX: Number(v982.toFixed(3)),
      worldZ: Number(v983.toFixed(3)),
      axis: arg634.axis || 0,
      phoneFrontSign: Number.isFinite(arg634.phoneFrontSign) ? arg634.phoneFrontSign : -1,
      street: fn398Result.street.name,
      district: fn390Result.name,
      districtType: fn390Result.type,
      districtX: fn390Result.districtX,
      districtZ: fn390Result.districtZ,
      sector: fn394Result.name,
      sectorIx: fn394Result.ix,
      sectorIz: fn394Result.iz,
      gridRef: fn397(v982, v983).label,
      homeCandidate: !!arg634.relayHomeCandidate,
      registeredAt: Date.now(),
    };
  }
  function fn225(arg635, arg636 = false) {
    let fn224Result2 = fn224(arg635);
    if (!fn224Result2) return null;
    let v984 = obj18.nodes[fn224Result2.districtKey],
      v985 = fn224Result2.districtKey === v37;
    return (
      (!v984 || arg636 || fn224Result2.homeCandidate) &&
        (obj18.nodes[fn224Result2.districtKey] = fn224Result2),
      v985
        ? ((obj18.homeDistrictKey = fn224Result2.districtKey),
          (fn224Result2.homeCandidate || !v984 || arg636) &&
            (obj18.nodes[fn224Result2.districtKey] = fn224Result2))
        : fn224Result2.homeCandidate &&
          ((obj18.homeDistrictKey = fn224Result2.districtKey),
          (obj18.nodes[fn224Result2.districtKey] = fn224Result2)),
      fn223(),
      obj18.nodes[fn224Result2.districtKey]
    );
  }
  function fn226() {
    let v986 = null,
      v987 = 1 / 0;
    for (let v988 of arr2) {
      if (v988.kind !== n38) continue;
      let v989 = Number.isFinite(v988.relayWorldX) ? v988.relayWorldX : toWorldX(v988.x),
        v990 = Number.isFinite(v988.relayWorldZ) ? v988.relayWorldZ : toWorldZ(v988.z),
        hypot6 = Math.hypot(v989 - freeze12.x, v990 - freeze12.z);
      (v988.relayHomeCandidate || hypot6 < 2.5) &&
        hypot6 < v987 &&
        ((v986 = v988), (v987 = hypot6));
    }
    if (!v986) return null;
    let fn224Result3 = fn224(v986);
    return fn224Result3
      ? ((fn224Result3.homeCandidate = true),
        (obj18.nodes[v37] = fn224Result3),
        (obj18.homeDistrictKey = v37),
        (v986.relayHomeCandidate = true),
        (v986.relayAutoDiscovered = true),
        fn223(),
        fn224Result3)
      : null;
  }
  function fn227(arg637) {
    if (!arg637 || !Number.isFinite(arg637.worldX) || !Number.isFinite(arg637.worldZ))
      return arg637;
    let fn390Result2 = fn390(arg637.worldX, arg637.worldZ),
      fn394Result2 = fn394(arg637.worldX, arg637.worldZ),
      fn398Result2 = fn398(arg637.worldX - recordedOriginX, arg637.worldZ - recordedOriginZ);
    return {
      ...arg637,
      street: fn398Result2.street.name,
      district: fn390Result2.name,
      districtType: fn390Result2.type,
      districtX: fn390Result2.districtX,
      districtZ: fn390Result2.districtZ,
      sector: fn394Result2.name,
      sectorIx: fn394Result2.ix,
      sectorIz: fn394Result2.iz,
      gridRef: fn397(arg637.worldX, arg637.worldZ).label,
    };
  }
  function fn228() {
    let arr70 = [],
      flag25 = false;
    for (let [v991, v992] of Object.entries(obj18.nodes)) {
      if (!v992 || !Number.isFinite(v992.worldX) || !Number.isFinite(v992.worldZ)) continue;
      let fn227Result = fn227(v992);
      (arr70.push(fn227Result),
        (fn227Result.street !== v992.street ||
          fn227Result.district !== v992.district ||
          fn227Result.sector !== v992.sector) &&
          ((obj18.nodes[v991] = fn227Result), (flag25 = true)));
    }
    return (flag25 && fn223(), arr70);
  }
  function fn229() {
    let map34 = new Map();
    for (let v993 of fn228()) {
      let v994 = v993.sectorIx + "," + v993.sectorIz;
      (map34.has(v994) ||
        map34.set(v994, {
          key: v994,
          name: v993.sector,
          ix: v993.sectorIx,
          iz: v993.sectorIz,
          nodes: [],
        }),
        map34.get(v994).nodes.push(v993));
    }
    return Array.from(map34.values()).sort((arg638, arg639) =>
      arg638.name.localeCompare(arg639.name),
    );
  }
  function fn230() {
    let arr71 = [];
    for (let v995 of obj18.recent || []) {
      let v996 = obj18.nodes[v995];
      if (
        (v996 && !arr71.some((arg640) => arg640.districtKey === v995) && arr71.push(v996),
        arr71.length >= 6)
      )
        break;
    }
    return arr71;
  }
  function fn231(arg641) {
    for (let v997 of arr2) if (v997.kind === n38 && v997.relayNodeId === arg641) return v997;
    return null;
  }
  function fn232(arg642 = 2.25) {
    if ("city" !== zone) return null;
    let v998 = null,
      v999 = arg642 + 2,
      max66 = Math.max(0, Math.floor((view.x - v999) / gridCell)),
      min21 = Math.min(gridDim - 1, Math.floor((view.x + v999) / gridCell)),
      max67 = Math.max(0, Math.floor((view.z - v999) / gridCell)),
      min22 = Math.min(gridDim - 1, Math.floor((view.z + v999) / gridCell));
    for (let v1000 = max67; v1000 <= min22; v1000++)
      for (let v1001 = max66; v1001 <= min21; v1001++)
        for (let v1002 of from3[v1000 * gridDim + v1001])
          if (v1002.kind === n38) {
            let fn213Result = fn213(v1002);
            fn213Result <= arg642 &&
              (!v998 || fn213Result < v998.distance) &&
              (v998 = {
                target: v1002,
                distance: fn213Result,
              });
          }
    return v998;
  }
  function fn233(arg643, arg644) {
    let max68 = Math.max(1, Math.ceil(arg643.length / 6));
    return {
      page: (arg644 = Math.max(0, Math.min(max68 - 1, 0 | arg644))),
      pages: max68,
      items: arg643.slice(6 * arg644, 6 * arg644 + 6),
    };
  }
  function fn234() {
    if (!v65) return null;
    let v1003 = v65,
      currentRecord = v1003.currentRecord,
      v1004 = obj18.nodes[currentRecord.districtKey],
      length4 = fn228().length;
    if ("root" === v1003.mode) {
      let v1005 = obj18.homeDistrictKey && obj18.nodes[obj18.homeDistrictKey],
        fn230Result = fn230();
      return {
        label: "03::TELEPHONE_RELAY",
        title: "PUBLIC_LINE // " + currentRecord.district.replace(/ /g, "_"),
        text:
          "NODE " +
          currentRecord.gridRef +
          " / " +
          currentRecord.street +
          "\nDISTRICT :: " +
          currentRecord.district +
          "\nSECTOR :: " +
          currentRecord.sector +
          "\nREGISTERED NODES :: " +
          length4 +
          "\n" +
          v1003.message,
        choices: [
          {
            key: "1",
            text: "HOME NODE" + (v1005 ? " // " + v1005.district : " // UNDISCOVERED"),
          },
          {
            key: "2",
            text: "RECENT CONNECTIONS // " + fn230Result.length,
          },
          {
            key: "3",
            text: "SECTOR DIRECTORY // " + fn229().length,
          },
          ...(v1004 && v1004.id !== currentRecord.id
            ? [
                {
                  key: "R",
                  text: "MAKE THIS THE DISTRICT RELAY",
                },
              ]
            : []),
        ],
      };
    }
    if ("recent" === v1003.mode) {
      let fn230Result2 = fn230();
      return {
        label: "03::RECENT_CONNECTIONS",
        title: "RECENT RELAY NODES",
        text: fn230Result2.length
          ? "Select a previously used connection."
          : "NO PREVIOUS REMOTE CONNECTIONS.",
        choices: fn230Result2.map((arg645, arg646) => ({
          key: String(arg646 + 1),
          text: arg645.district + " // " + arg645.street + " / " + arg645.sector,
        })),
      };
    }
    if ("sectors" === v1003.mode) {
      let fn233Result = fn233(fn229(), v1003.page);
      return (
        (v1003.page = fn233Result.page),
        {
          label: "03::SECTOR_DIRECTORY",
          title: "REGISTERED SECTORS // PAGE " + (fn233Result.page + 1) + "/" + fn233Result.pages,
          text: "Select a sector to list its registered district relays.",
          choices: fn233Result.items.map((arg647, arg648) => ({
            key: String(arg648 + 1),
            text:
              arg647.name +
              " // " +
              arg647.nodes.length +
              " NODE" +
              (1 === arg647.nodes.length ? "" : "S"),
          })),
        }
      );
    }
    if ("districts" === v1003.mode) {
      let find2 = fn229().find((arg649) => arg649.key === v1003.selectedSector),
        fn233Result2 = fn233(
          find2
            ? find2.nodes
                .slice()
                .sort((arg650, arg651) => arg650.district.localeCompare(arg651.district))
            : [],
          v1003.page,
        );
      return (
        (v1003.page = fn233Result2.page),
        {
          label: "03::DISTRICT_RELAYS",
          title:
            (find2 ? find2.name : "SECTOR") +
            " // PAGE " +
            (fn233Result2.page + 1) +
            "/" +
            fn233Result2.pages,
          text: "One registered destination per district.",
          choices: fn233Result2.items.map((arg652, arg653) => ({
            key: String(arg653 + 1),
            text: arg652.district + " // " + arg652.street + " / " + arg652.gridRef,
          })),
        }
      );
    }
    return null;
  }
  function fn235(arg654, arg655) {
    let arr72 = [],
      v1006 = arg654?.["axis"] ?? arg655.axis ?? 0,
      v1007 = arg654?.["phoneFrontSign"] ?? arg655.phoneFrontSign ?? -1;
    for (let v1008 of [v1007, -v1007])
      for (let v1009 of [1.55, 1.85, 2.15])
        arr72.push(
          0 === v1006
            ? {
                x: arg654.x,
                z: arg654.z + v1008 * v1009,
              }
            : {
                x: arg654.x + v1008 * v1009,
                z: arg654.z,
              },
        );
    for (let v1010 of arr72) {
      if (!fn250(v1010.x, v1010.z)) continue;
      let fn24Result26 = worldIndex(Math.floor(v1010.x), Math.floor(v1010.z));
      if (
        1 === uint8Array18[fn24Result26] ||
        6 === uint8Array18[fn24Result26] ||
        5 === uint8Array18[fn24Result26]
      )
        return v1010;
    }
    return fn238(arg654?.["x"] || 256, arg654?.["z"] || 256);
  }
  function fn236(arg656) {
    return (
      !!arg656 &&
      ((v65 = null),
      (v66 = {
        record: arg656,
        phase: "out",
        timer: 0,
        moved: false,
      }),
      elRelayTransfer.classList.remove("resolve-release"),
      (elRelayTransferText.textContent = "DIALING " + arg656.gridRef + "...\nROUTING SIGNAL"),
      elRelayTransfer.classList.add("active"),
      true)
    );
  }
  function fn237(arg657) {
    if (!v65) return false;
    let v1011 = v65;
    if ("Escape" === arg657.code)
      return (
        "districts" === v1011.mode
          ? ((v1011.mode = "sectors"), (v1011.page = 0), (v1011.selectedSector = null))
          : "root" !== v1011.mode
            ? ((v1011.mode = "root"), (v1011.page = 0))
            : (v65 = null),
        true
      );
    if ("KeyR" === arg657.code && "root" === v1011.mode)
      return (
        fn225(fn231(v1011.currentId) || fn232(3)?.["target"], true),
        (v1011.currentRecord = obj18.nodes[v1011.currentRecord.districtKey] || v1011.currentRecord),
        (v1011.message = "DISTRICT RELAY UPDATED"),
        true
      );
    if (!(
      ("KeyN" !== arg657.code && "KeyP" !== arg657.code) ||
      ("sectors" !== v1011.mode && "districts" !== v1011.mode)
    ))
      return ((v1011.page = Math.max(0, v1011.page + ("KeyN" === arg657.code ? 1 : -1))), true);
    let exec = /^Digit([1-6])$/.exec(arg657.code);
    if (!exec) return true;
    let v1012 = Number(exec[1]) - 1;
    if ("root" === v1011.mode) {
      if (0 === v1012) {
        let v1013 = obj18.homeDistrictKey && obj18.nodes[obj18.homeDistrictKey];
        v1013 ? fn236(v1013) : (v1011.message = "HOME NODE UNDISCOVERED");
      } else
        1 === v1012
          ? ((v1011.mode = "recent"), (v1011.page = 0))
          : 2 === v1012 && ((v1011.mode = "sectors"), (v1011.page = 0));
      return true;
    }
    if ("recent" === v1011.mode) {
      let v1014 = fn230()[v1012];
      return (v1014 && fn236(v1014), true);
    }
    if ("sectors" === v1011.mode) {
      let v1015 = fn233(fn229(), v1011.page).items[v1012];
      return (
        v1015 && ((v1011.mode = "districts"), (v1011.selectedSector = v1015.key), (v1011.page = 0)),
        true
      );
    }
    if ("districts" === v1011.mode) {
      let find3 = fn229().find((arg658) => arg658.key === v1011.selectedSector),
        v1016 = fn233(
          find3
            ? find3.nodes
                .slice()
                .sort((arg659, arg660) => arg659.district.localeCompare(arg660.district))
            : [],
          v1011.page,
        ).items[v1012];
      return (v1016 && fn236(v1016), true);
    }
    return true;
  }
  function fn238(arg661 = 256, arg662 = 256) {
    let max69 = Math.max(2, Math.min(509, Math.round(arg661))),
      max70 = Math.max(2, Math.min(509, Math.round(arg662))),
      v1017 = null;
    for (let n310 = 0; n310 <= 52; n310++)
      for (let v1018 = -n310; v1018 <= n310; v1018++)
        for (let v1019 = -n310; v1019 <= n310; v1019++) {
          if (n310 && Math.max(Math.abs(v1019), Math.abs(v1018)) !== n310) continue;
          let v1020 = max69 + v1019,
            v1021 = max70 + v1018;
          if (v1020 < 2 || v1021 < 2 || v1020 >= 510 || v1021 >= 510) continue;
          let fn24Result27 = worldIndex(v1020, v1021);
          if (0 !== uint8Array17[fn24Result27] || 4 === uint8Array18[fn24Result27]) continue;
          let obj44 = {
            x: v1020 + 0.5,
            z: v1021 + 0.5,
            surface: uint8Array18[fn24Result27],
          };
          if (
            (v1017 || (v1017 = obj44),
            1 === uint8Array18[fn24Result27] ||
              6 === uint8Array18[fn24Result27] ||
              5 === uint8Array18[fn24Result27])
          )
            return obj44;
        }
    return (
      v1017 || {
        x: max69 + 0.5,
        z: max70 + 0.5,
        surface: 1,
      }
    );
  }
  (!(function () {
    try {
      let parse2 = JSON.parse(localStorage.getItem(sAsciiPlanePhoneRelayNetworkV1) || "null");
      parse2 &&
        1 === parse2.version &&
        parse2.nodes &&
        "object" == typeof parse2.nodes &&
        ((obj18 = parse2), Array.isArray(obj18.recent) || (obj18.recent = []));
    } catch {}
  })(),
    !obj18.homeDistrictKey &&
      obj18.nodes &&
      obj18.nodes[v37] &&
      ((obj18.homeDistrictKey = v37), fn223()),
    setTimeout(fn226, 0),
    Object.freeze({
      Digit7: "INDUSTRIAL",
      Digit8: "RESIDENTIAL",
      Digit9: "PARKLAND",
      Digit0: "OLD_TOWN",
    }));
  var freeze29 = Object.freeze({
    INDUSTRIAL: 2500,
    RESIDENTIAL: 3100,
    PARKLAND: 2700,
    OLD_TOWN: 2200,
  });
  var sOFF = "OFF";
  v47 = {
    active: false,
    phase: "OFF",
    x: 0,
    z: 0,
    y: n14,
    yaw: view.yaw,
    vx: 0,
    vz: 0,
    route: [],
    routeIndex: 0,
    routeStartX: 0,
    routeStartZ: 0,
    target: null,
    cruiseY: 32,
    lookYaw: 0,
    lookPitch: 0,
    arrivalTimer: 0,
    distanceTravelled: 0,
    bank: 0,
    speed: 0,
    routeBestDistance: 1 / 0,
    routeStallTimer: 0,
    forceDirectTimer: 0,
  };
  var arr28 = [];
  function fn239(arg663) {
    let v1022 = "move" === arg663 ? elTouchMove : elTouchLook;
    if (v1022) {
      let elTouchStickThumb = v1022.querySelector(".touch-stick-thumb");
      elTouchStickThumb && (elTouchStickThumb.style.transform = "translate(0px, 0px)");
    }
    ((touchSticks[arg663] = null),
      "move" === arg663 && ((moveAxis.forward = 0), (moveAxis.strafe = 0)));
  }
  function fn240() {
    (fn239("move"), fn239("look"));
  }
  function fn241(arg664) {
    flag5 &&
      ((flag6 = !!arg664),
      fn240(),
      document.body?.["classList"]["toggle"]("touch-paused", flag6),
      elTouchControls && elTouchControls.classList.toggle("is-paused", flag6),
      elTouchPauseMenu && (elTouchPauseMenu.hidden = !flag6),
      elTouchPause &&
        ((elTouchPause.textContent = flag6 ? "RESUME" : "PAUSE"),
        elTouchPause.setAttribute("aria-pressed", String(flag6))));
  }
  function fn242(
    arg665 = (function () {
      return (
        "function" == typeof matchMedia &&
        matchMedia("(pointer: coarse)").matches &&
        navigator.maxTouchPoints > 0
      );
    })(),
  ) {
    let v1023 = !!arg665;
    flag5 !== v1023
      ? ((flag7 = false),
        (flag5 = v1023) || (flag6 = false),
        fn240(),
        document.body?.["classList"]["toggle"]("touch-mode", flag5),
        document.body?.["classList"]["remove"]("touch-panel-open"),
        elInterface && elInterface.setAttribute("aria-hidden", String(flag5)),
        document.body?.["classList"]["remove"]("touch-paused"),
        elTouchControls && (elTouchControls.hidden = !flag5 || PHASE_LIVE !== PHASE.LIVE),
        elTouchPauseMenu && (elTouchPauseMenu.hidden = true),
        elTouchPause &&
          ((elTouchPause.textContent = "PAUSE"),
          elTouchPause.setAttribute("aria-pressed", "false")),
        flag5 && elUiCapture && (elUiCapture.textContent = "TOUCH LINK ONLINE"))
      : elTouchControls && (elTouchControls.hidden = !v1023 || PHASE_LIVE !== PHASE.LIVE);
  }
  function fn243() {
    if (!elTouchControls) return;
    let v1024 = flag5 && PHASE_LIVE === PHASE.LIVE;
    if (((elTouchControls.hidden = !v1024), !v1024))
      return void (elTouchChoiceControls && (elTouchChoiceControls.hidden = true));
    (elTouchControls.classList.toggle("is-paused", flag6),
      elTouchControls.classList.toggle("is-panel-open", flag7),
      elTouchControls.classList.toggle("has-context", !flag7 && !elContextPanel.hidden),
      elTouchPanel &&
        ((elTouchPanel.textContent = flag7 ? "CLOSE" : "PANEL"),
        elTouchPanel.setAttribute("aria-expanded", String(flag7))));
    let v1025 = flag6
      ? []
      : (function () {
          if (flag12)
            return fn162(v55[n100])
              .slice(0, 3)
              .map(
                (arg666, arg667) =>
                  arg667 +
                  1 +
                  " // " +
                  (0 === arg666 ? "FLOOR 00" : "FLOOR " + String(arg666).padStart(2, "0")),
              );
          if (v65)
            return (
              fn234()
                ?.["choices"]?.["slice"](0, 3)
                ["map"]((arg668) => arg668.key + " // " + arg668.text) || []
            );
          let fn177Result = fn177();
          return fn177Result?.["choices"]?.["length"]
            ? fn177Result.choices.slice(0, 3).map((arg669) => arg669.key + " // " + arg669.text)
            : v60 && !v61
              ? ["1 // SELECT"]
              : [];
        })();
    (elTouchChoiceControls && (elTouchChoiceControls.hidden = flag7 || 0 === v1025.length),
      v.forEach((arg670, arg671) => {
        let v1026 = v1025[arg671] || "";
        ((arg670.hidden = !v1026), (arg670.textContent = v1026));
      }));
  }
  function fn244() {
    let v1027 = flag5 && PHASE_LIVE === PHASE.LIVE;
    (elMobileHud && (elMobileHud.hidden = !v1027 || flag7),
      elMobileHudZone &&
        (elMobileHudZone.textContent = elUiZone?.["textContent"] || "CITY // LINKING"),
      elMobileHudBearing &&
        (elMobileHudBearing.textContent = elUiBearing?.["textContent"] || "--- DEG"));
    let v1028 = v1027 && !flag7 && !elContextPanel.hidden;
    (elMobileContext && (elMobileContext.hidden = !v1028),
      v1028 &&
        (elMobileContextLabel &&
          (elMobileContextLabel.textContent = elUiContextLabel.textContent || "LOCAL_CONTEXT"),
        elMobileContextTitle &&
          (elMobileContextTitle.textContent = elUiContextTitle.textContent || ""),
        elMobileContextCopy &&
          (elMobileContextCopy.textContent = elUiContextCopy.textContent || "")),
      elOrientationGuide && (elOrientationGuide.hidden = !v1027 || flag8));
  }
  function fn245(arg672, arg673) {
    let max71 = Math.max(-n73, Math.min(n73, arg672 || 0)),
      max72 = Math.max(-n73, Math.min(n73, arg673 || 0));
    if (v47?.["active"])
      return (
        (v47.lookYaw = Math.max(-1.82, Math.min(1.82, v47.lookYaw + max71 * n71))),
        (v47.lookPitch = Math.max(-0.5127, Math.min(0.78, v47.lookPitch - max72 * n72))),
        (yaw = v47.yaw + v47.lookYaw),
        void (pitch = v47.lookPitch)
      );
    ((yaw += max71 * n71),
      (pitch = Math.max(-1.15, Math.min(1.15, pitch - max72 * n72))),
      flag9 && Math.abs(max71) + Math.abs(max72) > 0 && (n80 = 2.6));
  }
  function fn246(arg674) {
    if (!elTouchMove) return;
    let getBoundingClientRect = elTouchMove.getBoundingClientRect(),
      max73 = Math.max(
        1,
        0.32 * Math.min(getBoundingClientRect.width, getBoundingClientRect.height),
      ),
      v1029 = arg674.clientX - (getBoundingClientRect.left + 0.5 * getBoundingClientRect.width),
      v1030 = arg674.clientY - (getBoundingClientRect.top + 0.5 * getBoundingClientRect.height),
      hypot7 = Math.hypot(v1029, v1030),
      v1031 = hypot7 > max73 ? max73 / hypot7 : 1,
      v1032 = v1029 * v1031,
      v1033 = v1030 * v1031;
    ((moveAxis.strafe = v1032 / max73), (moveAxis.forward = -v1033 / max73));
    let elTouchStickThumb2 = elTouchMove.querySelector(".touch-stick-thumb");
    elTouchStickThumb2 &&
      (elTouchStickThumb2.style.transform =
        "translate(" + v1032.toFixed(1) + "px, " + v1033.toFixed(1) + "px)");
  }
  function fn247(arg675, arg676) {
    let v1034 = touchSticks[arg675];
    !v1034 ||
      v1034.id !== arg676.pointerId ||
      (arg676.cancelable && arg676.preventDefault(), fn239(arg675));
  }
  (new Map(arr28.map((arg677) => [arg677.id, arg677])),
    elTouchMove &&
      elTouchLook &&
      [
        ["move", elTouchMove],
        ["look", elTouchLook],
      ].forEach(([arg678, arg679]) => {
        (arg679.addEventListener("pointerdown", (arg680) =>
          (function (arg681, arg682) {
            if (!flag5 || flag6 || "mouse" === arg682.pointerType || touchSticks[arg681]) return;
            arg682.cancelable && arg682.preventDefault();
            let v1035 = "move" === arg681 ? elTouchMove : elTouchLook;
            if (v1035) {
              touchSticks[arg681] = {
                id: arg682.pointerId,
                lastX: arg682.clientX,
                lastY: arg682.clientY,
              };
              try {
                v1035.setPointerCapture(arg682.pointerId);
              } catch {}
              "move" === arg681 && (flag9 && fn111(false), fn246(arg682));
            }
          })(arg678, arg680),
        ),
          arg679.addEventListener("pointermove", (arg683) =>
            (function (arg684, arg685) {
              let v1036 = touchSticks[arg684];
              !v1036 ||
                v1036.id !== arg685.pointerId ||
                (arg685.cancelable && arg685.preventDefault(),
                "move" === arg684
                  ? fn246(arg685)
                  : (fn245(
                      1.8 * (arg685.clientX - v1036.lastX),
                      1.8 * (arg685.clientY - v1036.lastY),
                    ),
                    (v1036.lastX = arg685.clientX),
                    (v1036.lastY = arg685.clientY)));
            })(arg678, arg683),
          ),
          arg679.addEventListener("pointerup", (arg686) => fn247(arg678, arg686)),
          arg679.addEventListener("pointercancel", (arg687) => fn247(arg678, arg687)),
          arg679.addEventListener("lostpointercapture", (arg688) => fn247(arg678, arg688)));
      }),
    elTouchAction?.["addEventListener"]("click", function () {
      return (
        !(!flag5 || flag6) &&
        (PHASE_LIVE !== PHASE.LIVE
          ? (fn16(), true)
          : !(flag12 || v65 || v61) && (!(!v60 || v61 || !fn176(0)) || fn219()))
      );
    }),
    elTouchBack?.["addEventListener"]("click", function () {
      return (
        !(!flag5 || flag6) &&
        (v65
          ? fn237({
              code: "Escape",
            })
          : flag12
            ? ((flag12 = false), true)
            : !!v60 && (fn173(), true))
      );
    }),
    elTouchPanel?.["addEventListener"]("click", () =>
      (function (arg689) {
        let v1037 = !!arg689 && flag5 && PHASE_LIVE === PHASE.LIVE;
        flag7 !== v1037 &&
          ((flag7 = v1037),
          fn240(),
          document.body?.["classList"]["toggle"]("touch-panel-open", flag7),
          elInterface && elInterface.setAttribute("aria-hidden", String(flag5 && !flag7)),
          fn243(),
          fn244());
      })(!flag7),
    ),
    elTouchPause?.["addEventListener"]("click", () => fn241(!flag6)),
    elTouchResume?.["addEventListener"]("click", () => fn241(false)),
    v.forEach((arg690) =>
      arg690.addEventListener("click", () =>
        (function (arg691) {
          return (
            !(!flag5 || flag6) &&
            (v65
              ? fn237({
                  code: "Digit" + String(arg691 + 1),
                })
              : flag12
                ? fn215(arg691)
                : v61
                  ? fn175(arg691)
                  : fn176(arg691))
          );
        })(Number(arg690.dataset.touchChoice)),
      ),
    ),
    elOrientationContinue?.["addEventListener"]("click", () => {
      ((flag8 = true), fn244());
    }));
  var v67 = "function" == typeof matchMedia ? matchMedia("(pointer: coarse)") : null;
  function fn248() {
    flag5 && fn240();
  }
  function fn249(arg692, arg693) {
    let fn192Result = fn192(),
      fn194Result2 = fn194();
    if (arg692 < 0 || arg693 < 0 || arg692 >= fn192Result || arg693 >= fn192Result) return true;
    let fn193Result = fn193(arg692, arg693);
    return (
      0 !== ("city" === zone && 3 === fn194Result2[fn193Result] ? 0 : fn194Result2[fn193Result]) ||
      ("city" === zone && 4 === uint8Array18[fn193Result]) ||
      (fn190() &&
        0 !==
          ("observation" === zone
            ? uint8Array31
            : "balcony" === zone
              ? uint8Array35
              : uint8Array27)[fn193Result])
    );
  }
  function fn250(arg694, arg695, arg696 = n15) {
    return !(
      fn249((arg694 - arg696) | 0, (arg695 - arg696) | 0) ||
      fn249((arg694 - arg696) | 0, (arg695 + arg696) | 0) ||
      fn249((arg694 + arg696) | 0, (arg695 - arg696) | 0) ||
      fn249((arg694 + arg696) | 0, (arg695 + arg696) | 0) ||
      (function (arg697, arg698, arg699 = n15) {
        if ("city" !== zone) return false;
        let n311 = 2.7,
          max74 = Math.max(0, Math.floor((arg697 - n311) / gridCell)),
          min23 = Math.min(gridDim - 1, Math.floor((arg697 + n311) / gridCell)),
          max75 = Math.max(0, Math.floor((arg698 - n311) / gridCell)),
          min24 = Math.min(gridDim - 1, Math.floor((arg698 + n311) / gridCell));
        for (let v1038 = max75; v1038 <= min24; v1038++)
          for (let v1039 = max74; v1039 <= min23; v1039++) {
            let v1040 = from3[v1038 * gridDim + v1039];
            for (let n312 = 0; n312 < v1040.length; n312++) {
              let v1041 = v1040[n312];
              if ((v1041.kind !== n43 && v1041.kind !== n38) || v1041.entranceOccluded) continue;
              if (v1041.kind === n38) {
                let v1045 = 0.5 * (v1041.w || 1.22),
                  v1046 = 0.5 * (v1041.d || 0.96),
                  v1047 = 0 === v1041.axis ? v1045 : v1046,
                  v1048 = 0 === v1041.axis ? v1046 : v1045;
                if (
                  Math.abs(arg697 - v1041.x) <= v1047 + arg699 &&
                  Math.abs(arg698 - v1041.z) <= v1048 + arg699
                )
                  return true;
                continue;
              }
              let v1042 = 0.5 * (v1041.w || 1),
                n313 = 0.23,
                v1043 = 0 === v1041.axis ? v1042 : n313,
                v1044 = 0 === v1041.axis ? n313 : v1042;
              if (
                Math.abs(arg697 - v1041.x) <= v1043 + arg699 &&
                Math.abs(arg698 - v1041.z) <= v1044 + arg699
              )
                return true;
            }
          }
        return false;
      })(arg694, arg695, arg696) ||
      (function (arg700, arg701, arg702 = n15) {
        if ("city" !== zone) return false;
        let fn3Result5 = toWorldX(arg700),
          fn4Result5 = toWorldZ(arg701);
        for (let v1049 of arr28) {
          if (v47.active && v1049.id === v47.originRankId) continue;
          let v1050 = fn3Result5 - v1049.x,
            v1051 = fn4Result5 - v1049.z;
          if (v1050 * v1050 + v1051 * v1051 > 22) continue;
          let v1052 = v1050 * Math.sin(v1049.yaw) + v1051 * -Math.cos(v1049.yaw),
            v1053 = v1050 * Math.cos(v1049.yaw) + v1051 * Math.sin(v1049.yaw);
          if (Math.abs(v1052) <= 2.75 + arg702 && Math.abs(v1053) <= 2.18 + arg702) return true;
        }
        return false;
      })(arg694, arg695, arg696)
    );
  }
  function fn251(arg703) {
    if (v33)
      return (
        (function (arg704) {
          if (!v33) return;
          v33.timer += arg704;
          let timer = v33.timer;
          ((v33.phase =
            timer < freeze28.stretch
              ? "stretch"
              : timer < freeze28.digitize
                ? "digitize"
                : "entry"),
            timer >= 0.46 && timer < freeze28.digitize
              ? (elRelayTransferText.textContent = "CONNECTION HELD\nPLANE COMPILING")
              : timer >= freeze28.digitize &&
                ((elRelayTransferText.textContent = "CONNECTION ACCEPTED\nENTERING THE PLANE"),
                elRelayTransfer.classList.add("active")),
            !v33.moved &&
              timer >= freeze28.entry &&
              ((v33.moved = true),
              (function () {
                fn222(freeze12.x, freeze12.z);
                let v1063 = fn226() ||
                    obj18.nodes[v37] || {
                      worldX: freeze12.x,
                      worldZ: freeze12.z,
                      axis: freeze12.axis,
                      phoneFrontSign: -1,
                      id: "",
                    },
                  v1064 =
                    (v1063.id && fn231(v1063.id)) ||
                    arr2.find((arg705) => arg705.kind === n38 && arg705.relayHomeCandidate) ||
                    null,
                  fn235Result = fn235(v1064, v1063);
                ((view.x = fn235Result.x), (view.z = fn235Result.z));
                let v1065 = v1064?.["x"] ?? freeze12.x - recordedOriginX,
                  v1066 = v1064?.["z"] ?? freeze12.z - recordedOriginZ;
                ((view.yaw = Math.atan2(v1065 - view.x, -(v1066 - view.z))),
                  (view.pitch = -0.04),
                  resetLookFromView(),
                  (n102 = 1.2),
                  (flag2 = false),
                  (v33 = null),
                  fn257(),
                  document.body?.["classList"]?.["remove"]("prelude-room"),
                  (v34 = false),
                  fn13(true),
                  (live = freeze6.title),
                  (now = performance.now() - 1000 * freeze6.title),
                  fn14(PHASE.RESOLVING),
                  (elRelayTransferText.textContent = "CONNECTION ACCEPTED\nENTERING THE PLANE"),
                  elRelayTransfer.classList.add("resolve-release"),
                  elRelayTransfer.classList.remove("active"),
                  performance.now());
              })()));
        })(arg703),
        void fn217()
      );
    if (v66)
      return (
        (function (arg706) {
          if (!v66) return;
          let v1067 = v66;
          ((v1067.timer += arg706),
            "out" === v1067.phase && v1067.timer >= 0.34
              ? ((v1067.phase = "hold"),
                (v1067.timer = 0),
                v1067.moved ||
                  ((v1067.moved = true),
                  (elRelayTransferText.textContent = "CONNECTION ACCEPTED\nSIGNAL TRANSFER"),
                  (function (arg707) {
                    let record = arg707.record;
                    fn222(record.worldX, record.worldZ);
                    let fn231Result = fn231(record.id),
                      fn235Result2 = fn235(fn231Result, record);
                    ((view.x = fn235Result2.x), (view.z = fn235Result2.z));
                    let v1068 = fn231Result?.["x"] ?? record.worldX - recordedOriginX,
                      v1069 = fn231Result?.["z"] ?? record.worldZ - recordedOriginZ;
                    ((view.yaw = Math.atan2(v1068 - view.x, -(v1069 - view.z))),
                      (view.pitch = -0.04),
                      resetLookFromView(),
                      (n102 = 1.1),
                      (function (arg708) {
                        arg708 &&
                          ((obj18.recent = [
                            arg708.districtKey,
                            ...(obj18.recent || []).filter(
                              (arg709) => arg709 !== arg708.districtKey,
                            ),
                          ].slice(0, 12)),
                          fn223());
                      })(record),
                      record.district,
                      record.street,
                      performance.now());
                  })(v1067)))
              : "hold" === v1067.phase && v1067.timer >= 0.18
                ? ((v1067.phase = "resolve"),
                  (v1067.timer = 0),
                  (elRelayTransferText.textContent = "NODE " + v1067.record.gridRef + " ONLINE"),
                  elRelayTransfer.classList.add("resolve-release"),
                  elRelayTransfer.classList.remove("active"))
                : "resolve" === v1067.phase &&
                  v1067.timer >= 1.85 &&
                  ((v66 = null),
                  elRelayTransfer.classList.remove("resolve-release"),
                  (elRelayTransferText.textContent = "PUBLIC RELAY // STANDBY")));
        })(arg703),
        void fn220(arg703)
      );
    if (v65 || v60 || flag12) return void fn220(arg703);
    flag9 && fn133(arg703);
    let v1054 = flag9 ? 2.65 * n85 : keysDown.ShiftLeft || keysDown.ShiftRight ? 6.5 : 3.2,
      v1055 =
        (keysDown.KeyW || keysDown.ArrowUp ? 1 : 0) - (keysDown.KeyS || keysDown.ArrowDown ? 1 : 0),
      v1056 =
        (keysDown.KeyD || keysDown.ArrowRight ? 1 : 0) -
        (keysDown.KeyA || keysDown.ArrowLeft ? 1 : 0),
      v1057 = flag9 ? 1 : Math.max(-1, Math.min(1, v1055 + (flag5 ? moveAxis.forward : 0))),
      v1058 = flag9 ? 0 : Math.max(-1, Math.min(1, v1056 + (flag5 ? moveAxis.strafe : 0))),
      v1059 = flag9 ? yaw2 : view.yaw,
      sin8 = Math.sin(v1059),
      v1060 = -Math.cos(v1059),
      v1061 = (sin8 * v1057 + Math.cos(v1059) * v1058) * v1054 * arg703,
      v1062 = (v1060 * v1057 + Math.sin(v1059) * v1058) * v1054 * arg703;
    if (flag9)
      !(function (arg710, arg711) {
        if (arg710 <= 0) return 0;
        let x2 = view.x,
          z2 = view.z;
        if (flag11) {
          n93 = Math.max(0, n93 - arg711);
          let max77 = Math.max(arg710, 2.05 * arg711),
            sin10 = Math.sin(yaw4),
            v1072 = -Math.cos(yaw4);
          return (
            fn114(view.x + sin10 * max77, view.z + v1072 * max77) ||
              ((yaw4 = fn134()), (sin10 = Math.sin(yaw4)), (v1072 = -Math.cos(yaw4))),
            (view.x = Math.max(2, Math.min(510, view.x + sin10 * max77))),
            (view.z = Math.max(2, Math.min(510, view.z + v1072 * max77))),
            n93 <= 0 &&
              fn124(view.x, view.z, 0.25) &&
              ((flag11 = false), (n88 = 0), (n84 = 0), fn131(true)),
            Math.hypot(view.x - x2, view.z - z2)
          );
        }
        let v1070 = yaw2;
        for (let n314 = 0; n314 < arr12.length; n314++) {
          let v1073 = v1070 + arr12[n314],
            sin11 = Math.sin(v1073),
            v1074 = -Math.cos(v1073),
            v1075 = view.x + sin11 * arg710,
            v1076 = view.z + v1074 * arg710;
          if (fn114(v1075, v1076) && fn124(v1075, v1076))
            return (
              (view.x = v1075),
              (view.z = v1076),
              n314 > 0 && (yaw2 += fn197(v1073 - yaw2) * Math.min(0.1, 2.4 * arg711)),
              (n94 = 0),
              Math.hypot(view.x - x2, view.z - z2)
            );
        }
        if ((n94 += arg711) < 1.15) {
          n88 <= 0 &&
            (fn121(1), (arr14.length = 0), (n83 = 0), (n84 = 0), fn131(true), (n88 = 0.22));
          let v1077 = yaw2 + Math.PI,
            min25 = Math.min(0.72 * arg710, 1.55 * arg711),
            v1078 = view.x + Math.sin(v1077) * min25,
            v1079 = view.z - Math.cos(v1077) * min25;
          return fn114(v1078, v1079) && fn124(v1078, v1079)
            ? ((view.x = v1078), (view.z = v1079), Math.hypot(view.x - x2, view.z - z2))
            : 0;
        }
        (flag11 || fn121(2),
          (flag11 = true),
          (n93 = 0.18),
          (yaw4 = fn134()),
          (yaw3 = yaw4),
          (n90 = Math.max(n90, 0.45)),
          (arr14.length = 0),
          (n83 = 0),
          (n89 = 0),
          (n81 = 0),
          (n87 = Math.max(n87, 0.55)),
          (n88 = Math.max(n88, 0.35)));
        let max76 = Math.max(arg710, 2.05 * arg711),
          sin9 = Math.sin(yaw4),
          v1071 = -Math.cos(yaw4);
        ((view.x = Math.max(2, Math.min(510, view.x + sin9 * max76))),
          (view.z = Math.max(2, Math.min(510, view.z + v1071 * max76))),
          Math.hypot(view.x - x2, view.z - z2));
      })(Math.hypot(v1061, v1062), arg703);
    else {
      let v1080 = view.x + v1061;
      fn250(v1080, view.z) && (view.x = v1080);
      let v1081 = view.z + v1062;
      fn250(view.x, v1081) && (view.z = v1081);
    }
    (fn210(),
      fn220(arg703),
      (function (arg712) {
        if (!((n102 = Math.max(0, n102 - arg712)) > 0 || flag9))
          for (let v1082 of fn211()) {
            if ("auto" !== v1082.activation || !v1082.enabled) continue;
            let v1083 = view.x - v1082.x,
              v1084 = view.z - v1082.z;
            if (v1083 * v1083 + v1084 * v1084 < v1082.radius * v1082.radius) {
              fn198(v1082);
              break;
            }
          }
      })(arg703),
      "intro_room" === zone && fn217());
  }
  (v67?.["addEventListener"] && v67.addEventListener("change", () => fn242()),
    fn242(),
    addEventListener("keydown", (arg713) => {
      if (flag6)
        return (
          arg713.preventDefault(),
          void (["Escape", "Enter", "Space"].includes(arg713.code) && fn241(false))
        );
      if (PHASE_LIVE !== PHASE.LIVE)
        return (
          arg713.preventDefault(),
          fn16(),
          void (
            [
              "KeyW",
              "KeyA",
              "KeyS",
              "KeyD",
              "ArrowUp",
              "ArrowDown",
              "ArrowLeft",
              "ArrowRight",
              "ShiftLeft",
              "ShiftRight",
            ].includes(arg713.code) && (keysDown[arg713.code] = true)
          )
        );
      if (flag2 || "intro_room" === zone) {
        if (
          ([
            "ArrowUp",
            "ArrowDown",
            "ArrowLeft",
            "ArrowRight",
            "Space",
            "Tab",
            "KeyE",
            "KeyW",
            "KeyA",
            "KeyS",
            "KeyD",
          ].includes(arg713.code) && arg713.preventDefault(),
          v33)
        )
          return;
        return "KeyE" !== arg713.code || arg713.repeat
          ? void (
              [
                "KeyW",
                "KeyA",
                "KeyS",
                "KeyD",
                "ArrowUp",
                "ArrowDown",
                "ArrowLeft",
                "ArrowRight",
                "ShiftLeft",
                "ShiftRight",
              ].includes(arg713.code) && (keysDown[arg713.code] = true)
            )
          : void fn218();
      }
      if (
        ([
          "ArrowUp",
          "ArrowDown",
          "ArrowLeft",
          "ArrowRight",
          "Space",
          "Tab",
          "KeyE",
          "KeyR",
          "Escape",
          "Digit0",
          "Digit1",
          "Digit2",
          "Digit3",
          "Digit4",
          "Digit5",
          "Digit6",
          "Digit7",
          "Digit8",
          "Digit9",
          "KeyG",
          "KeyT",
          "KeyP",
          "KeyM",
          "KeyN",
        ].includes(arg713.code) && arg713.preventDefault(),
        v65 && !arg713.repeat)
      )
        return void fn237(arg713);
      if (v66) return;
      "Escape" === arg713.code && v60
        ? fn173()
        : flag12 && "Escape" === arg713.code
          ? (flag12 = false)
          : flag12 && /^Digit[1-3]$/.test(arg713.code) && !arg713.repeat
            ? fn215(Number(arg713.code.slice(-1)) - 1)
            : v61 && /^Digit[1-3]$/.test(arg713.code) && !arg713.repeat
              ? fn175(Number(arg713.code.slice(-1)) - 1)
              : !v60 || v61 || !/^Digit[1-3]$/.test(arg713.code) || arg713.repeat
                ? "KeyR" !== arg713.code || arg713.repeat
                  ? "KeyG" !== arg713.code || arg713.repeat
                    ? "KeyT" !== arg713.code || arg713.repeat
                      ? "KeyP" !== arg713.code || arg713.repeat
                        ? "KeyM" !== arg713.code || arg713.repeat
                          ? (flag9 &&
                              [
                                "KeyW",
                                "KeyA",
                                "KeyS",
                                "KeyD",
                                "ArrowUp",
                                "ArrowDown",
                                "ArrowLeft",
                                "ArrowRight",
                              ].includes(arg713.code) &&
                              fn111(false),
                            "KeyE" === arg713.code && !arg713.repeat && fn219(),
                            (keysDown[arg713.code] = true))
                          : (function () {
                              max3 = (max3 + 1) % freeze31.length;
                              let v1085 = freeze31[max3];
                              ((n134 = 0), v1085.id, performance.now(), v1085.id);
                            })()
                        : ((populationVisible = !populationVisible),
                          elUiPopulation &&
                            (elUiPopulation.textContent = populationVisible
                              ? "P / VISIBLE"
                              : "P / HIDDEN"),
                          performance.now())
                      : fn111(!flag9)
                    : fn252(!glyphsEnabled)
                  : fn307(!v81)
                : fn176(Number(arg713.code.slice(-1)) - 1);
    }),
    addEventListener("keyup", (arg714) => (keysDown[arg714.code] = false)),
    addEventListener("blur", () => {
      for (let v1086 in keysDown) keysDown[v1086] = false;
      fn240();
    }),
    addEventListener("resize", fn248),
    addEventListener("orientationchange", fn248),
    visualViewport?.["addEventListener"]("resize", fn248),
    document.addEventListener("mousemove", (arg715) => {
      PHASE_LIVE !== PHASE.LIVE ||
        flag6 ||
        (!pointerLocked && !flag4) ||
        fn245(arg715.movementX, arg715.movementY);
    }),
    elCv.addEventListener("mousedown", () => {
      PHASE_LIVE === PHASE.LIVE ? flag5 || pointerLocked || (flag4 = true) : fn16();
    }),
    addEventListener("mouseup", () => (flag4 = false)),
    elCv.addEventListener("click", function () {
      if (PHASE_LIVE === PHASE.LIVE) {
        if (!flag5 && elCv.requestPointerLock)
          try {
            let requestPointerLock = elCv.requestPointerLock();
            requestPointerLock &&
              requestPointerLock["catch"] &&
              requestPointerLock["catch"](() => {});
          } catch {}
      } else fn16();
    }),
    document.addEventListener("pointerlockchange", () => {
      ((pointerLocked = document.pointerLockElement === elCv) || resetLookFromView(),
        (elUiCapture.textContent = pointerLocked ? "LINKED / ESC TO RELEASE" : "CLICK CITY FEED"));
    }),
    document.addEventListener("pointerlockerror", () => {}));
  var s6 = "",
    glyphsEnabled =
      typeof location > "u" ||
      !["0", "off", "false"].includes(
        (new URLSearchParams(location.search).get("solid") || "1").toLowerCase(),
      );
  function fn252(arg716) {
    return (
      (glyphsEnabled = !!arg716),
      elCv.dataset && (elCv.dataset.solidGlyphs = glyphsEnabled ? "1" : "0"),
      performance.now(),
      glyphsEnabled
    );
  }
  var map18 = new Map();
  function fn253(arg717, arg718) {
    let max78 = Math.max(0, Math.min(7, Math.round(7 * Math.max(0, Math.min(1, arg718))))),
      v1087 = arg717 + "|" + max78,
      get17 = map18.get(v1087);
    if (get17) return get17;
    let v1088 = max78 / 7,
      v1089 = 6 + 15 * v1088,
      v1090 = v1088 > 0.62 ? 0.84 : v1088 > 0.3 ? 0.74 : 0.64,
      fn438 = (arg719, arg720, arg721) =>
        "hsla(" +
        arg717 +
        "," +
        arg719.toFixed(0) +
        "%," +
        Math.max(2, Math.min(28, arg720)).toFixed(0) +
        "%," +
        arg721.toFixed(2) +
        ")",
      fn438Result = fn438(Math.max(12, 22 * 0.48), 1.5 + 7 * v1088, 0.92),
      fn438Result2 = fn438(Math.max(14, 13.2), 2 + 10 * v1088, 0.86),
      array3 = new Array(29);
    for (let n315 = 2; n315 <= 28; n315++)
      array3[n315] = "hsla(" + arg717 + ",22%," + n315 + "%," + v1090.toFixed(2) + ")";
    let array4 = new Array(256);
    for (let n316 = 0; n316 < 2; n316++)
      for (let n317 = 0; n317 < 2; n317++)
        for (let n318 = 0; n318 < 64; n318++) {
          let v1091 =
              1.4 * (n316 ? 1 : -1) + (n317 ? -1.2 : 0) + 1.8 * (float32Array30[n318] - 0.5),
            max79 = Math.max(2, Math.min(28, v1089 + v1091)),
            round8 = Math.round(max79);
          array4[(n316 << 7) | (n317 << 6) | n318] = array3[round8];
        }
    return (
      (get17 = {
        seam: fn438Result,
        mullion: fn438Result2,
        wallByPattern: array4,
        qIndex: max78,
      }),
      map18.set(v1087, get17),
      get17
    );
  }
  function fn254(arg722) {
    let baseB = arg722.baseB,
      bh = arg722.bh,
      v1092 = "observation" === zone || "balcony" === zone,
      v1093 = v1092 ? 292 : (bh + 35) % 360;
    return {
      edge: "hsl(" + (v1092 ? 188 : bh) + ",70%," + (44 + 30 * baseB).toFixed(0) + "%)",
      band: "hsl(" + bh + ",42%," + (38 + 28 * baseB).toFixed(0) + "%)",
      light: "hsl(" + v1093 + ",68%," + (45 + 28 * baseB).toFixed(0) + "%)",
      base: "hsl(" + bh + ",30%," + (21 + 24 * baseB).toFixed(0) + "%)",
    };
  }
  function fn255(arg723) {
    let int32Array4 = new Int32Array(6),
      arr73 = [1, 2, 4, 8, 16, 32];
    for (let n319 = 0; n319 < 6; n319++)
      int32Array4[n319] = Math.floor(arg723.wallTexelPos / arr73[n319]);
    return {
      backing: fn253(arg723.bh, arg723.baseB),
      ink: fn254(arg723),
      stableCols: int32Array4,
      eyeTex: 2 * arg723.projectionEyeY,
      perpTex: 2 * arg723.perp,
    };
  }
  function fn256(
    arg724,
    arg725,
    arg726 = false,
    arg727 = "wall",
    arg728 = 0,
    arg729 = 0,
    arg730 = 0.5,
  ) {
    let backingPalette = arg724.backingPalette;
    if (backingPalette) {
      if ("wall" !== arg727) return backingPalette[arg727] || backingPalette.storefront;
      let v1101 = 1.4 * (1 & arg728 ? 1 : -1) + (0 === arg729 ? -1.2 : 0) + 1.8 * (arg730 - 0.5),
        max80 = Math.max(2, Math.min(28, backingPalette.wallBaseLight + v1101)),
        numberResult = Number(max80.toFixed(0)),
        v1102 = backingPalette.wallCache[numberResult];
      return (
        undefined === v1102 &&
          (v1102 = backingPalette.wallCache[numberResult] =
            "hsla(" +
            arg724.bh +
            "," +
            backingPalette.wallSat +
            "%," +
            numberResult +
            "%," +
            backingPalette.wallAlpha +
            ")"),
        v1102
      );
    }
    arg725 = Math.max(0, Math.min(1, arg725));
    let v1094 = fn190() && !arg726,
      v1095 = Math.round(7 * arg725) / 7,
      v1096 = v1094 ? 22 : Math.max(20, Math.min(48, 0.5 * arg724.bs)),
      v1097 = v1096,
      v1098 = (v1094 ? 6 : 4) + (v1094 ? 15 : 18) * v1095,
      v1099 = v1095 > 0.62 ? 0.84 : v1095 > 0.3 ? 0.74 : 0.64,
      v1100 = 1.4 * (1 & arg728 ? 1 : -1) + (0 === arg729 ? -1.2 : 0) + 1.8 * (arg730 - 0.5);
    return (
      "glass" === arg727
        ? ((v1097 = Math.max(18, 0.64 * v1096)),
          (v1098 = 2.5 + 7 * v1095),
          (v1099 = v1095 > 0.55 ? 0.77 : 0.67))
        : "litglass" === arg727
          ? ((v1097 = Math.max(28, 0.82 * v1096)),
            (v1098 = 5 + 9 * v1095),
            (v1099 = v1095 > 0.55 ? 0.74 : 0.64))
          : "mullion" === arg727
            ? ((v1097 = Math.max(14, 0.6 * v1096)), (v1098 = 2 + 10 * v1095), (v1099 = 0.86))
            : "seam" === arg727
              ? ((v1097 = Math.max(12, 0.48 * v1096)), (v1098 = 1.5 + 7 * v1095), (v1099 = 0.92))
              : "storefront" === arg727
                ? ((v1097 = Math.max(20, 0.72 * v1096)), (v1098 = 3 + 11 * v1095), (v1099 = 0.78))
                : "sign" === arg727
                  ? ((v1097 = Math.max(22, 0.72 * v1096)), (v1098 = 3 + 10 * v1095), (v1099 = 0.76))
                  : (v1098 += v1100),
      (v1098 = Math.max(2, Math.min(28, v1098))),
      "hsla(" +
        arg724.bh +
        "," +
        v1097.toFixed(0) +
        "%," +
        v1098.toFixed(0) +
        "%," +
        v1099.toFixed(2) +
        ")"
    );
  }
  fn252(glyphsEnabled);
  var v69 = typeof document < "u" && true ? document.createElement("canvas") : null,
    v70 = null,
    v71 = null,
    v72 = null,
    v73 = null,
    v74 = -1,
    v75 = -1,
    v76 = null,
    v77 = null,
    v78 = null,
    flag13 = false,
    flag14 = false,
    flag15 = true,
    n109 = 0,
    float32Array34 = new Float32Array(cols * rows * 24 * 2);
  if (
    v69 &&
    ((v69.width = elCv.width),
    (v69.height = elCv.height),
    v69.setAttribute("aria-hidden", "true"),
    Object.assign(v69.style, {
      position: "absolute",
      inset: "0",
      width: "100%",
      height: "100%",
      pointerEvents: "none",
      background: "transparent",
    }),
    elCv.insertAdjacentElement("afterend", v69),
    (v70 = v69.getContext("webgl", {
      alpha: true,
      antialias: false,
      depth: false,
      stencil: false,
      premultipliedAlpha: true,
      preserveDrawingBuffer: false,
    })))
  ) {
    v77 = v70.getExtension("EXT_disjoint_timer_query");
    let fn439 = (arg731, arg732) => {
        let createShader = v70.createShader(arg731);
        return (
          v70.shaderSource(createShader, arg732),
          v70.compileShader(createShader),
          createShader
        );
      },
      fn439Result = fn439(
        v70.VERTEX_SHADER,
        "attribute vec2 a_pos;attribute vec2 a_uv;uniform vec2 u_resolution;varying vec2 v_uv;void main(){vec2 p=a_pos/u_resolution;gl_Position=vec4(p.x*2.0-1.0,1.0-p.y*2.0,0.0,1.0);v_uv=a_uv;}",
      ),
      fn439Result2 = fn439(
        v70.FRAGMENT_SHADER,
        "precision mediump float;uniform sampler2D u_tex;varying vec2 v_uv;void main(){gl_FragColor=texture2D(u_tex,v_uv);}",
      );
    ((v71 = v70.createProgram()),
      v70.attachShader(v71, fn439Result),
      v70.attachShader(v71, fn439Result2),
      v70.linkProgram(v71),
      (v72 = v70.createBuffer()),
      (v73 = v70.createTexture()),
      (v74 = v70.getAttribLocation(v71, "a_pos")),
      (v75 = v70.getAttribLocation(v71, "a_uv")),
      (v76 = v70.getUniformLocation(v71, "u_resolution")),
      v70.bindTexture(v70.TEXTURE_2D, v73),
      v70.texParameteri(v70.TEXTURE_2D, v70.TEXTURE_MIN_FILTER, v70.NEAREST),
      v70.texParameteri(v70.TEXTURE_2D, v70.TEXTURE_MAG_FILTER, v70.NEAREST),
      v70.texParameteri(v70.TEXTURE_2D, v70.TEXTURE_WRAP_S, v70.CLAMP_TO_EDGE),
      v70.texParameteri(v70.TEXTURE_2D, v70.TEXTURE_WRAP_T, v70.CLAMP_TO_EDGE),
      v70.enable(v70.BLEND),
      v70.blendFunc(v70.ONE, v70.ONE_MINUS_SRC_ALPHA),
      v70.pixelStorei(v70.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true));
  }
  var canvasEl = document.createElement("canvas");
  ((canvasEl.width = elCv.width),
    (canvasEl.height = elCv.height),
    canvasEl.setAttribute("aria-hidden", "true"),
    Object.assign(canvasEl.style, {
      position: "absolute",
      inset: "0",
      width: "100%",
      height: "100%",
      pointerEvents: "none",
      background: "transparent",
      zIndex: "3",
    }),
    (v69 || elCv).insertAdjacentElement("afterend", canvasEl));
  var ctx2 = canvasEl.getContext("2d");
  function fn257() {
    ctx2.clearRect(0, 0, canvasEl.width, canvasEl.height);
  }
  function fn258(arg733 = false) {
    return (
      !!v8 &&
      (map.clear(),
      (n5 = 0),
      v8.clearRect(0, 0, n4, n4),
      (flag15 = true),
      stats.atlasResets++,
      arg733 && stats.atlasEmergencyRollovers++,
      true)
    );
  }
  function fn259(arg734, arg735) {
    let get18 = map.get(arg734);
    if (
      (undefined === get18 && n5 >= n7 && (flag14 && n109 > 0 && fn262(), fn258(true)),
      undefined === get18 && n5 < n7)
    ) {
      ((get18 = n5++), map.set(arg734, get18), stats.atlasNewSlots++, n5 > n8 && (n8 = n5));
      let v1103 = (get18 % n6) * v6,
        v1104 = ((get18 / n6) | 0) * n3;
      (v8.clearRect(v1103, v1104, v6, n3), arg735(v1103, v1104), (flag15 = true));
    }
    return get18;
  }
  function fn260(arg736, arg737) {
    let fn259Result = fn259(arg736 + arg737, (arg738, arg739) => {
      ((v8.fillStyle = arg737), v8.fillText(arg736, arg738 + 1, arg739 + 9 - 1.5));
    });
    return (undefined === fn259Result && stats.atlasGlyphMisses++, fn259Result);
  }
  function fn261(arg740, arg741, arg742, arg743, arg744) {
    if (undefined === arg740 || !v70) return false;
    if (n109 + 24 > float32Array34.length) {
      let float32Array37 = new Float32Array(2 * float32Array34.length);
      (float32Array37.set(float32Array34), (float32Array34 = float32Array37));
    }
    let v1105 = (arg740 % n6) * v6,
      v1106 = ((arg740 / n6) | 0) * n3,
      v1107 = v1105 / n4,
      v1108 = v1106 / n4,
      v1109 = (v1105 + v6) / n4,
      v1110 = (v1106 + n3) / n4,
      v1111 = arg741 + arg743,
      v1112 = arg742 + arg744,
      v1113 = n109;
    return (
      (float32Array34[v1113++] = arg741),
      (float32Array34[v1113++] = arg742),
      (float32Array34[v1113++] = v1107),
      (float32Array34[v1113++] = v1108),
      (float32Array34[v1113++] = v1111),
      (float32Array34[v1113++] = arg742),
      (float32Array34[v1113++] = v1109),
      (float32Array34[v1113++] = v1108),
      (float32Array34[v1113++] = arg741),
      (float32Array34[v1113++] = v1112),
      (float32Array34[v1113++] = v1107),
      (float32Array34[v1113++] = v1110),
      (float32Array34[v1113++] = arg741),
      (float32Array34[v1113++] = v1112),
      (float32Array34[v1113++] = v1107),
      (float32Array34[v1113++] = v1110),
      (float32Array34[v1113++] = v1111),
      (float32Array34[v1113++] = arg742),
      (float32Array34[v1113++] = v1109),
      (float32Array34[v1113++] = v1108),
      (float32Array34[v1113++] = v1111),
      (float32Array34[v1113++] = v1112),
      (float32Array34[v1113++] = v1109),
      (float32Array34[v1113++] = v1110),
      (n109 = v1113),
      true
    );
  }
  function fn262() {
    if (!flag14 || !v70 || 0 === n109) return;
    (v70.useProgram(v71),
      v70.bindTexture(v70.TEXTURE_2D, v73),
      flag15 &&
        (v70.texImage2D(v70.TEXTURE_2D, 0, v70.RGBA, v70.RGBA, v70.UNSIGNED_BYTE, v7),
        (flag15 = false),
        stats.atlasUploads++),
      v70.bindBuffer(v70.ARRAY_BUFFER, v72),
      v70.bufferData(v70.ARRAY_BUFFER, float32Array34.subarray(0, n109), v70.DYNAMIC_DRAW),
      v70.enableVertexAttribArray(v74),
      v70.vertexAttribPointer(v74, 2, v70.FLOAT, false, 16, 0),
      v70.enableVertexAttribArray(v75),
      v70.vertexAttribPointer(v75, 2, v70.FLOAT, false, 16, 8));
    let flag26 = false;
    (v77 &&
      !flag13 &&
      (v78 = v77.createQueryEXT()) &&
      (v77.beginQueryEXT(v77.TIME_ELAPSED_EXT, v78), (flag26 = true)),
      v70.uniform2f(v76, elCv.width, elCv.height),
      v70.drawArrays(v70.TRIANGLES, 0, n109 / 4),
      flag26 && (v77.endQueryEXT(v77.TIME_ELAPSED_EXT), (flag13 = true)),
      (n109 = 0));
  }
  var n110 = 2.35;
  function fn263(arg745, arg746, arg747) {
    if (arg745 < 0 || arg745 >= cols || arg746 < 0 || arg746 >= rows) return;
    let v1114 = "intro_room" === zone,
      v1115 = v1114 ? n110 : 1,
      v1116 = v1114 ? -0.7 : 0,
      v1117 = v1114 ? -0.7 : 0;
    (flag14 &&
      v8 &&
      fn261(
        (function (arg748) {
          let fn259Result2 = fn259("\0BG" + arg748, (arg749, arg750) => {
            ((v8.fillStyle = arg748), v8.fillRect(arg749, arg750, v6, n3));
          });
          return (undefined === fn259Result2 && stats.atlasSolidMisses++, fn259Result2);
        })(arg747),
        arg745 * width + v1116,
        9 * arg746 + v1117,
        width + v1115,
        9 + v1115,
      )) ||
      ((ctx.fillStyle = arg747),
      ctx.fillRect(arg745 * width + v1116, 9 * arg746 + v1117, width + v1115, 9 + v1115),
      (s6 = ""));
  }
  function fn264(arg751, arg752, arg753, arg754) {
    if (!(" " === arg753 || arg751 < 0 || arg751 >= cols || arg752 < 0 || arg752 >= rows)) {
      if (v8) {
        let fn260Result = fn260(arg753, arg754);
        if (undefined !== fn260Result) {
          if (flag14 && fn261(fn260Result, arg751 * width - 1, 9 * arg752, v6, n3)) return;
          let v1118 = (fn260Result % n6) * v6,
            v1119 = ((fn260Result / n6) | 0) * n3;
          return void ctx.drawImage(
            v7,
            v1118,
            v1119,
            v6,
            n3,
            arg751 * width - 1,
            9 * arg752,
            v6,
            n3,
          );
        }
      }
      (arg754 !== s6 && ((ctx.fillStyle = arg754), (s6 = arg754)),
        ctx.fillText(arg753, arg751 * width, 9 * (arg752 + 1) - 1.5));
    }
  }
  function fn265(arg755, arg756, arg757, arg758, arg759) {
    if ("intro_room" === zone) {
      let v1122 = float32Array16[arg756];
      if (v1122 > 70) return;
      let v1123 = view.x + arg758 * v1122,
        v1124 = view.z + arg759 * v1122,
        max81 = Math.max(0, 1 - Math.hypot(v1123 - freeze26.x, v1124 - freeze26.z) / 6.4),
        max82 = Math.max(0, 1 - Math.abs(v1123 - freeze26.x) / 7.5),
        v1125 = Math.abs(v1123 / 3 - Math.round(v1123 / 3)) < 0.055,
        v1126 = Math.abs(v1124 / 3 - Math.round(v1124 / 3)) < 0.055;
      return void fn263(
        arg755,
        arg756,
        "hsl(35,10%," +
          (6.2 + 5.8 * max81 + 0.65 * max82 + (v1125 || v1126 ? 0.55 : 0)).toFixed(1) +
          "%)",
      );
    }
    if ("interior" === zone || "observation" === zone || "intro_room" === zone) {
      let v1127 = float32Array16[arg756];
      if (v1127 > 80) return;
      let v1128 = view.x + arg758 * v1127,
        v1129 = view.z + arg759 * v1127,
        v1130 = Math.abs(v1128 / 3 - Math.round(v1128 / 3)) < 0.09,
        v1131 = Math.abs(v1129 / 3 - Math.round(v1129 / 3)) < 0.09,
        v1132 = (((Math.floor(v1128 / 3) + Math.floor(v1129 / 3)) % 7) + 7) % 7 == 0,
        v1133 = "observation" === zone,
        s12 = ".",
        v1134 = v1133 ? "hsl(205,22%,12%)" : "hsl(165,18%,13%)";
      return (
        v1130 || v1131
          ? ((s12 = v1130 ? "|" : "="), (v1134 = v1133 ? "hsl(188,36%,28%)" : "hsl(165,22%,24%)"))
          : v1132 && ((s12 = "0"), (v1134 = v1133 ? "hsl(292,62%,52%)" : "hsl(48,55%,48%)")),
        void fn264(arg755, arg756, s12, v1134)
      );
    }
    let v1120 = arg757 - arg756,
      s11 = " ",
      fn11Result = fn11(3),
      v1121 = (function (arg760, arg761) {
        let v1135 = view.yaw + Math.atan2(v20[arg760], v21[arg760]),
          v1136 = Math.atan(float32Array18[arg761]);
        return hash2(Math.floor(480 * v1135), Math.floor(480 * v1136) + 8000);
      })(arg755, arg756);
    if (v1120 < 7) {
      let v1137 = (7 - v1120) / 7;
      v1121 < 0.12 * v1137 && ((s11 = "."), (fn11Result = fn11(13 + 8 * v1137)));
    } else
      v1121 > 0.994 &&
        ((s11 = v1121 > 0.9985 ? "*" : "."), (fn11Result = fn11(v1121 > 0.9985 ? 20 : 11)));
    fn264(arg755, arg756, s11, fn11Result);
  }
  var obj19 = {
    surface: -1,
    type: "MIXED",
    xStreet: false,
    zStreet: false,
    sx: 0,
    sz: 0,
  };
  function fn266(arg762, arg763, arg764, arg765, arg766, arg767, arg768) {
    if (!Number.isFinite(arg768) || arg768 < 132 || arg768 > 385) return false;
    let v1138 = 1 - (arg768 - 132) / 228;
    if (((v1138 = Math.max(0, Math.min(1, v1138))), v1138 <= 0.015)) return false;
    let v1139 = arg764 + arg766 * arg768,
      v1140 = arg765 + arg767 * arg768,
      v1141 = (function (arg769, arg770, arg771 = obj19) {
        let floor54 = Math.floor(arg769),
          floor55 = Math.floor(arg770);
        if (floor54 <= 0 || floor55 <= 0 || floor54 >= 8191 || floor55 >= 8191)
          return ((arg771.surface = -1), arg771);
        let v1144 = floor54 - recordedOriginX,
          v1145 = floor55 - recordedOriginZ;
        if (v1144 >= 0 && v1145 >= 0 && v1144 < worldN && v1145 < worldN) {
          ((arg771.surface = uint8Array18[worldIndex(v1144, v1145)]),
            (arg771.type = fn54(floor54, floor55)));
          let v1154 = ((floor54 % n30) + n30) % n30,
            v1155 = ((floor55 % n30) + n30) % n30;
          return (
            (arg771.sx = v1154),
            (arg771.sz = v1155),
            (arg771.xStreet = v1154 < n31),
            (arg771.zStreet = v1155 < n31),
            arg771
          );
        }
        if (
          floor54 >= freeze8.x0 &&
          floor54 < freeze8.x1 &&
          floor55 >= freeze8.z0 &&
          floor55 < freeze8.z1
        ) {
          let v1156 = floor54 + 0.5 - freeze8.cx,
            v1157 = floor55 + 0.5 - freeze8.cz,
            v1158 = (v1156 * v1156) / 90.25 + (v1157 * v1157) / 51.84 <= 1,
            v1159 = Math.abs(v1157) < 1.15 && Math.abs(v1156) > 10,
            v1160 =
              (Math.abs(v1156) < 1.15 && Math.abs(v1157) > 9) ||
              (Math.abs(v1157) < 1.15 && Math.abs(v1156) > 10),
            v1161 = Math.abs(Math.abs(v1156) - 6.5) < 1.2 || Math.abs(Math.abs(v1157) - 6.5) < 1.2,
            v1162 = (v1156 * v1156) / 156.25 + (v1157 * v1157) / (10.2 * 10.2) <= 1.18 && !v1158,
            v1163 =
              floor54 < freeze8.x0 + 2 ||
              floor54 >= freeze8.x1 - 2 ||
              floor55 < freeze8.z0 + 2 ||
              floor55 >= freeze8.z1 - 2;
          return (
            (arg771.surface =
              !v1158 || v1159 || v1160 ? (v1159 || v1160 || v1161 || v1162 || v1163 ? 5 : 3) : 4),
            (arg771.type = "PARKLAND"),
            (arg771.sx = arg771.sz = 0),
            (arg771.xStreet = arg771.zStreet = false),
            arg771
          );
        }
        let v1146 = ((floor54 % n30) + n30) % n30,
          v1147 = ((floor55 % n30) + n30) % n30,
          v1148 = v1146 < n31,
          v1149 = v1147 < n31;
        ((arg771.sx = v1146),
          (arg771.sz = v1147),
          (arg771.xStreet = v1148),
          (arg771.zStreet = v1149));
        let v1150 = v1148 && fn19("Z", floor54 - v1146),
          v1151 = v1149 && fn19("X", floor55 - v1147);
        if (v1148 && v1149) {
          let v1164 = v1146 < 3 || v1146 >= 13,
            v1165 = v1147 < 3 || v1147 >= 13;
          return (
            (arg771.surface =
              v1150 && v1151
                ? v1164 && v1165
                  ? 1
                  : v1164 || v1165
                    ? 2
                    : 0
                : v1150
                  ? v1164
                    ? 1
                    : 0
                  : v1151
                    ? v1165
                      ? 1
                      : 0
                    : v1164 && v1165
                      ? 1
                      : 6),
            (arg771.type = fn54(floor54, floor55)),
            arg771
          );
        }
        if (v1148 || v1149) {
          let v1166 = v1148 ? v1146 : v1147,
            v1167 = v1148 ? v1150 : v1151;
          return (
            (arg771.surface = v1166 < 3 || v1166 >= 13 ? 1 : v1167 ? 0 : 6),
            (arg771.type = fn54(floor54, floor55)),
            arg771
          );
        }
        let fn35Result5 = fn35(Math.floor(floor54 / n30), Math.floor(floor55 / n30)),
          v1152 = v1146 - n31,
          v1153 = v1147 - n31;
        return (
          (arg771.type = fn35Result5.type),
          fn35Result5.park
            ? ((arg771.surface = fn32(fn35Result5, v1152, v1153).surface), arg771)
            : ((arg771.surface =
                3 === fn29(fn35Result5.type, v1152, v1153, floor54, floor55) ? 3 : 90),
              arg771)
        );
      })(v1139, v1140),
      surface = v1141.surface;
    if (surface < 0) return false;
    fn263(
      arg762,
      arg763,
      (function (arg772, arg773, arg774) {
        let fn440 = (arg775, arg776) => (arg775 + (arg776 - arg775) * arg774).toFixed(1);
        if (0 === arg772 || 2 === arg772) return "hsl(210,24%," + fn440(2.2, 8) + "%)";
        if (4 === arg772) return "hsl(202,42%," + fn440(2, 7) + "%)";
        if (3 === arg772) return "hsl(112,28%," + fn440(1.8, 6) + "%)";
        if (5 === arg772) return "hsl(42,16%," + fn440(2.2, 7.2) + "%)";
        if (6 === arg772) return "hsl(35,15%," + fn440(2.2, 7) + "%)";
        if (90 === arg772) {
          let v1168 = freeze33?.[arg773] || [188, 26];
          return (
            "hsl(" +
            v1168[0] +
            "," +
            Math.min(28, 0.34 * v1168[1]).toFixed(0) +
            "%," +
            fn440(1.7, 5.8) +
            "%)"
          );
        }
        return "hsl(205,13%," + fn440(2, 6.8) + "%)";
      })(surface, v1141.type, v1138),
    );
    let v1142 = arg768 > 285,
      fn12Result18 = hash2(13 * (Math.floor(v1139) >> 1) + 7, 17 * (Math.floor(v1140) >> 1) + 11),
      s13 = ".",
      v1143 = "hsl(200,20%," + (9 + 19 * v1138).toFixed(0) + "%)";
    if (0 === surface || 2 === surface) {
      let v1169 = v1141.xStreet && !v1141.zStreet,
        v1170 = v1141.zStreet && !v1141.xStreet;
      ((s13 = v1142 ? "." : v1169 ? "|" : v1170 ? "=" : 2 === surface ? "+" : ":"),
        (v1143 =
          2 === surface
            ? "hsl(188,42%," + (14 + 29 * v1138).toFixed(0) + "%)"
            : "hsl(205,34%," + (11 + 27 * v1138).toFixed(0) + "%)"));
      let v1171 = v1169 ? v1141.sx : v1170 ? v1141.sz : -1;
      !v1142 &&
        (7 === v1171 || 8 === v1171) &&
        ((s13 = v1169 ? "|" : "="), (v1143 = "hsl(195,42%," + (18 + 31 * v1138).toFixed(0) + "%)"));
    } else
      6 === surface
        ? ((s13 = v1142 ? "." : ":"), (v1143 = "hsl(38,25%," + (10 + 22 * v1138).toFixed(0) + "%)"))
        : 1 === surface || 90 === surface
          ? ((s13 = fn12Result18 > 0.72 ? "." : "·"),
            (v1143 = "hsl(190,18%," + (8 + 19 * v1138).toFixed(0) + "%)"))
          : 3 === surface
            ? ((s13 = fn12Result18 > 0.55 ? ":" : ","),
              (v1143 = "hsl(112,42%," + (10 + 25 * v1138).toFixed(0) + "%)"))
            : 5 === surface
              ? ((s13 = "."), (v1143 = "hsl(54,28%," + (11 + 23 * v1138).toFixed(0) + "%)"))
              : 4 === surface &&
                ((s13 = v1142 ? "_" : "~"),
                (v1143 = "hsl(192,58%," + (10 + 28 * v1138).toFixed(0) + "%)"));
    return (fn264(arg762, arg763, s13, v1143), true);
  }
  function fn267(arg777, arg778, arg779, arg780) {
    return (
      !("city" !== zone || fn191() < 5.5) &&
      fn266(
        arg777,
        arg778,
        toWorldX(view.x),
        toWorldZ(view.z),
        arg779,
        arg780,
        float32Array14[arg778],
      )
    );
  }
  function fn268(arg781, arg782, arg783, arg784, arg785, arg786 = false, arg787 = 0) {
    let v1172 = arg786 ? arg787 : float32Array14[arg782],
      v1173 = arg786 ? v1172 - n23 : v1172;
    if (v1173 <= 0 || v1172 > 139.5) return;
    if (!arg786 && "intro_room" === zone) {
      let v1193 = view.x + arg784 * v1173,
        v1194 = view.z + arg785 * v1173,
        max84 = Math.max(0, 1 - Math.hypot(v1193 - freeze24.x, v1194 - freeze24.z) / 8.5),
        max85 = Math.max(0, 1 - Math.hypot(v1193 - freeze26.x, v1194 - freeze26.z) / 6.6),
        v1195 = Math.abs(0.62 * v1194 - Math.round(0.62 * v1194)) < 0.035 ? 0.45 : 0;
      return void fn263(
        arg781,
        arg782,
        "hsl(31,9%," +
          (
            7.4 +
            0.9 * max84 +
            5 * max85 +
            0.35 * Math.max(0, 1 - Math.hypot(v1193 - 16, v1194 - 16) / 18) +
            v1195
          ).toFixed(1) +
          "%)",
      );
    }
    let v1174 = arg786 ? n21 + float32Array20[arg781] * v1173 : view.x + arg784 * v1173,
      v1175 = arg786 ? n22 + float32Array21[arg781] * v1173 : view.z + arg785 * v1173,
      v1176 = 0 | v1174,
      v1177 = 0 | v1175,
      v1178 = "city" === zone || arg786,
      v1179 = v1178 ? recordedOriginX + v1174 : v1174,
      v1180 = v1178 ? recordedOriginZ + v1175 : v1175,
      floor56 = Math.floor(v1179),
      floor57 = Math.floor(v1180),
      v1181 = arg786 ? worldN : fn192();
    if (v1176 < 0 || v1177 < 0 || v1176 >= v1181 || v1177 >= v1181) return;
    let v1182 = arg786
        ? uint8Array18[worldIndex(v1176, v1177)]
        : ("city" === zone
            ? uint8Array18
            : "observation" === zone
              ? uint8Array29
              : "balcony" === zone
                ? uint8Array33
                : uint8Array25)[fn193(v1176, v1177)],
      v1183 = arg786 ? Math.max(0, 1 - v1172 * v13) : float32Array15[arg782];
    glyphsEnabled &&
      fn263(
        arg781,
        arg782,
        (function (arg788, arg789, arg790) {
          arg789 = Math.max(0, Math.min(1, arg789));
          let fn441 = (arg791, arg792) =>
            Math.max(2, Math.min(34, arg791 + arg792 * arg789)).toFixed(0);
          return arg790
            ? 0 === arg788
              ? "hsl(210,20%," + fn441(4, 13) + "%)"
              : 1 === arg788
                ? "hsl(35,13%," + fn441(8, 15) + "%)"
                : 2 === arg788
                  ? "hsl(42,17%," + fn441(10, 17) + "%)"
                  : 4 === arg788
                    ? "hsl(205,43%," + fn441(4, 15) + "%)"
                    : 5 === arg788
                      ? "hsl(37,18%," + fn441(7, 14) + "%)"
                      : 6 === arg788
                        ? "hsl(32,16%," + fn441(7, 15) + "%)"
                        : "hsl(111,30%," + fn441(4, 13) + "%)"
            : "hsl(175,18%," + fn441(5, 12) + "%)";
        })(v1182, v1183, v1178),
      );
    let v1184 = arg786
        ? v1172 * float32Array19[arg782]
        : 0.5 *
          Math.abs(
            float32Array14[Math.min(rows - 1, arg782 + 1)] -
              float32Array14[Math.max(0, arg782 - 1)],
          ),
      max83 = Math.max(v1172 / v19, Math.min(8, v1184)),
      v1185 = (function (arg793, arg794, arg795 = 0, arg796 = 0, arg797 = 0) {
        let fn17Result = fn17(arg795),
          v1196 = Math.floor((2 * arg793) / fn17Result) + arg796,
          v1197 = Math.floor((2 * arg794) / fn17Result) + arg797;
        return float32Array30[((7 & v1197) << 3) | (7 & v1196)];
      })(v1179, v1180, max83, 3 * v1182, 5 * v1182),
      v1186 = max83 < 1.15;
    if (!arg786 && 4 === v1182) {
      let v1198 = v1176 % 2 == 0 || v1177 % 2 == 0;
      if ("balcony" === zone)
        return (
          fn263(arg781, arg782, "hsl(205,38%," + (10 + 12 * v1183).toFixed(0) + "%)"),
          void fn264(
            arg781,
            arg782,
            v1198 ? (v1176 % 2 == 0 ? "|" : "=") : (v1176 + v1177) & 1 ? "#" : "8",
            "hsl(188,42%," + (38 + 30 * v1183).toFixed(0) + "%)",
          )
        );
      let v1199 = "observation" === zone,
        v1200 = !v1199 && v1176 > 19 && v1177 < 15;
      return void fn264(
        arg781,
        arg782,
        v1199
          ? v1198
            ? v1176 % 2 == 0
              ? "|"
              : "="
            : (v1176 + v1177) % 7 == 0
              ? "+"
              : "."
          : v1200
            ? v1198
              ? "+"
              : "."
            : v1198
              ? v1176 % 2 == 0
                ? "|"
                : "="
              : ".",
        "hsl(" +
          (v1199 ? 205 : v1200 ? 42 : 175) +
          "," +
          (v1199 ? 30 : v1200 ? 32 : 24) +
          "%," +
          (34 + 28 * v1183).toFixed(0) +
          "%)",
      );
    }
    let v1187,
      v1188,
      v1189 = ((floor56 % n30) + n30) % n30,
      v1190 = ((floor57 % n30) + n30) % n30,
      v1191 = v1189 < n31,
      v1192 = v1190 < n31;
    if (0 === v1182) {
      ((v1187 = v1183 > 0.5 ? "-" : v1183 > 0.28 ? "_" : "."),
        (v1188 = "hsl(210,32%," + (30 + 28 * v1183).toFixed(0) + "%)"),
        v1186 &&
          v1185 > 0.94 &&
          ((v1187 = v1183 > 0.48 ? ":" : "."),
          (v1188 = "hsl(135,70%," + (42 + 28 * v1183).toFixed(0) + "%)")));
      let v1201 = v1191 ? v1189 : v1190;
      (v1191 && v1192) || (3 !== v1201 && 12 !== v1201)
        ? v1186 && hash2(3 * floor56 + 1, 3 * floor57) < 0.05
          ? ((v1187 = "O"), (v1188 = "hsl(200,18%," + (45 + 18 * v1183).toFixed(0) + "%)"))
          : (v1191 && v1192) ||
            (!v1191 || (7 !== v1201 && 8 !== v1201) || (v1186 && !(((2 * v1180) | 0) % 3 < 2))
              ? v1191 && v1186 && (6 === v1201 || 9 === v1201) && ((2 * v1180) | 0) % 5 < 3
                ? ((v1187 = ":"), (v1188 = "hsl(205,22%," + (38 + 16 * v1183).toFixed(0) + "%)"))
                : !v1192 || (7 !== v1201 && 8 !== v1201) || (v1186 && !(((2 * v1179) | 0) % 3 < 2))
                  ? v1192 &&
                    v1186 &&
                    (6 === v1201 || 9 === v1201) &&
                    ((2 * v1179) | 0) % 5 < 3 &&
                    ((v1187 = ":"), (v1188 = "hsl(205,22%," + (38 + 16 * v1183).toFixed(0) + "%)"))
                  : ((v1187 = v1186 ? "=" : ":"),
                    (v1188 = "hsl(205,42%," + (55 + 17 * v1183).toFixed(0) + "%)"))
              : ((v1187 = v1186 ? "|" : ":"),
                (v1188 = "hsl(205,42%," + (55 + 17 * v1183).toFixed(0) + "%)")))
        : ((v1187 = v1191 ? "|" : "="),
          (v1188 = "hsl(195,34%," + (58 + 22 * v1183).toFixed(0) + "%)"));
    } else if (4 === v1182) {
      let v1202 = v1185 > 0.84,
        v1203 = v1186 && v1185 < 0.1;
      ((v1187 = v1202 ? (1 & v1176 ? "~" : "=") : v1203 ? "." : "_"),
        (v1188 =
          "hsl(" +
          (v1202 ? 190 : 205) +
          "," +
          (v1202 ? 72 : 54) +
          "%," +
          (22 + 31 * v1183 + (v1203 ? 8 : 0)).toFixed(0) +
          "%)"));
    } else if (6 === v1182) {
      let v1204 = v1186 && v1185 > 0.91;
      ((v1187 =
        floor56 % 2 == 0 || floor57 % 2 == 0 ? (floor56 % 2 == 0 ? "|" : "=") : v1204 ? "+" : "."),
        (v1188 = v1204
          ? "hsl(45,34%," + (48 + 25 * v1183).toFixed(0) + "%)"
          : "hsl(34,20%," + (36 + 27 * v1183).toFixed(0) + "%)"));
    } else if (5 === v1182) {
      let v1205 = floor56 % 3 == 0 || floor57 % 3 == 0;
      ((v1187 = v1205 ? (v1176 % 3 == 0 ? "|" : "-") : v1185 > 0.78 ? ":" : "."),
        (v1188 = v1205
          ? "hsl(42,22%," + (48 + 26 * v1183).toFixed(0) + "%)"
          : "hsl(38,18%," + (38 + 26 * v1183).toFixed(0) + "%)"));
    } else if (1 === v1182) {
      let v1206 = v1191 ? v1189 : v1190,
        v1207 = v1185;
      if (("city" === zone || arg786) && uint8Array36[worldIndex(v1176, v1177)]) {
        let v1208 = int16Array18[worldIndex(v1176, v1177)],
          v1209 = v55[Math.max(0, v1208)],
          entrance7 = v1209.entrance,
          v1210 = entrance7.tx * (v1174 - v1209.frame.x) + entrance7.tz * (v1175 - v1209.frame.z),
          v1211 = entrance7.dx * (v1174 - v1209.frame.x) + entrance7.dz * (v1175 - v1209.frame.z),
          v1212 = Math.abs(v1210) > 0.72,
          v1213 = Math.abs(v1211) < 0.13;
        ((v1187 = v1212 ? "|" : v1213 ? "=" : hash2(37 * floor56, 41 * floor57) > 0.5 ? "." : ":"),
          (v1188 =
            v1212 || v1213
              ? "hsl(178,70%," + (48 + 30 * v1183).toFixed(0) + "%)"
              : "hsl(205,22%," + (24 + 20 * v1183).toFixed(0) + "%)"));
      } else if (2 === v1206 || 13 === v1206)
        ((v1187 = v1191 ? "|" : "="),
          (v1188 = "hsl(38,30%," + (66 + 22 * v1183).toFixed(0) + "%)"));
      else {
        let v1214 = v1191 ? floor57 % 4 == 0 : floor56 % 4 == 0;
        ((v1187 = v1214 ? (v1191 ? "-" : "|") : v1207 < 0.48 ? "," : v1207 < 0.82 ? "." : ":"),
          (v1188 = v1214
            ? "hsl(38,20%," + (52 + 24 * v1183).toFixed(0) + "%)"
            : "hsl(38,24%," + (46 + 30 * v1183).toFixed(0) + "%)"));
      }
    } else
      2 === v1182
        ? (v1186 ? (0 | (v1190 < 3 || v1190 >= 13 ? 2 * v1179 : 2 * v1180)) % 2 == 0 : v1185 < 0.55)
          ? ((v1187 = v1186 ? "=" : "-"),
            (v1188 = "hsl(45,30%," + (72 + 14 * v1183).toFixed(0) + "%)"))
          : (v1187 = " ")
        : ((v1187 = v1185 < 0.5 ? "," : v1185 < 0.8 ? "." : "*"),
          (v1188 = "hsl(110,55%," + (18 + 22 * v1183).toFixed(0) + "%)"));
    " " !== v1187 && fn264(arg781, arg782, v1187, v1188);
  }
  var obj20 = {
      A: [".#.", "#.#", "###", "#.#", "#.#"],
      B: ["##.", "#.#", "##.", "#.#", "##."],
      C: [".##", "#..", "#..", "#..", ".##"],
      D: ["##.", "#.#", "#.#", "#.#", "##."],
      E: ["###", "#..", "##.", "#..", "###"],
      I: ["###", ".#.", ".#.", ".#.", "###"],
      L: ["#..", "#..", "#..", "#..", "###"],
      M: ["#.#", "###", "###", "#.#", "#.#"],
      N: ["#.#", "###", "###", "###", "#.#"],
      O: [".#.", "#.#", "#.#", "#.#", ".#."],
      T: ["###", ".#.", ".#.", ".#.", ".#."],
      V: ["#.#", "#.#", "#.#", "#.#", ".#."],
      Y: ["#.#", "#.#", ".#.", ".#.", ".#."],
    },
    arr29 = ["NOVA", "DATA", "BYTE", "OMNI", "CITY", "LIVE", "VOID", "NEON"],
    map19 = arr29.map(function (arg798) {
      let arr74 = ["", "", "", "", ""];
      for (let n320 = 0; n320 < arg798.length; n320++) {
        let v1215 = obj20[arg798[n320]];
        for (let n321 = 0; n321 < 5; n321++) arr74[n321] += (n320 ? "." : "") + v1215[n321];
      }
      return arr74;
    }),
    map20 = arr29.map((arg799) => obj20[arg799[0]].map((arg800) => "......" + arg800 + "......")),
    n111 = 0;
  for (let n322 = 0; n322 < worldN / n30; n322++)
    for (let n323 = 0; n323 < worldN / n30; n323++)
      for (let n324 = 0; n324 < 4; n324++)
        hash2(97 * n322 + 1301 * n324 + 7000, 89 * n323 + 1877 * n324 + 9000) > 0.9 && n111++;
  var arr30 = [5, 3, 6, 4, 2, 5],
    arr31 = [0.38, 0.28, 0.46, 0.34, 0.25, 0.42],
    arr32 = ["0", "@", "[]", "o", "-", "8"],
    arr33 = [":", ":", ".", ":", "_", "#"],
    n112 = 0,
    map21 = new Map(),
    map22 = new Map([
      [6, "_"],
      [7, "u"],
      [8, "|"],
      [9, "="],
      [n37, "!"],
      [n38, "P"],
      [n39, "M"],
      [n40, "o"],
      [n41, "o"],
      [n42, "h"],
      [n43, "|"],
      [n45, "#"],
      [n46, "="],
      [n47, "#"],
      [n49, "H"],
      [n53, "*"],
      [n54, "T"],
    ]);
  function fn269(arg801, arg802, arg803) {
    return arg803 * roomN + arg802;
  }
  function fn270(arg804, arg805, arg806) {
    arg805 >= 3 &&
      arg806 >= 3 &&
      arg805 < roomN - 3 &&
      arg806 < roomN - 3 &&
      (arg804.obstacle[fn269(0, arg805, arg806)] = 1);
  }
  function fn271(arg807, arg808, arg809, arg810) {
    if (arg808 < 0 || arg809 < 0 || arg808 >= roomN || arg809 >= roomN) return;
    let fn269Result = fn269(0, arg808, arg809);
    ((arg807.walls[fn269Result] = 1),
      (arg807.wallHue[fn269Result] = arg810),
      (arg807.obstacle[fn269Result] = 1));
  }
  function fn272(arg811) {
    let v1216 = 1 === arg811.axis ? arg811.d : arg811.w,
      v1217 = 1 === arg811.axis ? arg811.w : arg811.d;
    return {
      x0: Math.floor(arg811.x - 0.5 * v1216),
      x1: Math.floor(arg811.x + 0.5 * v1216),
      z0: Math.floor(arg811.z - 0.5 * v1217),
      z1: Math.floor(arg811.z + 0.5 * v1217),
    };
  }
  function fn273(arg812, arg813, arg814) {
    return (
      arg813 >= 3 &&
      arg814 >= 3 &&
      arg813 < roomN - 3 &&
      arg814 < roomN - 3 &&
      !arg812.walls[fn269(0, arg813, arg814)] &&
      !arg812.obstacle[fn269(0, arg813, arg814)]
    );
  }
  function fn274(arg815, arg816, arg817, arg818, arg819) {
    let floor58 = Math.floor(arg816),
      floor59 = Math.floor(arg817),
      floor60 = Math.floor(arg818),
      floor61 = Math.floor(arg819);
    if (!fn273(arg815, floor58, floor59) || !fn273(arg815, floor60, floor61)) return false;
    let int16Array26 = new Int16Array(roomN * roomN);
    int16Array26.fill(-1);
    let int16Array27 = new Int16Array(roomN * roomN),
      n325 = 0,
      n326 = 0,
      fn269Result2 = fn269(0, floor58, floor59),
      fn269Result3 = fn269(0, floor60, floor61);
    for (
      int16Array27[n326++] = fn269Result2, int16Array26[fn269Result2] = fn269Result2;
      n325 < n326 && -1 === int16Array26[fn269Result3];
    ) {
      let v1218 = int16Array27[n325++],
        v1219 = v1218 % roomN,
        v1220 = (v1218 / roomN) | 0;
      for (let n327 = 0; n327 < 4; n327++) {
        let v1221 = v1219 + int8Array[n327],
          v1222 = v1220 + int8Array2[n327];
        if (!fn273(arg815, v1221, v1222)) continue;
        let fn269Result4 = fn269(0, v1221, v1222);
        -1 === int16Array26[fn269Result4] &&
          ((int16Array26[fn269Result4] = v1218), (int16Array27[n326++] = fn269Result4));
      }
    }
    return -1 !== int16Array26[fn269Result3];
  }
  var n113 = 0,
    n114 = 0;
  function fn275(arg820, arg821, arg822, arg823, arg824, arg825, arg826, arg827, arg828 = 26) {
    let n328 = 0,
      v1223 = arg828;
    if (Math.abs(arg822) < 1e-7) {
      if (arg820 < arg824 || arg820 > arg825) return false;
    } else {
      let v1224 = (arg824 - arg820) / arg822,
        v1225 = (arg825 - arg820) / arg822;
      if (v1224 > v1225) {
        let v1226 = v1224;
        ((v1224 = v1225), (v1225 = v1226));
      }
      if ((v1224 > n328 && (n328 = v1224), v1225 < v1223 && (v1223 = v1225), v1223 < n328))
        return false;
    }
    if (Math.abs(arg823) < 1e-7) {
      if (arg821 < arg826 || arg821 > arg827) return false;
    } else {
      let v1227 = (arg826 - arg821) / arg823,
        v1228 = (arg827 - arg821) / arg823;
      if (v1227 > v1228) {
        let v1229 = v1227;
        ((v1227 = v1228), (v1228 = v1229));
      }
      if ((v1227 > n328 && (n328 = v1227), v1228 < v1223 && (v1223 = v1228), v1223 < n328))
        return false;
    }
    return !(v1223 < 0) && (n114 = v1223) >= (n113 = n328 < 0 ? 0 : n328);
  }
  function fn276(arg829, arg830) {
    if (undefined !== arg830.reversePortalColumn) return arg830.reversePortalColumn;
    if (((arg830.reversePortalColumn = null), arg830.perp > 22)) return null;
    let accessibleSiteIndex = arg830.accessibleSiteIndex;
    if (accessibleSiteIndex < 0) return null;
    let v1230 = v55[accessibleSiteIndex];
    if (!v1230) return null;
    let v1231 = n120 * v21[arg829] + n119 * v20[arg829],
      v1232 = n120 * v20[arg829] - n119 * v21[arg829],
      v1233 = view.x + arg830.perp * v1231,
      v1234 = view.z + arg830.perp * v1232;
    if (
      !(function (arg831, arg832, arg833, arg834, arg835, arg836) {
        let v1242 = arg832 && arg832.entrance;
        if (
          !v1242 ||
          !arg832.building ||
          !arg831.facadeHot ||
          arg831.cellIndex < 0 ||
          arg831.cellIndex >= int16Array17.length ||
          int16Array17[arg831.cellIndex] !== arg832.building.id
        )
          return false;
        if (1 === Math.abs(v1242.dx)) {
          if (0 !== arg831.side || Math.abs(arg833) <= 1e-7 || -Math.sign(arg833) !== v1242.dx)
            return false;
        } else if (1 !== arg831.side || Math.abs(arg834) <= 1e-7 || -Math.sign(arg834) !== v1242.dz)
          return false;
        let v1243 = v1242.outCenterX - 0.5 * v1242.dx,
          v1244 = v1242.outCenterZ - 0.5 * v1242.dz;
        if (Math.abs((arg835 - v1243) * v1242.dx + (arg836 - v1244) * v1242.dz) > 0.8) return false;
        let v1245 = (arg835 - v1242.outCenterX) * v1242.tx + (arg836 - v1242.outCenterZ) * v1242.tz,
          max87 = Math.max(2.5, 0.5 * (v1242.leftRun + 2 + v1242.rightRun) + 0.75);
        return Math.abs(v1245) <= max87;
      })(arg830, v1230, v1231, v1232, v1233, v1234)
    )
      return null;
    let now6 = performance.now(),
      entrance8 = v1230.entrance,
      max86 = Math.max(0.12, Math.min(1, (entrance8.leftRun + 2 + entrance8.rightRun) / 24)),
      v1235 =
        16 +
        ((v1233 - entrance8.outCenterX) * entrance8.tx +
          (v1234 - entrance8.outCenterZ) * entrance8.tz) /
          max86;
    if (!((v1235 >= 4.8 && v1235 <= 12.4) || (v1235 >= 18.6 && v1235 <= 26.2))) return null;
    let v1236 = -entrance8.dx,
      v1237 = -entrance8.dz,
      v1238 = (v1231 * entrance8.tx + v1232 * entrance8.tz) / max86,
      v1239 = -(v1231 * v1236 + v1232 * v1237) / max86;
    if (v1239 >= -0.015) return null;
    let v1240 = (function (arg837) {
      let v1246 = v55[arg837];
      if (!v1246) return null;
      let v1247 = (function (arg838) {
          return arg838.worldId + ":floor:0";
        })(v1246),
        get19 = map21.get(v1247);
      if (get19) return get19;
      if (
        ((get19 = (function (arg839) {
          let v1248 = v55[arg839];
          if (!v1248) return null;
          let descriptor4 = v1248.descriptor,
            v1249 = descriptor4.palette || [190, 42, 165],
            obj46 = {
              worldId: v1248.worldId,
              descriptor: descriptor4,
              walls: new Uint8Array(roomN * roomN),
              wallHue: new Uint16Array(roomN * roomN),
              obstacle: new Uint8Array(roomN * roomN),
              props: [],
              occupants: [],
              styleCache: new Map(),
            };
          for (let n329 = 0; n329 < roomN; n329++)
            for (let n330 = 0; n330 < roomN; n330++)
              (n330 < 3 || n329 < 3 || n330 >= roomN - 3 || n329 >= roomN - 3) &&
                fn271(obj46, n330, n329, n330 < 8 ? v1249[0] : n330 > 23 ? v1249[1] : v1249[2]);
          for (let n331 = 5; n331 <= 12; n331++) {
            let fn269Result5 = fn269(0, n331, roomN - 3);
            ((obj46.walls[fn269Result5] = 0), (obj46.obstacle[fn269Result5] = 0));
          }
          for (let n332 = 19; n332 <= 26; n332++) {
            let fn269Result6 = fn269(0, n332, roomN - 3);
            ((obj46.walls[fn269Result6] = 0), (obj46.obstacle[fn269Result6] = 0));
          }
          for (let n333 = 15; n333 <= 16; n333++) {
            let fn269Result7 = fn269(0, n333, roomN - 3);
            ((obj46.walls[fn269Result7] = 0), (obj46.obstacle[fn269Result7] = 0));
          }
          let fn442 = (arg840, arg841, arg842, arg843, arg844 = 1, arg845 = 0, arg846 = null) =>
              (function (
                arg847,
                arg848,
                arg849,
                arg850,
                arg851,
                arg852 = 1,
                arg853 = 0,
                arg854 = null,
              ) {
                let v1250 = (arg854 && arg854.d) || map4.get(arg850) || 0.42,
                  v1251 = 0.5 * (1 === arg853 ? v1250 : arg852),
                  v1252 = 0.5 * (1 === arg853 ? arg852 : v1250),
                  obj47 = {
                    x: arg848,
                    z: arg849,
                    kind: arg850,
                    h: arg851,
                    w: arg852,
                    axis: arg853,
                    d: v1250,
                    volume: true,
                    x0: arg848 - v1251,
                    x1: arg848 + v1251,
                    z0: arg849 - v1252,
                    z1: arg849 + v1252,
                  };
                return (arg847.props.push(obj47), obj47);
              })(obj46, arg840, arg841, arg842, arg843, arg844, arg845, arg846),
            fn443 = (arg855, arg856) =>
              fn271(obj46, arg855, arg856, v1249[(arg855 + arg856) % v1249.length]),
            fn444 = (arg857, arg858, arg859, arg860, arg861, arg862, arg863, arg864, arg865) => {
              for (let n334 = 0; n334 < arg859; n334++) {
                let v1253 = arg857 + arg860 * n334,
                  v1254 = arg858 + arg861 * n334;
                fn442(v1253, v1254, arg862, arg863, arg864, arg865);
                let v1255 = 0 | v1253,
                  v1256 = 0 | v1254;
                for (let v1257 = -1; v1257 <= 1; v1257++)
                  fn270(obj46, v1255 + (arg865 ? v1257 : 0), v1256 + (arg865 ? 0 : v1257));
              }
            };
          if (v1248.hero) {
            for (let n335 = 5; n335 <= 11; n335++) fn443(7, n335);
            for (let n336 = 7; n336 <= 12; n336++) fn443(n336, 11);
            for (let n337 = 20; n337 <= 25; n337++) fn270(obj46, n337, 8);
            for (let n338 = 8; n338 <= 13; n338++) fn270(obj46, 25, n338);
            for (let v1258 of [11, 16, 21])
              for (let n339 = 15; n339 <= 21; n339++) fn270(obj46, v1258, n339);
            (fn442(5.5, 6.5, n54, 1.7, 1.1, 0),
              fn442(5.5, 9, n39, 1.8, 1, 0),
              fn442(26, 17, 7, 1.05, 0.75, 0),
              fn442(24, 24, n41, 1.1, 1.2, 0),
              fn442(8.5, 24, 6, 0.8, 1.7, 0),
              fn442(8.2, 3.4, n45, 7.8, 0.7, 0),
              fn442(22.8, 3.4, n45, 7.8, 0.7, 0),
              fn442(11.5, 18.5, n46, 1.9, 4.4, 1),
              fn442(16.5, 18.5, n46, 1.9, 4.4, 1),
              fn442(21.5, 18.5, n46, 1.9, 4.4, 1),
              fn442(22.5, 8.5, n47, 1.1, 5.7, 0),
              fn442(25.5, 11, n47, 1.1, 5.2, 1),
              fn442(16, 3.18, n49, 4.4, 5.2, 0),
              obj46.occupants.push(
                {
                  id: "nocturne-nara",
                  x: 22.5,
                  z: 11.5,
                  h: 1.35,
                  w: 0.55,
                  color: 175,
                  body: "N",
                },
                {
                  id: "nocturne-customer",
                  x: 13.5,
                  z: 14.5,
                  h: 1.35,
                  w: 0.55,
                  color: 292,
                  body: "8",
                },
              ));
          } else {
            let v1259 = (descriptor4.seed >>> 18) % 4,
              layout2 = descriptor4.layout;
            if ("aisles" === layout2) {
              for (let v1260 of [10, 16, 22]) fn444(v1260, 11 + v1259, 3, 0, 4, n46, 1.9, 4, 1);
              fn444(23, 7, 1, 0, 0, n47, 1.1, 5.5, 0);
            } else if ("tables" === layout2) {
              for (let v1261 of [9, 16, 23])
                for (let v1262 of [11, 18])
                  (fn442(v1261, v1262, n41, 1.1, 1.2, (v1261 + v1262) & 1),
                    fn270(obj46, v1261, v1262));
              fn444(22, 7, 1, 0, 0, n47, 1.1, 6, 0);
            } else if ("desks" === layout2 || "rooms" === layout2) {
              for (let v1263 of [10, 15, 20]) fn444(9, v1263, 3, 7, 0, n47, 1.05, 3.5, 0);
              if ("rooms" === layout2)
                for (let v1264 of [12, 20])
                  for (let n340 = 6; n340 <= 23; n340++) 15 !== n340 && fn443(v1264, n340);
            } else if ("bays" === layout2) {
              for (let v1265 of [9, 16, 23]) fn444(v1265, 12, 2, 0, 7, n47, 1.1, 5.2, 1);
              fn444(7, 7, 3, 8, 0, n39, 1.7, 1, 0);
            } else if ("lobby" === layout2) {
              (fn444(9, 15, 3, 7, 0, 6, 0.8, 2.6, 0), fn444(16, 8, 1, 0, 0, n47, 1.1, 7, 0));
              for (let v1266 of [7, 25])
                fn442(v1266, 6, n53, 1, 1.6, 0, {
                  d: 1,
                });
            } else if ("machines" === layout2) {
              for (let v1267 of [6, 26]) fn444(v1267, 8, 5, 0, 4, n39, 1.6, 1.1, 1);
              fn444(16, 11, 3, 0, 5, 6, 0.8, 3, 0);
            } else {
              for (let v1268 of [7, 12, 20, 25]) fn444(v1268, 8, 4, 0, 5, n39, 1.7, 1.1, 1);
              fn444(16, 22, 1, 0, 0, n47, 1.1, 7, 0);
            }
            (fn442(5.5, 6.5, 7, 1.05, 0.75, 0), fn442(16, 3.18, n49, 4.4, 5.2, 0));
          }
          if (
            ((function (arg866) {
              for (let v1269 of arg866.props) {
                let fn272Result = fn272(v1269);
                for (let z02 = fn272Result.z0; z02 <= fn272Result.z1; z02++)
                  for (let x02 = fn272Result.x0; x02 <= fn272Result.x1; x02++)
                    fn270(arg866, x02, z02);
              }
            })(obj46),
            !v1248.hero)
          ) {
            let v1270 = obj16[descriptor4.archetype] || ["OCCUPANT"],
              v1271 = (function (arg867, arg868, arg869) {
                let arr75 = [];
                for (let n341 = 0; n341 < roomN * roomN && arr75.length < arg869; n341++) {
                  let v1272 = (arg868 + 37 * n341) % (roomN * roomN),
                    v1273 = v1272 % roomN,
                    v1274 = (v1272 / roomN) | 0;
                  if (!fn273(arg867, v1273, v1274) || v1274 > 25 || v1274 < 6) continue;
                  let obj48 = {
                    x: v1273 + 0.5,
                    z: v1274 + 0.5,
                  };
                  (arr75.length && !fn274(arg867, arr75[0].x, arr75[0].z, obj48.x, obj48.z)) ||
                    (arr75.every(
                      (arg870) => Math.hypot(arg870.x - obj48.x, arg870.z - obj48.z) > 5,
                    ) &&
                      arr75.push(obj48));
                }
                return arr75;
              })(obj46, descriptor4.seed, 3 * v1270.length);
            for (let n342 = 0; n342 < v1270.length && n342 < v1271.length; n342++)
              obj46.occupants.push({
                id: "interior-" + arg839 + "-floor-0-npc-" + n342,
                x: v1271[n342].x,
                z: v1271[n342].z,
                h: 1.35,
                w: 0.55,
                color: v1249[n342 % v1249.length],
                body: "oH#8"[n342 % 4],
              });
          }
          return obj46;
        })(arg837)),
        !get19)
      )
        return null;
      for (map21.set(v1247, get19); map21.size > 24;) map21["delete"](map21.keys().next().value);
      return get19;
    })(accessibleSiteIndex);
    if (!v1240) return null;
    let obj45 = {
      scene: v1240,
      roomX: v1235,
      rayDX: v1238,
      rayDZ: v1239,
      propHits: [],
      npcHits: [],
      wallT: 1 / 0,
      wallHue: v1240.descriptor.palette[0],
      wallSide: 0,
    };
    !(function (arg871, arg872) {
      let roomX = arg872.roomX,
        v1275 = roomN - 3 - 0.08,
        rayDX = arg872.rayDX,
        rayDZ = arg872.rayDZ,
        floor62 = Math.floor(roomX),
        floor63 = Math.floor(v1275),
        v1276 = Math.abs(rayDX) < 1e-8 ? 1000000000 : Math.abs(1 / rayDX),
        v1277 = Math.abs(rayDZ) < 1e-8 ? 1000000000 : Math.abs(1 / rayDZ),
        v1278 = rayDX < 0 ? -1 : 1,
        v1279 = rayDZ < 0 ? -1 : 1,
        v1280 = rayDX < 0 ? (roomX - floor62) * v1276 : (floor62 + 1 - roomX) * v1276,
        v1281 = rayDZ < 0 ? (v1275 - floor63) * v1277 : (floor63 + 1 - v1275) * v1277,
        n343 = 0,
        n344 = 0;
      ((arg872.wallT = 1 / 0),
        (arg872.wallHue = arg871.descriptor.palette[0]),
        (arg872.wallSide = 0));
      for (
        let n345 = 0;
        n345 < 96 &&
        (v1280 < v1281
          ? ((n344 = v1280), (v1280 += v1276), (floor62 += v1278), (n343 = 0))
          : ((n344 = v1281), (v1281 += v1277), (floor63 += v1279), (n343 = 1)),
        !(n344 > 26 || floor62 < 0 || floor63 < 0 || floor62 >= roomN || floor63 >= roomN));
        n345++
      ) {
        let v1282 = floor63 * roomN + floor62;
        if (arg871.walls[v1282]) {
          ((arg872.wallT = n344),
            (arg872.wallHue = arg871.wallHue[v1282] || arg871.descriptor.palette[0]),
            (arg872.wallSide = n343));
          break;
        }
      }
    })(v1240, obj45);
    let v1241 = roomN - 3 - 0.08;
    for (let n346 = 0; n346 < v1240.props.length; n346++) {
      let v1283 = v1240.props[n346];
      fn275(v1235, v1241, v1238, v1239, v1283.x0, v1283.x1, v1283.z0, v1283.z1) &&
        obj45.propHits.push(v1283, n113, n114);
    }
    if (populationVisible) {
      let v1284 =
        worldId2 === v1240.worldId && 0 === n101 && arr22.length ? arr22 : v1240.occupants;
      for (let n347 = 0; n347 < v1284.length; n347++) {
        let v1285 = v1284[n347],
          n348 = 0.29,
          n349 = 0.29;
        fn275(
          v1235,
          v1241,
          v1238,
          v1239,
          v1285.x - n348,
          v1285.x + n348,
          v1285.z - n349,
          v1285.z + n349,
        ) && obj45.npcHits.push(v1285, n113, n114);
      }
    }
    return (
      (float64Array[freeze4.reversePortal] += performance.now() - now6),
      (arg830.reversePortalColumn = obj45),
      obj45
    );
  }
  var obj21 = {
    typeCode: 0,
    t: 0,
    hue: 190,
    side: 0,
    entity: null,
    y: 0,
  };
  function fn277(arg873, arg874, arg875, arg876, arg877, arg878) {
    let n350 = 0,
      v1286 = 1 / 0;
    if (Math.abs(arg874) < 1e-7) {
      if (arg873 < 0 || arg873 > arg875) return 1 / 0;
    } else {
      let v1287 = -arg873 / arg874,
        v1288 = (arg875 - arg873) / arg874;
      if (v1287 > v1288) {
        let v1289 = v1287;
        ((v1287 = v1288), (v1288 = v1289));
      }
      ((n350 = v1287), (v1286 = v1288));
    }
    let max88 = Math.max(arg876, n350, 0);
    return max88 <= arg877 && max88 <= v1286 && max88 < arg878 && max88 < 26 ? max88 : 1 / 0;
  }
  function fn278(arg879, arg880, arg881, arg882, arg883) {
    if (arg881.accessibleSiteIndex < 0) return false;
    let reversePortalMix = arg881.reversePortalMix;
    if (
      (undefined === reversePortalMix &&
        ((reversePortalMix = arg881.perp <= 13.5 ? 1 : Math.max(0, (22 - arg881.perp) / 8.5)),
        (arg881.reversePortalMix = reversePortalMix)),
      reversePortalMix <= 0 || arg882 > reversePortalMix)
    )
      return false;
    if (
      !(function (arg884, arg885) {
        let v1294 = (function (arg886) {
          if (undefined !== arg886.reversePortalStorefrontDistance)
            return arg886.reversePortalStorefrontDistance;
          let accessibleSiteIndex2 = arg886.accessibleSiteIndex,
            v1296 = accessibleSiteIndex2 >= 0 ? v55[accessibleSiteIndex2] : null,
            v1297 = v1296 && v1296.entrance;
          if (v1297) {
            let max89 = Math.max(2.5, 0.5 * (v1297.leftRun + 2 + v1297.rightRun) + 0.75),
              v1298 =
                (view.x - v1297.outCenterX) * v1297.tx + (view.z - v1297.outCenterZ) * v1297.tz,
              max90 = Math.max(-max89, Math.min(max89, v1298)),
              v1299 = v1297.outCenterX + v1297.tx * max90,
              v1300 = v1297.outCenterZ + v1297.tz * max90;
            arg886.reversePortalStorefrontDistance = Math.hypot(view.x - v1299, view.z - v1300);
          } else arg886.reversePortalStorefrontDistance = arg886.perp;
          return arg886.reversePortalStorefrontDistance;
        })(arg884);
        if (v1294 <= 6) return true;
        let v1295 =
          (Math.floor(arg884.wallTexelPos) + arg885 + arg884.bayerSeedX + arg884.bayerSeedY) & 3;
        return v1294 <= 11 ? 3 !== v1295 : !(1 & v1295);
      })(arg881, arg883)
    )
      return (fn264(arg879, arg880, ".", arg881.facadeHot.palette.glass), true);
    let fn276Result = fn276(arg879, arg881);
    if (!fn276Result) return false;
    let v1290 = !(63 & n112++),
      v1291 = v1290 ? performance.now() : 0,
      v1292 = (function (arg887, arg888, arg889) {
        let scene = arg887.scene,
          v1301 = float32Array18[arg889],
          v1302 = n14 + arg888.perp * v1301,
          v1303 = 1 / 0,
          n351 = 0,
          n352 = 190,
          n353 = 0,
          v1304 = null,
          n354 = 0;
        if (arg887.wallT < v1303) {
          let v1306 = v1302 + arg887.wallT * v1301;
          v1306 >= 0 &&
            v1306 <= n97 &&
            ((v1303 = arg887.wallT),
            (n351 = 1),
            (n352 = arg887.wallHue),
            (n353 = arg887.wallSide),
            (n354 = v1306));
        }
        if (v1301 < -0.0001) {
          let v1307 = -v1302 / v1301;
          v1307 > 0 &&
            v1307 < v1303 &&
            v1307 < 26 &&
            ((v1303 = v1307),
            (n351 = 2),
            (n352 = scene.descriptor.palette[0]),
            (v1304 = null),
            (n354 = 0));
        } else if (v1301 > 0.0001) {
          let v1308 = (n97 - v1302) / v1301;
          v1308 > 0 &&
            v1308 < v1303 &&
            v1308 < 26 &&
            ((v1303 = v1308),
            (n351 = 3),
            (n352 = scene.descriptor.palette[2]),
            (v1304 = null),
            (n354 = n97));
        }
        let propHits = arg887.propHits;
        for (let n355 = 0; n355 < propHits.length; n355 += 3) {
          let v1309 = propHits[n355],
            fn277Result = fn277(
              v1302,
              v1301,
              v1309.h || 1.35,
              propHits[n355 + 1],
              propHits[n355 + 2],
              v1303,
            );
          fn277Result < v1303 &&
            ((v1303 = fn277Result),
            (n351 = 5),
            (v1304 = v1309),
            (n352 =
              v1309.color ??
              scene.descriptor.palette[(v1309.kind || 0) % scene.descriptor.palette.length]),
            (n354 = v1302 + fn277Result * v1301));
        }
        let npcHits = arg887.npcHits;
        for (let n356 = 0; n356 < npcHits.length; n356 += 3) {
          let v1310 = npcHits[n356],
            fn277Result2 = fn277(
              v1302,
              v1301,
              v1310.h || 1.35,
              npcHits[n356 + 1],
              npcHits[n356 + 2],
              v1303,
            );
          fn277Result2 < v1303 &&
            ((v1303 = fn277Result2),
            (n351 = 4),
            (v1304 = v1310),
            (n352 = v1310.color ?? scene.descriptor.palette[0]),
            (n354 = v1302 + fn277Result2 * v1301));
        }
        if (!n351) return null;
        let v1305 = obj21;
        return (
          (v1305.typeCode = n351),
          (v1305.t = v1303),
          (v1305.hue = n352 || 190),
          (v1305.side = n353),
          (v1305.entity = v1304),
          (v1305.y = n354),
          v1305
        );
      })(fn276Result, arg881, arg880);
    if (!v1292)
      return (
        v1290 && (float64Array[freeze4.reversePortal] += 64 * (performance.now() - v1291)),
        false
      );
    let v1293 = (function (arg890, arg891, arg892, arg893) {
      let max91 = Math.max(0.18, 1 - arg891.t / 26),
        max92 = Math.max(0.12, Math.min(1, arg892.baseB * (0.72 + 0.38 * max91))),
        max93 = Math.max(0, Math.min(31, Math.round(31 * max92))),
        v1311 = max93 / 31,
        v1312 = 0 | (arg891.hue || 190),
        typeCode = arg891.typeCode,
        n357 = 0,
        s14 = ".";
      if (1 === typeCode) ((n357 = 1 & arg891.side), (s14 = n357 ? "#" : "|"));
      else if (2 === typeCode) ((n357 = 1 & arg893), (s14 = n357 ? "." : "_"));
      else if (3 === typeCode) s14 = "=";
      else if (4 === typeCode)
        ((s14 = (arg891.entity && arg891.entity.body) || "o"), (n357 = 127 & s14.charCodeAt(0)));
      else {
        let v1316 = arg891.entity ? arg891.entity.kind : 0;
        ((n357 = 127 & v1316), (s14 = map22.get(v1316) || "#"));
      }
      let v1313,
        v1314,
        v1315 = 8 * (128 * (512 * max93 + v1312) + n357) + typeCode,
        get20 = arg890.styleCache.get(v1315);
      return (
        get20 ||
        (1 === typeCode
          ? ((v1313 = "hsl(" + v1312 + ",42%," + (24 + 34 * v1311).toFixed(0) + "%)"),
            (v1314 = "hsl(" + v1312 + ",28%," + (7 + 14 * v1311).toFixed(0) + "%)"))
          : 2 === typeCode
            ? ((v1313 = "hsl(" + v1312 + ",24%," + (25 + 24 * v1311).toFixed(0) + "%)"),
              (v1314 = "hsl(" + v1312 + ",18%," + (6 + 10 * v1311).toFixed(0) + "%)"))
            : 3 === typeCode
              ? ((v1313 = "hsl(" + v1312 + ",30%," + (30 + 24 * v1311).toFixed(0) + "%)"),
                (v1314 = "hsl(" + v1312 + ",15%," + (8 + 10 * v1311).toFixed(0) + "%)"))
              : 4 === typeCode
                ? ((v1313 = "hsl(" + v1312 + ",72%," + (42 + 26 * v1311).toFixed(0) + "%)"),
                  (v1314 = "hsl(" + v1312 + ",30%," + (8 + 12 * v1311).toFixed(0) + "%)"))
                : ((v1313 = "hsl(" + v1312 + ",62%," + (34 + 30 * v1311).toFixed(0) + "%)"),
                  (v1314 = "hsl(" + v1312 + ",28%," + (8 + 14 * v1311).toFixed(0) + "%)")),
        (get20 = {
          ch: s14,
          ink: v1313,
          fill: v1314,
        }),
        arg890.styleCache.set(v1315, get20),
        arg890.styleCache.size > 2048 && arg890.styleCache.clear(),
        get20)
      );
    })(fn276Result.scene, v1292, arg881, arg883);
    return (
      v1290 && (float64Array[freeze4.reversePortal] += 64 * (performance.now() - v1291)),
      glyphsEnabled && fn263(arg879, arg880, v1293.fill),
      fn264(arg879, arg880, v1293.ch, v1293.ink),
      (arg883 + Math.floor(3 * fn276Result.roomX) + fn276Result.scene.descriptor.seed) % 17 == 0 &&
        fn264(arg879, arg880, fn276Result.roomX < 16 ? "/" : "\\", arg881.facadeHot.palette.glass),
      true
    );
  }
  function fn279(
    arg894,
    arg895,
    arg896,
    arg897,
    arg898,
    arg899,
    arg900,
    arg901,
    arg902,
    arg903,
    arg904,
    arg905 = false,
  ) {
    let fn24Result28 = worldIndex(arg896, arg897),
      v1317 = arg901 - arg900,
      v1318 = "interior" === zone && !arg905,
      v1319 = fn190() && !arg905,
      v1320 = v1319 ? fn193(arg896, arg897) : fn24Result28,
      v1321 = !v1319,
      v1322 = v1321 ? recordedOriginX + arg896 : arg896,
      v1323 = v1321 ? recordedOriginZ + arg897 : arg897,
      v1324 = v1321 ? arg904 + (0 === arg895 ? recordedOriginZ : recordedOriginX) : arg904,
      v1325 = v1319 ? 0 : uint8Array23[fn24Result28],
      v1326 = v1319
        ? ("observation" === zone
            ? uint16Array9
            : "balcony" === zone
              ? uint16Array10
              : uint16Array8)[v1320] || (v1318 ? 165 : 205)
        : uint8Array19[fn24Result28] || 135,
      v1327 = v1319
        ? 2
        : 1 === v1325
          ? 3
          : 2 === v1325
            ? 0
            : 3 === v1325
              ? 2
              : uint8Array21[fn24Result28],
      v1328 = (6 * arg898) | 0,
      v1329 =
        (1 - Math.min(1, arg894 * v13)) *
        (0.92 + 0.08 * hash2(7 * v1322 + 131 * arg895, 7 * v1323 + 3)) *
        (0 === arg895 ? 0.96 : 0.84),
      v1330 = arg905 ? v23 : fn191(),
      ceil4 = Math.ceil(fn10(2.6, arg894, v1330)),
      floor64 = Math.floor(v1322 / n30),
      floor65 = Math.floor(v1323 / n30),
      v1331 = 0 === arg895 ? v1322 : v1323,
      v1332 = v1319 ? null : fn35(floor64, floor65),
      v1333 = v1319 ? "LOCAL" : v1332?.["type"] || "MIXED",
      v1334 = v1332?.["morph"] || 0,
      v1335 = 2 * arg895 + (((v1331 % n30) + n30) % n30 > 23 ? 1 : 0),
      fn12Result19 = hash2(97 * floor64 + 1301 * v1335 + 7000, 89 * floor65 + 1877 * v1335 + 9000),
      v1336 = -1,
      n358 = 0,
      v1337 = -1,
      flag27 = false,
      v1338 = null,
      n359 = 0,
      flag28 = false;
    if (
      !v1318 &&
      ("LEGACY" === v1333 || "CORE" === v1333 || "COMMERCIAL" === v1333 || "MIXED" === v1333) &&
      arg899 >= 18 &&
      fn12Result19 > 0.9
    ) {
      let v1344 = v1324 % n30;
      v1344 < 0 && (v1344 += n30);
      let v1345 =
          hash2(313 * floor64 + 1999 * v1335 + 12000, 439 * floor65 + 2713 * v1335 + 14000) > 0.72,
        v1346 = v1345 ? 4.8 : 10.5,
        v1347 = v1345 ? 4.2 : 2.45;
      if (
        ((v1336 =
          (v1344 -
            (24 +
              3 * (hash2(577 * floor64 + 37 * v1335, 811 * floor65 + 53 * v1335) - 0.5) -
              0.5 * v1346)) /
          v1346),
        v1336 >= 0 && v1336 < 1)
      ) {
        let v1348 =
            3.8 +
            hash2(997 * floor64 + 83 * v1335, 1291 * floor65 + 101 * v1335) *
              Math.min(4.5, arg899 - v1347 - 5.3),
          v1349 = v1348 + v1347;
        if (
          ((n358 = Math.ceil(fn10(v1349, arg894, v1330))),
          (v1337 = Math.floor(fn10(v1348, arg894, v1330))),
          (flag27 = v1337 - n358 >= 3),
          flag27)
        ) {
          let v1350 = (((n70 / 3.2) | 0) + ((41 * fn12Result19) | 0)) % map19.length;
          ((v1338 = v1345 ? map20[v1350] : map19[v1350]),
            (n359 = (v1326 + 75 + ((140 * fn12Result19) | 0)) % 360),
            (flag28 = false));
        }
      }
    }
    let v1339 = !v1319 && !!uint8Array37[fn24Result28],
      v1340 = !v1319 && !!uint8Array38[fn24Result28],
      v1341 = v1339 || v1340 ? int16Array19[fn24Result28] : -1,
      v1342 = v1319 ? 0 : uint16Array7[fn24Result28],
      v1343 = null;
    !v1319 &&
      (v1339 || v1340 || v1342) &&
      (v1343 = v1341 >= 0 ? v55[v1341] : fn158(arg896, arg897));
    let obj49 = {
      perp: arg894,
      cx: arg896,
      cz: arg897,
      h: arg899,
      r0: arg900,
      r1: arg901,
      edgeV: arg902,
      span: v1317,
      baseB: v1329,
      colN: v1328,
      bh: v1326,
      style: v1327,
      wallPos: v1324,
      surfaceX: v1322,
      surfaceZ: v1323,
      bs: v1319 ? 42 : uint8Array20[fn24Result28],
      litP: v1319 ? 0.22 : uint8Array22[fn24Result28] / 100,
      signHue: (v1326 + 88 + 41 * v1327) % 360,
      sfRow: ceil4,
      sfTmax: arg901 - Math.max(arg900 + 1, ceil4),
      signSeed: fn12Result19,
      signU: v1336,
      signTop: n358,
      signBottom: v1337,
      hasBillboard: flag27,
      billboardGrid: v1338,
      billboardHue: n359,
      signBroken: flag28,
      architecture: v1325,
      projectionEyeY: v1330,
      localZone: v1319,
      cellIndex: fn24Result28,
      side: arg895,
      face: v1335,
      entranceRecess: v1339,
      accessibleFacade: v1340,
      accessibleSiteIndex: v1341,
      hasBuildingPlan: !!v1342,
      districtType: v1333,
      districtMorph: v1334,
      buildingPlanId: v1342,
      bayerSeedX: (3 * v1322) & 7,
      bayerSeedY: (5 * v1323) & 7,
      wallTexelPos: 2 * v1324,
      perpOverProjX: arg894 / v19,
    };
    return (
      (obj49.w0 = hash2(13 * v1322 + 29 * v1328, 11 * v1323)),
      (obj49.w1 = hash2(13 * v1322 + 29 * v1328, 11 * v1323 + 17)),
      (obj49.w2 = hash2(13 * v1322 + 29 * v1328, 11 * v1323 + 34)),
      (obj49.w3 = hash2(13 * v1322 + 29 * v1328, 11 * v1323 + 51)),
      v1319
        ? ((obj49.localFast = fn255(obj49)),
          (obj49.backingPalette = null),
          (obj49.inkPalette = null),
          (obj49.facadeHot = null))
        : ((obj49.backingPalette = (function (arg906) {
            let max94 = Math.max(0, Math.min(1, arg906.baseB)),
              localZone = arg906.localZone,
              v1351 = Math.round(7 * max94) / 7,
              v1352 = localZone ? 22 : Math.max(20, Math.min(48, 0.5 * arg906.bs)),
              v1353 = (localZone ? 6 : 4) + (localZone ? 15 : 18) * v1351,
              v1354 = v1351 > 0.62 ? 0.84 : v1351 > 0.3 ? 0.74 : 0.64,
              fn445 = (arg907, arg908, arg909) =>
                "hsla(" +
                arg906.bh +
                "," +
                arg907.toFixed(0) +
                "%," +
                Math.max(2, Math.min(28, arg908)).toFixed(0) +
                "%," +
                arg909.toFixed(2) +
                ")";
            return {
              glass: fn445(Math.max(18, 0.64 * v1352), 2.5 + 7 * v1351, v1351 > 0.55 ? 0.77 : 0.67),
              litglass: fn445(
                Math.max(28, 0.82 * v1352),
                5 + 9 * v1351,
                v1351 > 0.55 ? 0.74 : 0.64,
              ),
              mullion: fn445(Math.max(14, 0.6 * v1352), 2 + 10 * v1351, 0.86),
              seam: fn445(Math.max(12, 0.48 * v1352), 1.5 + 7 * v1351, 0.92),
              storefront: fn445(Math.max(20, 0.72 * v1352), 3 + 11 * v1351, 0.78),
              sign: fn445(Math.max(22, 0.72 * v1352), 3 + 10 * v1351, 0.76),
              wallBaseLight: v1353,
              wallSat: v1352.toFixed(0),
              wallAlpha: v1354.toFixed(2),
              wallCache: new Array(29),
            };
          })(obj49)),
          (obj49.inkPalette = (function (arg910) {
            let baseB2 = arg910.baseB,
              bh2 = arg910.bh,
              bs = arg910.bs,
              v1355 = arg910.localZone && "observation" === zone,
              v1356 = arg910.localZone && "balcony" === zone,
              v1357 = v1355 || v1356,
              v1358 = v1357 ? 292 : (bh2 + 35) % 360;
            return {
              localEdge:
                "hsl(" + (v1357 ? 188 : bh2) + ",70%," + (44 + 30 * baseB2).toFixed(0) + "%)",
              localBand: "hsl(" + bh2 + ",42%," + (38 + 28 * baseB2).toFixed(0) + "%)",
              localLight: "hsl(" + v1358 + ",68%," + (45 + 28 * baseB2).toFixed(0) + "%)",
              localBase: "hsl(" + bh2 + ",30%," + (21 + 24 * baseB2).toFixed(0) + "%)",
              storefrontCurb: "hsl(" + bh2 + ",25%," + (18 + 12 * baseB2).toFixed(0) + "%)",
              storefrontEdge: "hsl(" + bh2 + ",100%," + (46 + 38 * baseB2).toFixed(0) + "%)",
              storefrontSign:
                "hsl(" + arg910.signHue + ",95%," + (56 + 16 * baseB2).toFixed(0) + "%)",
              storefrontLit: "hsl(" + bh2 + ",100%," + (56 + 16 * baseB2).toFixed(0) + "%)",
              storefrontDark: "hsl(" + (bh2 + 6) + ",60%," + (30 + 18 * baseB2).toFixed(0) + "%)",
              edge: "hsl(" + bh2 + ",100%," + (46 + 46 * baseB2).toFixed(0) + "%)",
              litGlass: "hsl(" + bh2 + ",100%," + (66 + 12 * baseB2).toFixed(0) + "%)",
              darkGlass: "hsl(" + bh2 + ",52%," + (29 + 18 * baseB2).toFixed(0) + "%)",
              roof: "hsl(" + (2 === arg910.architecture ? 48 : bh2) + ",100%,70%)",
              beaconBright: "hsl(" + bh2 + ",100%,82%)",
              beaconStem: "hsl(" + bh2 + ",100%,55%)",
              hvac: "hsl(" + bh2 + ",70%," + (34 + 14 * baseB2).toFixed(0) + "%)",
              mullion: "hsl(" + bh2 + ",40%," + (21 + 16 * baseB2).toFixed(0) + "%)",
              wall: "hsl(" + bh2 + "," + bs + "%," + (43 + 29 * baseB2).toFixed(0) + "%)",
              billboardBright:
                "hsl(" + arg910.billboardHue + ",100%," + (58 + 25 * baseB2).toFixed(0) + "%)",
              billboardDot:
                "hsl(" + arg910.billboardHue + ",65%," + (12 + 14 * baseB2).toFixed(0) + "%)",
              billboardMid:
                "hsl(" + arg910.billboardHue + ",65%," + (35 + 22 * baseB2).toFixed(0) + "%)",
            };
          })(obj49)),
          (obj49.facadeHot = (function (arg911, arg912, arg913, arg914, arg915) {
            if (!arg911 || !arg911.descriptor || !arg911.facadeStyle) return null;
            let descriptor5 = arg911.descriptor,
              facadeStyle = arg911.facadeStyle,
              seed = descriptor5.seed,
              v1359 = arg913 % n30;
            v1359 < 0 && (v1359 += n30);
            let v1360 = (v1359 - 1.05) / (n30 - 2.1),
              v1361 = 24 + ((seed >>> 7) % 18),
              arr76 = [(7 * seed) % 360, (11 * seed) % 360, (5 * seed) % 360],
              arr77 = [facadeStyle.accentHue, seed % 360],
              map35 = arr76.map((arg916) => ({
                torso: "hsl(" + arg916 + ",64%," + (33 + 18 * arg912).toFixed(0) + "%)",
                legs: "hsl(" + arg916 + ",48%," + (22 + 14 * arg912).toFixed(0) + "%)",
              })),
              map36 = arr77.map(
                (arg917) => "hsl(" + arg917 + ",52%," + (24 + 15 * arg912).toFixed(0) + "%)",
              );
            return {
              descriptor: descriptor5,
              style: facadeStyle,
              seed: seed,
              u: v1360,
              near: arg915 < 15,
              hero: arg915 < 9,
              verticalFrame: 0 === arg914 || 5 === arg914,
              sign: descriptor5.label.replace(/ /g, ""),
              barStep: arr30[facadeStyle.pattern],
              litThreshold: arr31[facadeStyle.pattern],
              litGlyph: arr32[facadeStyle.pattern],
              darkGlyph: arr33[facadeStyle.pattern],
              p1: 0.22 + 0.017 * (((seed >>> 9) & 7) - 3),
              p2: 0.7 + 0.015 * (((seed >>> 12) & 7) - 3),
              p3: 0.47 + 0.02 * (((seed >>> 15) & 3) - 1),
              displayDepth: (seed >>> 19) & 3,
              topLightSeed: (seed >>> 5) & 3,
              glassSeed: 7 & seed,
              diagSeed: (seed >>> 4) & 7,
              palette: {
                frame:
                  "hsl(" + facadeStyle.frameHue + ",34%," + (18 + 22 * arg912).toFixed(0) + "%)",
                reveal:
                  "hsl(" + facadeStyle.frameHue + ",28%," + (12 + 16 * arg912).toFixed(0) + "%)",
                bg: "hsl(" + facadeStyle.glassHue + ",26%," + (7 + 10 * arg912).toFixed(0) + "%)",
                back:
                  "hsl(" + facadeStyle.glassHue + ",34%," + (10 + 12 * arg912).toFixed(0) + "%)",
                backLit:
                  "hsl(" + facadeStyle.lightHue + ",82%," + (40 + 18 * arg912).toFixed(0) + "%)",
                furn:
                  "hsl(" + facadeStyle.frameHue + ",26%," + (20 + 18 * arg912).toFixed(0) + "%)",
                furnHi:
                  "hsl(" + facadeStyle.frameHue + ",34%," + (28 + 20 * arg912).toFixed(0) + "%)",
                accent:
                  "hsl(" + facadeStyle.accentHue + ",76%," + (35 + 20 * arg912).toFixed(0) + "%)",
                glow:
                  "hsl(" + facadeStyle.lightHue + ",92%," + (49 + 20 * arg912).toFixed(0) + "%)",
                floor:
                  "hsl(" + facadeStyle.frameHue + ",16%," + (10 + 10 * arg912).toFixed(0) + "%)",
                floorHi:
                  "hsl(" + facadeStyle.frameHue + ",22%," + (15 + 12 * arg912).toFixed(0) + "%)",
                glass:
                  "hsl(" + facadeStyle.glassHue + ",58%," + (18 + 18 * arg912).toFixed(0) + "%)",
                skin: "hsl(" + v1361 + ",28%," + (50 + 18 * arg912).toFixed(0) + "%)",
                skinHi: "hsl(" + v1361 + ",30%," + (58 + 16 * arg912).toFixed(0) + "%)",
                facadeCurb:
                  "hsl(" + facadeStyle.frameHue + ",38%," + (30 + 22 * arg912).toFixed(0) + "%)",
                facadeSign:
                  "hsl(" + facadeStyle.accentHue + ",90%," + (54 + 22 * arg912).toFixed(0) + "%)",
                facadeFrame:
                  "hsl(" + facadeStyle.frameHue + ",62%," + (38 + 30 * arg912).toFixed(0) + "%)",
                facadeLit:
                  "hsl(" + facadeStyle.lightHue + ",82%," + (46 + 25 * arg912).toFixed(0) + "%)",
                facadeDark:
                  "hsl(" + facadeStyle.glassHue + ",58%," + (15 + 22 * arg912).toFixed(0) + "%)",
                entranceAccent:
                  "hsl(" + facadeStyle.accentHue + ",78%," + (38 + 24 * arg912).toFixed(0) + "%)",
                entranceDark:
                  "hsl(" + facadeStyle.glassHue + ",62%," + (10 + 18 * arg912).toFixed(0) + "%)",
              },
              standing: map35,
              backBodies: map36,
            };
          })(v1343, v1329, v1324, v1328, arg894))),
      obj49
    );
  }
  function fn280(arg918, arg919, arg920) {
    if ("intro_room" === zone) {
      let max96 = Math.max(0.15, Math.min(1, 1 - arg920.perp / 70)),
        v1369 = n14 + arg920.perp * float32Array18[arg919],
        v1370 = 0 === arg920.side ? 1.05 : 0,
        v1371 = v1369 < 1.58,
        v1372 = Math.abs(v1369 - 1.58) < 0.075,
        v1373 = Math.abs(v1369 - 3.28) < 0.055,
        v1374 = ((arg920.wallPos % 2.35) + 2.35) % 2.35,
        v1375 = (v1371 ? 7 : 8.5) + max96 * (v1371 ? 3 : 3.9) + v1370;
      return (
        v1371 && v1374 > 0.22 && v1374 < 2.13 && v1369 > 0.28 && v1369 < 1.4 && (v1375 += 0.45),
        v1371 && (v1374 < 0.065 || v1374 > 2.285) && (v1375 += 1.05),
        v1372 && (v1375 += 2.05),
        v1373 && (v1375 += 1.25),
        void fn263(
          arg918,
          arg919,
          "hsl(" +
            (v1371 ? 30 : 35) +
            "," +
            (v1371 ? 13 : 8) +
            "%," +
            Math.max(5.2, v1375).toFixed(1) +
            "%)",
        )
      );
    }
    let v1362 = arg920.localFast || fn255(arg920),
      max95 = Math.max(arg920.perpOverProjX, arg920.perp * float32Array19[arg919]),
      n360 = 0,
      n361 = 1;
    max95 >= 1 &&
      (max95 < 2
        ? ((n360 = 1), (n361 = 2))
        : max95 < 4
          ? ((n360 = 2), (n361 = 4))
          : max95 < 8
            ? ((n360 = 3), (n361 = 8))
            : max95 < 16
              ? ((n360 = 4), (n361 = 16))
              : ((n360 = 5), (n361 = 32)));
    let v1363,
      v1364,
      v1365 = v1362.stableCols[n360],
      floor66 = Math.floor((v1362.eyeTex + v1362.perpTex * float32Array18[arg919]) / n361),
      v1366 = ((v1365 % 6) + 6) % 6,
      v1367 = v1366 % 3,
      v1368 = ((floor66 % 5) + 5) % 5;
    if (glyphsEnabled) {
      let v1376;
      if (arg920.edgeV) v1376 = v1362.backing.seam;
      else if (1 === v1367) v1376 = v1362.backing.mullion;
      else {
        let v1377 = ((floor66 % 4) + 4) % 4 == 0 ? 1 : 0,
          v1378 = (((floor66 + arg920.bayerSeedY) & 7) << 3) | ((v1365 + arg920.bayerSeedX) & 7);
        v1376 = v1362.backing.wallByPattern[((1 & v1366) << 7) | (v1377 << 6) | v1378];
      }
      fn263(arg918, arg919, v1376);
    }
    (arg920.edgeV
      ? ((v1363 = "|"), (v1364 = v1362.ink.edge))
      : 0 === v1368
        ? ((v1363 = "="), (v1364 = v1362.ink.band))
        : 1 === v1367 && arg920.w0 > 0.64
          ? ((v1363 = "0"), (v1364 = v1362.ink.light))
          : ((v1363 = 1 === v1367 ? ":" : "#"), (v1364 = v1362.ink.base)),
      fn264(arg918, arg919, v1363, v1364));
  }
  function fn281(arg921) {
    return (
      "LEGACY" === arg921 || "CORE" === arg921 || "COMMERCIAL" === arg921 || "MIXED" === arg921
    );
  }
  function fn282(arg922, arg923, arg924, arg925, arg926) {
    let districtType = arg924.districtType,
      v1379 = (arg924.districtMorph, arg924.inkPalette),
      v1380 = arg924.r1 - arg923,
      sfTmax = arg924.sfTmax,
      v1381 = ((Math.floor(2 * arg924.wallPos) % 24) + 24) % 24,
      v1382 = ((Math.floor(arg924.wallPos / 3) % 8) + 8) % 8,
      s15 = ":",
      wall = v1379.wall;
    if (0 !== v1380) {
      if (arg924.edgeV && v1380 < 3) fn264(arg922, arg923, "|", v1379.edge);
      else {
        if ("INDUSTRIAL" === districtType) {
          let fn12Result20 = hash2(
              173 * (arg924.buildingPlanId || 1) + 31 * (arg924.face || 0),
              191 * (arg924.buildingPlanId || 1) + 47 * (arg924.face || 0) + arg924.districtMorph,
            ),
            v1383 = fn12Result20 < 0.38,
            v1384 = fn12Result20 > 0.6 && v1381 % 12 < 8,
            v1385 = v1381 % 12 >= 9;
          if (v1380 === sfTmax && sfTmax >= 3 && fn12Result20 > 0.28) {
            let arr78 = ["T7", "B3", "LOAD", "UNIT", "WORKS"],
              v1386 =
                arr78[(arg924.buildingPlanId + arg924.districtMorph + arg924.side) % arr78.length];
            ((s15 = v1386[v1381 % v1386.length]), (wall = v1379.storefrontSign));
          } else
            v1384
              ? ((s15 = v1380 % 2 == 0 ? "=" : v1381 % 6 == 0 ? "|" : "#"),
                (wall = v1380 % 2 == 0 ? v1379.mullion : v1379.wall))
              : !v1383 && v1385
                ? ((s15 = v1380 < 0.72 * sfTmax ? "|" : "#"), (wall = v1379.edge))
                : v1383
                  ? ((s15 = v1381 % 6 == 0 ? "|" : v1380 % 4 == 0 ? "=" : "#"),
                    (wall = v1381 % 6 == 0 || v1380 % 4 == 0 ? v1379.mullion : v1379.wall))
                  : ((s15 = v1380 % 3 == 0 ? "#" : ":"), (wall = v1379.wall));
        } else if ("RESIDENTIAL" === districtType) {
          let v1387 = (v1382 + 2) % 4 == 0 || v1382 % 4 == 1;
          v1382 === (arg924.buildingPlanId + arg924.districtMorph) % 8 &&
          v1380 < Math.max(2, 0.72 * sfTmax)
            ? ((s15 = 1 === v1380 ? "_" : v1380 > 0.52 * sfTmax ? "D" : "|"), (wall = v1379.edge))
            : v1387 && v1380 > 1 && v1380 < 0.76 * sfTmax
              ? ((s15 = arg925 < arg924.litP ? "0" : "[]"[(v1381 + v1380) & 1]),
                (wall = arg925 < arg924.litP ? v1379.litGlass : v1379.darkGlass))
              : ((s15 = v1380 % 3 == 0 ? "=" : arg925 > 0.68 ? "." : ":"),
                (wall = v1380 % 3 == 0 ? v1379.mullion : v1379.wall));
        } else if ("OLD_TOWN" === districtType) {
          let v1388 =
            hash2(31 * (arg924.buildingPlanId || 1) + v1382, 7 * arg924.surfaceZ + v1382) > 0.48;
          v1388 && v1380 < 0.78 * sfTmax
            ? ((s15 = v1382 % 3 == 0 ? "|" : arg925 < 0.42 ? "0" : ":"),
              (wall =
                v1382 % 3 == 0
                  ? v1379.edge
                  : arg925 < 0.42
                    ? v1379.storefrontLit
                    : v1379.storefrontDark))
            : !v1388 && v1382 % 3 == 1 && v1380 < 0.7 * sfTmax
              ? ((s15 = v1380 > 0.46 * sfTmax ? "D" : "|"), (wall = v1379.edge))
              : ((s15 = v1380 % 3 == 0 ? "=" : arg925 > 0.62 ? "." : "#"),
                (wall = v1380 % 3 == 0 ? v1379.mullion : v1379.wall));
        } else
          "TOWER_ESTATE" === districtType
            ? v1381 % 6 == 0
              ? ((s15 = "|"), (wall = v1379.edge))
              : v1380 % 3 == 0
                ? ((s15 = "="), (wall = v1379.mullion))
                : (v1381 % 6 == 2 || v1381 % 6 == 3) && v1380 > 1 && v1380 < 0.7 * sfTmax
                  ? ((s15 = arg925 < arg924.litP ? "0" : ":"),
                    (wall = arg925 < arg924.litP ? v1379.litGlass : v1379.darkGlass))
                  : ((s15 = "#"), (wall = v1379.wall))
            : "PARKLAND" === districtType
              ? v1381 % 8 >= 2 && v1381 % 8 <= 5 && v1380 > 1 && v1380 < 0.72 * sfTmax
                ? ((s15 = arg925 < arg924.litP ? "0" : ":"),
                  (wall = arg925 < arg924.litP ? v1379.litGlass : v1379.darkGlass))
                : ((s15 = v1380 % 3 == 0 ? "=" : "."),
                  (wall = v1380 % 3 == 0 ? v1379.mullion : v1379.wall))
              : v1380 === sfTmax && sfTmax >= 3
                ? ((s15 = "$@%&"[(4 * arg925) | 0]), (wall = v1379.storefrontSign))
                : arg925 < 0.12 + 0.5 * arg924.litP
                  ? ((s15 = "0"), (wall = v1379.storefrontLit))
                  : ((s15 = ":"), (wall = v1379.storefrontDark));
        fn264(arg922, arg923, s15, wall);
      }
    } else fn264(arg922, arg923, "_", v1379.storefrontCurb);
  }
  function fn283(arg927, arg928, arg929, arg930 = false) {
    if ("intro_room" === zone && !arg930) {
      let max97 = Math.max(0.15, Math.min(1, 1 - arg929.perp / 70)),
        v1406 = 0 === arg929.side ? 1.4 : 0,
        v1407 = (arg928 - arg929.r0) / Math.max(1, arg929.r1 - arg929.r0);
      return void fn263(
        arg927,
        arg928,
        "hsl(34,8%," +
          (
            7.8 +
            4.1 * max97 +
            v1406 -
            0.95 * v1407 +
            (Math.abs(v1407 - 0.62) < 0.045 ? 1.1 : 0) +
            (Math.abs(((1.15 * arg929.wallPos) % 2.7) - 1.35) < 0.09 ? 0.7 : 0)
          ).toFixed(1) +
          "%)",
      );
    }
    if (arg929.localZone) return void fn280(arg927, arg928, arg929);
    let {
        h: v1389,
        r0: v1390,
        r1: v1391,
        edgeV: v1392,
        colN: v1393,
        bh: v1394,
        style: v1395,
        litP: v1396,
        sfRow: v1397,
        sfTmax: v1398,
        architecture: v1399,
      } = arg929,
      baseB3 = arg929.baseB;
    if (baseB3 < 0.05) return;
    let v1400,
      v1401,
      v1402 = arg929.projectionEyeY + arg929.perp * float32Array18[arg928],
      fn17Result2 = fn17(Math.max(arg929.perpOverProjX, arg929.perp * float32Array19[arg928])),
      floor67 = Math.floor(arg929.wallTexelPos / fn17Result2),
      floor68 = Math.floor((2 * v1402) / fn17Result2),
      v1403 = ((floor68 % 4) + 4) % 4,
      v1404 = ((floor67 % 6) + 6) % 6,
      v1405 =
        float32Array30[
          (((floor68 + arg929.bayerSeedY) & 7) << 3) | ((floor67 + arg929.bayerSeedX) & 7)
        ],
      inkPalette = arg929.inkPalette;
    if (arg929.entranceRecess && arg928 >= v1397)
      return (
        glyphsEnabled && fn263(arg927, arg928, arg929.backingPalette.storefront),
        void (function (arg931, arg932, arg933, arg934) {
          let facadeHot = arg933.facadeHot;
          if (!facadeHot) return;
          let verticalFrame = facadeHot.verticalFrame,
            v1408 = (arg933.r1 - arg932) % 4 == 0;
          fn264(
            arg931,
            arg932,
            verticalFrame
              ? 2 === facadeHot.style.pattern
                ? "["
                : "|"
              : v1408
                ? 5 === facadeHot.style.pattern
                  ? "#"
                  : "="
                : (arg934 + arg933.colN) & 1
                  ? ":"
                  : "#",
            verticalFrame || v1408
              ? facadeHot.palette.entranceAccent
              : facadeHot.palette.entranceDark,
          );
        })(arg927, arg928, arg929, floor68)
      );
    if (arg929.accessibleFacade && arg928 >= v1397)
      return (
        glyphsEnabled && fn263(arg927, arg928, arg929.backingPalette.storefront),
        void (fn281(arg929.districtType) || "OLD_TOWN" === arg929.districtType
          ? fn286(arg927, arg928, arg929, v1405, floor68)
          : fn282(arg927, arg928, arg929, v1405))
      );
    if (arg929.hasBillboard && arg928 >= arg929.signTop && arg928 <= arg929.signBottom)
      return (
        glyphsEnabled && fn263(arg927, arg928, arg929.backingPalette.sign),
        void (function (arg935, arg936, arg937) {
          let v1409,
            v1410 = arg937.signBottom - arg937.signTop + 1,
            min26 = Math.min(6, ((7 * (arg936 - arg937.signTop)) / v1410) | 0),
            min27 = Math.min(16, (17 * arg937.signU) | 0),
            flag29 = false;
          (0 === min26 || 6 === min26
            ? (v1409 = 0 === min27 || 16 === min27 ? "+" : "=")
            : 0 === min27 || 16 === min27
              ? (v1409 = "|")
              : ((flag29 = "#" === arg937.billboardGrid[min26 - 1][min27 - 1]),
                (v1409 = flag29
                  ? float32Array30[((7 & min26) << 3) | (7 & min27)] > 0.5
                    ? "#"
                    : "@"
                  : ".")),
            arg937.signBroken &&
              hash2(min27 + ((12 * n70) | 0), min26 + ((100 * arg937.signSeed) | 0)) > 0.58 &&
              ((v1409 = "XZ%8?+"[(6 * hash2(7 * min27, 11 * min26 + 5 * n70)) | 0]),
              (flag29 = true)),
            fn264(
              arg935,
              arg936,
              v1409,
              flag29
                ? arg937.inkPalette.billboardBright
                : "." === v1409
                  ? arg937.inkPalette.billboardDot
                  : arg937.inkPalette.billboardMid,
            ));
        })(arg927, arg928, arg929)
      );
    if (arg928 > v1390 && arg928 >= v1397 && arg929.hasBuildingPlan)
      return (
        glyphsEnabled && fn263(arg927, arg928, arg929.backingPalette.storefront),
        void (fn281(arg929.districtType)
          ? fn286(arg927, arg928, arg929, v1405, floor68)
          : fn282(arg927, arg928, arg929, v1405))
      );
    if (arg928 > v1390 && arg928 >= v1397) {
      glyphsEnabled && fn263(arg927, arg928, arg929.backingPalette.storefront);
      let v1411 = v1391 - arg928;
      0 === v1411
        ? ((v1400 = "_"), (v1401 = inkPalette.storefrontCurb))
        : v1392 && v1411 < 3
          ? ((v1400 = "|"), (v1401 = inkPalette.storefrontEdge))
          : v1411 === v1398 && v1398 >= 3
            ? ((v1400 = "$@%&"[(4 * v1405) | 0]), (v1401 = inkPalette.storefrontSign))
            : v1405 < 0.12 + 0.5 * v1396
              ? ((v1400 = "0"), (v1401 = inkPalette.storefrontLit))
              : ((v1400 = ":"), (v1401 = inkPalette.storefrontDark));
    } else {
      if (
        !v1399 &&
        !fn281(arg929.districtType) &&
        (function (arg938, arg939, arg940, arg941, arg942, arg943, arg944, arg945, arg946 = false) {
          let districtType2 = arg940.districtType,
            districtMorph = arg940.districtMorph,
            inkPalette2 = arg940.inkPalette,
            baseB4 = arg940.baseB,
            h = arg940.h,
            v1412 = arg939 === arg940.r0 && arg940.r0 > 0 && h >= 3,
            flag31 = false,
            s16 = ":",
            wall2 = inkPalette2.wall,
            sWall = "wall";
          if ("INDUSTRIAL" === districtType2) {
            let fn12Result21 = hash2(
                173 * (arg940.buildingPlanId || 1) + 31 * (arg940.face || 0),
                191 * (arg940.buildingPlanId || 1) + 47 * (arg940.face || 0) + districtMorph,
              ),
              v1413 = fn12Result21 < 0.42;
            ((flag31 =
              !v1413 &&
              h >= 4 &&
              1 === arg944 &&
              arg943 % 3 != 0 &&
              arg945 < (fn12Result21 < 0.82 ? 0.31 : 0.48)),
              v1412
                ? ((s16 = 0 === districtMorph || 1 === districtMorph ? "^" : "="),
                  (wall2 = inkPalette2.roof))
                : arg940.edgeV && arg939 < arg940.r1
                  ? ((s16 = "|"), (wall2 = inkPalette2.edge), (sWall = "seam"))
                  : flag31
                    ? ((s16 = arg945 < arg940.litP ? "0" : "-"),
                      (wall2 = arg945 < arg940.litP ? inkPalette2.litGlass : inkPalette2.darkGlass),
                      (sWall = arg945 < arg940.litP ? "litglass" : "glass"))
                    : 0 === arg943 || 3 === arg943
                      ? ((s16 = "|"), (wall2 = inkPalette2.mullion), (sWall = "mullion"))
                      : 0 === arg944
                        ? ((s16 = "="), (wall2 = inkPalette2.mullion))
                        : v1413
                          ? ((s16 = arg945 > 0.76 ? "#" : 1 & arg943 ? "|" : ":"),
                            (wall2 = inkPalette2.wall))
                          : ((s16 = arg945 > 0.78 ? "#" : arg945 > 0.38 ? "|" : ":"),
                            (wall2 = inkPalette2.wall)));
          } else if ("RESIDENTIAL" === districtType2) {
            let v1414 = 3 === districtMorph || 1 === districtMorph || 2 === districtMorph;
            ((flag31 = h >= 4 && (1 === arg943 || 4 === arg943) && 1 === arg944),
              v1412
                ? ((s16 = "^"), (wall2 = inkPalette2.roof))
                : arg940.edgeV && arg939 < arg940.r1
                  ? ((s16 = "|"), (wall2 = inkPalette2.edge), (sWall = "seam"))
                  : flag31
                    ? ((s16 = arg945 < arg940.litP ? "0" : v1414 ? "[" : ":"),
                      (wall2 = arg945 < arg940.litP ? inkPalette2.litGlass : inkPalette2.darkGlass),
                      (sWall = arg945 < arg940.litP ? "litglass" : "glass"))
                    : !v1414 || 2 !== arg944 || (1 !== arg943 && 4 !== arg943)
                      ? 0 === arg944 && v1414
                        ? ((s16 = "-"), (wall2 = inkPalette2.mullion))
                        : ((s16 = arg945 > 0.72 ? "." : arg945 > 0.34 ? ":" : "#"),
                          (wall2 = inkPalette2.wall))
                      : ((s16 = "="), (wall2 = inkPalette2.mullion)),
              v1412 &&
                1 === arg943 &&
                hash2(7 * arg940.surfaceX, 11 * arg940.surfaceZ) > 0.76 &&
                arg940.r0 >= 1 &&
                fn264(arg938, arg940.r0 - 1, "H", inkPalette2.hvac));
          } else if ("OLD_TOWN" === districtType2)
            ((flag31 = h >= 4 && (1 === arg943 || 4 === arg943) && 1 === arg944 && arg945 < 0.86),
              v1412
                ? ((s16 = "^"), (wall2 = inkPalette2.roof))
                : arg940.edgeV && arg939 < arg940.r1
                  ? ((s16 = "|"), (wall2 = inkPalette2.edge), (sWall = "seam"))
                  : flag31
                    ? ((s16 = arg945 < arg940.litP ? "0" : ":"),
                      (wall2 = arg945 < arg940.litP ? inkPalette2.litGlass : inkPalette2.darkGlass),
                      (sWall = arg945 < arg940.litP ? "litglass" : "glass"))
                    : 0 === arg944
                      ? ((s16 = "="), (wall2 = inkPalette2.mullion))
                      : ((s16 = arg945 > 0.68 ? "#" : arg945 > 0.28 ? ":" : "."),
                        (wall2 = inkPalette2.wall)),
              v1412 &&
                4 === arg943 &&
                hash2(13 * arg940.surfaceX, 17 * arg940.surfaceZ) > 0.7 &&
                arg940.r0 >= 1 &&
                fn264(arg938, arg940.r0 - 1, "|", inkPalette2.hvac));
          else if ("TOWER_ESTATE" === districtType2)
            ((flag31 = h >= 4 && (1 === arg943 || 4 === arg943) && (1 === arg944 || 2 === arg944)),
              v1412
                ? ((s16 = "="), (wall2 = inkPalette2.roof))
                : arg940.edgeV && arg939 < arg940.r1
                  ? ((s16 = "|"), (wall2 = inkPalette2.edge), (sWall = "seam"))
                  : flag31
                    ? ((s16 = arg945 < arg940.litP ? "0" : ":"),
                      (wall2 = arg945 < arg940.litP ? inkPalette2.litGlass : inkPalette2.darkGlass),
                      (sWall = arg945 < arg940.litP ? "litglass" : "glass"))
                    : 0 === arg944 || 0 === arg943
                      ? ((s16 = 0 === arg944 ? "=" : "|"),
                        (wall2 = inkPalette2.mullion),
                        (sWall = "mullion"))
                      : ((s16 = arg945 > 0.65 ? "." : "#"), (wall2 = inkPalette2.wall)));
          else {
            if ("PARKLAND" !== districtType2) return false;
            ((flag31 =
              h >= 4 &&
              (1 === arg943 || 2 === arg943 || 4 === arg943) &&
              1 === arg944 &&
              arg945 < 0.72),
              v1412
                ? ((s16 = "-"), (wall2 = inkPalette2.roof))
                : arg940.edgeV && arg939 < arg940.r1
                  ? ((s16 = "|"), (wall2 = inkPalette2.edge), (sWall = "seam"))
                  : flag31
                    ? ((s16 = arg945 < arg940.litP ? "0" : ":"),
                      (wall2 = arg945 < arg940.litP ? inkPalette2.litGlass : inkPalette2.darkGlass),
                      (sWall = arg945 < arg940.litP ? "litglass" : "glass"))
                    : ((s16 = 0 === arg944 ? "=" : arg945 > 0.58 ? "." : ":"),
                      (wall2 = 0 === arg944 ? inkPalette2.mullion : inkPalette2.wall)));
          }
          return (
            glyphsEnabled &&
              fn263(arg938, arg939, fn256(arg940, baseB4, arg946, sWall, arg943, arg944, arg945)),
            fn264(arg938, arg939, s16, wall2),
            true
          );
        })(arg927, arg928, arg929, 0, 0, v1404, v1403, v1405, arg930)
      )
        return;
      let flag30 = false;
      ((flag30 =
        0 === v1395
          ? v1404 % 3 == 1 && 1 === v1403
          : 1 === v1395
            ? v1404 % 3 == 1 && 1 === v1403 && v1405 < 0.5
            : 2 === v1395
              ? (1 === v1403 || 2 === v1403) && v1404 % 2 == 0
              : v1404 % 2 == 0 && v1405 < 0.7),
        glyphsEnabled &&
          fn263(
            arg927,
            arg928,
            fn256(
              arg929,
              baseB3,
              arg930,
              v1392 && arg928 < v1391
                ? "seam"
                : v1389 >= 4 && flag30
                  ? v1405 < v1396
                    ? "litglass"
                    : "glass"
                  : v1404 % 3 == 1
                    ? "mullion"
                    : "wall",
              v1404,
              v1403,
              v1405,
            ),
          ),
        v1392 && arg928 < v1391
          ? ((v1400 = 1 === v1399 ? (arg929.wallPos % 2 < 1 ? "/" : "\\") : "|"),
            (v1401 = inkPalette.edge))
          : v1389 >= 4 && flag30
            ? v1405 < v1396
              ? ((v1400 = "0"), (v1401 = inkPalette.litGlass))
              : ((v1400 = ":"), (v1401 = inkPalette.darkGlass))
            : arg928 === v1390 && v1390 > 0 && v1389 >= 3
              ? ((v1400 = 1 === v1399 ? "~" : 2 === v1399 ? "^" : 3 === v1399 ? "*" : "="),
                (v1401 = inkPalette.roof),
                3 === v1393 &&
                  v1389 >= 20 &&
                  v1390 >= 2 &&
                  fn264(
                    arg927,
                    v1390 - 2,
                    1 & Math.floor(2 * n70 + 5 * v1405) ? "*" : "^",
                    inkPalette.beaconBright,
                  ),
                3 === v1393 &&
                  v1389 >= 20 &&
                  v1390 >= 1 &&
                  fn264(arg927, v1390 - 1, "|", inkPalette.beaconStem),
                1 === v1393 &&
                  v1389 >= 25 &&
                  v1405 < 0.5 &&
                  v1390 >= 1 &&
                  fn264(arg927, v1390 - 1, "H", inkPalette.hvac))
              : v1404 % 3 == 1
                ? ((v1400 = ":"), (v1401 = inkPalette.mullion))
                : ((v1400 = "@%#&8ZX*+:. "[
                    Math.max(0, Math.min(11, Math.round(11 * (1 - baseB3) + 0.55 * (v1405 - 0.5))))
                  ]),
                  (v1401 = inkPalette.wall)));
    }
    fn264(arg927, arg928, v1400, v1401);
  }
  function fn284(arg947, arg948, arg949, arg950, arg951, arg952, arg953) {
    return (
      !(Math.abs(arg949 - arg951) > 0.028) &&
      (arg950 > 0.64 && arg950 < 0.77
        ? (fn264(arg947, arg948, "O", arg950 > 0.71 ? arg952.skin : arg952.skinHi), true)
        : arg950 > 0.38 && arg950 <= 0.64
          ? (fn264(arg947, arg948, arg950 > 0.5 ? "#" : "H", arg953.torso), true)
          : arg950 > 0.15 && arg950 <= 0.38 && (fn264(arg947, arg948, "|", arg953.legs), true))
    );
  }
  function fn285(arg954, arg955, arg956, arg957, arg958, arg959, arg960, arg961) {
    return (
      !(!arg958 || Math.abs(arg956 - arg959) > 0.023) &&
      (arg957 > 0.57 && arg957 < 0.68
        ? (fn264(arg954, arg955, "o", arg960.skin), true)
        : arg957 > 0.38 && arg957 <= 0.57 && (fn264(arg954, arg955, ":", arg961), true))
    );
  }
  function fn286(arg962, arg963, arg964, arg965, arg966) {
    let facadeHot2 = arg964.facadeHot;
    if (!facadeHot2) return;
    let v1415,
      v1416,
      palette = facadeHot2.palette,
      v1417 = arg964.r1 - arg963;
    if (0 === v1417)
      ((v1415 = 4 === facadeHot2.style.pattern ? "-" : "_"), (v1416 = palette.facadeCurb));
    else if (v1417 === arg964.sfTmax && arg964.sfTmax >= 3)
      ((v1415 = facadeHot2.sign[Math.abs(Math.floor(2 * arg964.wallPos)) % facadeHot2.sign.length]),
        (v1416 = palette.facadeSign));
    else if (facadeHot2.verticalFrame || v1417 % facadeHot2.barStep === 0)
      ((v1415 = facadeHot2.verticalFrame
        ? 2 === facadeHot2.style.pattern
          ? "["
          : 3 === facadeHot2.style.pattern
            ? "{"
            : "|"
        : 5 === facadeHot2.style.pattern
          ? "#"
          : "="),
        (v1416 = palette.facadeFrame));
    else {
      if (
        (function (arg967, arg968, arg969, arg970, arg971) {
          let facadeHot3 = arg969.facadeHot;
          if (!facadeHot3) return false;
          let v1419 = arg969.r1 - arg968;
          if (arg969.perp > 34 || v1419 <= 0 || v1419 >= arg969.sfTmax) return false;
          let u = facadeHot3.u;
          if (u <= 0.035 || u >= 0.965) return false;
          if (fn278(arg967, arg968, arg969, arg970, arg971)) return true;
          let v1420 = (v1419 - 1) / Math.max(1, arg969.sfTmax - 2),
            near = facadeHot3.near,
            hero = facadeHot3.hero,
            descriptor6 = facadeHot3.descriptor,
            palette2 = facadeHot3.palette,
            v1421 = (Math.floor(14 * u) + facadeHot3.topLightSeed) % 2 == 0,
            v1422 = (arg971 + Math.floor(17 * u) + facadeHot3.glassSeed) % 13 == 0,
            v1423 = (3 * arg971 + Math.floor(29 * u) + facadeHot3.diagSeed) % 23 == 0;
          if (u < 0.055 || u > 0.945) return (fn264(arg967, arg968, "|", palette2.frame), true);
          if (v1420 < 0.06)
            return (
              fn264(
                arg967,
                arg968,
                (Math.floor(18 * u) + (1 & facadeHot3.seed)) % 3 == 0 ? "_" : "-",
                1 & Math.floor(18 * u) ? palette2.floor : palette2.floorHi,
              ),
              true
            );
          if (v1420 > 0.92 && v1421) return (fn264(arg967, arg968, "=", palette2.glow), true);
          if (
            (u < 0.11 || u > 0.89) &&
            v1420 > 0.12 &&
            v1420 < 0.9 &&
            near &&
            (arg971 + Math.floor(10 * v1420)) % 4 == 0
          )
            return (fn264(arg967, arg968, ":", palette2.reveal), true);
          if (v1420 > 0.72 && v1420 < 0.88)
            return "arcade" === descriptor6.archetype && Math.floor(9 * u) % 2 == 0
              ? (fn264(arg967, arg968, "M", palette2.accent), true)
              : "office" === descriptor6.archetype && Math.floor(7 * u) % 2 == 0
                ? (fn264(arg967, arg968, "[", palette2.backLit), true)
                : (Math.floor(6 * u) + facadeHot3.displayDepth) % 3 == 0
                  ? (fn264(arg967, arg968, "=", palette2.backLit), true)
                  : (fn264(arg967, arg968, ".", palette2.back), true);
          switch (descriptor6.archetype) {
            case "retail":
              if ((u < 0.19 || u > 0.81) && v1420 >= 0.22 && v1420 <= 0.7)
                return (
                  fn264(
                    arg967,
                    arg968,
                    Math.floor(10 * v1420) % 3 == 0 ? "0" : "#",
                    Math.floor(10 * v1420) % 2 ? palette2.furn : palette2.furnHi,
                  ),
                  true
                );
              if (u > 0.26 && u < 0.76 && v1420 >= 0.19 && v1420 <= 0.31)
                return (fn264(arg967, arg968, "=", palette2.furnHi), true);
              if (
                near &&
                (Math.abs(u - 0.33) <= 0.045 || Math.abs(u - 0.67) <= 0.045) &&
                v1420 >= 0.32 &&
                v1420 <= 0.53
              )
                return (fn264(arg967, arg968, ":", palette2.furn), true);
              break;
            case "cafe":
              if (
                (Math.abs(u - 0.24) <= 0.055 ||
                  Math.abs(u - 0.52) <= 0.055 ||
                  Math.abs(u - 0.78) <= 0.05) &&
                v1420 >= 0.17 &&
                v1420 <= 0.29
              )
                return (fn264(arg967, arg968, "o", palette2.furnHi), true);
              if (u > 0.71 && v1420 >= 0.18 && v1420 <= 0.58)
                return (
                  fn264(arg967, arg968, Math.floor(14 * v1420) % 3 == 0 ? "#" : "|", palette2.furn),
                  true
                );
              if (near && u > 0.12 && u < 0.46 && v1420 >= 0.17 && v1420 <= 0.24)
                return (fn264(arg967, arg968, "=", palette2.furn), true);
              break;
            case "office":
              if (v1420 >= 0.17 && v1420 <= 0.28 && u > 0.12 && u < 0.88)
                return (fn264(arg967, arg968, "=", palette2.furn), true);
              if (
                (Math.abs(u - 0.22) <= 0.05 ||
                  Math.abs(u - 0.46) <= 0.05 ||
                  Math.abs(u - 0.7) <= 0.05) &&
                v1420 >= 0.31 &&
                v1420 <= 0.46
              )
                return (fn264(arg967, arg968, "[", palette2.backLit), true);
              if (
                (Math.abs(u - 0.26) <= 0.022 ||
                  Math.abs(u - 0.5) <= 0.022 ||
                  Math.abs(u - 0.74) <= 0.022) &&
                v1420 >= 0.17 &&
                v1420 <= 0.58
              )
                return (fn264(arg967, arg968, "|", palette2.frame), true);
              break;
            case "clinic":
              if (
                (Math.abs(u - 0.3) <= 0.018 || Math.abs(u - 0.58) <= 0.018) &&
                v1420 >= 0.2 &&
                v1420 <= 0.74
              )
                return (fn264(arg967, arg968, "|", palette2.frame), true);
              if (
                ((u > 0.1 && u < 0.26) || (u > 0.38 && u < 0.54) || (u > 0.66 && u < 0.82)) &&
                v1420 >= 0.2 &&
                v1420 <= 0.32
              )
                return (fn264(arg967, arg968, "=", palette2.furnHi), true);
              if (
                near &&
                ((u > 0.13 && u < 0.25) || (u > 0.41 && u < 0.53)) &&
                v1420 >= 0.33 &&
                v1420 <= 0.41
              )
                return (fn264(arg967, arg968, "_", palette2.furn), true);
              break;
            case "workshop":
              if (
                Math.floor(8 * u) % 2 == 0 &&
                v1420 >= 0.2 &&
                v1420 <= 0.76 &&
                Math.abs(((8 * u) % 1) - 0.5) < 0.1
              )
                return (fn264(arg967, arg968, "|", palette2.frame), true);
              if (u > 0.18 && u < 0.82 && v1420 >= 0.17 && v1420 <= 0.29)
                return (fn264(arg967, arg968, "=", palette2.furn), true);
              if ((u < 0.16 || u > 0.84) && v1420 >= 0.3 && v1420 <= 0.62)
                return (fn264(arg967, arg968, "#", palette2.furnHi), true);
              if (near && Math.abs(u - 0.5) <= 0.05 && v1420 >= 0.3 && v1420 <= 0.48)
                return (fn264(arg967, arg968, "+", palette2.accent), true);
              break;
            case "lobby":
              if (u > 0.28 && u < 0.72 && v1420 >= 0.17 && v1420 <= 0.33)
                return (fn264(arg967, arg968, "=", palette2.furnHi), true);
              if (
                (Math.abs(u - 0.16) <= 0.03 || Math.abs(u - 0.84) <= 0.03) &&
                v1420 >= 0.17 &&
                v1420 <= 0.46
              )
                return (fn264(arg967, arg968, v1420 > 0.34 ? "*" : "|", palette2.accent), true);
              if (near && Math.abs(u - 0.5) <= 0.06 && v1420 >= 0.38 && v1420 <= 0.56)
                return (fn264(arg967, arg968, ":", palette2.furn), true);
              break;
            case "laundrette":
              if (
                (Math.abs(u - 0.18) <= 0.05 ||
                  Math.abs(u - 0.34) <= 0.05 ||
                  Math.abs(u - 0.5) <= 0.05 ||
                  Math.abs(u - 0.66) <= 0.05 ||
                  Math.abs(u - 0.82) <= 0.05) &&
                v1420 >= 0.24 &&
                v1420 <= 0.56
              )
                return (
                  fn264(arg967, arg968, Math.abs(v1420 - 0.4) < 0.08 ? "0" : "#", palette2.backLit),
                  true
                );
              if (u > 0.28 && u < 0.72 && v1420 >= 0.17 && v1420 <= 0.25)
                return (fn264(arg967, arg968, "=", palette2.furn), true);
              break;
            case "arcade":
              if (
                (Math.abs(u - 0.18) <= 0.05 ||
                  Math.abs(u - 0.34) <= 0.05 ||
                  Math.abs(u - 0.5) <= 0.05 ||
                  Math.abs(u - 0.66) <= 0.05 ||
                  Math.abs(u - 0.82) <= 0.05) &&
                v1420 >= 0.22 &&
                v1420 <= 0.74
              )
                return (
                  v1420 > 0.6
                    ? fn264(arg967, arg968, "M", palette2.accent)
                    : v1420 > 0.4
                      ? fn264(arg967, arg968, "0", palette2.backLit)
                      : fn264(arg967, arg968, "#", palette2.furn),
                  true
                );
          }
          return !(
            !(
              fn284(arg967, arg968, u, v1420, facadeHot3.p1, palette2, facadeHot3.standing[0]) ||
              fn284(arg967, arg968, u, v1420, facadeHot3.p2, palette2, facadeHot3.standing[1]) ||
              fn284(arg967, arg968, u, v1420, facadeHot3.p3, palette2, facadeHot3.standing[2]) ||
              fn285(
                arg967,
                arg968,
                u,
                v1420,
                near,
                0.5 * (facadeHot3.p1 + facadeHot3.p3),
                palette2,
                facadeHot3.backBodies[0],
              ) ||
              fn285(
                arg967,
                arg968,
                u,
                v1420,
                near,
                0.5 * (facadeHot3.p2 + facadeHot3.p3),
                palette2,
                facadeHot3.backBodies[1],
              )
            ) &&
            (v1420 > 0.07 && v1420 < 0.16
              ? (fn264(
                  arg967,
                  arg968,
                  (Math.floor(10 * u) + facadeHot3.displayDepth) % 2 == 0 ? "_" : ".",
                  (Math.floor(10 * u) + facadeHot3.displayDepth) % 2 == 0
                    ? palette2.floorHi
                    : palette2.floor,
                ),
                0)
              : hero && v1423 && v1420 > 0.18 && v1420 < 0.86
                ? (fn264(arg967, arg968, "/", palette2.glass), 0)
                : v1422 && v1420 > 0.12 && v1420 < 0.9
                  ? (fn264(arg967, arg968, near ? ":" : ".", palette2.glass), 0)
                  : (fn264(arg967, arg968, ".", palette2.bg), 0))
          );
        })(arg962, arg963, arg964, arg965, arg966)
      )
        return;
      let v1418 = arg965 < facadeHot2.litThreshold,
        abs9 = Math.abs(arg966 + arg964.colN);
      ((v1415 = v1418
        ? facadeHot2.litGlyph[abs9 % facadeHot2.litGlyph.length]
        : facadeHot2.darkGlyph[abs9 % facadeHot2.darkGlyph.length]),
        (v1416 = v1418 ? palette.facadeLit : palette.facadeDark));
    }
    fn264(arg962, arg963, v1415, v1416);
  }
  function fn287(arg972) {
    let v1424 = arg972.x - n21,
      v1425 = arg972.z - n22,
      v1426 = v1424 * n24 + v1425 * -n25;
    if (v1426 < 0.2 || v1426 > spriteFarDist) return null;
    let v1427 = v1426 + n23,
      v1428 = v12 + (v19 / v1427) * (v1424 * n25 + v1425 * n24),
      v1429 = float32Array22[Math.max(0, Math.min(cols - 1, 0 | v1428))];
    return v1428 < 0 || v1428 >= cols || (v1429 > 0 && v1429 < v1426)
      ? null
      : {
          depth: v1426,
          projectionDepth: v1427,
          col: v1428,
        };
  }
  function fn288(arg973, arg974, arg975) {
    if (arg973 < 0 || arg973 >= cols || arg974 < 0 || arg974 >= rows) return false;
    let v1430 = float32Array22[arg973],
      v1431 = arg974 * cols + arg973;
    return (
      arg974 >= int16Array15[arg973] &&
      arg974 <= int16Array16[arg973] &&
      !uint8Array15[v1431] &&
      !(v1430 > 0 && arg975 >= v1430) &&
      arg975 < float32Array28[v1431] - 0.015
    );
  }
  function fn289(arg976, arg977, arg978) {
    if (arg976 < 0 || arg976 >= cols || arg977 < 0 || arg977 >= rows) return;
    let v1432 = arg977 * cols + arg976;
    arg978 < float32Array28[v1432] && (float32Array28[v1432] = arg978);
  }
  function fn290(arg979, arg980, arg981, arg982, arg983, arg984 = null) {
    return (
      !!fn288(arg979, arg980, arg981) &&
      (glyphsEnabled && arg984 && fn263(arg979, arg980, arg984),
      fn264(arg979, arg980, arg982, arg983),
      fn289(arg979, arg980, arg981),
      n26++,
      true)
    );
  }
  function fn291(arg985, arg986) {
    let fn287Result = fn287(arg985);
    if (!fn287Result) return false;
    let { depth: v1433, projectionDepth: v1434, col: v1435 } = fn287Result,
      round9 = Math.round(v1435),
      v1436 = 5 === arg986 ? carDims(arg985) : null,
      v1437 = 5 === arg986 ? v1436.height : 1.35,
      max98 = Math.max(0, Math.ceil(fn10(v1437, v1434, v23))),
      min28 = Math.min(rows - 1, Math.floor(fn10(0, v1434, v23))),
      v1438 = 5 === arg986 ? fn74(arg985, n21 - arg985.x, n22 - arg985.z) : null,
      v1439 = 5 === arg986 ? fn73(arg985, v1436, n25, n24) : 0.6,
      v1440 =
        5 === arg986
          ? "end" === v1438.mode
            ? 0.82 * v1436.width
            : "three" === v1438.mode
              ? Math.max(0.88 * v1436.width, 0.92 * v1439)
              : v1439
          : 0.6,
      v1441 =
        5 === arg986
          ? Math.max(
              "motorbike" === v1436.id || "cyclist" === v1436.id ? 0 : 1,
              Math.round((v19 * v1440 * 0.5) / v1434),
            )
          : Math.max(0, Math.round((0.3 * v19) / v1434)),
      max99 = Math.max(0, round9 - v1441),
      min29 = Math.min(cols - 1, round9 + v1441),
      v1442 =
        5 === arg986
          ? "hsl(" +
            arg985.color +
            ",82%," +
            (42 + 25 * Math.max(0, 1 - v1433 * v13)).toFixed(0) +
            "%)"
          : "hsl(" +
            arg985.color +
            ",78%," +
            (38 + 24 * Math.max(0, 1 - v1433 * v13)).toFixed(0) +
            "%)",
      v1443 =
        5 === arg986
          ? "hsl(205,45%," + (24 + 18 * Math.max(0, 1 - v1433 * v13)).toFixed(0) + "%)"
          : v1442,
      v1444 = min28 - max98 + 1,
      v1445 = min29 - max99 + 1;
    if (5 === arg986) {
      let v1449 = v1438,
        v1450 =
          "hsl(" +
          arg985.color +
          ",48%," +
          (9 + 11 * Math.max(0, 1 - v1433 * v13)).toFixed(0) +
          "%)",
        v1451 = "hsl(205,34%," + (7 + 9 * Math.max(0, 1 - v1433 * v13)).toFixed(0) + "%)";
      if ("motorbike" === v1436.id || "cyclist" === v1436.id) {
        if (v1433 <= vehicleVolumeFar && n29 < windowVehicleVolumeMax && v1444 >= 5) {
          let v1455 = sCity2;
          sCity2 = "window";
          let fn335Result = fn335(arg985, v1433, Math.max(0.06, 1 - v1433 * v13));
          if (((sCity2 = v1455), fn335Result)) return (n29++, true);
        }
        let max101 = Math.max(max99, Math.min(min29, round9)),
          v1452 = max98,
          v1453 = min28,
          fn446 = (arg987, arg988, arg989, arg990, arg991 = null) => {
            arg987 < 0 ||
              arg987 >= cols ||
              arg988 < 0 ||
              arg988 >= rows ||
              fn290(arg987, arg988, v1433, arg989, arg990, arg991);
          },
          v1454 = "cyclist" === v1436.id ? 0.64 : 0.68,
          max102 = Math.max(v1452 + 1, Math.min(v1453 - 1, Math.floor(fn10(v1454, v1434, v23))));
        fn446(max101, v1452, "@", "hsl(30,44%,58%)");
        for (let v1456 = v1452 + 1; v1456 <= max102; v1456++)
          fn446(
            max101,
            v1456,
            "cyclist" === v1436.id ? "|" : "#",
            v1442,
            "cyclist" === v1436.id ? null : v1450,
          );
        return (
          max102 + 1 < v1453 && fn446(max101, max102 + 1, "=", v1442, v1450),
          "cyclist" === v1436.id && min29 > max99
            ? (fn446(max99, v1453, "O", "hsl(0,0%,15%)"), fn446(min29, v1453, "O", "hsl(0,0%,15%)"))
            : fn446(max101, v1453, "O", "hsl(0,0%,15%)", "hsl(0,0%,4%)"),
          true
        );
      }
      if (v1433 <= vehicleVolumeFar && n29 < windowVehicleVolumeMax && v1444 >= 5 && v1445 >= 5) {
        let v1457 = sCity2;
        sCity2 = "window";
        let fn335Result2 = fn335(arg985, v1433, Math.max(0.06, 1 - v1433 * v13));
        if (((sCity2 = v1457), fn335Result2)) return (n29++, true);
      }
      let min32 = Math.min(
          min28,
          max98 +
            Math.max(
              0,
              Math.floor(v1444 * ("van" === v1436.id ? 0.34 : "suv" === v1436.id ? 0.28 : 0.22)),
            ),
        ),
        min33 = Math.min(min28, min32 + Math.max(1, Math.floor(0.24 * v1444)));
      for (let v1458 = max98; v1458 <= min28; v1458++)
        for (let v1459 = max99; v1459 <= min29; v1459++) {
          if (!fn288(v1459, v1458, v1433)) continue;
          let v1460 = v1459 === max99 || v1459 === min29,
            v1461 =
              v1458 === min28 &&
              ("side" === v1449.mode
                ? Math.abs(v1459 - (max99 + Math.round(0.2 * (v1445 - 1)))) <=
                    Math.max(0, v1445 >> 5) ||
                  Math.abs(v1459 - (max99 + Math.round(0.8 * (v1445 - 1)))) <=
                    Math.max(0, v1445 >> 5)
                : v1459 <= max99 + Math.max(0, v1445 >> 3) ||
                  v1459 >= min29 - Math.max(0, v1445 >> 3)),
            v1462 = v1461
              ? "o"
              : v1458 <= min32
                ? "taxi" === v1436.id && v1459 === Math.round((max99 + min29) / 2)
                  ? "T"
                  : "-"
                : v1458 <= min33
                  ? v1460
                    ? "|"
                    : ":"
                  : "van" === v1436.id
                    ? "#"
                    : "suv" === v1436.id
                      ? "8"
                      : "=",
            v1463 = v1461 ? "hsl(0,0%,15%)" : v1458 <= min33 && v1458 > min32 ? v1443 : v1442;
          (!v1461 &&
            v1458 === min33 + 1 &&
            v1460 &&
            "side" !== v1449.mode &&
            ((v1462 = "0"), (v1463 = v1449.front ? "hsl(52,90%,68%)" : "hsl(4,86%,55%)")),
            fn290(
              v1459,
              v1458,
              v1433,
              v1462,
              v1463,
              v1461 ? "hsl(0,0%,4%)" : v1458 > min32 && v1458 <= min33 ? v1451 : v1450,
            ));
        }
      return true;
    }
    let min30 = Math.min(min28, max98 + Math.max(0, Math.floor(0.16 * v1444))),
      min31 = Math.min(min28 - 1, max98 + Math.max(1, Math.floor(0.58 * v1444))),
      v1446 = max99 + Math.floor(0.28 * v1445),
      v1447 = min29 - Math.floor(0.28 * v1445),
      max100 = Math.max(max99, Math.min(min29, round9)),
      v1448 = Math.sin(arg985.phase) > 0;
    for (let v1464 = max98; v1464 <= min28; v1464++)
      for (let v1465 = max99; v1465 <= min29; v1465++) {
        if (!fn288(v1465, v1464, v1433)) continue;
        let s17 = " ";
        (v1464 <= min30 && v1465 >= v1446 && v1465 <= v1447
          ? (s17 = "@")
          : v1464 <= min31
            ? (s17 =
                v1465 === max99
                  ? v1448
                    ? "/"
                    : "\\"
                  : v1465 === min29
                    ? v1448
                      ? "\\"
                      : "/"
                    : v1465 >= v1446 && v1465 <= v1447
                      ? "#"
                      : " ")
            : v1465 === v1446
              ? (s17 = v1448 ? "/" : "\\")
              : v1465 === v1447 && (s17 = v1448 ? "\\" : "/"),
          " " !== s17 && fn290(v1465, v1464, v1433, s17, v1442));
      }
    for (let max103 = Math.max(min30 + 1, max98 + 1); max103 <= min31; max103++)
      fn290(max100, max103, v1433, "#", v1442, "hsl(" + arg985.color + ",38%,9%)");
    return true;
  }
  function fn292(arg992) {
    let fn287Result2 = fn287(arg992);
    if (!fn287Result2) return false;
    let { depth: v1466, projectionDepth: v1467, col: v1468 } = fn287Result2,
      round10 = Math.round(v1468),
      max104 = Math.max(0, Math.ceil(fn10(fn308(arg992), v1467, v23))),
      min34 = Math.min(rows - 1, Math.floor(fn10(0, v1467, v23)));
    if (max104 > min34) return false;
    let max105 = Math.max(0.06, 1 - v1466 * v13);
    if (2 === arg992.kind) {
      let max108 = Math.max(1, Math.round((0.65 * v19) / v1467)),
        min35 = Math.min(min34, max104 + Math.max(1, Math.round(0.68 * (min34 - max104))));
      for (let v1473 = max104; v1473 <= min34; v1473++)
        for (let v1474 = round10 - max108; v1474 <= round10 + max108; v1474++) {
          if (!fn288(v1474, v1473, v1466)) continue;
          let v1475 = (v1474 - round10) / max108,
            v1476 = (v1473 - 0.5 * (max104 + min35)) / Math.max(1, 0.5 * (min35 - max104));
          v1473 <= min35 && v1475 * v1475 + v1476 * v1476 <= 1
            ? fn290(
                v1474,
                v1473,
                v1466,
                hash2(v1474 + v1473, 9 * arg992.x) > 0.5 ? "%" : "*",
                "hsl(115,45%," + (20 + 26 * max105).toFixed(0) + "%)",
              )
            : v1473 > min35 &&
              Math.abs(v1474 - round10) <= Math.max(0, max108 >> 2) &&
              fn290(v1474, v1473, v1466, "|", "hsl(28,35%," + (14 + 17 * max105).toFixed(0) + "%)");
        }
      return true;
    }
    if (3 === arg992.kind) {
      for (let v1477 = max104; v1477 <= min34; v1477++)
        fn288(round10, v1477, v1466) &&
          fn290(
            round10,
            v1477,
            v1466,
            v1477 === max104 ? "o" : v1477 === min34 ? "=" : "|",
            v1477 === max104
              ? "hsl(52,95%," + (60 + 16 * max105).toFixed(0) + "%)"
              : "hsl(220,12%," + (28 + 18 * max105).toFixed(0) + "%)",
          );
      return true;
    }
    if (
      (function (arg993, arg994, arg995) {
        if (arg994 > 26) return false;
        let v1478 = null;
        if (
          (arg993.kind === n37 && arg993.trafficSignal
            ? (v1478 = fn337)
            : arg993.kind === n38
              ? (v1478 = fn377)
              : arg993.kind === n42
                ? (v1478 = fn378)
                : arg993.kind === n41
                  ? (v1478 = fn376)
                  : arg993.kind === n39
                    ? (v1478 = fn367)
                    : 9 === arg993.kind
                      ? (v1478 = fn368)
                      : 6 === arg993.kind
                        ? (v1478 = fn372)
                        : 7 === arg993.kind
                          ? (v1478 = fn373)
                          : 8 === arg993.kind
                            ? (v1478 = fn374)
                            : arg993.kind === n53
                              ? (v1478 = fn375)
                              : arg993.kind === n57
                                ? (v1478 = fn357)
                                : arg993.kind === n58
                                  ? (v1478 = fn358)
                                  : arg993.kind === n59
                                    ? (v1478 = fn359)
                                    : arg993.kind === n60 && (v1478 = fn379),
          !v1478)
        )
          return false;
        let v1479 = sCity3;
        sCity3 = "window";
        try {
          v1478(arg993, arg995);
        } finally {
          sCity3 = v1479;
        }
        return true;
      })(arg992, v1466, max105)
    )
      return true;
    if (arg992.kind < 6 || !obj22[arg992.kind]) return false;
    let v1469 = obj22[arg992.kind],
      v1470 = obj25[arg992.kind],
      max106 = Math.max(0, Math.round(((arg992.w * v19) / v1467) * 0.5)),
      v1471 = round10 - max106,
      v1472 = round10 + max106,
      max107 = Math.max(1, v1472 - v1471 + 1),
      fn309Result = fn309(arg992.kind, max105, arg992);
    for (let v1480 = max104; v1480 <= min34; v1480++) {
      let v1481 =
        v1469[
          Math.min(
            v1469.length - 1,
            (((v1480 - max104) * v1469.length) / Math.max(1, min34 - max104 + 1)) | 0,
          )
        ];
      for (let v1482 = v1471; v1482 <= v1472; v1482++) {
        if (!fn288(v1482, v1480, v1466)) continue;
        let v1483 = v1481[Math.min(v1470 - 1, (((v1482 - v1471) * v1470) / max107) | 0)] || " ";
        " " !== v1483 &&
          fn290(
            v1482,
            v1480,
            v1466,
            v1483,
            fn309Result[v1483] || fn309Result.accent || fn309Result.base,
          );
      }
    }
    return true;
  }
  function fn293(arg996, arg997, arg998) {
    if (!flag)
      return void fn264(
        arg996,
        arg997,
        (arg996 + arg997) & 3 ? ":" : ".",
        "hsl(200,34%," + (12 + 16 * arg998.baseB).toFixed(0) + "%)",
      );
    let wallPos = arg998.wallPos,
      v1484 = Math.abs(wallPos / 3 - Math.round(wallPos / 3)) < 0.1;
    if ("balcony" === zone) {
      let v1486 = arg998.r0 + Math.floor(0.82 * (arg998.r1 - arg998.r0));
      if (arg997 >= v1486)
        return (
          (uint8Array15[arg997 * cols + arg996] = 1),
          fn263(arg996, arg997, "hsl(205,44%," + (10 + 12 * arg998.baseB).toFixed(0) + "%)"),
          void fn264(
            arg996,
            arg997,
            arg997 === v1486 ? "=" : (arg996 + arg997) & 1 ? "#" : "8",
            "hsl(188,58%," + (38 + 30 * arg998.baseB).toFixed(0) + "%)",
          )
        );
    } else if (v1484 || arg997 === arg998.r0 || arg997 === arg998.r1)
      return (
        (uint8Array15[arg997 * cols + arg996] = 1),
        void fn264(
          arg996,
          arg997,
          v1484 ? "|" : "=",
          "hsl(188,62%," + (40 + 24 * arg998.baseB).toFixed(0) + "%)",
        )
      );
    if (
      (function (arg999, arg1000) {
        let v1487 = arg1000 * cols + arg999,
          v1488 = uint8Array13[v1487];
        if (0 === v1488) return false;
        let v1489 = uint16Array6[v1487];
        if (2 === v1488)
          return (
            (function (arg1001, arg1002, arg1003, arg1004) {
              let v1491 = int16Array11[arg1003],
                v1492 = int16Array12[arg1003],
                fn24Result29 = worldIndex(v1491, v1492),
                v1493 = n21 + float32Array20[arg1001] * arg1004,
                v1494 = n22 + float32Array21[arg1001] * arg1004,
                max109 = Math.max(0.08, 1 - arg1004 * v13),
                v1495 = uint8Array19[fn24Result29] || 188,
                v1496 =
                  Math.abs(v1493 / 3 - Math.round(v1493 / 3)) < 0.08 ||
                  Math.abs(v1494 / 3 - Math.round(v1494 / 3)) < 0.08,
                fn12Result23 = hash2(
                  Math.floor(2 * v1493) + 13 * int16Array17[fn24Result29],
                  Math.floor(2 * v1494) + 17,
                );
              fn264(
                arg1001,
                arg1002,
                v1496
                  ? "+"
                  : fn12Result23 > 0.965
                    ? "H"
                    : fn12Result23 > 0.86
                      ? "o"
                      : fn12Result23 > 0.44
                        ? "="
                        : ".",
                "hsl(" +
                  v1495 +
                  "," +
                  (v1496 ? 52 : 28) +
                  "%," +
                  (18 + max109 * (v1496 ? 34 : 24)).toFixed(0) +
                  "%)",
              );
            })(arg999, arg1000, v1489, float32Array27[v1487]),
            true
          );
        let v1490 = array[v1489];
        return !!v1490 && (fn283(arg999, arg1000, v1490, true), true);
      })(arg996, arg997) ||
      (function (arg1005, arg1006) {
        let v1497 = -1,
          v1498 = 1 / 0,
          v1499 = uint8Array3[arg1005];
        for (let n362 = 0; n362 < v1499; n362++) {
          let v1503 = arg1005 * n17 + n362;
          arg1006 >= int16Array5[v1503] &&
            arg1006 <= int16Array6[v1503] &&
            float32Array8[v1503] < v1498 &&
            ((v1497 = v1503), (v1498 = float32Array8[v1503]));
        }
        let v1500 = -1,
          v1501 = 1 / 0,
          v1502 = float32Array18[arg1006];
        if (v1502 < -0.00001) {
          let v1504 = uint8Array9[arg1005],
            v1505 = arg1005 * n20;
          for (let n363 = 0; n363 < v1504; n363++) {
            let v1506 = v1505 + n363,
              v1507 = float32Array13[v1506];
            if (v23 <= v1507 + 0.05) continue;
            let v1508 = (v23 - v1507) / -v1502;
            v1508 >= float32Array11[v1506] - 0.04 &&
              v1508 <= float32Array12[v1506] + 0.04 &&
              v1508 < v1501 &&
              ((v1501 = v1508), (v1500 = v1506));
          }
        }
        return v1500 >= 0 && v1501 < v1498 - 0.02
          ? ((function (arg1007, arg1008, arg1009, arg1010) {
              let v1509 = uint16Array3[arg1009] || 188,
                v1510 = uint16Array4[arg1009] || 1,
                fn40Result3 = fn40(arg1010),
                v1511 = recordedOriginX + n21 + float32Array20[arg1007] * arg1010,
                v1512 = recordedOriginZ + n22 + float32Array21[arg1007] * arg1010,
                v1513 =
                  Math.abs(v1511 / 4 - Math.round(v1511 / 4)) < 0.065 ||
                  Math.abs(v1512 / 4 - Math.round(v1512 / 4)) < 0.065,
                fn12Result24 = hash2(
                  Math.floor(0.7 * v1511) + 11 * v1510,
                  Math.floor(0.7 * v1512) + 5 * v1510 + 23,
                );
              (fn263(
                arg1007,
                arg1008,
                "hsl(" + v1509 + ",18%," + fn40Result3.base.toFixed(1) + "%)",
              ),
                fn264(
                  arg1007,
                  arg1008,
                  arg1010 > 330
                    ? fn12Result24 > 0.62
                      ? "."
                      : "·"
                    : v1513
                      ? "+"
                      : fn12Result24 > 0.94
                        ? "H"
                        : fn12Result24 > 0.78
                          ? "o"
                          : fn12Result24 > 0.38
                            ? "="
                            : ".",
                  "hsl(" +
                    v1509 +
                    "," +
                    (v1513 ? 38 : 24) +
                    "%," +
                    (v1513 ? fn40Result3.seam : fn40Result3.ink).toFixed(0) +
                    "%)",
                ));
            })(arg1005, arg1006, v1500, v1501),
            true)
          : v1497 >= 0 && (fn39(arg1005, arg1006, v1497), true);
      })(arg996, arg997)
    )
      return;
    if (arg997 > Math.floor(v11 + v17 * Math.tan(view.pitch)))
      return void (
        (function (arg1011, arg1012) {
          let v1514 = float32Array18[arg1012];
          if (v1514 >= -0.00001) return false;
          let v1515 = v23 / -v1514;
          return (
            !(v1515 < 132) &&
            fn266(
              arg1011,
              arg1012,
              recordedOriginX + n21,
              recordedOriginZ + n22,
              float32Array20[arg1011],
              float32Array21[arg1011],
              v1515,
            )
          );
        })(arg996, arg997) ||
        (function (arg1013, arg1014) {
          let v1516 = float32Array18[arg1014];
          fn268(arg1013, arg1014, 0, 0, 0, true, uint8Array14[arg1014] ? v23 / -v1516 : 1000000000);
        })(arg996, arg997)
      );
    let v1485 = Math.atan(float32Array18[arg997]),
      fn12Result22 = hash2(
        Math.floor(7000 * float32Array20[arg996]) + 9000,
        Math.floor(7000 * (float32Array21[arg996] + v1485)) + 12000,
      );
    fn12Result22 > 0.994 &&
      fn264(
        arg996,
        arg997,
        fn12Result22 > 0.9985 ? "*" : ".",
        "hsl(135,38%," + (15 + 20 * fn12Result22).toFixed(0) + "%)",
      );
  }
  var spriteQueue = [],
    spriteFarDist = 142.5 * quality.spriteFarScale,
    signalFarDist = Math.min(163, spriteFarDist + 10),
    vehicleFarDist = Math.min(163, 162.75 * quality.vehicleFarScale),
    vehicleVolumeFar = quality.vehicleVolumeFar,
    vehicleVolumeMax = quality.vehicleVolumeMax,
    n115 = 0.18,
    n116 = 4,
    n117 = 0,
    n118 = 0,
    spriteGridRadius = spriteFarDist,
    n119 = 1,
    n120 = 0,
    set2 = new Set([6, 9, n37, n38, n39, n40, n43, 17, n46, n47, n48, n49, n50, n51, n52, n54]);
  function queueSprite(entity, fwdX, fwdZ, rightX, rightZ) {
    if (entity.entranceOccluded) return;
    let v1517 = entity.x - view.x,
      v1518 = entity.z - view.z,
      v1519 = (function (arg1020) {
        if (arg1020.kind >= 6) {
          if (arg1020.volume) {
            let v1524 = 1 === arg1020.axis ? arg1020.d : arg1020.w,
              v1525 = 1 === arg1020.axis ? arg1020.w : arg1020.d;
            return 0.5 * Math.hypot(v1524, v1525);
          }
          return 0.5 * (arg1020.w || 1);
        }
        if (2 === arg1020.kind) return 1.5;
        if (3 === arg1020.kind || 4 === arg1020.kind) return 0.35;
        if (5 === arg1020.kind) {
          let fn71Result8 = carDims(arg1020);
          return 0.5 * Math.hypot(fn71Result8.width, fn71Result8.length);
        }
        return 0;
      })(entity),
      v1520 =
        5 === entity.kind ? vehicleFarDist : entity.trafficSignal ? signalFarDist : spriteFarDist;
    if (v1517 * v1517 + v1518 * v1518 > (v1520 + v1519) * (v1520 + v1519)) return;
    let v1521 = v1517 * fwdX + v1518 * fwdZ,
      v1522 = v1517 * rightX + v1518 * rightZ;
    if (v1519) {
      if (v1521 + v1519 < 0.12 || v1521 - v1519 > v1520) return;
      let v1526 = Math.max(0.12, v1521) * tan;
      if (Math.abs(v1522) > v1526 + v1519 * (1 + tan)) return;
    } else {
      if (v1521 < 0.2 || v1521 > v1520) return;
      let v1527 = v12 + v1522 * (v19 / v1521);
      if (v1527 < -16 || v1527 > cols + 16) return;
    }
    let max110 = Math.max(0.2, v1521),
      v1523 = v12 + v1522 * (v19 / max110);
    ((entity._depth = max110), (entity._col = v1523), spriteQueue.push(entity));
  }
  var n121 = 340,
    n122 = 255,
    arr35 = [22, 34, 48, 62],
    arr36 = [28, 41, 56, 70],
    arr37 = [188, 196, 52, 318, 165],
    from8 = Array.from(
      {
        length: 14,
      },
      (arg1021, arg1022) => ({
        id: arg1022,
        x: 0,
        z: 0,
        y: 34,
        hx: 1,
        hz: 0,
        speed: 10,
        length: 2.4,
        width: 0.9,
        hue: 190,
        cycle: 0,
      }),
    ),
    from9 = Array.from(
      {
        length: 22,
      },
      (arg1023, arg1024) => ({
        id: arg1024,
        x: 0,
        z: 0,
        y: 44,
        hx: 1,
        hz: 0,
        speed: 14,
        span: 5.5,
        hue: 196,
        cycle: 0,
      }),
    );
  function fn295(arg1025) {
    let arr79 = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
      [0.7071, 0.7071],
      [-0.7071, 0.7071],
      [0.7071, -0.7071],
      [-0.7071, -0.7071],
    ];
    return arr79[((arg1025 % arr79.length) + arr79.length) % arr79.length];
  }
  function fn296(arg1026, arg1027 = false) {
    arg1026.cycle++;
    let fn3Result6 = toWorldX(view.x),
      fn4Result6 = toWorldZ(view.z),
      sin12 = Math.sin(view.yaw),
      v1528 = -Math.cos(view.yaw),
      fn295Result = fn295(3 * arg1026.id + arg1026.cycle);
    ((arg1026.hx = fn295Result[0]),
      (arg1026.hz = fn295Result[1]),
      (arg1026.y =
        arr35[(3 * arg1026.id + arg1026.cycle) % arr35.length] +
        5 * hash2(71 * arg1026.id + 31 * arg1026.cycle, 19)),
      (arg1026.speed = 7 + 10 * hash2(89 * arg1026.id + 47 * arg1026.cycle, 23)),
      (arg1026.length = 2 + 1.4 * hash2(101 * arg1026.id + 59 * arg1026.cycle, 29)),
      (arg1026.width = 0.72 + 0.42 * hash2(109 * arg1026.id + 67 * arg1026.cycle, 31)),
      (arg1026.hue = arr37[(arg1026.id + 2 * arg1026.cycle) % arr37.length]));
    let v1529,
      v1530 = -arg1026.hz,
      hx2 = arg1026.hx,
      v1531 =
        Math.round((fn3Result6 * v1530 + fn4Result6 * hx2) / n30) * n30 +
        28 * (hash2(127 * arg1026.id + 7, 73 * arg1026.cycle + 3) - 0.5) +
        ((arg1026.id + arg1026.cycle) & 1 ? 1 : -1) *
          (6 + ((5 * arg1026.id + arg1026.cycle) % 3) * 7),
      v1532 = fn3Result6 * arg1026.hx + fn4Result6 * arg1026.hz,
      v1533 = arg1026.hx * sin12 + arg1026.hz * v1528;
    if (arg1027)
      v1529 =
        hash2(137 * arg1026.id + 11, 79 * arg1026.cycle + 5) < 0.72
          ? 70 + 250 * hash2(163 * arg1026.id + 17, 97 * arg1026.cycle + 19)
          : hash2(173 * arg1026.id + 23, 101 * arg1026.cycle + 29) * n122 * 1.4 - 178.5;
    else {
      let fn12Result25 = hash2(149 * arg1026.id + 13, 83 * arg1026.cycle + 7);
      v1529 =
        fn12Result25 < 0.68
          ? 0.24 * n122 + 250 * hash2(181 * arg1026.id + 31, 103 * arg1026.cycle + 37)
          : fn12Result25 < 0.9
            ? -(0.48 * n122 + 92 * hash2(191 * arg1026.id + 41, 107 * arg1026.cycle + 43))
            : (2 * hash2(197 * arg1026.id + 47, 109 * arg1026.cycle + 53) - 1) * n122 * 0.78;
    }
    (v1533 < -0.42 && (v1529 *= 0.62),
      (arg1026.x = arg1026.hx * (v1532 + v1529) + v1530 * v1531),
      (arg1026.z = arg1026.hz * (v1532 + v1529) + hx2 * v1531));
  }
  function fn297(arg1028, arg1029 = false) {
    arg1028.cycle++;
    let fn3Result7 = toWorldX(view.x),
      fn4Result7 = toWorldZ(view.z),
      fn295Result2 = fn295(5 * arg1028.id + 2 * arg1028.cycle);
    ((arg1028.hx = fn295Result2[0]),
      (arg1028.hz = fn295Result2[1]),
      (arg1028.y =
        arr36[(arg1028.id + arg1028.cycle) % arr36.length] +
        8 * hash2(61 * arg1028.id + 17 * arg1028.cycle, 47)),
      (arg1028.speed = 11 + 16 * hash2(79 * arg1028.id + 29 * arg1028.cycle, 59)),
      (arg1028.span = 2.8 + 6.8 * hash2(83 * arg1028.id + 31 * arg1028.cycle, 67)),
      (arg1028.hue = arr37[(2 * arg1028.id + arg1028.cycle) % arr37.length]));
    let v1534,
      v1535 = -arg1028.hz,
      hx3 = arg1028.hx,
      v1536 =
        Math.round((fn3Result7 * v1535 + fn4Result7 * hx3) / n30) * n30 +
        72 * (hash2(97 * arg1028.id + 37 * arg1028.cycle, 71) - 0.5) +
        18 * (((arg1028.id + arg1028.cycle) & 3) - 1.5),
      v1537 = fn3Result7 * arg1028.hx + fn4Result7 * arg1028.hz;
    ((v1534 = arg1029
      ? 684 * hash2(101 * arg1028.id + 41 * arg1028.cycle, 73) - 229.5
      : hash2(107 * arg1028.id + 43 * arg1028.cycle, 79) < 0.8
        ? 127.5 + 342 * hash2(109 * arg1028.id + 47 * arg1028.cycle, 83)
        : -(114.75 + 110 * hash2(113 * arg1028.id + 53 * arg1028.cycle, 89))),
      (arg1028.x = arg1028.hx * (v1537 + v1534) + v1535 * v1536),
      (arg1028.z = arg1028.hz * (v1537 + v1534) + hx3 * v1536));
  }
  for (let v1538 of from8) fn296(v1538, true);
  for (let v1539 of from9) fn297(v1539, true);
  function fn298(arg1030) {
    if ("city" !== zone) return;
    let fn3Result8 = toWorldX(view.x),
      fn4Result8 = toWorldZ(view.z),
      sin13 = Math.sin(view.yaw),
      v1540 = -Math.cos(view.yaw);
    for (let v1541 of from8) {
      ((v1541.x += v1541.hx * v1541.speed * arg1030),
        (v1541.z += v1541.hz * v1541.speed * arg1030));
      let v1542 = v1541.x - fn3Result8,
        v1543 = v1541.z - fn4Result8;
      (v1542 * v1542 + v1543 * v1543 > 99225 || v1542 * sin13 + v1543 * v1540 < -150) &&
        fn296(v1541, false);
    }
    for (let v1544 of from9) {
      ((v1544.x += v1544.hx * v1544.speed * arg1030),
        (v1544.z += v1544.hz * v1544.speed * arg1030));
      let v1545 = v1544.x - fn3Result8,
        v1546 = v1544.z - fn4Result8;
      (v1545 * v1545 + v1546 * v1546 > 129600 || v1545 * sin13 + v1546 * v1540 < -180) &&
        fn297(v1544, false);
    }
  }
  function fn299(arg1031, arg1032, arg1033, arg1034, arg1035, arg1036, arg1037) {
    let v1547 = arg1033 - recordedOriginZ,
      v1548 = arg1031 - recordedOriginX - view.x,
      v1549 = v1547 - view.z,
      v1550 = v1548 * arg1034 + v1549 * arg1035;
    return v1550 <= 0.18
      ? null
      : {
          c: v12 + (v19 / v1550) * (v1548 * arg1036 + v1549 * arg1037),
          r: fn10(arg1032, v1550, fn191()),
          d: v1550,
        };
  }
  function fn300(arg1038, arg1039, arg1040) {
    if (arg1038 < 0 || arg1038 >= cols || arg1039 < 0 || arg1039 >= rows) return false;
    if (flag17) return float32Array7[arg1039 * cols + arg1038] >= arg1040 - 0.04;
    let v1551 = uint8Array2[arg1038];
    for (let n364 = 0; n364 < v1551; n364++) {
      let v1553 = from2[arg1038][n364];
      if (v1553.perp < arg1040 - 0.04 && arg1039 >= v1553.r0 && arg1039 <= v1553.r1) return false;
    }
    let v1552 = uint8Array3[arg1038];
    for (let n365 = 0; n365 < v1552; n365++) {
      let v1554 = arg1038 * n17 + n365;
      if (
        float32Array8[v1554] < arg1040 - 0.04 &&
        arg1039 >= int16Array5[v1554] &&
        arg1039 <= int16Array6[v1554]
      )
        return false;
    }
    return true;
  }
  function fn301(arg1041, arg1042, arg1043, arg1044, arg1045) {
    fn300((arg1041 = Math.round(arg1041)), (arg1042 = Math.round(arg1042)), arg1043) &&
      fn264(arg1041, arg1042, arg1044, arg1045);
  }
  function fn302(arg1046, arg1047, arg1048, arg1049, arg1050 = 0) {
    if (!arg1046 || !arg1047) return;
    let max111 = Math.max(
      1,
      Math.ceil(Math.max(Math.abs(arg1047.c - arg1046.c), Math.abs(arg1047.r - arg1046.r))),
    );
    for (let n366 = 0; n366 <= max111; n366++) {
      let v1555 = n366 / max111;
      fn301(
        arg1046.c + (arg1047.c - arg1046.c) * v1555,
        arg1046.r + (arg1047.r - arg1046.r) * v1555,
        arg1046.d + (arg1047.d - arg1046.d) * v1555 - arg1050,
        arg1048,
        arg1049,
      );
    }
  }
  function fn303(arg1051, arg1052, arg1053, arg1054 = 0, arg1055 = 0.01) {
    if (!arg1051 || !arg1052) return;
    let max112 = Math.max(
      2,
      Math.ceil(Math.max(Math.abs(arg1052.c - arg1051.c), Math.abs(arg1052.r - arg1051.r))),
    );
    for (let n367 = 1; n367 < max112; n367++) {
      if ((n367 + arg1054) % 3 != 0) continue;
      let v1556 = n367 / max112;
      fn301(
        arg1051.c + (arg1052.c - arg1051.c) * v1556,
        arg1051.r + (arg1052.r - arg1051.r) * v1556,
        arg1051.d + (arg1052.d - arg1051.d) * v1556 - arg1055,
        ".",
        arg1053,
      );
    }
  }
  var float32Array35 = new Float32Array(cols * rows),
    uint32Array = new Uint32Array(cols * rows),
    n123 = 1;
  function fn304(arg1056, arg1057, arg1058, arg1059, arg1060, arg1061 = null, arg1062 = 0) {
    return (
      (arg1056 = Math.round(arg1056)),
      (arg1057 = Math.round(arg1057)),
      (arg1058 -= arg1062),
      !(
        arg1056 < 0 ||
        arg1056 >= cols ||
        arg1057 < 0 ||
        arg1057 >= rows ||
        !fn300(arg1056, arg1057, arg1058) ||
        !(function (arg1063, arg1064, arg1065, arg1066 = 0.018) {
          if (arg1063 < 0 || arg1063 >= cols || arg1064 < 0 || arg1064 >= rows) return false;
          let v1557 = arg1064 * cols + arg1063;
          return uint32Array[v1557] !== n123 || arg1065 < float32Array35[v1557] - arg1066;
        })(arg1056, arg1057, arg1058) ||
        (arg1061 && fn263(arg1056, arg1057, arg1061),
        fn264(arg1056, arg1057, arg1059, arg1060),
        (function (arg1067, arg1068, arg1069) {
          let v1558 = arg1068 * cols + arg1067;
          ((uint32Array[v1558] = n123), (float32Array35[v1558] = arg1069));
        })(arg1056, arg1057, arg1058),
        0)
      )
    );
  }
  function fn305(arg1070, arg1071, arg1072, arg1073, arg1074, arg1075) {
    0 == (n123 = (n123 + 1) >>> 0) && (uint32Array.fill(0), (n123 = 1));
    let v1559 = -arg1070.hz,
      hx4 = arg1070.hx,
      v1560 = Number.isFinite(arg1070.baseY)
        ? arg1070.baseY
        : Math.max(0.18, (arg1070.y || 1.4) - 0.82),
      max113 = Math.max(0.2, 1 - arg1071 / n121),
      v1561 = "hsl(43,96%," + (48 + 25 * max113).toFixed(0) + "%)",
      v1562 = "hsl(48,100%," + (62 + 22 * max113).toFixed(0) + "%)",
      v1563 = ((18 + 18 * max113).toFixed(0), "hsl(42,84%," + (18 + 18 * max113).toFixed(0) + "%)"),
      v1564 = "hsl(42,72%," + (31 + 18 * max113).toFixed(0) + "%)",
      v1565 = "hsl(38,45%," + (10 + 10 * max113).toFixed(0) + "%)",
      v1566 = "hsl(188,80%," + (42 + 28 * max113).toFixed(0) + "%)",
      v1567 = "hsl(202,62%," + (12 + 16 * max113).toFixed(0) + "%)",
      v1568 = "hsl(176,100%," + (53 + 30 * max113).toFixed(0) + "%)",
      v1569 = "hsl(178,88%," + (10 + 12 * max113).toFixed(0) + "%)",
      v1570 = "hsl(338,100%," + (52 + 28 * max113).toFixed(0) + "%)",
      v1571 = "hsl(48,18%," + (7 + 7 * max113).toFixed(0) + "%)",
      fn447 = (arg1076, arg1077, arg1078) => {
        let v1574 = ((arg1079, arg1080, arg1081) => ({
          x: arg1070.x + arg1070.hx * arg1079 + v1559 * arg1080,
          z: arg1070.z + arg1070.hz * arg1079 + hx4 * arg1080,
          y: arg1081,
        }))(arg1076, arg1077, arg1078);
        return fn299(v1574.x, v1574.y, v1574.z, arg1072, arg1073, arg1074, arg1075);
      },
      fn448 = (arg1082, arg1083, arg1084, arg1085) => {
        let filter5 = arg1082
          .map((arg1086) => fn447(arg1086[0], arg1086[1], arg1086[2]))
          .filter(Boolean);
        if (filter5.length !== arg1082.length) return;
        let v1575 = filter5.reduce((arg1087, arg1088) => arg1087 + arg1088.d, 0) / filter5.length;
        !(function (arg1089, arg1090, arg1091, arg1092, arg1093) {
          if (arg1089.some((arg1094) => !arg1094)) return;
          let v1576 = cols,
            v1577 = -1,
            v1578 = rows,
            v1579 = -1;
          for (let v1580 of arg1089)
            ((v1576 = Math.min(v1576, v1580.c)),
              (v1577 = Math.max(v1577, v1580.c)),
              (v1578 = Math.min(v1578, v1580.r)),
              (v1579 = Math.max(v1579, v1580.r)));
          if (
            ((v1576 = Math.max(0, Math.floor(v1576))),
            (v1577 = Math.min(cols - 1, Math.ceil(v1577))),
            (v1578 = Math.max(0, Math.floor(v1578))),
            (v1579 = Math.min(rows - 1, Math.ceil(v1579))),
            !(v1576 > v1577 || v1578 > v1579))
          )
            for (let v1581 = v1578; v1581 <= v1579; v1581++)
              for (let v1582 = v1576; v1582 <= v1577; v1582++)
                fn326(arg1089, v1582 + 0.5, v1581 + 0.5) &&
                  fn304(v1582, v1581, arg1093, arg1090, arg1091, arg1092);
        })(filter5, arg1083, arg1084, arg1085, v1575);
      },
      fn449 = (arg1095, arg1096, arg1097, arg1098, arg1099 = 0.02) => {
        let fn447Result4 = fn447(...arg1095),
          fn447Result5 = fn447(...arg1096);
        if (!fn447Result4 || !fn447Result5) return;
        let max114 = Math.max(
          1,
          Math.ceil(
            Math.max(
              Math.abs(fn447Result5.c - fn447Result4.c),
              Math.abs(fn447Result5.r - fn447Result4.r),
            ),
          ),
        );
        for (let n368 = 0; n368 <= max114; n368++) {
          let v1583 = n368 / max114;
          fn304(
            fn447Result4.c + (fn447Result5.c - fn447Result4.c) * v1583,
            fn447Result4.r + (fn447Result5.r - fn447Result4.r) * v1583,
            fn447Result4.d + (fn447Result5.d - fn447Result4.d) * v1583,
            arg1097,
            arg1098,
            null,
            arg1099,
          );
        }
      },
      fn450 = (
        arg1100,
        arg1101,
        arg1102,
        arg1103,
        arg1104,
        arg1105,
        arg1106,
        arg1107,
        arg1108 = "#",
      ) => {
        let arr88 = [arg1100, arg1102, arg1104],
          arr89 = [arg1101, arg1102, arg1104],
          arr90 = [arg1101, arg1103, arg1104],
          arr91 = [arg1100, arg1103, arg1104],
          arr92 = [arg1100, arg1102, arg1105],
          arr93 = [arg1101, arg1102, arg1105],
          arr94 = [arg1101, arg1103, arg1105],
          arr95 = [arg1100, arg1103, arg1105],
          arr96 = [
            [arr88, arr89, arr93, arr92],
            [arr91, arr95, arr94, arr90],
            [arr89, arr90, arr94, arr93],
            [arr88, arr92, arr95, arr91],
            [arr92, arr93, arr94, arr95],
            [arr88, arr91, arr90, arr89],
          ],
          arr97 = [];
        for (let v1584 of arr96) {
          let map37 = v1584.map((arg1109) => fn447(...arg1109));
          map37.every(Boolean) &&
            arr97.push({
              face: v1584,
              d: map37.reduce((arg1110, arg1111) => arg1110 + arg1111.d, 0) / map37.length,
            });
        }
        arr97.sort((arg1112, arg1113) => arg1113.d - arg1112.d);
        for (let v1585 of arr97) fn448(v1585.face, arg1108, arg1106, arg1107);
      };
    (fn450(-2.3, 2.18, -1.03, 1.03, v1560 + 0.3, v1560 + 1.05, v1561, v1563, "#"),
      fn450(2.18, 2.58, -0.78, 0.78, v1560 + 0.42, v1560 + 0.91, v1562, v1563, "="));
    let v1572 = v1560 + 1,
      v1573 = v1560 + 1.86,
      arr80 = [-1.48, -0.91, v1572],
      arr81 = [1.48, -0.91, v1572],
      arr82 = [1.48, 0.91, v1572],
      arr83 = [-1.48, 0.91, v1572],
      arr84 = [-1.1, -0.76, v1573],
      arr85 = [0.72, -0.76, v1573],
      arr86 = [0.72, 0.76, v1573],
      arr87 = [-1.1, 0.76, v1573];
    (fn448([arr80, arr81, arr85, arr84], ":", v1566, v1567),
      fn448([arr83, arr87, arr86, arr82], ":", v1566, v1567),
      fn448([arr81, arr82, arr86, arr85], "0", v1566, v1567),
      fn448([arr80, arr84, arr87, arr83], ":", v1566, v1567),
      fn448([arr84, arr85, arr86, arr87], "-", v1562, v1571),
      fn449([1.48, -0.91, v1572], [0.72, -0.76, v1573], "/", v1562, 0.025),
      fn449([1.48, 0.91, v1572], [0.72, 0.76, v1573], "\\", v1562, 0.025));
    for (let v1586 of [-1.55, 1.55])
      for (let v1587 of [-1.72, 1.72]) {
        (fn450(
          v1586 - 0.52,
          v1586 + 0.52,
          v1587 - 0.46,
          v1587 + 0.46,
          v1560 + 0.35,
          v1560 + 0.9,
          v1564,
          v1565,
          "O",
        ),
          fn449(
            [v1586 - 0.48, v1587 - 0.47, v1560 + 0.54],
            [v1586 + 0.48, v1587 - 0.47, v1560 + 0.54],
            "=",
            v1568,
            0.04,
          ),
          fn449(
            [v1586 - 0.48, v1587 + 0.47, v1560 + 0.54],
            [v1586 + 0.48, v1587 + 0.47, v1560 + 0.54],
            "=",
            v1568,
            0.04,
          ));
        let fn447Result6 = fn447(v1586, v1587, v1560 + 0.5);
        fn447Result6 &&
          fn304(fn447Result6.c, fn447Result6.r, fn447Result6.d, "@", v1568, v1569, 0.05);
      }
    (fn449([-1.75, -0.62, v1560 + 0.27], [1.75, -0.62, v1560 + 0.27], "=", v1568, 0.045),
      fn449([-1.75, 0.62, v1560 + 0.27], [1.75, 0.62, v1560 + 0.27], "=", v1568, 0.045));
    for (let n369 = 0; n369 < 5; n369++) {
      let v1588 = 0.72 * n369 - 1.55,
        v1589 = 1 & n369 ? "." : "#";
      (fn449(
        [v1588, -1.04, v1560 + 0.78],
        [v1588 + 0.34, -1.04, v1560 + 0.78],
        v1589,
        1 & n369 ? v1571 : v1562,
        0.035,
      ),
        fn449(
          [v1588, 1.04, v1560 + 0.78],
          [v1588 + 0.34, 1.04, v1560 + 0.78],
          v1589,
          1 & n369 ? v1571 : v1562,
          0.035,
        ));
    }
    fn450(-0.38, 0.58, -0.58, 0.58, v1560 + 1.9, v1560 + 2.22, v1562, "hsl(45,62%,11%)", "=");
    let fn447Result = fn447(0.1, 0, v1560 + 2.23);
    if (fn447Result)
      for (let [v1590, v1591] of [
        [-2, "T"],
        [-1, "A"],
        [0, "X"],
        [1, "I"],
      ])
        fn304(
          fn447Result.c + v1590,
          fn447Result.r,
          fn447Result.d,
          v1591,
          v1562,
          "hsl(45,55%,10%)",
          0.08,
        );
    for (let v1592 of [-0.62, 0.62]) {
      let fn447Result7 = fn447(2.57, v1592, v1560 + 0.72);
      fn447Result7 && fn304(fn447Result7.c, fn447Result7.r, fn447Result7.d, ">", v1562, null, 0.06);
      let fn447Result8 = fn447(-2.29, v1592, v1560 + 0.72);
      fn447Result8 && fn304(fn447Result8.c, fn447Result8.r, fn447Result8.d, "<", v1570, null, 0.06);
    }
    let fn447Result2 = fn447(-0.25, -2.18, v1560 + 0.77),
      fn447Result3 = fn447(-0.25, 2.18, v1560 + 0.77);
    if (
      (fn447Result2 &&
        fn304(fn447Result2.c, fn447Result2.r, fn447Result2.d, "*", "hsl(135,100%,65%)", null, 0.07),
      fn447Result3 &&
        fn304(fn447Result3.c, fn447Result3.r, fn447Result3.d, "*", "hsl(0,100%,64%)", null, 0.07),
      arg1070.rankBeacon)
    ) {
      let fn299Result = fn299(
        arg1070.rankBeacon.x,
        arg1070.rankBeacon.y,
        arg1070.rankBeacon.z,
        arg1072,
        arg1073,
        arg1074,
        arg1075,
      );
      fn299Result &&
        fn304(
          fn299Result.c,
          fn299Result.r,
          fn299Result.d,
          "T",
          "hsl(48,100%,72%)",
          "hsl(47,62%,12%)",
          0.05,
        );
    }
  }
  var from10 = Array.from(
      {
        length: 420,
      },
      (arg1114, arg1115) => ({
        index: arg1115,
        cycle: 0,
        x: 0,
        y: 0,
        z: 0,
        speed: 0,
      }),
    ),
    v81 =
      typeof location > "u" ||
      !["0", "off", "false"].includes(
        (new URLSearchParams(location.search).get("rain") || "").toLowerCase(),
      ),
    n124 = 0;
  function fn306(arg1116, arg1117 = false) {
    arg1116.cycle++;
    let v1593 =
        hash2(37 * arg1116.index + 101 * arg1116.cycle, 53 * arg1116.index + 17) * Math.PI * 2,
      v1594 = 20 * Math.sqrt(hash2(71 * arg1116.index + 5, 89 * arg1116.cycle + 29));
    ((arg1116.x = view.x + Math.cos(v1593) * v1594),
      (arg1116.z = view.z + Math.sin(v1593) * v1594),
      (arg1116.y = arg1117
        ? 11 * hash2(97 * arg1116.index + 3, 61 * arg1116.cycle + 7)
        : 11 + 6 * hash2(43 * arg1116.index + 11, 67 * arg1116.cycle + 13)),
      (arg1116.speed = 12 + 10 * hash2(79 * arg1116.index + 19, 47 * arg1116.cycle + 23)));
  }
  for (let v1595 of from10) fn306(v1595, true);
  function fn307(arg1118) {
    return (
      (v81 = !!arg1118) || ((n124 = 0), elCv.dataset && (elCv.dataset.rainVisible = "0")),
      (elUiWeather.textContent = v81 ? "RAIN / R TO TOGGLE" : "CLEAR / R TO TOGGLE"),
      v81
    );
  }
  fn307(v81);
  var obj22 = {
      [n33]: ["=======", "|     |", "|_   _|"],
      [n34]: [".---.", "|###|", "|###|", "'---'"],
      [n35]: [" o ", " | ", " | ", "_=_"],
      [n36]: ["+--BUS--+", "|:::::::|", "|:     :|", "|:_____:|", "|_|   |_|"],
      [n37]: [" [R] ", " [A] ", " [G] ", "  |  ", "  |  ", " _=_ "],
      [n38]: ["+--TEL--+", "| [::] |", "| [::] |", "| [__] |", "+-------+"],
      [n39]: ["+--POP--+", "| 0000 |", "| 0000 |", "|  [$] |", "+-------+"],
      [n40]: ["  __o  ", " _/<,  ", "(_)/(_)"],
      [n41]: [" o   o ", "-==+==-", "   |   ", "  / \\  "],
      [n42]: [" _O_ ", "--O--", "  |  ", "_/ \\_"],
      [n43]: ["+=+=+=+=+", "#X#X#X#X#", "X#X#X#X#X", "#|#|#|#|#"],
      [n44]: [
        "+--OPEN--+",
        "| []  [] |",
        "|        |",
        "|   <>   |",
        "|        |",
        "| []  [] |",
        "+========+",
      ],
      [n45]: [" /\\ ", " || ", " || ", " || ", " || ", " || ", "_||_"],
      [n46]: ["+--STOCK--+", "|0[]00[]0|", "|========|", "|[]00[]00|", "+========+"],
      [n47]: ["+--PAY--+", "| 0  [$] |", "+========+"],
      [n48]: [
        "+--NOCTURNE--+",
        "|             |",
        "|             |",
        "|             |",
        "|             |",
        "|             |",
        "|             |",
        "|             |",
        "|             |",
        "+=============+",
      ],
      [n49]: [
        "+----LIFT----+",
        "|[STANDBY]   |",
        "|+----++----+|",
        "||<<<<||>>>>||",
        "||<<<<||>>>>||",
        "||<<<<||>>>>||",
        "|+----++----+|",
        "+---[E]CALL--+",
        "+============+",
      ],
      [n50]: [
        "+--BALCONY LINK--+",
        "|::::::::::::::::|",
        "|::    OPEN    ::|",
        "|::            ::|",
        "|::  LIVE CITY ::|",
        "|::            ::|",
        "|:: [E] ACCESS ::|",
        "|::  FLOOR 31  ::|",
        "+================+",
      ],
      [n51]: ["+===========+", "|###########|", "|8#8#8#8#8#8|", "|###########|", "+===========+"],
      [n52]: [
        "+=======================+",
        "|##[:::]#####[:::]######|",
        "|##[:::]#####[:::]######|",
        "|########+--31--+#######|",
        "|########|::::::|#######|",
        "|########|:LIFT:|#######|",
        "|########|: <> :|#######|",
        "|########|[E]IN:|#######|",
        "+========+======+=======+",
      ],
      [n53]: ["  %*%*%  ", " %%%*%%% ", "+=======+", "|8#8#8#8|", "+=======+"],
      [n54]: ["+--NODE--+", "| [LINK] |", "|  >_    |", "| [E] USE|", "+--------+"],
      [n55]: [
        "       *       ",
        "      /|\\      ",
        "    ./===\\.    ",
        "   /  <O>  \\   ",
        "  /___/|\\___\\  ",
        "     /|||\\     ",
        "    /_|||_\\    ",
        "   /==|||==\\   ",
        "  /___|||___\\  ",
        " [THE SIGNAL]  ",
        "+=============+",
      ],
      [n56]: ["+-----+", "|X###X|", "|#####|", "+-----+"],
      [n57]: [" .---. ", "/#####\\", "| O O |", "|#####|", "'-----'"],
      [n58]: ["  ||  ", "  ||  ", "  ||  ", " /##\\ ", " |##| ", " |##| ", "_|##|_"],
      [n59]: ["   *   ", "  \\|/  ", " .~~~. ", "(~~~~~)", " \\___/ ", "__|_|__"],
    },
    arr38 = [
      "+----LIFT----+",
      "|[CALLING]   |",
      "|+----++----+|",
      "||vvvv||vvvv||",
      "||vvvv||vvvv||",
      "||vvvv||vvvv||",
      "|+----++----+|",
      "+PLEASE-WAIT-+",
      "+============+",
    ],
    arr39 = [
      "+----LIFT----+",
      "|[ARRIVED]   |",
      "|+--+    +--+|",
      "||<<|    |>>||",
      "||<<| 31 |>>||",
      "||<<|LINK|>>||",
      "|+--+    +--+|",
      "+--[E]PANEL--+",
      "+============+",
    ],
    arr40 = [
      "+---LIFT-31--+",
      "|[READY]     |",
      "|+----++----+|",
      "||<<<<||>>>>||",
      "||<<<<||>>>>||",
      "||<<<<||>>>>||",
      "|+----++----+|",
      "+[E]FLOOR-00-+",
      "+============+",
    ],
    arr41 = [
      "+----EXIT----+",
      "|::::::::::::|",
      "|:##::::::##:|",
      "|:##::::::##:|",
      "|:::::<>:::::|",
      "|::::::::::::|",
      "|:##::::::##:|",
      "|::::::::::::|",
      "|::::EXIT::::|",
      "+============+",
    ],
    arr42 = ["+#+", "|#|", "|#|", "|#|", " | ", "_=_"],
    obj23 = {
      [n34]: [".--.", "|##|", "|##|", "'--'"],
      [n35]: ["o", "|", "|", "="],
      [n36]: ["+---+", "|:::|", "|   |", "|___|", "|_|_|"],
      [n37]: arr42,
      [n38]: ["+TEL+", "|::|", "|::|", "|__|", "+---+"],
      [n46]: ["+====+", "|[][]|", "|====|", "|0[]0|", "+====+"],
      [n47]: ["+----+", "|####|", "|####|", "+====+"],
      [n54]: ["+---+", "|:::|", "|###|", "|###|", "+---+"],
      [n39]: ["+---+", "|000|", "|[$]|", "|###|", "+---+"],
      [n33]: ["====", "|##|", "|__|"],
      [n41]: ["+==+", "|##|", "+==+"],
      [n42]: ["_O_", "-O-", " | ", "/_\\"],
      [n45]: ["/\\", "||", "||", "||", "_||_"],
      [n53]: ["%*%", "+==+", "|8#|", "+==+"],
      [n55]: [
        "    *    ",
        "   /|\\   ",
        "  /===\\  ",
        " / <O> \\ ",
        "<__|||__>",
        "  |||||  ",
        " /|||||\\ ",
        "/_|||||_\\",
        "==|||||==",
        "+=======+",
      ],
      [n56]: ["+---+", "|X#X|", "|###|", "+---+"],
      [n57]: [".--.", "|##|", "|OO|", "'--'"],
      [n58]: ["||", "||", "/\\", "##", "##", "##", "=="],
      [n59]: [" * ", "\\|/", "~~~", "\\_/", "_|_"],
    },
    obj24 = {
      [n33]: "=",
      [n34]: "#",
      [n35]: "|",
      [n36]: "B",
      [n37]: "!",
      [n38]: "T",
      [n39]: "$",
      [n40]: "o",
      [n41]: "+",
      [n42]: "H",
      [n43]: "+",
      [n44]: "D",
      [n45]: "|",
      [n46]: "#",
      [n47]: "=",
      [n48]: "+",
      [n49]: "E",
      [n50]: "B",
      [n51]: "#",
      [n52]: "#",
      [n53]: "%",
      [n54]: "T",
      [n55]: "A",
      [n56]: "X",
      [n57]: "O",
      [n58]: "|",
      [n59]: "*",
      [n60]: "M",
    },
    obj25 = {};
  for (let v1596 in obj22) {
    let v1597 = obj22[v1596],
      n370 = 1;
    for (let n371 = 0; n371 < v1597.length; n371++)
      v1597[n371].length > n370 && (n370 = v1597[n371].length);
    obj25[v1596] = n370;
  }
  var n125 = 0.78;
  function fn308(arg1119) {
    let v1598 = arg1119?.["h"] || 0;
    return arg1119?.["_heightAlreadyScaled"]
      ? v1598
      : 6 === arg1119?.["kind"]
        ? v1598 * n125
        : v1598;
  }
  function fn309(arg1120, arg1121, arg1122 = null) {
    let fn451 = (arg1123) => Math.round(arg1123 + 18 * arg1121);
    if (arg1120 === n37) {
      let v1599 = arg1122?.["trafficSignal"]
        ? fn78(arg1122.signalWorldX, arg1122.signalWorldZ, arg1122.signalAxis)
        : "red";
      return {
        base: "hsl(45,25%," + fn451(42) + "%)",
        R: "hsl(0,95%," + fn451("red" === v1599 ? 66 : 22) + "%)",
        A: "hsl(48,95%," + fn451("amber" === v1599 ? 64 : 20) + "%)",
        G: "hsl(125,90%," + fn451("green" === v1599 ? 62 : 20) + "%)",
      };
    }
    return arg1120 === n38
      ? {
          base: "hsl(350,75%," + fn451(32) + "%)",
        }
      : arg1120 === n39
        ? {
            base: "hsl(205,70%," + fn451(30) + "%)",
            accent: "hsl(190,95%," + fn451(48) + "%)",
            panel: "hsla(205,52%," + fn451(7) + "%,.92)",
          }
        : arg1120 === n54
          ? {
              base: "hsl(188,65%," + fn451(31) + "%)",
              accent: "hsl(118,92%," + fn451(48) + "%)",
              panel: "hsla(188,46%," + fn451(7) + "%,.92)",
            }
          : arg1120 === n42
            ? {
                base: "hsl(8,78%," + fn451(35) + "%)",
              }
            : arg1120 === n43
              ? {
                  base: "hsl(192,18%," + fn451(40) + "%)",
                  accent: "hsl(42,26%," + fn451(40) + "%)",
                  panel: "hsl(205,18%," + fn451(8) + "%)",
                  "#": "hsl(192,22%," + fn451(38) + "%)",
                  X: "hsl(190,28%," + fn451(45) + "%)",
                }
              : arg1120 === n40
                ? {
                    base: "hsl(175,55%," + fn451(32) + "%)",
                  }
                : arg1120 === n41
                  ? {
                      base: "hsl(38,45%," + fn451(40) + "%)",
                      panel: "hsla(38,34%," + fn451(7) + "%,.92)",
                    }
                  : 6 === arg1120
                    ? {
                        base: "hsl(32,30%," + fn451(34) + "%)",
                        accent: "hsl(42,38%," + fn451(43) + "%)",
                        panel: "hsla(32,26%," + fn451(7) + "%,.92)",
                      }
                    : 8 === arg1120
                      ? {
                          base: "hsl(48,28%," + fn451(52) + "%)",
                        }
                      : 7 === arg1120
                        ? {
                            base: "hsl(135,28%," + fn451(25) + "%)",
                            panel: "hsla(135,24%," + fn451(6) + "%,.92)",
                          }
                        : 9 === arg1120
                          ? {
                              base: "hsl(45,25%," + fn451(42) + "%)",
                              accent: "hsl(195,52%," + fn451(34) + "%)",
                            }
                          : 17 === arg1120
                            ? {
                                base: "hsl(175,82%," + fn451(42) + "%)",
                                accent: "hsl(45,88%," + fn451(48) + "%)",
                              }
                            : arg1120 === n45
                              ? {
                                  base: "hsl(190,22%," + fn451(42) + "%)",
                                }
                              : arg1120 === n46
                                ? {
                                    base: "hsl(42,34%," + fn451(34) + "%)",
                                    accent: "hsl(175,58%," + fn451(38) + "%)",
                                    panel: "hsla(42,28%," + fn451(6) + "%,.92)",
                                  }
                                : arg1120 === n47
                                  ? {
                                      base: "hsl(175,40%," + fn451(34) + "%)",
                                      accent: "hsl(42,80%," + fn451(45) + "%)",
                                      panel: "hsla(175,32%," + fn451(6) + "%,.92)",
                                    }
                                  : arg1120 === n48
                                    ? {
                                        base:
                                          "hsl(" +
                                          (arg1122?.["facadeStyle"]?.["frameHue"] ?? 178) +
                                          ",72%," +
                                          fn451(38) +
                                          "%)",
                                        accent:
                                          "hsl(" +
                                          (arg1122?.["facadeStyle"]?.["accentHue"] ?? 292) +
                                          ",92%," +
                                          fn451(52) +
                                          "%)",
                                        ":":
                                          "hsl(" +
                                          (arg1122?.["facadeStyle"]?.["glassHue"] ?? 198) +
                                          ",62%," +
                                          fn451(10) +
                                          "%)",
                                        "#":
                                          "hsl(" +
                                          (arg1122?.["facadeStyle"]?.["glassHue"] ?? 205) +
                                          ",55%," +
                                          fn451(15) +
                                          "%)",
                                        "<":
                                          "hsl(" +
                                          (arg1122?.["facadeStyle"]?.["accentHue"] ?? 292) +
                                          ",92%," +
                                          fn451(52) +
                                          "%)",
                                        ">":
                                          "hsl(" +
                                          (arg1122?.["facadeStyle"]?.["accentHue"] ?? 292) +
                                          ",92%," +
                                          fn451(52) +
                                          "%)",
                                      }
                                    : arg1120 === n49
                                      ? {
                                          base: "hsl(188,55%," + fn451(34) + "%)",
                                          accent: "hsl(292,90%," + fn451(48) + "%)",
                                          "[": "hsl(48,92%," + fn451(48) + "%)",
                                          "]": "hsl(48,92%," + fn451(48) + "%)",
                                          ":": "hsl(198,58%," + fn451(12) + "%)",
                                          v: "hsl(292,92%," + fn451(52) + "%)",
                                        }
                                      : arg1120 === n50
                                        ? {
                                            base: "hsl(188,68%," + fn451(34) + "%)",
                                            accent: "hsl(292,92%," + fn451(50) + "%)",
                                            ":": "hsl(205,55%," + fn451(12) + "%)",
                                          }
                                        : arg1120 === n51
                                          ? {
                                              base: "hsl(188,42%," + fn451(35) + "%)",
                                              accent: "hsl(205,56%," + fn451(24) + "%)",
                                              "#": "hsl(198,48%," + fn451(27) + "%)",
                                              8: "hsl(188,58%," + fn451(34) + "%)",
                                              panel: "hsl(205,45%," + fn451(5) + "%)",
                                            }
                                          : arg1120 === n52
                                            ? {
                                                base: "hsl(188,55%," + fn451(34) + "%)",
                                                accent: "hsl(292,88%," + fn451(48) + "%)",
                                                "#": "hsl(205,50%," + fn451(17) + "%)",
                                                ":": "hsl(198,64%," + fn451(10) + "%)",
                                                "[": "hsl(48,88%," + fn451(45) + "%)",
                                                "]": "hsl(48,88%," + fn451(45) + "%)",
                                                panel: "hsl(210,45%," + fn451(3) + "%)",
                                              }
                                            : arg1120 === n53
                                              ? {
                                                  base: "hsl(188,38%," + fn451(32) + "%)",
                                                  accent: "hsl(112,58%," + fn451(30) + "%)",
                                                  panel: "hsla(188,34%," + fn451(7) + "%,.92)",
                                                  "%": "hsl(112,58%," + fn451(31) + "%)",
                                                  "*": "hsl(135,72%," + fn451(39) + "%)",
                                                  8: "hsl(198,44%," + fn451(24) + "%)",
                                                  "#": "hsl(205,38%," + fn451(20) + "%)",
                                                }
                                              : arg1120 === n55
                                                ? {
                                                    base: "hsl(42,34%," + fn451(42) + "%)",
                                                    accent: "hsl(190,84%," + fn451(48) + "%)",
                                                    "*": "hsl(190,92%," + fn451(58) + "%)",
                                                    O: "hsl(292,82%," + fn451(48) + "%)",
                                                    "[": "hsl(42,48%," + fn451(48) + "%)",
                                                    "]": "hsl(42,48%," + fn451(48) + "%)",
                                                  }
                                                : arg1120 === n56
                                                  ? {
                                                      base: "hsl(31,42%," + fn451(31) + "%)",
                                                      accent: "hsl(46,55%," + fn451(41) + "%)",
                                                      panel: "hsla(28,35%," + fn451(6) + "%,.92)",
                                                      X: "hsl(46,62%," + fn451(42) + "%)",
                                                    }
                                                  : arg1120 === n57
                                                    ? {
                                                        base: "hsl(195,18%," + fn451(38) + "%)",
                                                        accent: "hsl(38,62%," + fn451(43) + "%)",
                                                        panel:
                                                          "hsla(205,20%," + fn451(7) + "%,.92)",
                                                        O: "hsl(38,72%," + fn451(45) + "%)",
                                                      }
                                                    : arg1120 === n58
                                                      ? {
                                                          base: "hsl(18,18%," + fn451(30) + "%)",
                                                          accent: "hsl(32,48%," + fn451(38) + "%)",
                                                          panel:
                                                            "hsla(18,22%," + fn451(6) + "%,.92)",
                                                          "#": "hsl(22,34%," + fn451(34) + "%)",
                                                        }
                                                      : arg1120 === n59
                                                        ? {
                                                            base: "hsl(188,28%," + fn451(36) + "%)",
                                                            accent:
                                                              "hsl(188,86%," + fn451(52) + "%)",
                                                            panel:
                                                              "hsla(205,35%," + fn451(7) + "%,.92)",
                                                            "~": "hsl(190,82%," + fn451(48) + "%)",
                                                            "*": "hsl(190,92%," + fn451(58) + "%)",
                                                          }
                                                        : arg1120 === n60
                                                          ? {
                                                              base:
                                                                "hsl(42,26%," + fn451(40) + "%)",
                                                              accent:
                                                                "hsl(190,74%," + fn451(46) + "%)",
                                                              panel:
                                                                "hsla(205,28%," +
                                                                fn451(6) +
                                                                "%,.92)",
                                                            }
                                                          : {
                                                              base:
                                                                "hsl(35,12%," + fn451(35) + "%)",
                                                            };
  }
  function fn310(arg1124) {
    return {
      c: v12 + arg1124.l * (v19 / arg1124.d),
      r: fn10(arg1124.y, arg1124.d, fn191()),
      d: arg1124.d,
    };
  }
  function fn311(arg1125, arg1126, arg1127) {
    let n372 = 0;
    for (let n373 = 0; n373 < arg1125.length; n373++) {
      let v1600 = arg1125[n373],
        v1601 = arg1125[(n373 + 1) % arg1125.length],
        v1602 =
          (v1601.c - v1600.c) * (arg1127 - v1600.r) - (v1601.r - v1600.r) * (arg1126 - v1600.c);
      if (Math.abs(v1602) < 0.00001) continue;
      let v1603 = v1602 > 0 ? 1 : -1;
      if (n372) {
        if (n372 !== v1603) return false;
      } else n372 = v1603;
    }
    return true;
  }
  function fn312(arg1128, arg1129) {
    let v1604 = 1 === arg1128.axis ? arg1128.d : arg1128.w,
      v1605 = 1 === arg1128.axis ? arg1128.w : arg1128.d,
      v1606 = (Math.max(v1604, v1605) * v19) / Math.max(0.2, arg1128._depth),
      v1607 = arg1128.kind === n55 ? spriteFarDist : 11,
      v1608 = arg1128.kind === n55 ? 0 : 7;
    if (arg1128._depth > v1607 || v1606 < v1608) return void fn318(arg1128, arg1129);
    let v1609 = 0.5 * v1604,
      v1610 = 0.5 * v1605,
      obj50 = {
        x: arg1128.x,
        z: arg1128.z + (view.z < arg1128.z ? -v1610 : v1610),
        w: v1604,
        axis: 0,
      },
      obj51 = {
        x: arg1128.x + (view.x < arg1128.x ? -v1609 : v1609),
        z: arg1128.z,
        w: v1605,
        axis: 1,
      },
      v1611 = obj50.x - view.x,
      v1612 = obj50.z - view.z,
      v1613 = obj51.x - view.x,
      v1614 = obj51.z - view.z,
      v1615 = v1611 * v1611 + v1612 * v1612 > v1613 * v1613 + v1614 * v1614,
      v1616 =
        arg1128.kind !== n37 ||
        !arg1128.trafficSignal ||
        ("X" === arg1128.signalAxis ? view.x - arg1128.x : view.z - arg1128.z) *
          (arg1128.signalFacingSign || 1) >
          0,
      fn452 = (arg1130, arg1131) => {
        let v1617 =
          arg1128.kind === n37 &&
          arg1128.trafficSignal &&
          (arg1130.axis !== arg1128.axis || !v1616);
        return fn318(
          {
            x: arg1130.x,
            z: arg1130.z,
            y: arg1128.y || 0,
            kind: arg1128.kind,
            h: fn308(arg1128),
            w: arg1130.w,
            axis: arg1130.axis,
            _heightAlreadyScaled: true,
            volumeFace: true,
            volumeSide: arg1130.axis !== arg1128.axis,
            signalHousing: v1617,
            trafficSignal: arg1128.trafficSignal,
            signalAxis: arg1128.signalAxis,
            signalWorldX: arg1128.signalWorldX,
            signalWorldZ: arg1128.signalWorldZ,
            signalFacingSign: arg1128.signalFacingSign,
          },
          Math.max(0.08, arg1129 - arg1131),
        );
      };
    (fn452(v1615 ? obj50 : obj51, 0.035),
      (function (arg1132, arg1133, arg1134, arg1135) {
        let v1618 = (arg1132.y || 0) + fn308(arg1132);
        if (fn191() <= v1618 + 0.015) return;
        let v1619 = 0.5 * arg1133,
          v1620 = 0.5 * arg1134,
          v1621 = (function (arg1136, arg1137 = 0.42) {
            let arr98 = [];
            for (let n374 = 0; n374 < arg1136.length; n374++) {
              let v1629 = arg1136[n374],
                v1630 = arg1136[(n374 + 1) % arg1136.length],
                v1631 = v1629.d >= arg1137,
                v1632 = v1630.d >= arg1137;
              if ((v1631 && arr98.push(v1629), v1631 !== v1632)) {
                let v1633 = (arg1137 - v1629.d) / (v1630.d - v1629.d);
                arr98.push({
                  d: arg1137,
                  l: v1629.l + (v1630.l - v1629.l) * v1633,
                  y: v1629.y + (v1630.y - v1629.y) * v1633,
                });
              }
            }
            return arr98;
          })(
            [
              [arg1132.x - v1619, arg1132.z - v1620],
              [arg1132.x + v1619, arg1132.z - v1620],
              [arg1132.x + v1619, arg1132.z + v1620],
              [arg1132.x - v1619, arg1132.z + v1620],
            ].map(([arg1138, arg1139]) => {
              let v1634 = arg1138 - view.x,
                v1635 = arg1139 - view.z;
              return {
                d: v1634 * n120 + v1635 * -n119,
                l: v1634 * n119 + v1635 * n120,
                y: v1618,
              };
            }),
          );
        if (v1621.length < 3) return;
        let map38 = v1621.map(fn310),
          v1622 = cols,
          v1623 = -1,
          v1624 = rows,
          v1625 = -1;
        for (let v1636 of map38)
          ((v1622 = Math.min(v1622, v1636.c)),
            (v1623 = Math.max(v1623, v1636.c)),
            (v1624 = Math.min(v1624, v1636.r)),
            (v1625 = Math.max(v1625, v1636.r)));
        if (
          ((v1622 = Math.max(0, Math.floor(v1622))),
          (v1623 = Math.min(cols - 1, Math.ceil(v1623))),
          (v1624 = Math.max(0, Math.floor(v1624))),
          (v1625 = Math.min(rows - 1, Math.ceil(v1625))),
          v1622 > v1623 || v1624 > v1625)
        )
          return;
        let fn309Result2 = fn309(arg1132.kind, Math.min(1, arg1135 + 0.075), arg1132),
          v1626 = fn309Result2.accent || fn309Result2.base,
          v1627 = fn309Result2.panel || fn309Result2.base,
          v1628 = map38.reduce((arg1140, arg1141) => arg1140 + arg1141.d, 0) / map38.length;
        for (let v1637 = v1624; v1637 <= v1625; v1637++)
          for (let v1638 = v1622; v1638 <= v1623; v1638++) {
            if (!fn311(map38, v1638 + 0.5, v1637 + 0.5)) continue;
            let v1639 = v1628;
            if (float32Array[v1638] < v1639 - 0.12) continue;
            let v1640 = v1638 === v1622 || v1638 === v1623 || v1637 === v1624 || v1637 === v1625,
              v1641 = v1640 ? "-" : "=";
            (v1640 ||
              (6 === arg1132.kind || arg1132.kind === n46
                ? (v1641 = (v1638 + v1637) & 1 ? "=" : "-")
                : 7 === arg1132.kind
                  ? (v1641 = (v1638 + v1637) % 5 == 0 ? "o" : "=")
                  : arg1132.kind === n53
                    ? (v1641 = (3 * v1638 + v1637) % 5 == 0 ? "*" : "%")
                    : arg1132.kind === n55
                      ? (v1641 = (v1638 + v1637) & 1 ? "^" : "=")
                      : (5 * v1638 + 3 * v1637 + arg1132.kind) % 11 == 0 && (v1641 = ".")),
              glyphsEnabled && fn263(v1638, v1637, v1627),
              fn264(v1638, v1637, v1641, v1626));
          }
      })(arg1128, v1604, v1605, arg1129),
      fn452(v1615 ? obj51 : obj50, 0));
  }
  var n126 = 17,
    n127 = 0.105;
  function fn313(arg1142, arg1143, arg1144, arg1145) {
    let v1642 = 0 === arg1142.axis ? 1 : 0,
      v1643 = 1 === arg1142.axis ? 1 : 0,
      v1644 = -v1643,
      v1645 = v1642;
    return (function (arg1146, arg1147, arg1148) {
      let v1646 = arg1146 - view.x,
        v1647 = arg1147 - view.z,
        v1648 = v1646 * n120 + v1647 * -n119;
      if (v1648 <= 0.1) return null;
      let v1649 = v1646 * n119 + v1647 * n120;
      return {
        c: v12 + v1649 * (v19 / v1648),
        r: fn10(arg1148, v1648, fn191()),
        d: v1648,
        l: v1649,
        y: arg1148,
      };
    })(
      arg1142.x + v1642 * arg1143 + v1644 * arg1144,
      arg1142.z + v1643 * arg1143 + v1645 * arg1144,
      arg1145,
    );
  }
  function fn314(arg1149, arg1150, arg1151, arg1152, arg1153, arg1154) {
    ((arg1149 = Math.round(arg1149)),
      (arg1150 = Math.round(arg1150)),
      !(
        arg1149 < 0 ||
        arg1149 >= cols ||
        arg1150 < 0 ||
        arg1150 >= rows ||
        arg1151 <= 0.1 ||
        float32Array[arg1149] < arg1151 - 0.08
      ) &&
        (glyphsEnabled && arg1154 && fn263(arg1149, arg1150, arg1154),
        fn264(arg1149, arg1150, arg1152, arg1153)));
  }
  function fn315(arg1155, arg1156, arg1157, arg1158, arg1159) {
    if (!arg1155 || !arg1156) return;
    let v1650 = arg1156.c - arg1155.c,
      v1651 = arg1156.r - arg1155.r,
      max115 = Math.max(1, Math.ceil(1.15 * Math.max(Math.abs(v1650), Math.abs(v1651))));
    for (let n375 = 0; n375 <= max115; n375++) {
      let v1652 = n375 / max115,
        v1653 = arg1155.c + v1650 * v1652,
        v1654 = arg1155.r + v1651 * v1652,
        v1655 = arg1155.d + (arg1156.d - arg1155.d) * v1652,
        v1656 = arg1157;
      ("auto" === arg1157 &&
        (v1656 =
          Math.abs(v1650) > 1.8 * Math.abs(v1651)
            ? "-"
            : Math.abs(v1651) > 1.8 * Math.abs(v1650)
              ? "|"
              : v1650 * v1651 >= 0
                ? "\\"
                : "/"),
        fn314(v1653, v1654, v1655, v1656, arg1158, arg1159));
    }
  }
  function fn316(arg1160, arg1161, arg1162, arg1163, arg1164, arg1165) {
    let arr99 = [],
      v1657 = arg1163 + 0.055;
    for (let n376 = 0; n376 < 18; n376++) {
      let v1658 = (n376 * Math.PI * 2) / 18;
      arr99.push(
        fn313(
          arg1160,
          arg1161 + Math.cos(v1658) * arg1163,
          arg1162,
          v1657 + Math.sin(v1658) * arg1163,
        ),
      );
    }
    for (let n377 = 0; n377 < 18; n377++)
      fn315(arr99[n377], arr99[(n377 + 1) % 18], "auto", arg1164, arg1165);
    let fn313Result = fn313(arg1160, arg1161, arg1162, v1657);
    for (let v1659 of [0, 4, 9, 13])
      arr99[v1659] && fn315(fn313Result, arr99[v1659], 1 & v1659 ? "." : "-", arg1164, arg1165);
    fn313Result && fn314(fn313Result.c, fn313Result.r, fn313Result.d, "o", arg1164, arg1165);
  }
  function fn317(arg1166, arg1167) {
    let v1660 = arg1166._depth || Math.hypot(arg1166.x - view.x, arg1166.z - view.z),
      v1661 = ((arg1166.w || 1.7) * v19) / Math.max(0.2, v1660);
    if (v1660 > n126 || v1661 < 6) return void fn318(arg1166, arg1167);
    let base = fn309(n40, arg1167, arg1166).base,
      v1662 = "hsl(175,66%," + (35 + 24 * arg1167).toFixed(0) + "%)",
      v1663 = "hsl(190,16%," + (12 + 12 * arg1167).toFixed(0) + "%)",
      v1664 = "hsl(182,30%," + (5 + 7 * arg1167).toFixed(0) + "%)",
      v1665 = "hsl(190,12%," + (3 + 4 * arg1167).toFixed(0) + "%)",
      max116 = Math.max(1.45, arg1166.w || 1.7),
      v1666 = 0.31 * -max116,
      v1667 = 0.31 * max116,
      v1668 =
        ((0 === arg1166.axis ? view.z - arg1166.z : -(view.x - arg1166.x)) >= 0 ? 1 : -1) * n127,
      v1669 = -v1668;
    for (let v1670 of [v1669, v1668]) {
      (fn316(arg1166, v1666, v1670, 0.34, v1663, v1665),
        fn316(arg1166, v1667, v1670, 0.34, v1663, v1665));
      let fn313Result2 = fn313(arg1166, v1666, v1670, 0.395),
        fn313Result3 = fn313(arg1166, v1667, v1670, 0.395),
        fn313Result4 = fn313(arg1166, -0.01, v1670, 0.43),
        fn313Result5 = fn313(arg1166, -0.12, v1670, 0.82),
        fn313Result6 = fn313(arg1166, 0.62 * v1667, v1670, 0.73),
        fn313Result7 = fn313(arg1166, 0.76 * v1667, v1670, 0.91);
      (fn315(fn313Result2, fn313Result4, "auto", base, v1664),
        fn315(fn313Result4, fn313Result3, "auto", base, v1664),
        fn315(fn313Result2, fn313Result5, "auto", v1662, v1664),
        fn315(fn313Result5, fn313Result4, "auto", v1662, v1664),
        fn315(fn313Result5, fn313Result6, "auto", base, v1664),
        fn315(fn313Result6, fn313Result3, "auto", base, v1664),
        fn315(fn313Result6, fn313Result7, "auto", v1662, v1664),
        fn315(
          fn313(arg1166, -0.24, v1670, 0.84),
          fn313(arg1166, 0.01, v1670, 0.84),
          "=",
          v1662,
          v1664,
        ),
        fn315(
          fn313(arg1166, 0.76 * v1667, v1670 - 0.75 * n127, 0.91),
          fn313(arg1166, 0.76 * v1667, v1670 + 0.75 * n127, 0.91),
          "=",
          v1662,
          v1664,
        ));
    }
    for (let v1671 of [v1666, v1667])
      fn315(
        fn313(arg1166, v1671, v1669, 0.395),
        fn313(arg1166, v1671, v1668, 0.395),
        "=",
        v1662,
        v1664,
      );
    fn315(
      fn313(arg1166, -0.01, v1669, 0.43),
      fn313(arg1166, -0.01, v1668, 0.43),
      "=",
      v1662,
      v1664,
    );
  }
  function fn318(arg1168, arg1169) {
    let v1672 = 0 === arg1168.axis,
      v1673 = 0.5 * arg1168.w,
      v1674 = arg1168.x - (v1672 ? v1673 : 0),
      v1675 = arg1168.z - (v1672 ? 0 : v1673),
      v1676 = arg1168.x + (v1672 ? v1673 : 0),
      v1677 = arg1168.z + (v1672 ? 0 : v1673),
      v1678 = (v1674 - view.x) * n120 + (v1675 - view.z) * -n119,
      v1679 = (v1676 - view.x) * n120 + (v1677 - view.z) * -n119;
    if (v1678 <= 0.12 && v1679 <= 0.12) return;
    if (v1678 <= 0.12 || v1679 <= 0.12) {
      let v1684 = (0.12 - v1678) / (v1679 - v1678);
      v1678 <= 0.12
        ? ((v1674 += (v1676 - v1674) * v1684), (v1675 += (v1677 - v1675) * v1684), (v1678 = 0.12))
        : ((v1676 = v1674 + (v1676 - v1674) * v1684),
          (v1677 = v1675 + (v1677 - v1675) * v1684),
          (v1679 = 0.12));
    }
    let fn453 = (arg1170, arg1171, arg1172) =>
        v12 + ((arg1170 - view.x) * n119 + (arg1171 - view.z) * n120) * (v19 / arg1172),
      fn453Result = fn453(v1674, v1675, v1678),
      fn453Result2 = fn453(v1676, v1677, v1679);
    if (Math.abs(fn453Result - fn453Result2) < 0.18) {
      let round11 = Math.round(0.5 * (fn453Result + fn453Result2)),
        min37 = Math.min(v1678, v1679);
      if (round11 >= 0 && round11 < cols && min37 > 0.1 && float32Array[round11] >= min37) {
        let v1685 = arg1168.y || 0,
          fn191Result2 = fn191(),
          fn10Result = fn10(v1685 + fn308(arg1168), min37, fn191Result2),
          fn10Result2 = fn10(v1685, min37, fn191Result2),
          max118 = Math.max(0, Math.ceil(fn10Result)),
          min38 = Math.min(rows - 1, Math.floor(fn10Result2)),
          base2 = fn309(arg1168.kind, arg1169, arg1168).base;
        for (let v1686 = max118; v1686 <= min38; v1686++) fn264(round11, v1686, "|", base2);
      }
      return;
    }
    let max117 = Math.max(0, Math.floor(Math.min(fn453Result, fn453Result2)) - 1),
      min36 = Math.min(cols - 1, Math.ceil(Math.max(fn453Result, fn453Result2)) + 1);
    if (max117 > min36) return;
    let v1680 =
        arg1168.kind !== n37 ||
        !arg1168.trafficSignal ||
        ("X" === arg1168.signalAxis ? view.x - arg1168.x : view.z - arg1168.z) *
          (arg1168.signalFacingSign || 1) >
          0,
      v1681 =
        arg1168.kind === n37 &&
        (arg1168.signalHousing || (arg1168.trafficSignal && !arg1168.volumeFace && !v1680)),
      v1682 = v1681
        ? arr42
        : arg1168.volumeSide && obj23[arg1168.kind]
          ? obj23[arg1168.kind]
          : arg1168.customArt
            ? arg1168.customArt
            : arg1168.exit
              ? arr41
              : arg1168.returnLift
                ? arr40
                : arg1168.elevator
                  ? "open" === sStandby
                    ? arr39
                    : "calling" === sStandby
                      ? arr38
                      : obj22[n49]
                  : obj22[arg1168.kind],
      v1683 = v1681
        ? arr42.reduce((arg1173, arg1174) => Math.max(arg1173, arg1174.length), 1)
        : arg1168.volumeSide && obj23[arg1168.kind]
          ? obj23[arg1168.kind].reduce((arg1175, arg1176) => Math.max(arg1175, arg1176.length), 1)
          : arg1168.customArt
            ? arg1168.customArt.reduce((arg1177, arg1178) => Math.max(arg1177, arg1178.length), 1)
            : obj25[arg1168.kind],
      fn309Result3 = fn309(arg1168.kind, arg1169, arg1168);
    for (let v1687 = max117; v1687 <= min36; v1687++) {
      let v1688 = n120 * v21[v1687] + n119 * v20[v1687],
        v1689 = n120 * v20[v1687] - n119 * v21[v1687],
        v1690 = v1672
          ? Math.abs(v1689) < 0.000001
            ? -1
            : (arg1168.z - view.z) / v1689
          : Math.abs(v1688) < 0.000001
            ? -1
            : (arg1168.x - view.x) / v1688;
      if (v1690 <= 0.1) continue;
      let v1691 = view.x + v1688 * v1690,
        v1692 = view.z + v1689 * v1690,
        v1693 = v1672
          ? (v1691 - (arg1168.x - v1673)) / arg1168.w
          : (v1692 - (arg1168.z - v1673)) / arg1168.w;
      if (v1693 < 0 || v1693 > 1) continue;
      let v1694 = (v1691 - view.x) * n120 + (v1692 - view.z) * -n119;
      if (v1694 <= 0.1 || float32Array[v1687] < v1694) continue;
      let v1695 = arg1168.y || 0,
        fn191Result3 = fn191(),
        fn10Result3 = fn10(v1695 + fn308(arg1168), v1694, fn191Result3),
        fn10Result4 = fn10(v1695, v1694, fn191Result3),
        max119 = Math.max(0, Math.ceil(fn10Result3)),
        min39 = Math.min(rows - 1, Math.floor(fn10Result4));
      if (max119 > min39) continue;
      let min40 = Math.min(v1683 - 1, Math.max(0, (v1693 * v1683) | 0));
      ((v1672 && view.z < arg1168.z) || (!v1672 && view.x > arg1168.x)) &&
        (min40 = v1683 - 1 - min40);
      for (let v1696 = max119; v1696 <= min39; v1696++) {
        let min41 = Math.min(
            v1682.length - 1,
            (((v1696 - max119) * v1682.length) / (min39 - max119 + 1)) | 0,
          ),
          v1697 = v1682[min41][min40] || " ";
        if (arg1168.volumeFace) {
          let v1699 = v1682[min41] || "",
            search = v1699.search(/\S/),
            v1700 = v1699.search(/\s*$/) - 1;
          search >= 0 &&
            min40 >= search &&
            min40 <= v1700 &&
            fn263(
              v1687,
              v1696,
              fn309Result3.panel || "hsla(155,18%," + (3 + 4 * arg1169).toFixed(0) + "%,.90)",
            );
        }
        if (
          ((arg1168.kind === n51 || arg1168.kind === n52) &&
            fn263(v1687, v1696, fn309Result3.panel),
          arg1168.kind === n43 &&
            glyphsEnabled &&
            !((min40 + v1696) & 1) &&
            fn263(
              v1687,
              v1696,
              fn309Result3.panel || "hsl(205,18%," + (7 + 8 * arg1169).toFixed(0) + "%)",
            ),
          " " === v1697)
        )
          continue;
        let v1698 =
          (arg1168.kind === n39 && "0" === v1697) ||
          (9 === arg1168.kind && ":" === v1697) ||
          (arg1168.kind === n46 && ("0" === v1697 || "[" === v1697 || "]" === v1697)) ||
          (arg1168.kind === n47 && "$" === v1697) ||
          (arg1168.kind === n54 &&
            (">" === v1697 || "_" === v1697 || "[" === v1697 || "]" === v1697)) ||
          (arg1168.kind === n48 &&
            "|" !== v1697 &&
            "=" !== v1697 &&
            "+" !== v1697 &&
            "-" !== v1697) ||
          (arg1168.kind === n49 &&
            "|" !== v1697 &&
            "=" !== v1697 &&
            "+" !== v1697 &&
            "-" !== v1697) ||
          (arg1168.kind === n50 &&
            "|" !== v1697 &&
            "=" !== v1697 &&
            "+" !== v1697 &&
            "-" !== v1697 &&
            ":" !== v1697) ||
          (arg1168.kind === n52 &&
            "|" !== v1697 &&
            "=" !== v1697 &&
            "+" !== v1697 &&
            "-" !== v1697 &&
            "#" !== v1697 &&
            ":" !== v1697);
        fn264(
          v1687,
          v1696,
          v1697,
          fn309Result3[v1697] || (v1698 ? fn309Result3.accent : fn309Result3.base),
        );
      }
    }
  }
  function fn319(arg1179, arg1180, arg1181, arg1182) {
    let round12 = Math.round(arg1181);
    if (round12 < 0 || round12 >= cols || float32Array[round12] < arg1180) return;
    let v1701 = arg1179.y || 0,
      fn191Result4 = fn191(),
      fn10Result5 = fn10(v1701 + fn308(arg1179), arg1180, fn191Result4),
      fn10Result6 = fn10(v1701, arg1180, fn191Result4),
      max120 = Math.max(0, Math.ceil(fn10Result5)),
      min42 = Math.min(rows - 1, Math.floor(fn10Result6));
    if (max120 > min42) return;
    let v1702 = min42 - max120 + 1,
      v1703 = arg1179.exit ? arr41 : obj22[arg1179.kind],
      fn309Result4 = fn309(arg1179.kind, arg1182, arg1179);
    if (v1702 <= 2) return void fn264(round12, min42, obj24[arg1179.kind], fn309Result4.base);
    let v1704 = (arg1179.w * v19) / arg1180,
      max121 = Math.max(0, Math.round(arg1181 - v1704 / 2)),
      min43 = Math.min(cols - 1, Math.round(arg1181 + v1704 / 2)),
      v1705 = obj25[arg1179.kind],
      max122 = Math.max(1, min43 - max121 + 1);
    for (let v1706 = max120; v1706 <= min42; v1706++) {
      let v1707 =
        v1703[Math.min(v1703.length - 1, (((v1706 - max120) * v1703.length) / v1702) | 0)];
      for (let v1708 = max121; v1708 <= min43; v1708++) {
        if (float32Array[v1708] < arg1180) continue;
        let v1709 = v1707[Math.min(v1705 - 1, (((v1708 - max121) * v1705) / max122) | 0)] || " ";
        if (" " !== v1709) {
          let v1710 =
            (arg1179.kind === n39 && "0" === v1709) ||
            (9 === arg1179.kind && ":" === v1709) ||
            (arg1179.kind === n46 && ("0" === v1709 || "[" === v1709 || "]" === v1709)) ||
            (arg1179.kind === n47 && "$" === v1709);
          fn264(
            v1708,
            v1706,
            v1709,
            fn309Result4[v1709] || (v1710 ? fn309Result4.accent : fn309Result4.base),
          );
        }
      }
    }
  }
  function fn320(arg1183, arg1184, arg1185, arg1186) {
    let round13 = Math.round(arg1185);
    if (round13 < 0 || round13 >= cols || float32Array[round13] < arg1184) return;
    let fn191Result5 = fn191(),
      fn10Result7 = fn10(1.35, arg1184, fn191Result5),
      fn10Result8 = fn10(0, arg1184, fn191Result5),
      max123 = Math.max(0, Math.ceil(fn10Result7)),
      min44 = Math.min(rows - 1, Math.floor(fn10Result8));
    if (max123 > min44) return;
    let v1711 = min44 - max123 + 1,
      round14 = Math.round(0.6 * Math.sin(arg1183.phase)),
      v1712 = Math.sin(arg1183.phase) > 0,
      v1713 = "hsl(40,45%," + (52 + 14 * arg1186).toFixed(0) + "%)",
      v1714 = "hsl(" + arg1183.color + ",82%," + (35 + 24 * arg1186).toFixed(0) + "%)",
      v1715 = "hsl(" + arg1183.color + ",68%," + (20 + 15 * arg1186).toFixed(0) + "%)",
      v1716 = "hsla(" + arg1183.color + ",48%," + (7 + 11 * arg1186).toFixed(0) + "%,0.90)",
      v1717 = "string" == typeof arg1183.body && arg1183.body.trim() ? arg1183.body : "#",
      fn454 = (arg1187, arg1188, arg1189, arg1190, arg1191 = null) => {
        !((arg1192) => arg1192 >= 0 && arg1192 < cols && float32Array[arg1192] >= arg1184)(
          arg1187,
        ) ||
          arg1188 < 0 ||
          arg1188 >= rows ||
          (glyphsEnabled && arg1191 && fn263(arg1187, arg1188, arg1191),
          fn264(arg1187, arg1188, arg1189, arg1190));
      };
    if (v1711 <= 2) return void fn454(round13, min44, "@", v1714);
    let v1718 = ((cols / 2) * 0.55) / (arg1184 * Math.tan(v18 / 2)),
      max124 = Math.max(0, Math.round(arg1185 - v1718 / 2)),
      min45 = Math.min(cols - 1, Math.round(arg1185 + v1718 / 2)),
      v1719 = min45 - max124 + 1,
      v1720 = max124 + Math.floor(v1719 / 3),
      v1721 = min45 - Math.floor(v1719 / 3),
      max125 = Math.max(max123, max123 + round14);
    if (v1711 <= 4)
      return (
        fn454(round13, max125, "@", v1713),
        max125 + 1 <= min44 && fn454(round13, max125 + 1, "|", v1714, v1716),
        void (v1712
          ? (fn454(round13 - 1, min44, "/", v1714), fn454(round13 + 1, min44, "\\", v1714))
          : (fn454(round13 - 1, min44, "\\", v1714), fn454(round13 + 1, min44, "/", v1714)))
      );
    for (let v1726 = v1720; v1726 <= v1721; v1726++) fn454(v1726, max125, "@", v1713);
    let v1722 = max125 + 1;
    fn454(max124, v1722, v1712 ? "/" : "\\", v1714);
    for (let v1727 = v1720; v1727 <= v1721; v1727++) fn454(v1727, v1722, "|", v1714, v1716);
    fn454(min45, v1722, v1712 ? "\\" : "/", v1714);
    let min46 = Math.min(
        min44 - 1,
        Math.max(v1722 + 1, max125 + Math.round(0.5 * (min44 - max125))),
      ),
      max126 = Math.max(max124, Math.min(min45, Math.round(arg1185)));
    for (let v1728 = v1722 + 1; v1728 <= min46; v1728++) {
      fn454(max124, v1728, "|", v1715);
      for (let v1729 = v1720; v1729 <= v1721; v1729++) fn454(v1729, v1728, v1717, v1714, v1716);
      (fn454(min45, v1728, "|", v1715), fn454(max126, v1728, v1717, v1714, v1716));
    }
    min46 < v1722 + 1 && v1722 <= min44 && fn454(max126, v1722, v1717, v1714, v1716);
    let v1723 = max124 + Math.floor(v1719 / 4),
      v1724 = min45 - Math.floor(v1719 / 4),
      v1725 = v1712;
    for (let v1730 = min46 + 1; v1730 <= min44; v1730++)
      (fn454(v1723, v1730, v1725 ? "/" : "\\", v1714),
        fn454(v1724, v1730, v1725 ? "\\" : "/", v1714),
        (v1730 - min46) % 2 == 0 && (v1725 = !v1725));
  }
  var arr43 = [],
    n128 = 0.67,
    n129 = 0.88,
    sCity2 = "city",
    flag16 = false;
  function fn321() {
    return "window" === sCity2 ? n21 : view.x;
  }
  function fn322() {
    return "window" === sCity2 ? n22 : view.z;
  }
  function fn323(arg1193, arg1194, arg1195, arg1196 = 0.1) {
    return (
      !(arg1193 < 0 || arg1193 >= cols || arg1194 < 0 || arg1194 >= rows) &&
      (!("city" !== sCity2 || !flag16) ||
        ("window" === sCity2
          ? fn288(arg1193, arg1194, Math.max(0.01, arg1195 - arg1196))
          : float32Array[arg1193] >= arg1195 - arg1196))
    );
  }
  function fn324(arg1197, arg1198, arg1199, arg1200, arg1201 = null, arg1202 = 1 / 0) {
    if ("window" === sCity2) {
      if (!Number.isFinite(arg1202)) return;
      return (
        glyphsEnabled && arg1201 && fn263(arg1197, arg1198, arg1201),
        fn264(arg1197, arg1198, arg1199, arg1200),
        fn289(arg1197, arg1198, arg1202),
        void n26++
      );
    }
    (glyphsEnabled && arg1201 && fn263(arg1197, arg1198, arg1201),
      fn264(arg1197, arg1198, arg1199, arg1200));
  }
  function fn325(arg1203, arg1204, arg1205, arg1206) {
    let v1731 = arg1203.hx || 0,
      v1732 = arg1203.hz || 0,
      v1733 = -v1732,
      v1734 = v1731;
    return (function (arg1207, arg1208, arg1209) {
      if ("window" === sCity2) {
        let v1738 = arg1207 - n21,
          v1739 = arg1208 - n22,
          v1740 = v1738 * n24 + v1739 * -n25;
        if (v1740 <= 0.1) return null;
        let v1741 = v1740 + n23;
        return {
          c: v12 + (v19 / v1741) * (v1738 * n25 + v1739 * n24),
          r: fn10(arg1209, v1741, v23),
          d: v1740,
        };
      }
      let v1735 = arg1207 - view.x,
        v1736 = arg1208 - view.z,
        v1737 = v1735 * n120 + v1736 * -n119;
      return v1737 <= 0.1
        ? null
        : {
            c: v12 + (v19 / v1737) * (v1735 * n119 + v1736 * n120),
            r: fn10(arg1209, v1737, fn191()),
            d: v1737,
          };
    })(
      arg1203.x + v1731 * arg1204 + v1733 * arg1205,
      arg1203.z + v1732 * arg1204 + v1734 * arg1205,
      arg1206,
    );
  }
  function fn326(arg1210, arg1211, arg1212) {
    let n378 = 0;
    for (let n379 = 0; n379 < arg1210.length; n379++) {
      let v1742 = arg1210[n379],
        v1743 = arg1210[(n379 + 1) % arg1210.length],
        v1744 =
          (v1743.c - v1742.c) * (arg1212 - v1742.r) - (v1743.r - v1742.r) * (arg1211 - v1742.c);
      if (Math.abs(v1744) < 0.00001) continue;
      let v1745 = v1744 > 0 ? 1 : -1;
      if (n378) {
        if (n378 !== v1745) return false;
      } else n378 = v1745;
    }
    return true;
  }
  function fn327(arg1213) {
    let points = arg1213.points,
      v1746 = cols,
      v1747 = -1,
      v1748 = rows,
      v1749 = -1;
    for (let v1750 of points)
      ((v1746 = Math.min(v1746, v1750.c)),
        (v1747 = Math.max(v1747, v1750.c)),
        (v1748 = Math.min(v1748, v1750.r)),
        (v1749 = Math.max(v1749, v1750.r)));
    if (
      ((v1746 = Math.max(0, Math.floor(v1746))),
      (v1747 = Math.min(cols - 1, Math.ceil(v1747))),
      (v1748 = Math.max(0, Math.floor(v1748))),
      (v1749 = Math.min(rows - 1, Math.ceil(v1749))),
      v1746 > v1747 || v1748 > v1749)
    )
      return;
    let max127 = Math.max(1, v1747 - v1746),
      max128 = Math.max(1, v1749 - v1748);
    for (let v1751 = v1748; v1751 <= v1749; v1751++)
      for (let v1752 = v1746; v1752 <= v1747; v1752++) {
        if (!fn323(v1752, v1751, arg1213.depth, 0.12) || !fn326(points, v1752 + 0.5, v1751 + 0.5))
          continue;
        let v1753 = (v1752 - v1746) / max127,
          v1754 = (v1751 - v1748) / max128,
          glyph = arg1213.glyph,
          ink = arg1213.ink,
          v1755 = v1752 === v1746 || v1752 === v1747 || v1751 === v1748 || v1751 === v1749;
        arg1213.detail &&
          (v1755 && (glyph = arg1213.edge),
          "body" === arg1213.role
            ? ("left" !== arg1213.face && "right" !== arg1213.face) || v1755
              ? "top" !== arg1213.face || v1755
                ? ("front" === arg1213.face || "rear" === arg1213.face) &&
                  !v1755 &&
                  (v1754 > 0.45 && v1754 < 0.78
                    ? ((glyph = "front" === arg1213.face ? "#" : "="),
                      (ink = arg1213.shadow || arg1213.ink))
                    : v1754 < 0.36 &&
                      !((v1752 + arg1213.seed) & 1) &&
                      ((glyph = "0"), (ink = arg1213.highlight || arg1213.ink)))
                : (v1753 < 0.23 || v1753 > 0.77) && Math.abs(v1754 - 0.52) < 0.14
                  ? ((glyph = "-"), (ink = arg1213.highlight || arg1213.ink))
                  : (v1752 + v1751 + arg1213.seed) % 13 == 0 &&
                    ((glyph = "."), (ink = arg1213.highlight || arg1213.ink))
              : Math.abs(v1754 - 0.43) < 0.1 / max128
                ? ((glyph = "-"), (ink = arg1213.highlight || arg1213.ink))
                : Math.abs(v1753 - 0.5) < 0.48 / max127 && v1754 > 0.3 && v1754 < 0.86
                  ? ((glyph = "|"), (ink = arg1213.seam || arg1213.ink))
                  : v1754 > 0.68 && (v1752 + v1751 + arg1213.seed) % 7 == 0
                    ? ((glyph = "."), (ink = arg1213.shadow || arg1213.ink))
                    : v1754 < 0.28 &&
                      (3 * v1752 + v1751 + arg1213.seed) % 11 == 0 &&
                      ((glyph = ":"), (ink = arg1213.highlight || arg1213.ink))
            : "glass" === arg1213.role &&
              !v1755 &&
              ("left" === arg1213.face || "right" === arg1213.face
                ? Math.abs(v1753 - 0.5) < 0.44 / max127
                  ? ((glyph = "|"), (ink = arg1213.highlight || arg1213.ink))
                  : (v1752 + v1751 + arg1213.seed) % 9 == 0
                    ? ((glyph = "left" === arg1213.face ? "/" : "\\"),
                      (ink = arg1213.highlight || arg1213.ink))
                    : (glyph = ":")
                : "front" === arg1213.face
                  ? (glyph = (v1752 + v1751 + arg1213.seed) & 1 ? "/" : ":")
                  : "rear" === arg1213.face
                    ? (glyph = (v1752 + v1751 + arg1213.seed) & 1 ? "\\" : ":")
                    : "top" === arg1213.face &&
                      (v1752 + v1751 + arg1213.seed) % 5 == 0 &&
                      ((glyph = "."), (ink = arg1213.highlight || arg1213.ink))));
        let fill2 = arg1213.fill;
        if ("glass" === arg1213.role) {
          let v1756 = v1755 || "|" === glyph,
            v1757 = (((13 * v1752 + 7 * v1751 + 3 * arg1213.seed) % 100) + 100) % 100,
            v1758 = (((5 * v1752 + 11 * v1751 + arg1213.seed) % 9) + 9) % 9 == 0,
            v1759 = v1756 || v1757 < 100 * n115;
          if (((fill2 = v1759 ? arg1213.fill : null), !v1756 && !v1758 && !v1759)) {
            if ((((3 * v1752 + 5 * v1751 + arg1213.seed) % 4) + 4) % 4 != 0) continue;
            ((glyph = "."), (ink = arg1213.highlight || arg1213.ink));
          }
        }
        fn324(v1752, v1751, glyph, ink, fill2, arg1213.depth);
      }
  }
  function fn328(arg1214) {
    let {
        car: v1760,
        occupant: v1761,
        forward: v1762,
        side: v1763,
        bodyTop: v1764,
        cabinTop: v1765,
        width: v1766,
        brightness: v1767,
        profile: v1768,
      } = arg1214,
      max129 = Math.max(0.16, v1765 - v1764),
      v1769 = v1764 + max129 * ("sport" === v1768.id ? 0.79 : 0.82),
      v1770 = max129 * ("sport" === v1768.id ? 0.115 : 0.125),
      v1771 = v1766 * ("sport" === v1768.id ? 0.05 : 0.056),
      v1772 = v1764 + 0.61 * max129,
      v1773 = v1764 + 0.1 * max129,
      v1774 = v1764 - max129 * ("sport" === v1768.id ? 0.17 : 0.23),
      v1775 = v1766 * ("sport" === v1768.id ? 0.12 : 0.135),
      v1776 = v1766 * ("sport" === v1768.id ? 0.086 : 0.098),
      v1777 = v1766 * ("sport" === v1768.id ? 0.06 : 0.07),
      fn325Result = fn325(v1760, v1762, v1763 - v1775, v1772),
      fn325Result2 = fn325(v1760, v1762, v1763 + v1775, v1772),
      fn325Result3 = fn325(v1760, v1762, v1763 + v1776, v1773),
      fn325Result4 = fn325(v1760, v1762, v1763 - v1776, v1773),
      fn325Result5 = fn325(v1760, v1762, v1763 + v1777, v1774),
      fn325Result6 = fn325(v1760, v1762, v1763 - v1777, v1774),
      fn325Result7 = fn325(v1760, v1762, v1763, v1769),
      fn325Result8 = fn325(v1760, v1762, v1763 - v1771, v1769),
      fn325Result9 = fn325(v1760, v1762, v1763 + v1771, v1769),
      fn325Result10 = fn325(v1760, v1762, v1763, v1769 + v1770),
      fn325Result11 = fn325(v1760, v1762, v1763, v1769 - v1770);
    if (!(
      fn325Result &&
      fn325Result2 &&
      fn325Result3 &&
      fn325Result4 &&
      fn325Result5 &&
      fn325Result6 &&
      fn325Result7 &&
      fn325Result8 &&
      fn325Result9 &&
      fn325Result10 &&
      fn325Result11
    ))
      return;
    let v1778 = "hsl(" + v1761.headTone + ",32%," + (48 + Math.round(25 * v1767)) + "%)",
      v1779 = "hsl(" + v1761.headTone + ",34%," + (58 + Math.round(22 * v1767)) + "%)",
      v1780 = "hsl(" + v1761.hue + ",66%," + (24 + Math.round(24 * v1767)) + "%)",
      v1781 = "hsl(" + v1761.hue + ",72%," + (35 + Math.round(24 * v1767)) + "%)",
      v1782 = "hsl(" + v1761.hue + ",52%," + (15 + Math.round(18 * v1767)) + "%)";
    function fn455(arg1215, arg1216) {
      let v1783 = cols,
        v1784 = -1,
        v1785 = rows,
        v1786 = -1;
      for (let v1787 of arg1215)
        ((v1783 = Math.min(v1783, v1787.c)),
          (v1784 = Math.max(v1784, v1787.c)),
          (v1785 = Math.min(v1785, v1787.r)),
          (v1786 = Math.max(v1786, v1787.r)));
      if (
        ((v1783 = Math.max(0, Math.floor(v1783))),
        (v1784 = Math.min(cols - 1, Math.ceil(v1784))),
        (v1785 = Math.max(0, Math.floor(v1785))),
        (v1786 = Math.min(rows - 1, Math.ceil(v1786))),
        v1783 > v1784 || v1785 > v1786)
      )
        return;
      let max134 = Math.max(1, v1786 - v1785),
        max135 = Math.max(1, v1784 - v1783);
      for (let v1788 = v1785; v1788 <= v1786; v1788++)
        for (let v1789 = v1783; v1789 <= v1784; v1789++) {
          if (!fn326(arg1215, v1789 + 0.5, v1788 + 0.5)) continue;
          let v1790 = arg1216 - 0.014;
          if (!fn323(v1789, v1788, v1790, 0.048)) continue;
          let v1791 = (v1788 - v1785) / max134,
            v1792 = (v1789 - v1783) / max135,
            s18 = "#",
            v1793 = v1780;
          (v1788 === v1785 || v1788 === v1786 || v1789 === v1783 || v1789 === v1784
            ? ((s18 = v1788 === v1785 ? "-" : v1789 === v1783 ? "/" : v1789 === v1784 ? "\\" : "_"),
              (v1793 = v1781))
            : Math.abs(v1792 - 0.5) < 0.18 && v1791 > 0.2
              ? ((s18 = v1761.glyph), (v1793 = v1781))
              : (v1789 + v1788 + (v1760._id || 0)) % 5 == 0 && ((s18 = ":"), (v1793 = v1782)),
            fn324(v1789, v1788, s18, v1793, null, v1790),
            n117++);
        }
    }
    (fn455(
      [fn325Result, fn325Result2, fn325Result3, fn325Result4],
      0.25 * (fn325Result.d + fn325Result2.d + fn325Result3.d + fn325Result4.d),
    ),
      fn455(
        [fn325Result4, fn325Result3, fn325Result5, fn325Result6],
        0.25 * (fn325Result4.d + fn325Result3.d + fn325Result5.d + fn325Result6.d),
      ));
    let fn325Result12 = fn325(v1760, v1762, v1763, v1773),
      fn325Result13 = fn325(v1760, v1762 - 0.035 * length, v1763, v1774 - 0.08 * max129);
    fn325Result12 && fn325Result13 && fn331(fn325Result12, fn325Result13, "|", v1782, 0, 0.012);
    let max130 = Math.max(0.55, 0.5 * Math.abs(fn325Result9.c - fn325Result8.c)),
      max131 = Math.max(0.55, 0.5 * Math.abs(fn325Result11.r - fn325Result10.r)),
      max132 = Math.max(0, Math.floor(fn325Result7.c - max130)),
      min47 = Math.min(cols - 1, Math.ceil(fn325Result7.c + max130)),
      max133 = Math.max(0, Math.floor(fn325Result7.r - max131)),
      min48 = Math.min(rows - 1, Math.ceil(fn325Result7.r + max131)),
      n380 = 0;
    for (let v1794 = max133; v1794 <= min48; v1794++)
      for (let v1795 = max132; v1795 <= min47; v1795++) {
        let v1796 = (v1795 + 0.5 - fn325Result7.c) / max130,
          v1797 = (v1794 + 0.5 - fn325Result7.r) / max131,
          v1798 = v1796 * v1796 + v1797 * v1797;
        if (v1798 > 1) continue;
        let v1799 = fn325Result7.d - 0.018;
        if (!fn323(v1795, v1794, v1799, 0.048)) continue;
        let v1800 = v1798 > 0.52;
        (fn324(v1795, v1794, v1800 ? "o" : "O", v1800 ? v1778 : v1779, null, v1799),
          n117++,
          n380++);
      }
    if (!n380) {
      let round15 = Math.round(fn325Result7.c),
        round16 = Math.round(fn325Result7.r),
        v1801 = fn325Result7.d - 0.018;
      fn323(round15, round16, v1801, 0.048) &&
        (fn324(round15, round16, "O", v1779, null, v1801), n117++);
    }
    let fn325Result14 = fn325(v1760, v1762, v1763, v1764 + 0.68 * max129);
    if (fn325Result14) {
      let round17 = Math.round(fn325Result14.c),
        round18 = Math.round(fn325Result14.r),
        v1802 = fn325Result14.d - 0.016;
      fn323(round17, round18, v1802, 0.048) &&
        (fn324(round17, round18, "|", v1778, null, v1802), n117++);
    }
    let fn325Result15 = fn325(v1760, v1762, v1763 - 0.7 * v1775, v1772 - 0.02),
      fn325Result16 = fn325(v1760, v1762, v1763 + 0.55 * v1776, v1773 + 0.02);
    fn325Result15 && fn325Result16 && fn331(fn325Result15, fn325Result16, "/", v1781, 0, 0.016);
  }
  function fn329(arg1217, arg1218) {
    return Math.abs(((((arg1217 - arg1218) % 360) + 540) % 360) - 180);
  }
  function fn330(arg1219, arg1220) {
    let v1803 =
        "taxi" === arg1220.id
          ? [48, 188, 54, 205]
          : "sport" === arg1220.id
            ? [190, 294, 320, 48, 205]
            : "van" === arg1220.id
              ? [188, 48, 165, 205, 300]
              : [188, 205, 294, 48, 165, 325],
      v1804 = (37 * (arg1219._id || 0) + 53 * arg1220.id.length) >>> 0,
      v1805 = v1803[v1804 % v1803.length];
    fn329(v1805, arg1219.color) < 34 && (v1805 = v1803[(v1804 + 2) % v1803.length]);
    let v1806 = v1803[(v1804 + 1) % v1803.length];
    return (
      fn329(v1806, v1805) < 28 && (v1806 = (v1805 + 105) % 360),
      {
        primary: v1805,
        secondary: v1806,
      }
    );
  }
  function fn331(arg1221, arg1222, arg1223, arg1224, arg1225 = 0, arg1226 = 0.035) {
    if (!arg1221 || !arg1222) return;
    let max136 = Math.max(
      1,
      Math.ceil(1.15 * Math.max(Math.abs(arg1222.c - arg1221.c), Math.abs(arg1222.r - arg1221.r))),
    );
    for (let n381 = 0; n381 <= max136; n381++) {
      let v1807 = n381 / max136,
        round19 = Math.round(arg1221.c + (arg1222.c - arg1221.c) * v1807),
        round20 = Math.round(arg1221.r + (arg1222.r - arg1221.r) * v1807),
        v1808 = arg1221.d + (arg1222.d - arg1221.d) * v1807 - arg1226;
      for (let v1809 = -arg1225; v1809 <= arg1225; v1809++)
        for (let v1810 = -arg1225; v1810 <= arg1225; v1810++) {
          let v1811 = round19 + v1810,
            v1812 = round20 + v1809;
          fn323(v1811, v1812, v1808, 0.13) && fn324(v1811, v1812, arg1223, arg1224, null, v1808);
        }
    }
  }
  function fn332(arg1227, arg1228, arg1229, arg1230, arg1231, arg1232 = 190) {
    let v1813 = Number.isFinite(arg1227.renderBaseY) ? arg1227.renderBaseY : 0,
      v1814 = v1813 + Math.max(0.07, 0.92 * arg1230),
      fn325Result17 = fn325(arg1227, arg1228, arg1229, v1814),
      fn325Result18 = fn325(arg1227, arg1228 - arg1230, arg1229, v1814),
      fn325Result19 = fn325(arg1227, arg1228 + arg1230, arg1229, v1814),
      fn325Result20 = fn325(arg1227, arg1228, arg1229, v1814 + arg1230),
      fn325Result21 = fn325(
        arg1227,
        arg1228,
        arg1229,
        v1813 + Math.max(0.02, v1814 - v1813 - arg1230),
      );
    if (!(fn325Result17 && fn325Result18 && fn325Result19 && fn325Result20 && fn325Result21))
      return;
    let max137 = Math.max(0.7, 0.5 * Math.abs(fn325Result19.c - fn325Result18.c)),
      max138 = Math.max(0.7, 0.5 * Math.abs(fn325Result21.r - fn325Result20.r)),
      max139 = Math.max(0, Math.floor(fn325Result17.c - max137)),
      min49 = Math.min(cols - 1, Math.ceil(fn325Result17.c + max137)),
      max140 = Math.max(0, Math.floor(fn325Result17.r - max138)),
      min50 = Math.min(rows - 1, Math.ceil(fn325Result17.r + max138)),
      v1815 = "hsl(0,0%," + (4 + 7 * arg1231).toFixed(0) + "%)",
      v1816 = "hsl(215,12%," + (20 + 18 * arg1231).toFixed(0) + "%)",
      v1817 = "hsl(" + arg1232 + ",94%," + (53 + 22 * arg1231).toFixed(0) + "%)";
    for (let v1818 = max140; v1818 <= min50; v1818++)
      for (let v1819 = max139; v1819 <= min49; v1819++) {
        if (!fn323(v1819, v1818, fn325Result17.d, 0.1)) continue;
        let v1820 = (v1819 + 0.5 - fn325Result17.c) / max137,
          v1821 = (v1818 + 0.5 - fn325Result17.r) / max138,
          v1822 = v1820 * v1820 + v1821 * v1821;
        if (v1822 > 1) continue;
        let sO = "o",
          v1823 = v1815,
          v1824 = v1815;
        (v1822 < 0.27
          ? ((sO = "0"), (v1823 = v1816), (v1824 = v1816))
          : v1822 > 0.48 && v1822 < 0.78
            ? ((sO = (v1819 + v1818 + (arg1227._id || 0)) & 1 ? "O" : "0"),
              (v1823 = v1817),
              (v1824 = "hsl(" + arg1232 + ",52%," + (10 + 8 * arg1231).toFixed(0) + "%)"))
            : v1822 > 0.82 && ((sO = "O"), (v1823 = v1815), (v1824 = v1815)),
          fn324(v1819, v1818, sO, v1823, v1824, fn325Result17.d));
      }
  }
  function fn333(arg1233, arg1234, arg1235, arg1236, arg1237 = null, arg1238 = 0, arg1239 = 0.03) {
    if (!arg1233 || !arg1234) return;
    let v1825 = arg1234.c - arg1233.c,
      v1826 = arg1234.r - arg1233.r,
      max141 = Math.max(1, Math.ceil(1.15 * Math.max(Math.abs(v1825), Math.abs(v1826))));
    for (let n382 = 0; n382 <= max141; n382++) {
      let v1827 = n382 / max141,
        round21 = Math.round(arg1233.c + v1825 * v1827),
        round22 = Math.round(arg1233.r + v1826 * v1827),
        v1828 = arg1233.d + (arg1234.d - arg1233.d) * v1827 - arg1239,
        v1829 = arg1235;
      "auto" === arg1235 &&
        (v1829 =
          Math.abs(v1825) > 1.8 * Math.abs(v1826)
            ? "-"
            : Math.abs(v1826) > 1.8 * Math.abs(v1825)
              ? "|"
              : v1825 * v1826 >= 0
                ? "\\"
                : "/");
      for (let v1830 = -arg1238; v1830 <= arg1238; v1830++)
        for (let v1831 = -arg1238; v1831 <= arg1238; v1831++) {
          let v1832 = round21 + v1831,
            v1833 = round22 + v1830;
          fn323(v1832, v1833, v1828, 0.13) && fn324(v1832, v1833, v1829, arg1236, arg1237, v1828);
        }
    }
  }
  function fn334(arg1240, arg1241, arg1242, arg1243, arg1244, arg1245) {
    let arr100 = [],
      v1834 = arg1243 + 0.055;
    for (let n383 = 0; n383 < 18; n383++) {
      let v1835 = (n383 * Math.PI * 2) / 18;
      arr100.push(
        fn325(
          arg1240,
          arg1241 + Math.cos(v1835) * arg1243,
          arg1242,
          v1834 + Math.sin(v1835) * arg1243,
        ),
      );
    }
    for (let n384 = 0; n384 < 18; n384++)
      fn333(arr100[n384], arr100[(n384 + 1) % 18], "auto", arg1244, arg1245, 0, 0.02);
    let fn325Result22 = fn325(arg1240, arg1241, arg1242, v1834);
    for (let v1836 of [0, 4, 9, 13])
      fn333(fn325Result22, arr100[v1836], 1 & v1836 ? "." : "-", arg1244, arg1245, 0, 0.02);
    fn325Result22 &&
      fn323(Math.round(fn325Result22.c), Math.round(fn325Result22.r), fn325Result22.d, 0.12) &&
      fn324(
        Math.round(fn325Result22.c),
        Math.round(fn325Result22.r),
        "o",
        arg1244,
        arg1245,
        fn325Result22.d,
      );
  }
  function fn335(arg1246, arg1247, arg1248) {
    let fn71Result9 = carDims(arg1246);
    if ("cyclist" === fn71Result9.id)
      return (function (arg1249, arg1250, arg1251) {
        let fn71Result10 = carDims(arg1249),
          v1853 = 0.7 * fn71Result10.length,
          v1854 = 0.34 * -v1853,
          v1855 = 0.34 * v1853,
          v1856 = -(arg1249.hz || 0),
          v1857 = arg1249.hx || 0,
          v1858 =
            0.082 * ((fn321() - arg1249.x) * v1856 + (fn322() - arg1249.z) * v1857 >= 0 ? 1 : -1),
          v1859 = -v1858,
          fn460 = (arg1252, arg1253) => Math.max(4, arg1252 + arg1253 * arg1251),
          fn330Result2 = fn330(arg1249, fn71Result10),
          v1860 = "hsl(" + arg1249.color + ",72%," + fn460(31, 24).toFixed(0) + "%)",
          v1861 = "hsl(" + fn330Result2.primary + ",88%," + fn460(42, 25).toFixed(0) + "%)",
          v1862 = "hsl(" + arg1249.color + ",38%," + fn460(5, 8).toFixed(0) + "%)",
          v1863 = "hsl(195,12%," + fn460(8, 8).toFixed(0) + "%)",
          v1864 = "hsl(195,10%," + fn460(2, 3).toFixed(0) + "%)",
          v1865 = "hsl(30,44%," + fn460(39, 20).toFixed(0) + "%)",
          v1866 = "hsl(" + arg1249.color + ",78%," + fn460(34, 24).toFixed(0) + "%)",
          v1867 = "hsl(" + arg1249.color + ",62%," + fn460(18, 16).toFixed(0) + "%)",
          v1868 = "hsl(" + arg1249.color + ",42%," + fn460(6, 9).toFixed(0) + "%)",
          v1869 = "hsl(218,20%," + fn460(17, 14).toFixed(0) + "%)",
          fn461 = (arg1254, arg1255, arg1256, arg1257, arg1258 = null, arg1259 = 0) =>
            fn333(arg1254, arg1255, arg1256, arg1257, arg1258, arg1259, 0.026),
          fn462 = (arg1260, arg1261, arg1262, arg1263, arg1264 = "#", arg1265 = "|") => {
            if (arg1261.some((arg1266) => !arg1266)) return;
            let v1874 =
              arg1261.reduce((arg1267, arg1268) => arg1267 + arg1268.d, 0) / arg1261.length - 0.018;
            fn327({
              name: "cyclist-" + arg1260,
              role: "rider",
              face: arg1260,
              seed: 37 * (arg1249._id || 0) + arg1260.length,
              points: arg1261,
              depth: v1874,
              ink: arg1262,
              fill: arg1263,
              glyph: arg1264,
              edge: arg1265,
              detail: false,
            });
          };
        for (let v1875 of [v1859, v1858]) {
          (fn334(arg1249, v1854, v1875, 0.245, v1863, v1864),
            fn334(arg1249, v1855, v1875, 0.245, v1863, v1864));
          let n387 = 0.285,
            fn325Result41 = fn325(arg1249, v1854, v1875, n387),
            fn325Result42 = fn325(arg1249, v1855, v1875, n387),
            fn325Result43 = fn325(arg1249, -0.01, v1875, 0.315),
            fn325Result44 = fn325(arg1249, -0.09, v1875, 0.61),
            fn325Result45 = fn325(arg1249, 0.61 * v1855, v1875, 0.53),
            fn325Result46 = fn325(arg1249, 0.78 * v1855, v1875, 0.69);
          (fn461(fn325Result41, fn325Result43, "auto", v1860, v1862),
            fn461(fn325Result43, fn325Result42, "auto", v1860, v1862),
            fn461(fn325Result41, fn325Result44, "auto", v1861, v1862),
            fn461(fn325Result44, fn325Result43, "auto", v1861, v1862),
            fn461(fn325Result44, fn325Result45, "auto", v1860, v1862),
            fn461(fn325Result45, fn325Result42, "auto", v1860, v1862),
            fn461(fn325Result45, fn325Result46, "auto", v1861, v1862),
            fn461(
              fn325(arg1249, -0.19, v1875, 0.625),
              fn325(arg1249, 0, v1875, 0.625),
              "=",
              v1861,
              v1862,
            ));
        }
        for (let v1876 of [v1854, v1855])
          fn461(
            fn325(arg1249, v1876, v1859, 0.285),
            fn325(arg1249, v1876, v1858, 0.285),
            "=",
            v1861,
            v1862,
          );
        fn461(
          fn325(arg1249, 0.78 * v1855, -0.0779, 0.69),
          fn325(arg1249, 0.78 * v1855, 0.0779, 0.69),
          "=",
          v1861,
          v1862,
        );
        let v1870 = 4.2 * n70 + 1.73 * (arg1249._id || 0),
          sin14 = Math.sin(v1870),
          cos2 = Math.cos(v1870),
          n385 = 0.135,
          v1871 = -0.045,
          v1872 = -0.055,
          v1873 = -0.155,
          n386 = 1.015,
          fn325Result26 = fn325(arg1249, 0.055, v1858 + n385, n386),
          fn325Result27 = fn325(arg1249, 0.055, v1859 - n385, n386),
          fn325Result28 = fn325(arg1249, v1871, v1858 + n385, n386 - 0.015),
          fn325Result29 = fn325(arg1249, v1871, v1859 - n385, n386 - 0.015),
          fn325Result30 = fn325(arg1249, v1872, v1858 + 0.72 * n385, 0.735),
          fn325Result31 = fn325(arg1249, v1872, v1859 - 0.72 * n385, 0.735),
          fn325Result32 = fn325(arg1249, v1873, v1858 + 0.72 * n385, 0.75),
          fn325Result33 = fn325(arg1249, v1873, v1859 - 0.72 * n385, 0.75);
        (fn462(
          "torso-near",
          [fn325Result26, fn325Result28, fn325Result32, fn325Result30],
          v1866,
          v1868,
          "#",
          "|",
        ),
          fn462(
            "torso-far",
            [fn325Result29, fn325Result27, fn325Result31, fn325Result33],
            v1867,
            v1868,
            "#",
            "|",
          ),
          fn462(
            "torso-front",
            [fn325Result27, fn325Result26, fn325Result30, fn325Result31],
            v1866,
            v1868,
            "#",
            "/",
          ),
          fn461(fn325Result26, fn325Result27, "=", v1866, v1868, 0));
        let fn325Result34 = fn325(arg1249, 0.78 * v1855, v1858 + 0.025, 0.705),
          fn325Result35 = fn325(arg1249, 0.78 * v1855, v1859 - 0.025, 0.705);
        (fn461(fn325Result26, fn325Result34, "auto", v1865, null, 0),
          fn461(fn325Result27, fn325Result35, "auto", v1865, null, 0));
        let fn325Result36 = fn325(arg1249, -0.005, v1858 + 0.035, 0.54),
          fn325Result37 = fn325(arg1249, 0.075 * sin14 - 0.01, v1858 + 0.025, 0.315 + 0.065 * cos2),
          fn325Result38 = fn325(arg1249, -0.15, v1859 - 0.035, 0.53),
          fn325Result39 = fn325(
            arg1249,
            -0.01 - 0.075 * sin14,
            v1859 - 0.025,
            0.315 - 0.065 * cos2,
          );
        (fn461(fn325Result30, fn325Result36, "auto", v1869, null, 0),
          fn461(fn325Result36, fn325Result37, "auto", v1869, null, 0),
          fn461(fn325Result31, fn325Result38, "auto", v1869, null, 0),
          fn461(fn325Result38, fn325Result39, "auto", v1869, null, 0));
        let fn325Result40 = fn325(arg1249, 0.005, 0, 1.185);
        if (fn325Result40) {
          let max146 = Math.max(0.45, (0.105 * v19) / Math.max(0.1, fn325Result40.d)),
            max147 = Math.max(0.45, (0.125 * v17) / Math.max(0.1, fn325Result40.d)),
            max148 = Math.max(0, Math.floor(fn325Result40.c - max146)),
            min51 = Math.min(cols - 1, Math.ceil(fn325Result40.c + max146)),
            max149 = Math.max(0, Math.floor(fn325Result40.r - max147)),
            min52 = Math.min(rows - 1, Math.ceil(fn325Result40.r + max147)),
            flag32 = false;
          for (let v1877 = max149; v1877 <= min52; v1877++)
            for (let v1878 = max148; v1878 <= min51; v1878++) {
              let v1879 = (v1878 + 0.5 - fn325Result40.c) / Math.max(0.45, max146),
                v1880 = (v1877 + 0.5 - fn325Result40.r) / Math.max(0.45, max147);
              v1879 * v1879 + v1880 * v1880 > 1 ||
                !fn323(v1878, v1877, fn325Result40.d, 0.13) ||
                (fn324(
                  v1878,
                  v1877,
                  Math.abs(v1879) > 0.55 ? "o" : "@",
                  v1865,
                  Math.abs(v1879) < 0.5 ? "hsl(30,30%," + fn460(10, 7).toFixed(0) + "%)" : null,
                  fn325Result40.d - 0.025,
                ),
                (flag32 = true));
            }
          if (!flag32) {
            let round23 = Math.round(fn325Result40.c),
              round24 = Math.round(fn325Result40.r);
            fn323(round23, round24, fn325Result40.d, 0.13) &&
              fn324(round23, round24, "@", v1865, null, fn325Result40.d - 0.025);
          }
        }
        return true;
      })(arg1246, 0, arg1248);
    if ("motorbike" === fn71Result9.id)
      return (function (arg1269, arg1270, arg1271) {
        let fn71Result11 = carDims(arg1269),
          v1881 = 0.8 * fn71Result11.length * 0.5,
          v1882 = 0.92 * fn71Result11.width * 0.5,
          v1883 = 0.78 * v1881,
          v1884 = 0.78 * -v1881,
          n388 = 0.235,
          fn463 = (arg1272, arg1273) => Math.max(4, arg1272 + arg1273 * arg1271),
          v1885 = "hsl(" + arg1269.color + ",78%," + fn463(31, 24).toFixed(0) + "%)",
          v1886 = "hsl(" + arg1269.color + ",64%," + fn463(17, 18).toFixed(0) + "%)",
          v1887 = "hsl(" + arg1269.color + ",84%," + fn463(42, 26).toFixed(0) + "%)",
          v1888 = "hsl(" + arg1269.color + ",48%," + fn463(7, 11).toFixed(0) + "%)",
          v1889 = "hsl(205,22%," + fn463(31, 20).toFixed(0) + "%)",
          v1890 = "hsl(210,18%," + fn463(14, 14).toFixed(0) + "%)",
          fn330Result3 = fn330(arg1269, fn71Result11),
          v1891 = "hsl(" + fn330Result3.primary + ",94%," + fn463(49, 23).toFixed(0) + "%)";
        arr43.length = 0;
        let fn464 = (
            arg1274,
            arg1275,
            arg1276 = v1885,
            arg1277 = v1888,
            arg1278 = "#",
            arg1279 = "|",
          ) => {
            if (arg1275.some((arg1280) => !arg1280)) return;
            let v1904 =
              arg1275.reduce((arg1281, arg1282) => arg1281 + arg1282.d, 0) / arg1275.length;
            arr43.push({
              name: "bike-" + arg1274,
              role: "bike",
              face: arg1274,
              seed: (41 * (arg1269._id || 0) + 13 * arg1274.length) | 0,
              points: arg1275,
              depth: v1904,
              ink: arg1276,
              fill: arg1277,
              glyph: arg1278,
              edge: arg1279,
              detail: false,
            });
          },
          fn465 = (
            arg1283,
            arg1284,
            arg1285,
            arg1286,
            arg1287,
            arg1288,
            arg1289,
            arg1290 = v1885,
            arg1291 = v1888,
          ) => {
            let fn325Result64 = fn325(arg1269, arg1285, arg1286, arg1288),
              fn325Result65 = fn325(arg1269, arg1285, arg1287, arg1288),
              fn325Result66 = fn325(arg1269, arg1284, arg1286, arg1288),
              fn325Result67 = fn325(arg1269, arg1284, arg1287, arg1288),
              fn325Result68 = fn325(arg1269, arg1285, arg1286, arg1289),
              fn325Result69 = fn325(arg1269, arg1285, arg1287, arg1289),
              fn325Result70 = fn325(arg1269, arg1284, arg1286, arg1289),
              fn325Result71 = fn325(arg1269, arg1284, arg1287, arg1289);
            [
              fn325Result64,
              fn325Result65,
              fn325Result66,
              fn325Result67,
              fn325Result68,
              fn325Result69,
              fn325Result70,
              fn325Result71,
            ].some((arg1292) => !arg1292) ||
              (fn464(
                arg1283 + "-left",
                [fn325Result64, fn325Result66, fn325Result70, fn325Result68],
                arg1290,
                arg1291,
                "#",
                "|",
              ),
              fn464(
                arg1283 + "-right",
                [fn325Result67, fn325Result65, fn325Result69, fn325Result71],
                v1886,
                arg1291,
                "#",
                "|",
              ),
              fn464(
                arg1283 + "-front",
                [fn325Result65, fn325Result64, fn325Result68, fn325Result69],
                v1887,
                arg1291,
                "8",
                "/",
              ),
              fn464(
                arg1283 + "-rear",
                [fn325Result66, fn325Result67, fn325Result71, fn325Result70],
                v1886,
                arg1291,
                "8",
                "\\",
              ),
              fn464(
                arg1283 + "-top",
                [fn325Result68, fn325Result70, fn325Result71, fn325Result69],
                v1887,
                arg1291,
                "=",
                "-",
              ));
          };
        (fn465(
          "engine",
          -0.22,
          0.2,
          0.56 * -v1882,
          0.56 * v1882,
          0.16,
          0.46,
          v1890,
          "hsl(210,14%," + fn463(6, 8).toFixed(0) + "%)",
        ),
          fn465("tank", -0.02, 0.34, 0.72 * -v1882, 0.72 * v1882, 0.46 - 0.04, 0.67, v1885, v1888),
          fn465(
            "seat",
            -0.43,
            -0.02,
            0.76 * -v1882,
            0.76 * v1882,
            0.6,
            0.7,
            "hsl(218,16%," + fn463(18, 15).toFixed(0) + "%)",
            "hsl(215,12%," + fn463(5, 7).toFixed(0) + "%)",
          ),
          fn465("nose", 0.3, 0.49, 0.46 * -v1882, 0.46 * v1882, 0.34, 0.58, v1885, v1888),
          arr43.sort((arg1293, arg1294) => arg1294.depth - arg1293.depth));
        for (let v1905 of arr43) fn327(v1905);
        let v1892 = -(arg1269.hz || 0),
          v1893 = arg1269.hx || 0,
          v1894 = (fn321() - arg1269.x) * v1892 + (fn322() - arg1269.z) * v1893 >= 0 ? 1 : -1,
          v1895 = v1894 * v1882 * 0.96,
          v1896 = -v1895;
        (fn332(arg1269, v1884, v1896, n388, arg1271, fn330Result3.secondary),
          fn332(arg1269, v1883, v1896, n388, arg1271, fn330Result3.secondary),
          fn332(arg1269, v1884, v1895, n388, arg1271, fn330Result3.primary),
          fn332(arg1269, v1883, v1895, n388, arg1271, fn330Result3.primary));
        let fn466 = (arg1295, arg1296, arg1297, arg1298, arg1299 = 0, arg1300 = 0.026) =>
            fn331(arg1295, arg1296, arg1297, arg1298, arg1299, arg1300),
          fn325Result47 = fn325(arg1269, v1884, v1896, 0.22),
          fn325Result48 = fn325(arg1269, v1883, v1896, 0.22),
          fn325Result49 = fn325(arg1269, v1884, v1895, 0.22),
          fn325Result50 = fn325(arg1269, v1883, v1895, 0.22),
          fn325Result51 = fn325(arg1269, -0.05, v1896, 0.37),
          fn325Result52 = fn325(arg1269, -0.05, v1895, 0.37),
          fn325Result53 = fn325(arg1269, 0.39, v1896, 0.76),
          fn325Result54 = fn325(arg1269, 0.39, v1895, 0.76);
        (fn466(fn325Result47, fn325Result51, "/", v1890),
          fn466(fn325Result51, fn325Result48, "\\", v1890),
          fn466(fn325Result48, fn325Result53, "/", v1890),
          fn466(fn325Result49, fn325Result52, "/", v1889),
          fn466(fn325Result52, fn325Result50, "\\", v1891),
          fn466(fn325Result50, fn325Result54, "/", v1889),
          fn466(fn325(arg1269, -0.3, v1895, 0.64), fn325(arg1269, 0.17, v1895, 0.64), "=", v1887),
          fn466(
            fn325(arg1269, 0.39, 1.1 * -v1882, 0.8),
            fn325(arg1269, 0.39, 1.1 * v1882, 0.8),
            "=",
            v1889,
          ),
          fn466(
            fn325(arg1269, 0.45, 0.38 * -v1882, 0.52),
            fn325(arg1269, 0.45, 0.38 * v1882, 0.52),
            "=",
            v1891,
          ));
        let n389 = 0.18,
          v1897 = -0.18,
          v1898 = -0.08,
          n390 = 1.25,
          fn325Result55 = fn325(arg1269, v1898, -n389, 1.06),
          fn325Result56 = fn325(arg1269, v1898, n389, 1.06),
          fn325Result57 = fn325(arg1269, v1897, n389, 0.71),
          fn325Result58 = fn325(arg1269, v1897, -n389, 0.71),
          v1899 = "hsl(30,44%," + fn463(49, 22).toFixed(0) + "%)",
          v1900 = "hsl(" + arg1269.color + ",76%," + fn463(30, 24).toFixed(0) + "%)",
          v1901 = "hsl(" + arg1269.color + ",42%," + fn463(7, 10).toFixed(0) + "%)";
        fn325Result55 &&
          fn325Result56 &&
          fn325Result57 &&
          fn325Result58 &&
          fn327({
            name: "bike-rider-torso",
            role: "rider",
            face: "rider",
            seed: 0,
            points: [fn325Result55, fn325Result56, fn325Result57, fn325Result58],
            depth: 0.25 * (fn325Result55.d + fn325Result56.d + fn325Result57.d + fn325Result58.d),
            ink: v1900,
            fill: v1901,
            glyph: "#",
            edge: "|",
            detail: false,
          });
        let v1902 = -v1894 * n389,
          v1903 = v1894 * n389;
        (fn466(
          fn325(arg1269, v1898, v1902, 1.02),
          fn325(arg1269, 0.35, 0.88 * v1902, 0.88),
          "/",
          v1886,
        ),
          fn466(
            fn325(arg1269, 0.35, 0.88 * v1902, 0.88),
            fn325(arg1269, 0.4, 0.92 * v1902, 0.79),
            "\\",
            v1886,
          ),
          fn466(fn325(arg1269, v1897, v1902, 0.72), fn325(arg1269, 0.02, v1902, 0.53), "\\", v1886),
          fn466(fn325(arg1269, 0.02, v1902, 0.56), fn325(arg1269, -0.02, v1902, 0.34), "/", v1886),
          fn466(
            fn325(arg1269, v1898, v1903, 1.02),
            fn325(arg1269, 0.35, 0.88 * v1903, 0.88),
            "/",
            v1900,
          ),
          fn466(
            fn325(arg1269, 0.35, 0.88 * v1903, 0.88),
            fn325(arg1269, 0.4, 0.92 * v1903, 0.79),
            "\\",
            v1900,
          ),
          fn466(fn325(arg1269, v1897, v1903, 0.72), fn325(arg1269, 0.02, v1903, 0.53), "\\", v1900),
          fn466(fn325(arg1269, 0.02, v1903, 0.56), fn325(arg1269, -0.02, v1903, 0.34), "/", v1900));
        let fn325Result59 = fn325(arg1269, v1898, 0, n390),
          fn325Result60 = fn325(arg1269, v1898, -0.085, n390),
          fn325Result61 = fn325(arg1269, v1898, 0.085, n390),
          fn325Result62 = fn325(arg1269, v1898, 0, 1.35),
          fn325Result63 = fn325(arg1269, v1898, 0, 1.15);
        if (fn325Result59 && fn325Result60 && fn325Result61 && fn325Result62 && fn325Result63) {
          let max150 = Math.max(0.55, 0.5 * Math.abs(fn325Result61.c - fn325Result60.c)),
            max151 = Math.max(0.55, 0.5 * Math.abs(fn325Result63.r - fn325Result62.r)),
            max152 = Math.max(0, Math.floor(fn325Result59.c - max150)),
            min53 = Math.min(cols - 1, Math.ceil(fn325Result59.c + max150)),
            max153 = Math.max(0, Math.floor(fn325Result59.r - max151)),
            min54 = Math.min(rows - 1, Math.ceil(fn325Result59.r + max151)),
            flag33 = false;
          for (let v1906 = max153; v1906 <= min54; v1906++)
            for (let v1907 = max152; v1907 <= min53; v1907++) {
              let v1908 = (v1907 + 0.5 - fn325Result59.c) / max150,
                v1909 = (v1906 + 0.5 - fn325Result59.r) / max151,
                v1910 = v1908 * v1908 + v1909 * v1909;
              v1910 > 1 ||
                !fn323(v1907, v1906, fn325Result59.d, 0.1) ||
                (fn324(v1907, v1906, v1910 > 0.48 ? "o" : "@", v1899, null, fn325Result59.d),
                (flag33 = true));
            }
          if (!flag33) {
            let round25 = Math.round(fn325Result59.c),
              round26 = Math.round(fn325Result59.r);
            fn323(round25, round26, fn325Result59.d, 0.1) &&
              fn324(round25, round26, "@", v1899, null, fn325Result59.d);
          }
        }
        return true;
      })(arg1246, 0, arg1248);
    let v1837 = !!arg1246.authoritativeTaxi;
    arr43.length = 0;
    let v1838 = n128,
      v1839 = fn71Result9.length * v1838,
      v1840 = fn71Result9.width * v1838,
      v1841 = fn71Result9.height * n129,
      v1842 = Number.isFinite(arg1246.renderBaseY) ? arg1246.renderBaseY : 0,
      max142 = Math.max(0.31, Math.min(0.6 * v1841, 0.68)),
      v1843 = v1842 + max142,
      v1844 = v1842 + 0.055,
      max143 = Math.max(0.18, v1841 - max142),
      max144 = Math.max(0.39, v1839 * (0.27 + Math.min(0.1, 0.22 * fn71Result9.roofInset))),
      v1845 = v1840 * ("van" === fn71Result9.id ? 0.46 : "suv" === fn71Result9.id ? 0.43 : 0.39),
      v1846 =
        "van" === fn71Result9.id || "sport" === fn71Result9.id ? -0.08 * v1839 : -0.035 * v1839,
      fn456 = (arg1301, arg1302) => Math.max(4, arg1301 + arg1302 * arg1248),
      obj52 = {
        side: "hsl(" + arg1246.color + ",72%," + fn456(24, 25).toFixed(0) + "%)",
        sideDark: "hsl(" + arg1246.color + ",68%," + fn456(16, 20).toFixed(0) + "%)",
        front: "hsl(" + arg1246.color + ",78%," + fn456(31, 26).toFixed(0) + "%)",
        rear: "hsl(" + arg1246.color + ",65%," + fn456(19, 20).toFixed(0) + "%)",
        top: "hsl(" + arg1246.color + ",80%," + fn456(38, 27).toFixed(0) + "%)",
        bodyFill:
          "hsl(" +
          arg1246.color +
          "," +
          (v1837 ? 72 : 48) +
          "%," +
          (v1837 ? fn456(18, 20) : fn456(7, 13)).toFixed(0) +
          "%)",
        sideFill:
          "hsl(" +
          arg1246.color +
          "," +
          (v1837 ? 70 : 48) +
          "%," +
          (v1837 ? fn456(15, 18) : fn456(6, 11)).toFixed(0) +
          "%)",
        topFill:
          "hsl(" +
          arg1246.color +
          "," +
          (v1837 ? 76 : 50) +
          "%," +
          (v1837 ? fn456(22, 22) : fn456(9, 14)).toFixed(0) +
          "%)",
      },
      obj53 = {
        side: "hsl(202,50%," + fn456(27, 22).toFixed(0) + "%)",
        sideDark: "hsl(210,42%," + fn456(18, 17).toFixed(0) + "%)",
        front: "hsl(198,54%," + fn456(31, 23).toFixed(0) + "%)",
        rear: "hsl(214,42%," + fn456(21, 17).toFixed(0) + "%)",
        top: "hsl(205,46%," + fn456(30, 20).toFixed(0) + "%)",
        bodyFill:
          "hsl(205," +
          (v1837 ? 46 : 36) +
          "%," +
          (v1837 ? fn456(9, 13) : fn456(5, 9)).toFixed(0) +
          "%)",
        sideFill:
          "hsl(205," +
          (v1837 ? 46 : 36) +
          "%," +
          (v1837 ? fn456(8, 12) : fn456(5, 9)).toFixed(0) +
          "%)",
        topFill:
          "hsl(205," +
          (v1837 ? 48 : 38) +
          "%," +
          (v1837 ? fn456(10, 14) : fn456(6, 10)).toFixed(0) +
          "%)",
      };
    ((function (arg1303, arg1304, arg1305, arg1306, arg1307, arg1308, arg1309) {
      let v1911 = "van" === arg1309.id,
        v1912 = "suv" === arg1309.id,
        v1913 = "sport" === arg1309.id,
        v1914 = arg1307 * (v1911 ? 0.88 : v1912 ? 0.72 : v1913 ? 0.46 : 0.56),
        v1915 = arg1307 * (v1911 ? 0.94 : v1912 ? 0.91 : 0.96),
        arr106 = [
          {
            f: arg1304,
            y: v1914,
          },
          {
            f: 0.73 * arg1304,
            y: v1914 + 0.48 * (v1915 - v1914),
          },
          {
            f: 0.38 * arg1304,
            y: v1915,
          },
          {
            f: 0.4 * -arg1304,
            y: arg1307,
          },
          {
            f: -arg1304,
            y: arg1307 * (v1911 ? 0.96 : v1912 ? 0.9 : 0.82),
          },
        ],
        arr107 = [],
        arr108 = [];
      for (let v1917 of arr106)
        (arr107.push({
          b: fn325(arg1303, v1917.f, -arg1305, arg1306),
          t: fn325(arg1303, v1917.f, -arg1305, v1917.y),
        }),
          arr108.push({
            b: fn325(arg1303, v1917.f, arg1305, arg1306),
            t: fn325(arg1303, v1917.f, arg1305, v1917.y),
          }));
      if ([...arr107, ...arr108].some((arg1310) => !arg1310.b || !arg1310.t)) return;
      let fn467 = (arg1311, arg1312, arg1313, arg1314, arg1315, arg1316) => {
        let v1918 = arg1312.reduce((arg1317, arg1318) => arg1317 + arg1318.d, 0) / arg1312.length,
          v1919 = (31 * (arg1303._id || 0) + 17 * arg1311.length) | 0;
        arr43.push({
          name: "body-" + arg1311,
          role: "body",
          face: arg1311,
          seed: v1919,
          points: arg1312,
          depth: v1918,
          ink: arg1313,
          fill: arg1314,
          glyph: arg1315,
          edge: arg1316,
          detail: true,
          highlight: arg1308.top,
          seam: arg1308.sideDark,
          shadow: arg1308.rear,
        });
      };
      for (let n391 = 0; n391 < arr106.length - 1; n391++)
        (fn467(
          "left",
          [arr107[n391].b, arr107[n391 + 1].b, arr107[n391 + 1].t, arr107[n391].t],
          arg1308.side,
          arg1308.sideFill,
          "#",
          "|",
        ),
          fn467(
            "right",
            [arr108[n391 + 1].b, arr108[n391].b, arr108[n391].t, arr108[n391 + 1].t],
            arg1308.sideDark,
            arg1308.sideFill,
            "#",
            "|",
          ),
          fn467(
            "top",
            [arr107[n391].t, arr107[n391 + 1].t, arr108[n391 + 1].t, arr108[n391].t],
            arg1308.top,
            arg1308.topFill,
            "=",
            "-",
          ));
      fn467(
        "front",
        [arr108[0].b, arr107[0].b, arr107[0].t, arr108[0].t],
        arg1308.front,
        arg1308.bodyFill,
        "8",
        "/",
      );
      let v1916 = arr106.length - 1;
      fn467(
        "rear",
        [arr107[v1916].b, arr108[v1916].b, arr108[v1916].t, arr107[v1916].t],
        arg1308.rear,
        arg1308.bodyFill,
        "8",
        "\\",
      );
    })(arg1246, 0.5 * v1839, 0.5 * v1840, v1844, v1843, obj52, fn71Result9),
      (function (
        arg1319,
        arg1320,
        arg1321,
        arg1322,
        arg1323,
        arg1324,
        arg1325,
        arg1326 = 0,
        arg1327 = null,
      ) {
        let v1920 = "van" === arg1325.id,
          v1921 = "suv" === arg1325.id,
          v1922 = "sport" === arg1325.id,
          max154 = Math.max(0.12, arg1323 - arg1322),
          arr109 = [
            {
              f: arg1320 + arg1326,
              y: arg1322 + max154 * (v1920 ? 0.82 : v1921 ? 0.55 : v1922 ? 0.34 : 0.42),
              w: 0.92 * arg1321,
            },
            {
              f: 0.58 * arg1320 + arg1326,
              y: arg1322 + max154 * (v1920 ? 0.95 : v1921 ? 0.88 : v1922 ? 0.76 : 0.82),
              w: 0.98 * arg1321,
            },
            {
              f: 0.16 * arg1320 + arg1326,
              y: arg1323,
              w: arg1321,
            },
            {
              f: 0.22 * -arg1320 + arg1326,
              y: arg1323,
              w: 0.99 * arg1321,
            },
            {
              f: 0.63 * -arg1320 + arg1326,
              y: arg1322 + max154 * (v1920 ? 0.96 : v1921 ? 0.9 : v1922 ? 0.8 : 0.84),
              w: 0.96 * arg1321,
            },
            {
              f: -arg1320 + arg1326,
              y: arg1322 + max154 * (v1920 ? 0.84 : v1921 ? 0.58 : v1922 ? 0.38 : 0.46),
              w: 0.9 * arg1321,
            },
          ],
          arr110 = [],
          arr111 = [];
        for (let v1924 of arr109)
          (arr110.push({
            b: fn325(arg1319, v1924.f, -v1924.w, arg1322),
            t: fn325(arg1319, v1924.f, -v1924.w, v1924.y),
          }),
            arr111.push({
              b: fn325(arg1319, v1924.f, v1924.w, arg1322),
              t: fn325(arg1319, v1924.f, v1924.w, v1924.y),
            }));
        if ([...arr110, ...arr111].some((arg1328) => !arg1328.b || !arg1328.t)) return;
        let fn468 = (arg1329, arg1330, arg1331, arg1332, arg1333, arg1334) => {
          let v1925 = arg1330.reduce((arg1335, arg1336) => arg1335 + arg1336.d, 0) / arg1330.length,
            v1926 = (47 * (arg1319._id || 0) + 19 * arg1329.length + 211) | 0;
          arr43.push({
            name: "glass-" + arg1329,
            role: "glass",
            face: arg1329,
            seed: v1926,
            points: arg1330,
            depth: v1925,
            ink: arg1331,
            fill: arg1332,
            glyph: arg1333,
            edge: arg1334,
            detail: true,
            highlight: "hsl(200,40%,58%)",
            seam: "hsl(208,28%,30%)",
            shadow: "hsl(212,30%,16%)",
          });
        };
        for (let n392 = 0; n392 < arr109.length - 1; n392++) {
          let v1927 = 0 === n392 ? "front" : n392 === arr109.length - 2 ? "rear" : "top";
          if (
            (fn468(
              "left",
              [arr110[n392].b, arr110[n392 + 1].b, arr110[n392 + 1].t, arr110[n392].t],
              arg1324.side,
              arg1324.sideFill,
              ":",
              "|",
            ),
            fn468(
              "right",
              [arr111[n392 + 1].b, arr111[n392].b, arr111[n392].t, arr111[n392 + 1].t],
              arg1324.sideDark,
              arg1324.sideFill,
              ":",
              "|",
            ),
            arg1327 && 2 === n392)
          ) {
            let arr112 = [arr110[n392].t, arr110[n392 + 1].t, arr111[n392 + 1].t, arr111[n392].t],
              v1928 = arr112.reduce((arg1337, arg1338) => arg1337 + arg1338.d, 0) / arr112.length,
              v1929 = (53 * (arg1319._id || 0) + 29 * n392 + 317) | 0;
            arr43.push({
              name: "roof-metal-" + n392,
              role: "body",
              face: "top",
              seed: v1929,
              points: arr112,
              depth: v1928,
              ink: arg1327.top,
              fill: arg1327.topFill,
              glyph: "=",
              edge: "-",
              detail: true,
              highlight: arg1327.top,
              seam: arg1327.sideDark,
              shadow: arg1327.rear,
            });
          } else
            fn468(
              v1927,
              [arr110[n392].t, arr110[n392 + 1].t, arr111[n392 + 1].t, arr111[n392].t],
              "front" === v1927 ? arg1324.front : "rear" === v1927 ? arg1324.rear : arg1324.top,
              arg1324.topFill,
              ":",
              "-",
            );
        }
        fn468(
          "front",
          [arr111[0].b, arr110[0].b, arr110[0].t, arr111[0].t],
          arg1324.front,
          arg1324.bodyFill,
          ":",
          "/",
        );
        let v1923 = arr109.length - 1;
        fn468(
          "rear",
          [arr110[v1923].b, arr111[v1923].b, arr111[v1923].t, arr110[v1923].t],
          arg1324.rear,
          arg1324.bodyFill,
          ":",
          "\\",
        );
      })(arg1246, max144, v1845, v1843 - 0.03, v1843 + max143, obj53, fn71Result9, v1846, obj52),
      (function (arg1339, arg1340, arg1341, arg1342, arg1343, arg1344, arg1345) {
        let v1930 = (function (arg1346, arg1347) {
            let v1931 = arg1346._occupantGeneration || 0,
              v1932 = (arg1346._id || 0) + ":" + v1931 + ":" + arg1347.id;
            if (arg1346._occupants && arg1346._occupantKey === v1932) return arg1346._occupants;
            let v1933 = (function (arg1348) {
                return "sport" === arg1348.id
                  ? 2
                  : "compact" === arg1348.id || "van" === arg1348.id
                    ? 3
                    : n116;
              })(arg1347),
              v1934 =
                1 +
                Math.floor(
                  hash2(
                    431 * (arg1346._id || 0) + 977 * v1931 + 17,
                    613 * arg1347.id.length + 131 * v1931 + 29,
                  ) * v1933,
                ),
              v1935 = "sport" === arg1347.id ? 0.285 : "van" === arg1347.id ? 0.315 : 0.305,
              arr113 = [
                {
                  f: 0.09,
                  s: -v1935,
                },
                {
                  f: 0.09,
                  s: v1935,
                },
                {
                  f: -0.17,
                  s: -v1935,
                },
                {
                  f: -0.17,
                  s: v1935,
                },
              ],
              sort = arr113
                .slice(1)
                .map((arg1349, arg1350) => ({
                  seat: arg1349,
                  rank: hash2(719 * (arg1346._id || 0) + 83 * v1931, 977 * arg1350 + 53),
                }))
                .sort((arg1351, arg1352) => arg1351.rank - arg1352.rank),
              arr114 = [
                arr113[0],
                ...sort.slice(0, Math.max(0, v1934 - 1)).map((arg1353) => arg1353.seat),
              ];
            return (
              (arg1346._occupants = arr114.map((arg1354, arg1355) => ({
                f: arg1354.f,
                s: arg1354.s,
                hue: arr4[
                  Math.floor(
                    hash2(
                      887 * (arg1346._id || 0) + 101 * v1931 + 31 * arg1355,
                      557 * arg1355 + 71,
                    ) * arr4.length,
                  ) % arr4.length
                ],
                headTone:
                  34 +
                  Math.floor(20 * hash2(991 * (arg1346._id || 0) + 43 * arg1355, 211 * v1931 + 97)),
                glyph: "H8#@"[
                  Math.floor(4 * hash2(353 * (arg1346._id || 0) + 59 * arg1355, 271 * v1931 + 41)) %
                    4
                ],
              }))),
              (arg1346._occupantKey = v1932),
              arg1346._occupants
            );
          })(arg1339, arg1344),
          max155 = Math.max(0.16, arg1343 - arg1342);
        for (let n393 = 0; n393 < v1930.length; n393++) {
          let v1936 = v1930[n393],
            v1937 = v1936.f * arg1340,
            v1938 = v1936.s * arg1341,
            fn325Result72 = fn325(
              arg1339,
              v1937,
              v1938,
              arg1342 + max155 * ("sport" === arg1344.id ? 0.72 : 0.77),
            );
          fn325Result72 &&
            arr43.push({
              name: "occupant-" + n393,
              role: "occupant",
              face: "occupant",
              depth: fn325Result72.d,
              car: arg1339,
              occupant: v1936,
              forward: v1937,
              side: v1938,
              bodyTop: arg1342,
              cabinTop: arg1343,
              width: arg1341,
              brightness: arg1345,
              profile: arg1344,
            });
        }
      })(arg1246, v1839, v1840, v1843, v1843 + max143, fn71Result9, arg1248));
    let fn325Result23 = fn325(arg1246, 0, 0, v1843 + 0.02),
      v1847 = fn325Result23 ? fn325Result23.d : arg1247,
      arr101 = [],
      arr102 = [],
      arr103 = [],
      arr104 = [],
      arr105 = [];
    for (let v1939 of arr43)
      "occupant" !== v1939.role
        ? "glass" !== v1939.role
          ? (v1939.depth >= v1847 ? arr101 : arr102).push(v1939)
          : (v1939.depth >= v1847 ? arr103 : arr104).push(v1939)
        : arr105.push(v1939);
    let fn457 = (arg1356, arg1357) => arg1357.depth - arg1356.depth;
    (arr101.sort(fn457),
      arr103.sort(fn457),
      arr105.sort(fn457),
      arr104.sort(fn457),
      arr102.sort(fn457));
    let fn330Result = fn330(arg1246, fn71Result9),
      fn458 = (arg1358) => {
        if ((fn327(arg1358), "body-rear" === arg1358.name)) {
          let v1940 =
              "hsl(" +
              ("taxi" === fn71Result9.id ? 340 : 328) +
              ",92%," +
              (48 + Math.round(20 * arg1248)) +
              "%)",
            v1941 = v1842 + 0.5 * max142;
          fn331(
            fn325(arg1246, 0.507 * -v1839, 0.36 * -v1840, v1941),
            fn325(arg1246, 0.507 * -v1839, 0.36 * v1840, v1941),
            "=",
            v1940,
            0,
            0.012,
          );
        }
      };
    for (let v1942 of arr101) fn458(v1942);
    for (let v1943 of arr103) fn327(v1943);
    for (let v1944 of arr105) fn328(v1944);
    for (let v1945 of arr104) fn327(v1945);
    for (let v1946 of arr102) fn458(v1946);
    let v1848 = -(arg1246.hz || 0),
      v1849 = arg1246.hx || 0,
      v1850 = (fn321() - arg1246.x) * v1848 + (fn322() - arg1246.z) * v1849 >= 0 ? 1 : -1;
    !(function (arg1359, arg1360, arg1361, arg1362, arg1363, arg1364, arg1365, arg1366, arg1367) {
      let fn469 = (arg1368, arg1369 = 64, arg1370 = 94) =>
          "hsl(" + arg1368 + "," + arg1370 + "%," + (arg1369 + Math.round(18 * arg1365)) + "%)",
        fn469Result = fn469(arg1367.primary, 56),
        fn469Result2 = fn469(arg1367.secondary, 50),
        v1947 = Number.isFinite(arg1359.renderBaseY) ? arg1359.renderBaseY : 0,
        v1948 = arg1362 - v1947,
        fn470 = (arg1371) => v1947 + v1948 * arg1371,
        v1949 = arg1366 * arg1361 * 0.514,
        fn325Result73 = fn325(arg1359, 0.31 * arg1360, v1949, fn470(0.31)),
        fn325Result74 = fn325(arg1359, 0.08 * arg1360, v1949, fn470(0.31)),
        fn325Result75 = fn325(arg1359, 0.24 * -arg1360, v1949, fn470(0.46)),
        fn325Result76 = fn325(arg1359, 0.39 * -arg1360, v1949, fn470(0.46));
      (fn331(fn325Result73, fn325Result74, "=", fn469Result, 0),
        fn331(fn325Result74, fn325Result75, "/", fn469Result, 0),
        fn331(fn325Result75, fn325Result76, "=", fn469Result, 0));
      let v1950 = "sport" === arg1364.id ? fn469Result2 : fn469Result;
      (fn331(
        fn325(arg1359, 0.18 * arg1360, v1949, fn470(0.73)),
        fn325(arg1359, 0.28 * -arg1360, v1949, fn470(0.73)),
        "-",
        v1950,
        0,
      ),
        fn331(
          fn325(arg1359, 0.22 * arg1360, v1949, arg1363 + 0.045),
          fn325(arg1359, 0.32 * -arg1360, v1949, arg1363 + 0.045),
          "_",
          fn469Result2,
          0,
        ));
      let fn470Result = fn470(
          "van" === arg1364.id
            ? 0.62
            : "suv" === arg1364.id
              ? 0.5
              : "sport" === arg1364.id
                ? 0.32
                : 0.39,
        ),
        v1951 = arg1361 * ("van" === arg1364.id ? 0.31 : 0.36);
      if (
        (fn331(
          fn325(arg1359, 0.507 * arg1360, -v1951, fn470Result),
          fn325(arg1359, 0.507 * arg1360, v1951, fn470Result),
          "=",
          fn469Result,
          0,
          0.045,
        ),
        "taxi" === arg1364.id || "compact" === arg1364.id)
      ) {
        let fn325Result77 = fn325(arg1359, 0.17 * -arg1360, v1949, fn470(0.55));
        fn325Result77 &&
          fn323(
            Math.round(fn325Result77.c),
            Math.round(fn325Result77.r),
            fn325Result77.d - 0.04,
            0.12,
          ) &&
          fn324(
            Math.round(fn325Result77.c),
            Math.round(fn325Result77.r),
            "%",
            fn469Result2,
            null,
            fn325Result77.d - 0.04,
          );
      } else
        "sport" === arg1364.id &&
          fn331(
            fn325(arg1359, 0.12 * -arg1360, v1949, fn470(0.28)),
            fn325(arg1359, 0.3 * -arg1360, v1949, fn470(0.58)),
            "/",
            fn469Result2,
            0,
          );
    })(arg1246, v1839, v1840, v1843, v1844, fn71Result9, arg1248, v1850, fn330Result);
    let v1851 =
        v1842 +
        max142 *
          ("van" === fn71Result9.id
            ? 0.62
            : "suv" === fn71Result9.id
              ? 0.5
              : "sport" === fn71Result9.id
                ? 0.32
                : 0.39),
      fn325Result24 = fn325(arg1246, 0.505 * v1839, 0, v1851),
      fn325Result25 = fn325(arg1246, 0.505 * -v1839, 0, v1842 + 0.5 * max142),
      fn459 = (arg1372, arg1373, arg1374) => {
        if (!arg1372) return;
        let round27 = Math.round(arg1372.c),
          round28 = Math.round(arg1372.r);
        fn323(round27, round28, arg1372.d, 0) &&
          fn324(round27, round28, arg1373, arg1374, null, arg1372.d);
      };
    (fn459(fn325Result24, "0", "hsl(52,92%," + fn456(54, 28).toFixed(0) + "%)"),
      fn459(fn325Result25, "0", "hsl(4,88%," + fn456(38, 28).toFixed(0) + "%)"));
    let v1852 = v1850 * v1840 * 0.515,
      max145 = Math.max(0.14, Math.min(0.27, 0.235 * v1841));
    return (
      fn332(arg1246, 0.31 * v1839, v1852, max145, arg1248, fn330Result.primary),
      fn332(arg1246, 0.31 * -v1839, v1852, max145, arg1248, fn330Result.primary),
      true
    );
  }
  function fn336(arg1375, arg1376, arg1377, arg1378) {
    let round29 = Math.round(arg1377),
      fn71Result12 = carDims(arg1375),
      fn191Result6 = fn191(),
      fn10Result9 = fn10(fn71Result12.height, arg1376, fn191Result6),
      fn10Result10 = fn10(0, arg1376, fn191Result6),
      max156 = Math.max(0, Math.ceil(fn10Result9)),
      min55 = Math.min(rows - 1, Math.floor(fn10Result10));
    if (max156 > min55) return;
    let v1952 = min55 - max156 + 1,
      v1953 = "hsl(" + arg1375.color + ",72%," + (20 + 18 * arg1378).toFixed(0) + "%)",
      v1954 = "hsl(" + arg1375.color + ",78%," + (36 + 23 * arg1378).toFixed(0) + "%)",
      v1955 = "hsl(" + arg1375.color + ",48%," + (8 + 13 * arg1378).toFixed(0) + "%)",
      v1956 = "hsl(202,48%," + (34 + 19 * arg1378).toFixed(0) + "%)",
      v1957 = "hsl(205,36%," + (7 + 10 * arg1378).toFixed(0) + "%)",
      v1958 = "hsl(0,0%," + (5 + 9 * arg1378).toFixed(0) + "%)",
      v1959 = "hsl(52,90%," + (58 + 25 * arg1378).toFixed(0) + "%)",
      v1960 = "hsl(4,86%," + (42 + 24 * arg1378).toFixed(0) + "%)",
      fn74Result = fn74(arg1375, view.x - arg1375.x, view.z - arg1375.z),
      fn73Result = fn73(arg1375, fn71Result12, n119, n120),
      v1961 =
        (Math.max(0.78 * fn71Result12.width, 0.96 * fn73Result) * (cols / 2)) /
        (arg1376 * Math.tan(v18 / 2)),
      round30 = Math.round(arg1377 - v1961 / 2),
      round31 = Math.round(arg1377 + v1961 / 2);
    if (round31 < -3 || round30 > cols - 1 + 3) return;
    let max157 = Math.max(0, round30),
      min56 = Math.min(cols - 1, round31);
    if (max157 > min56) return;
    let v1962 = min56 - max157 + 1,
      max158 = Math.max(max157, Math.min(min56, round29)),
      fn471 = (arg1379, arg1380, arg1381, arg1382, arg1383 = null) => {
        ((arg1384) => arg1384 >= 0 && arg1384 < cols && float32Array[arg1384] >= arg1376)(
          arg1379,
        ) &&
          (glyphsEnabled && arg1383 && fn263(arg1379, arg1380, arg1383),
          fn264(arg1379, arg1380, arg1381, arg1382));
      };
    if (
      arg1375._volumeFrame &&
      v1952 >= 5 &&
      ("motorbike" === fn71Result12.id || "cyclist" === fn71Result12.id
        ? v1962 >= 2
        : v1962 >= 5) &&
      fn335(arg1375, arg1376, arg1378)
    )
      return;
    if (v1952 <= 2 || v1962 <= 1)
      return void fn471(
        max158,
        min55,
        "cyclist" === fn71Result12.id || "motorbike" === fn71Result12.id
          ? "i"
          : "van" === fn71Result12.id
            ? "#"
            : "suv" === fn71Result12.id
              ? "8"
              : fn71Result12.glyph,
        v1954,
        glyphsEnabled && "motorbike" !== fn71Result12.id ? v1955 : null,
      );
    if ("cyclist" === fn71Result12.id) {
      let max160 = Math.max(max157, Math.min(min56, round29)),
        v1971 = max156,
        v1972 = min55,
        fn472 = (arg1385, arg1386, arg1387, arg1388, arg1389 = null) => {
          arg1385 < 0 ||
            arg1385 >= cols ||
            arg1386 < 0 ||
            arg1386 >= rows ||
            float32Array[arg1385] < arg1376 ||
            (glyphsEnabled && arg1389 && fn263(arg1385, arg1386, arg1389),
            fn264(arg1385, arg1386, arg1387, arg1388));
        },
        v1973 = "hsl(30,44%," + (45 + 20 * arg1378).toFixed(0) + "%)",
        v1974 = "hsl(" + arg1375.color + ",78%," + (36 + 23 * arg1378).toFixed(0) + "%)",
        v1975 = "hsl(" + arg1375.color + ",74%," + (31 + 22 * arg1378).toFixed(0) + "%)",
        v1976 = "hsl(195,12%," + (8 + 9 * arg1378).toFixed(0) + "%)",
        max161 = Math.max(
          v1971 + 1,
          Math.min(v1972 - 1, Math.floor(fn10(0.64, arg1376, fn191Result6))),
        );
      fn472(max160, v1971, "@", v1973);
      for (let v1977 = v1971 + 1; v1977 <= max161; v1977++)
        fn472(
          max160,
          v1977,
          v1977 === max161 ? "Y" : "|",
          v1974,
          v1977 === v1971 + 1
            ? "hsl(" + arg1375.color + ",38%," + (6 + 8 * arg1378).toFixed(0) + "%)"
            : null,
        );
      return void (v1962 >= 3
        ? (fn472(max157, v1972, "O", v1976),
          fn472(min56, v1972, "O", v1976),
          fn472(max160, Math.max(v1971 + 2, v1972 - 1), "=", v1975))
        : fn472(max160, v1972, "O", v1976));
    }
    if ("motorbike" === fn71Result12.id) {
      let max162 = Math.max(max157, Math.min(min56, round29)),
        v1978 = max156,
        v1979 = min55,
        max163 = Math.max(
          v1978 + 2,
          Math.min(v1979 - 1, Math.floor(fn10(0.68, arg1376, fn191Result6))),
        ),
        max164 = Math.max(1, max163 - v1978 + 1),
        v1980 = ((cols / 2) * 0.46) / (arg1376 * Math.tan(v18 / 2)),
        max165 = Math.max(0, Math.round(arg1377 - v1980 / 2)),
        min60 = Math.min(cols - 1, Math.round(arg1377 + v1980 / 2)),
        max166 = Math.max(1, min60 - max165 + 1),
        v1981 = max165 + Math.floor(max166 / 3),
        v1982 = min60 - Math.floor(max166 / 3),
        fn473 = (arg1390, arg1391, arg1392, arg1393, arg1394 = null) => {
          arg1390 < 0 ||
            arg1390 >= cols ||
            arg1391 < 0 ||
            arg1391 >= rows ||
            float32Array[arg1390] < arg1376 ||
            (glyphsEnabled && arg1394 && fn263(arg1390, arg1391, arg1394),
            fn264(arg1390, arg1391, arg1392, arg1393));
        },
        v1983 = "hsl(30,44%," + (46 + 20 * arg1378).toFixed(0) + "%)",
        v1984 = "hsl(" + arg1375.color + ",80%," + (37 + 24 * arg1378).toFixed(0) + "%)",
        v1985 = "hsl(" + arg1375.color + ",66%," + (19 + 16 * arg1378).toFixed(0) + "%)",
        v1986 = "hsla(" + arg1375.color + ",48%," + (7 + 11 * arg1378).toFixed(0) + "%,.90)",
        v1987 = "hsl(" + arg1375.color + ",76%," + (34 + 23 * arg1378).toFixed(0) + "%)",
        v1988 = "hsl(" + arg1375.color + ",48%," + (7 + 12 * arg1378).toFixed(0) + "%)",
        v1989 = "hsl(0,0%," + (5 + 8 * arg1378).toFixed(0) + "%)",
        sHsl00 = "hsl(0,0%,4%)";
      if (v1952 <= 2) return void fn473(max162, v1979, "o", v1987);
      if (max164 <= 3)
        (fn473(max162, v1978, "@", v1983),
          v1978 + 1 <= max163 && fn473(max162, v1978 + 1, "#", v1984, v1986));
      else {
        for (let v1992 = v1981; v1992 <= v1982; v1992++) fn473(v1992, v1978, "@", v1983);
        let min62 = Math.min(max163, v1978 + 1);
        fn473(max165, min62, "/", v1985);
        for (let v1993 = v1981; v1993 <= v1982; v1993++) fn473(v1993, min62, "|", v1984, v1986);
        fn473(min60, min62, "\\", v1985);
        let min63 = Math.min(
          max163 - 1,
          Math.max(min62 + 1, v1978 + Math.round(0.55 * (max163 - v1978))),
        );
        for (let v1994 = min62 + 1; v1994 <= min63; v1994++) {
          fn473(max165, v1994, "|", v1985);
          for (let v1995 = v1981; v1995 <= v1982; v1995++) fn473(v1995, v1994, "#", v1984, v1986);
          fn473(min60, v1994, "|", v1985);
        }
        if (min63 < max163) {
          let v1996 = max165 + Math.floor(max166 / 4),
            v1997 = min60 - Math.floor(max166 / 4);
          for (let v1998 = min63 + 1; v1998 <= max163; v1998++)
            (fn473(v1996, v1998, "side" === fn74Result.mode ? "\\" : "/", v1985),
              fn473(v1997, v1998, "side" === fn74Result.mode ? "/" : "\\", v1985));
        }
      }
      let max167 = Math.max(v1978, Math.min(v1979 - 1, max163));
      if ("side" !== fn74Result.mode || v1962 < 4)
        return (
          fn473(max162, max167, "#", v1987, v1988),
          v1962 >= 3 &&
            (fn473(max162 - 1, max167, "/", v1987), fn473(max162 + 1, max167, "\\", v1987)),
          max167 + 1 < v1979 && fn473(max162, max167 + 1, "V", v1987, v1988),
          void fn473(max162, v1979, "O", v1989, sHsl00)
        );
      let v1990 = max157 + Math.max(0, Math.round(0.1 * (v1962 - 1))),
        v1991 = max157 + Math.round(0.9 * (v1962 - 1)),
        round32 = Math.round((v1990 + v1991) / 2);
      (fn473(v1990, v1979, "O", v1989, sHsl00), fn473(v1991, v1979, "O", v1989, sHsl00));
      for (let v1999 = v1990 + 1; v1999 < v1991; v1999++) fn473(v1999, max167, "=", v1987, v1988);
      let min61 = Math.min(v1979 - 1, max167 + 1);
      for (let v2000 = v1990 + 1; v2000 < v1991; v2000++)
        !((v2000 - v1990) & 1) && fn473(v2000, min61, v2000 < round32 ? "\\" : "/", v1987);
      return void fn473(round32, min61, "#", v1987, v1988);
    }
    if (v1952 <= 4 || v1962 <= 3) {
      let v2001 =
        "van" === fn71Result12.id
          ? "#"
          : "suv" === fn71Result12.id
            ? "8"
            : "taxi" === fn71Result12.id
              ? "T"
              : "=";
      for (let max168 = Math.max(max156, min55 - 1); max168 <= min55; max168++)
        for (let v2002 = max157; v2002 <= min56; v2002++) fn471(v2002, max168, v2001, v1954, v1955);
      return;
    }
    let min57 = Math.min(
        Math.floor((v1962 - 1) / 2),
        Math.max(0, Math.floor(v1962 * fn71Result12.roofInset)),
      ),
      v1963 = (arg1375.hx || 0) * n119 + (arg1375.hz || 0) * n120 >= 0,
      v1964 = fn74Result.front ? v1963 : !v1963,
      v1965 =
        "three" === fn74Result.mode
          ? Math.max(0.18, 1 - Math.abs(fn74Result.endness - 0.55) / 0.45)
          : 0,
      v1966 =
        "three" === fn74Result.mode ? Math.max(1, Math.round(v1962 * (0.14 + 0.1 * v1965))) : 0,
      v1967 = v1964 ? Math.max(max157, min56 - v1966 + 1) : max157,
      v1968 = v1964 ? min56 : Math.min(min56, max157 + v1966 - 1),
      v1969 = max157 + min57,
      v1970 = min56 - min57;
    if ("three" === fn74Result.mode) {
      let max169 = Math.max(1, Math.round(0.08 * v1962));
      v1964
        ? ((v1969 = Math.max(max157, v1969 - max169)), (v1970 = Math.max(v1969, v1970 - max169)))
        : ((v1969 = Math.min(v1970, v1969 + max169)), (v1970 = Math.min(min56, v1970 + max169)));
    }
    let max159 = Math.max(
        1,
        Math.min(
          v1952 - 2,
          Math.round(
            v1952 * ("van" === fn71Result12.id ? 0.34 : "suv" === fn71Result12.id ? 0.28 : 0.22),
          ),
        ),
      ),
      min58 = Math.min(min55, max156 + Math.max(1, max159 - 1)),
      min59 = Math.min(min55 - 1, min58 + Math.max(1, Math.round(0.19 * v1952)));
    if ("taxi" === fn71Result12.id && v1969 <= v1970)
      fn471(
        Math.round((v1969 + v1970) / 2),
        max156,
        "T",
        "hsl(48,95%," + (58 + 20 * arg1378).toFixed(0) + "%)",
        v1955,
      );
    else
      for (let v2003 = v1969; v2003 <= v1970; v2003++)
        fn471(v2003, max156, "sport" === fn71Result12.id ? "_" : "-", v1954, v1955);
    for (let v2004 = max156 + 1; v2004 <= min55; v2004++) {
      let v2005 = v2004 >= min58 && v2004 <= min59,
        v2006 = v2004 === min55,
        v2007 = (v2004 - max156) / Math.max(1, v1952 - 1),
        v2008 = max157,
        v2009 = min56;
      if ("three" === fn74Result.mode && v2004 <= min59 + 1) {
        let max170 = Math.max(0, Math.round((1 - v2007) * v1966 * 0.55));
        v1964
          ? (v2008 = Math.min(v2009, v2008 + max170))
          : (v2009 = Math.max(v2008, v2009 - max170));
      }
      for (let v2010 = v2008; v2010 <= v2009; v2010++) {
        let v2011 = "three" === fn74Result.mode && v2010 >= v1967 && v2010 <= v1968;
        if (v2005) {
          if (v2010 < v1969 || v2010 > v1970) continue;
          let v2014 = v2010 === v1969 || v2010 === v1970,
            v2015 = v2014 ? "|" : ":",
            v2016 = v2014 ? v1953 : v1956;
          ("three" === fn74Result.mode &&
            v2014 &&
            (v2015 = v1964 ? (v2010 === v1970 ? "\\" : "/") : v2010 === v1969 ? "/" : "\\"),
            fn471(v2010, v2004, v2015, v2016, v2014 ? v1955 : v1957));
          continue;
        }
        let flag34 = false;
        if (v2006)
          if ("side" === fn74Result.mode) {
            let v2017 = max157 + Math.round(0.2 * (v1962 - 1)),
              v2018 = max157 + Math.round(0.8 * (v1962 - 1)),
              max171 = Math.max(0, Math.floor(0.06 * v1962));
            flag34 = Math.abs(v2010 - v2017) <= max171 || Math.abs(v2010 - v2018) <= max171;
          } else if ("three" === fn74Result.mode) {
            let v2019 = max157 + Math.round(0.18 * (v1962 - 1)),
              v2020 = max157 + Math.round(0.78 * (v1962 - 1)),
              max172 = Math.max(0, Math.floor(0.055 * v1962));
            flag34 = Math.abs(v2010 - v2019) <= max172 || Math.abs(v2010 - v2020) <= max172;
          } else
            flag34 =
              v2010 <= max157 + Math.max(0, Math.floor(0.12 * v1962)) ||
              v2010 >= min56 - Math.max(0, Math.floor(0.12 * v1962));
        if (flag34) {
          fn471(v2010, v2004, "o", v1958, "hsl(0,0%,4%)");
          continue;
        }
        let v2012 = "van" === fn71Result12.id ? "#" : "suv" === fn71Result12.id ? "8" : "=",
          v2013 = v2010 > max157 + 0.28 * v1962 && v2010 < min56 - 0.28 * v1962 ? v1954 : v1953,
          min64 = Math.min(min55 - 1, min59 + 1);
        ("three" === fn74Result.mode && v2011
          ? ((v2012 = v2010 === v1967 || v2010 === v1968 ? (v1964 ? "\\" : "/") : "#"),
            (v2013 = v1953),
            v2004 === min64 &&
              (v2010 === v1967 || v2010 === v1968) &&
              ((v2012 = "0"), (v2013 = fn74Result.front ? v1959 : v1960)))
          : v2004 !== min64 || (v2010 !== max157 && v2010 !== min56) || "end" !== fn74Result.mode
            ? v2004 === min64 &&
              "taxi" === fn71Result12.id &&
              Math.abs(v2010 - (max157 + min56) / 2) < 1 &&
              ((v2012 = "T"), (v2013 = "hsl(48,92%," + (54 + 20 * arg1378).toFixed(0) + "%)"))
            : ((v2012 = "0"), (v2013 = fn74Result.front ? v1959 : v1960)),
          fn471(v2010, v2004, v2012, v2013, v1955));
      }
    }
  }
  function fn337(arg1395, arg1396) {
    if ((arg1395._depth || Math.hypot(arg1395.x - view.x, arg1395.z - view.z)) > 26)
      return void fn312(arg1395, arg1396);
    let v2021 = arg1395.y || 0,
      v2022 = arg1395.h || 2.8,
      v2023 = arg1395.signalFacingSign || 1,
      arr115 = [],
      fn78Result2 = fn78(arg1395.signalWorldX, arg1395.signalWorldZ, arg1395.signalAxis);
    (fn363(
      arr115,
      arg1395,
      0,
      0,
      v2021,
      v2021 + 0.78 * v2022,
      0.055,
      0.055,
      5201,
      "signal_pole",
      false,
    ),
      fn363(
        arr115,
        arg1395,
        0,
        0,
        v2021,
        v2021 + 0.07 * v2022,
        0.15,
        0.15,
        5211,
        "signal_base",
        true,
      ),
      fn363(
        arr115,
        arg1395,
        0,
        0.09 * v2023,
        v2021 + 0.66 * v2022,
        v2021 + 0.71 * v2022,
        0.05,
        0.12,
        5221,
        "signal_bracket",
        false,
      ),
      fn363(
        arr115,
        arg1395,
        0,
        0.18 * v2023,
        v2021 + 0.48 * v2022,
        v2021 + 0.7 * v2022,
        0.12,
        0.09,
        5231,
        "signal_head",
        true,
      ),
      fn363(
        arr115,
        arg1395,
        0,
        0.265 * v2023,
        v2021 + 0.67 * v2022,
        v2021 + 0.705 * v2022,
        0.14,
        0.022,
        5237,
        "signal_hood",
        false,
      ));
    let v2024 = 0.286 * v2023,
      n394 = 0.018,
      n395 = 0.055;
    (fn363(
      arr115,
      arg1395,
      0,
      v2024,
      v2021 + 0.635 * v2022,
      v2021 + 0.675 * v2022,
      n395,
      n394,
      5241,
      "signal_red",
      false,
    ),
      fn363(
        arr115,
        arg1395,
        0,
        v2024,
        v2021 + 0.565 * v2022,
        v2021 + 0.605 * v2022,
        n395,
        n394,
        5251,
        "signal_amber",
        false,
      ),
      fn363(
        arr115,
        arg1395,
        0,
        v2024,
        v2021 + 0.495 * v2022,
        v2021 + 0.535 * v2022,
        n395,
        n394,
        5261,
        "signal_green",
        false,
      ));
    let v2025 =
      (31 * Math.floor(toWorldX(arg1395.x)) + 17 * Math.floor(toWorldZ(arg1395.z))) & 1 ? 1 : -1;
    (fn363(
      arr115,
      arg1395,
      0.14 * v2025,
      0.06 * v2023,
      v2021 + 0.31 * v2022,
      v2021 + 0.44 * v2022,
      0.07,
      0.05,
      5271,
      "ped_box",
      true,
    ),
      fn363(
        arr115,
        arg1395,
        0.14 * v2025,
        0.11 * v2023,
        v2021 + 0.365 * v2022,
        v2021 + 0.395 * v2022,
        0.04,
        0.014,
        5281,
        "ped_lens",
        false,
      ),
      fn365(arr115, arg1396, (arg1397, arg1398) =>
        "signal_red" === arg1397.styleBase
          ? {
              glyph: "R",
              texelDensity: 10,
              color:
                "red" === fn78Result2
                  ? "hsl(0,92%," + (48 + 30 * arg1398).toFixed(0) + "%)"
                  : "hsl(0,48%," + (20 + 10 * arg1398).toFixed(0) + "%)",
              fill: "hsl(0,55%," + (4 + 6 * arg1398).toFixed(0) + "%)",
            }
          : "signal_amber" === arg1397.styleBase
            ? {
                glyph: "A",
                texelDensity: 10,
                color:
                  "amber" === fn78Result2
                    ? "hsl(42,95%," + (48 + 28 * arg1398).toFixed(0) + "%)"
                    : "hsl(42,42%," + (22 + 10 * arg1398).toFixed(0) + "%)",
                fill: "hsl(34,45%," + (4 + 6 * arg1398).toFixed(0) + "%)",
              }
            : "signal_green" === arg1397.styleBase
              ? {
                  glyph: "G",
                  texelDensity: 10,
                  color:
                    "green" === fn78Result2
                      ? "hsl(120,86%," + (42 + 26 * arg1398).toFixed(0) + "%)"
                      : "hsl(120,38%," + (20 + 9 * arg1398).toFixed(0) + "%)",
                  fill: "hsl(118,42%," + (4 + 6 * arg1398).toFixed(0) + "%)",
                }
              : "ped_lens" === arg1397.styleBase
                ? {
                    color: "hsl(188,82%," + (34 + 22 * arg1398).toFixed(0) + "%)",
                    fill: "hsl(205,44%," + (4 + 6 * arg1398).toFixed(0) + "%)",
                  }
                : "signal_head" === arg1397.styleBase ||
                    "signal_hood" === arg1397.styleBase ||
                    "ped_box" === arg1397.styleBase
                  ? {
                      color:
                        "hsl(205,10%," +
                        Math.max(16, 26 + 16 * arg1398 - 100 * arg1397.shade).toFixed(0) +
                        "%)",
                      fill: "hsl(210,16%," + (4 + 5 * arg1398).toFixed(0) + "%)",
                    }
                  : {
                      color:
                        "hsl(210,10%," +
                        Math.max(14, 28 + 17 * arg1398 - 100 * arg1397.shade).toFixed(0) +
                        "%)",
                      fill: "hsl(215,15%," + (4 + 5 * arg1398).toFixed(0) + "%)",
                    },
      ));
  }
  function fn338(arg1399, arg1400, arg1401, arg1402) {
    let round33 = Math.round(arg1401);
    if (round33 < 0 || round33 >= cols || float32Array[round33] < arg1400) return;
    let fn191Result7 = fn191(),
      fn10Result11 = fn10(arg1399.h, arg1400, fn191Result7),
      fn10Result12 = fn10(0, arg1400, fn191Result7),
      max173 = Math.max(0, Math.ceil(fn10Result11)),
      min65 = Math.min(rows - 1, Math.floor(fn10Result12));
    if (max173 > min65) return;
    let v2026 = min65 - max173 + 1,
      fn474 = (arg1403) => arg1403 >= 0 && arg1403 < cols && float32Array[arg1403] >= arg1400,
      v2027 = "hsl(52,95%," + (60 + 16 * arg1402).toFixed(0) + "%)",
      v2028 = "hsl(220,10%," + (14 + 18 * arg1402).toFixed(0) + "%)",
      v2029 = "hsl(220,12%," + (30 + 18 * arg1402).toFixed(0) + "%)";
    if (v2026 <= 2) return void fn264(round33, min65, "O", v2027);
    let v2030 = v2026 >= 4,
      v2031 = v2026 >= 9;
    (v2030 && fn474(round33 - 1) && fn264(round33 - 1, max173, "[", v2027),
      fn264(round33, max173, "O", v2027),
      v2030 && fn474(round33 + 1) && fn264(round33 + 1, max173, "]", v2027));
    for (let v2032 = max173 + 1; v2032 < min65; v2032++)
      (v2031 && fn474(round33 - 1) && fn264(round33 - 1, v2032, "|", v2028),
        fn264(round33, v2032, "#", v2029),
        v2030 && fn474(round33 + 1) && fn264(round33 + 1, v2032, "|", v2028));
    (v2030 && fn474(round33 - 1) && fn264(round33 - 1, min65, "=", v2029),
      fn264(round33, min65, "=", v2029),
      v2030 && fn474(round33 + 1) && fn264(round33 + 1, min65, "=", v2029));
  }
  var n130 = 11.5,
    n131 = 0.3,
    freeze30 = Object.freeze([
      Object.freeze({
        name: "ROUND",
        trunk: 0.5,
        farWidth: 1,
        farCanopy: 0.4,
        clusters: [
          [0, 0, 0.62, 0.62, 0.57, 0.54],
          [-0.42, 0.05, 0.5, 0.5, 0.45, 0.43],
          [0.4, -0.06, 0.48, 0.49, 0.46, 0.42],
          [0.05, 0.38, 0.43, 0.46, 0.48, 0.4],
          [-0.08, -0.36, 0.45, 0.45, 0.46, 0.4],
        ],
      }),
      Object.freeze({
        name: "COLUMNAR",
        trunk: 0.58,
        farWidth: 0.74,
        farCanopy: 0.34,
        clusters: [
          [0, 0, 0.76, 0.43, 0.4, 0.48],
          [-0.22, 0.02, 0.57, 0.38, 0.36, 0.42],
          [0.2, -0.04, 0.52, 0.38, 0.36, 0.41],
          [0.03, 0.2, 0.37, 0.36, 0.38, 0.36],
          [-0.04, -0.18, 0.32, 0.35, 0.36, 0.34],
        ],
      }),
      Object.freeze({
        name: "SPREADING",
        trunk: 0.43,
        farWidth: 1.24,
        farCanopy: 0.45,
        clusters: [
          [0, 0, 0.61, 0.58, 0.52, 0.48],
          [-0.62, 0.05, 0.42, 0.5, 0.44, 0.38],
          [0.62, -0.06, 0.41, 0.5, 0.44, 0.38],
          [-0.34, 0.42, 0.36, 0.46, 0.43, 0.35],
          [0.35, -0.4, 0.37, 0.46, 0.43, 0.35],
        ],
      }),
      Object.freeze({
        name: "ASYMMETRIC",
        trunk: 0.52,
        farWidth: 0.94,
        farCanopy: 0.39,
        clusters: [
          [-0.08, 0.02, 0.66, 0.53, 0.48, 0.48],
          [-0.48, 0.12, 0.45, 0.45, 0.4, 0.39],
          [0.38, -0.22, 0.5, 0.48, 0.43, 0.41],
          [0.18, 0.4, 0.37, 0.42, 0.44, 0.35],
        ],
      }),
    ]);
  function fn339(arg1404) {
    return 3 & arg1404;
  }
  var sCity3 = "city";
  function fn340() {
    return "window" === sCity3 ? n21 : view.x;
  }
  function fn341() {
    return "window" === sCity3 ? n22 : view.z;
  }
  function fn342() {
    return "window" === sCity3 ? v23 : fn191();
  }
  function fn343(arg1405) {
    return Math.hypot(arg1405.x - fn340(), arg1405.z - fn341());
  }
  function fn344(arg1406, arg1407, arg1408, arg1409 = 0.16) {
    return (
      !(arg1406 < 0 || arg1406 >= cols || arg1407 < 0 || arg1407 >= rows) &&
      ("window" === sCity3
        ? fn288(arg1406, arg1407, Math.max(0.01, arg1408 - arg1409))
        : float32Array[arg1406] >= arg1408 - arg1409)
    );
  }
  function fn345(arg1410, arg1411, arg1412, arg1413, arg1414, arg1415 = null) {
    return "window" === sCity3
      ? fn290(arg1410, arg1411, arg1412, arg1413, arg1414, arg1415)
      : (glyphsEnabled && arg1415 && fn263(arg1410, arg1411, arg1415),
        fn264(arg1410, arg1411, arg1413, arg1414),
        true);
  }
  function fn346(arg1416, arg1417, arg1418) {
    let v2033 = arg1416 - fn340(),
      v2034 = arg1417 - fn341();
    return "window" === sCity3
      ? {
          d: v2033 * n24 + v2034 * -n25,
          l: v2033 * n25 + v2034 * n24,
          y: arg1418,
          x: arg1416,
          z: arg1417,
        }
      : {
          d: v2033 * n120 + v2034 * -n119,
          l: v2033 * n119 + v2034 * n120,
          y: arg1418,
          x: arg1416,
          z: arg1417,
        };
  }
  function fn347(arg1419, arg1420 = n131) {
    let arr116 = [];
    for (let n396 = 0; n396 < arg1419.length; n396++) {
      let v2035 = arg1419[n396],
        v2036 = arg1419[(n396 + 1) % arg1419.length],
        v2037 = v2035.d >= arg1420,
        v2038 = v2036.d >= arg1420;
      if ((v2037 && arr116.push(v2035), v2037 !== v2038)) {
        let v2039 = (arg1420 - v2035.d) / (v2036.d - v2035.d),
          obj54 = {
            d: arg1420,
            l: v2035.l + (v2036.l - v2035.l) * v2039,
            y: v2035.y + (v2036.y - v2035.y) * v2039,
          };
        (Number.isFinite(v2035.x) &&
          Number.isFinite(v2036.x) &&
          ((obj54.x = v2035.x + (v2036.x - v2035.x) * v2039),
          (obj54.z = v2035.z + (v2036.z - v2035.z) * v2039)),
          Number.isFinite(v2035.tu) &&
            Number.isFinite(v2036.tu) &&
            ((obj54.tu = v2035.tu + (v2036.tu - v2035.tu) * v2039),
            (obj54.tv = v2035.tv + (v2036.tv - v2035.tv) * v2039)),
          arr116.push(obj54));
      }
    }
    return arr116;
  }
  function fn348(arg1421) {
    let v2040 = "window" === sCity3 ? arg1421.d + n23 : arg1421.d,
      v2041 = 1 / Math.max(0.000001, v2040);
    return {
      c: v12 + arg1421.l * (v19 * v2041),
      r: fn10(arg1421.y, v2040, fn342()),
      d: arg1421.d,
      qi: 1 / Math.max(0.000001, arg1421.d),
      qu: (Number.isFinite(arg1421.tu) ? arg1421.tu : 0) / Math.max(0.000001, arg1421.d),
      qv: (Number.isFinite(arg1421.tv) ? arg1421.tv : 0) / Math.max(0.000001, arg1421.d),
    };
  }
  function fn349(arg1422) {
    return arg1422 < 0.85
      ? 0.12
      : arg1422 < 1.35
        ? 0.2
        : arg1422 < 2.1
          ? 0.31
          : arg1422 < 3.2
            ? 0.44
            : arg1422 < 5
              ? 0.58
              : 0.72;
  }
  function fn350(arg1423, arg1424) {
    if (arg1423.length < 3) return true;
    let v2042 = arg1423[0],
      v2043 = arg1423[1],
      v2044 = arg1423[2],
      v2045 = v2043.l - v2042.l,
      v2046 = v2043.y - v2042.y,
      v2047 = v2043.d - v2042.d,
      v2048 = v2044.l - v2042.l,
      v2049 = v2044.y - v2042.y,
      v2050 = v2044.d - v2042.d,
      v2051 = v2046 * v2050 - v2047 * v2049,
      v2052 = v2047 * v2048 - v2045 * v2050,
      v2053 = v2045 * v2049 - v2046 * v2048,
      v2054 =
        v2051 * (arg1424.l - v2042.l) +
        v2052 * (arg1424.y - v2042.y) +
        v2053 * (arg1424.d - v2042.d),
      v2055 = v2051 * -v2042.l + v2052 * (fn342() - v2042.y) + v2053 * -v2042.d;
    return Math.abs(v2054) < 1e-7 || Math.abs(v2055) < 1e-7 || v2054 * v2055 < 0;
  }
  var n132 = 8;
  function fn351(arg1425, arg1426 = n132) {
    let max174 = Math.max(0.001, arg1425 * arg1426);
    return max174 < 1.35 ? 1 : max174 < 2.7 ? 2 : max174 < 5.4 ? 4 : max174 < 10.8 ? 8 : 16;
  }
  function fn352(arg1427, arg1428) {
    let v2056 = (function (arg1429) {
        if (arg1429.length < 3)
          return {
            uSpan: 1,
            vSpan: 1,
          };
        let v2065 = arg1429[0],
          v2066 = arg1429[1],
          v2067 = arg1429[2];
        if (!Number.isFinite(v2065.x) || !Number.isFinite(v2066.x) || !Number.isFinite(v2067.x)) {
          for (let n397 = 0; n397 < arg1429.length; n397++)
            ((arg1429[n397].tu = n397), (arg1429[n397].tv = 0));
          return {
            uSpan: Math.max(1, arg1429.length - 1),
            vSpan: 1,
          };
        }
        let v2068 = v2066.x - v2065.x,
          v2069 = v2066.y - v2065.y,
          v2070 = v2066.z - v2065.z,
          v2071 = v2067.x - v2065.x,
          v2072 = v2067.y - v2065.y,
          v2073 = v2067.z - v2065.z,
          v2074 = Math.hypot(v2068, v2069, v2070) || 1,
          v2075 = v2068 / v2074,
          v2076 = v2069 / v2074,
          v2077 = v2070 / v2074,
          v2078 = v2069 * v2073 - v2070 * v2072,
          v2079 = v2070 * v2071 - v2068 * v2073,
          v2080 = v2068 * v2072 - v2069 * v2071,
          v2081 = Math.hypot(v2078, v2079, v2080) || 1;
        ((v2078 /= v2081), (v2079 /= v2081), (v2080 /= v2081));
        let v2082 = v2079 * v2077 - v2080 * v2076,
          v2083 = v2080 * v2075 - v2078 * v2077,
          v2084 = v2078 * v2076 - v2079 * v2075,
          v2085 = 1 / 0,
          v2086 = -1 / 0,
          v2087 = 1 / 0,
          v2088 = -1 / 0;
        for (let v2089 of arg1429) {
          let v2090 = v2089.x - v2065.x,
            v2091 = v2089.y - v2065.y,
            v2092 = v2089.z - v2065.z;
          ((v2089.tu = v2090 * v2075 + v2091 * v2076 + v2092 * v2077),
            (v2089.tv = v2090 * v2082 + v2091 * v2083 + v2092 * v2084),
            v2089.tu < v2085 && (v2085 = v2089.tu),
            v2089.tu > v2086 && (v2086 = v2089.tu),
            v2089.tv < v2087 && (v2087 = v2089.tv),
            v2089.tv > v2088 && (v2088 = v2089.tv));
        }
        return {
          uSpan: Math.max(0.001, v2086 - v2085),
          vSpan: Math.max(0.001, v2088 - v2087),
        };
      })(arg1427),
      fn347Result = fn347(arg1427);
    if (fn347Result.length < 3) return;
    let map39 = fn347Result.map(fn348),
      v2057 = cols,
      v2058 = -1,
      v2059 = rows,
      v2060 = -1;
    for (let v2093 of map39)
      ((v2057 = Math.min(v2057, v2093.c)),
        (v2058 = Math.max(v2058, v2093.c)),
        (v2059 = Math.min(v2059, v2093.r)),
        (v2060 = Math.max(v2060, v2093.r)));
    if (
      ((v2057 = Math.max(0, Math.floor(v2057))),
      (v2058 = Math.min(cols - 1, Math.ceil(v2058))),
      (v2059 = Math.max(0, Math.floor(v2059))),
      (v2060 = Math.min(rows - 1, Math.ceil(v2060))),
      v2057 > v2058 || v2059 > v2060)
    )
      return;
    let max175 = Math.max(1, v2060 - v2059 + 1),
      v2061 = (v2058 - v2057 + 1) * max175,
      v2062 = arg1428.foliage && v2061 > 2600 ? 2 : 1,
      v2063 = 1 & arg1428.seed,
      v2064 = arg1428.texelDensity || n132,
      max176 = Math.max(0.001, v2056.vSpan / max175);
    for (let v2094 = v2059; v2094 <= v2060; v2094 += v2062) {
      let v2095 = v2094 + 0.5,
        v2096 = 1 / 0,
        v2097 = -1 / 0,
        n398 = 0,
        n399 = 0,
        n400 = 0,
        n401 = 0,
        n402 = 0,
        n403 = 0;
      for (let n404 = 0; n404 < map39.length; n404++) {
        let v2106 = map39[n404],
          v2107 = map39[(n404 + 1) % map39.length],
          v2108 = v2107.r - v2106.r;
        if (Math.abs(v2108) < 1e-7) continue;
        let v2109 = (v2095 - v2106.r) / v2108;
        if (v2109 < 0 || v2109 > 1) continue;
        let v2110 = v2106.c + (v2107.c - v2106.c) * v2109,
          v2111 = v2106.qi + (v2107.qi - v2106.qi) * v2109,
          v2112 = v2106.qu + (v2107.qu - v2106.qu) * v2109,
          v2113 = v2106.qv + (v2107.qv - v2106.qv) * v2109;
        (v2110 < v2096 && ((v2096 = v2110), (n398 = v2111), (n399 = v2112), (n400 = v2113)),
          v2110 > v2097 && ((v2097 = v2110), (n401 = v2111), (n402 = v2112), (n403 = v2113)));
      }
      if (v2096 === 1 / 0 || v2097 === -1 / 0) continue;
      let max177 = Math.max(v2057, Math.ceil(v2096 - 0.5)),
        min66 = Math.min(v2058, Math.floor(v2097 - 0.5));
      if (max177 > min66) continue;
      2 === v2062 && (max177 + v2063 + v2094) & 1 && max177++;
      let max178 = Math.max(0.00001, v2097 - v2096),
        v2098 = 1 / Math.max(0.000001, n398),
        v2099 = 1 / Math.max(0.000001, n401),
        v2100 = n399 * v2098,
        v2101 = n400 * v2098,
        v2102 = n402 * v2099,
        v2103 = n403 * v2099,
        v2104 = Math.hypot(v2102 - v2100, v2103 - v2101) / Math.max(1, max178),
        v2105 = v2064 / fn351(Math.max(max176, v2104), v2064);
      for (let v2114 = max177; v2114 <= min66; v2114 += v2062) {
        let v2115 = v2114 + 0.5,
          max179 = Math.max(0, Math.min(1, (v2115 - v2096) / max178)),
          v2116 = n398 + (n401 - n398) * max179;
        if (v2116 <= 1e-7) continue;
        let v2117 = 1 / v2116;
        if (!fn344(v2114, v2094, v2117, 0.16)) continue;
        let v2118 = (n399 + (n402 - n399) * max179) * v2117,
          v2119 = (n400 + (n403 - n400) * max179) * v2117,
          floor69 = Math.floor(v2118 * v2105),
          floor70 = Math.floor(v2119 * v2105),
          fn12Result26 = hash2(arg1428.seed + 37 * floor69, 3 * arg1428.seed + 53 * floor70),
          v2120 = v2114 <= max177 || v2114 >= min66 || v2094 <= v2059 || v2094 >= v2060;
        if (arg1428.solidOnly)
          "window" === sCity3
            ? fn288(v2114, v2094, v2117) &&
              (fn263(v2114, v2094, arg1428.fill || arg1428.color || "#222"),
              fn289(v2114, v2094, v2117),
              n26++)
            : fn263(v2114, v2094, arg1428.fill || arg1428.color || "#222");
        else if (arg1428.foliage) {
          if ((!v2120 && fn12Result26 > arg1428.density) || (v2120 && fn12Result26 > 0.7)) continue;
          fn345(
            v2114,
            v2094,
            v2117,
            v2120
              ? fn12Result26 < 0.45
                ? "+"
                : "*"
              : fn12Result26 < 0.24
                ? "%"
                : fn12Result26 < 0.49
                  ? "&"
                  : fn12Result26 < 0.72
                    ? "*"
                    : fn12Result26 < 0.88
                      ? "#"
                      : ":",
            arg1428.color,
          );
        } else
          fn345(
            v2114,
            v2094,
            v2117,
            arg1428.glyph ||
              (v2120 ? "|" : fn12Result26 < 0.55 ? "#" : fn12Result26 < 0.8 ? "|" : ":"),
            arg1428.color,
            arg1428.fill,
          );
      }
    }
  }
  function fn353(arg1430, arg1431, arg1432, arg1433 = 0) {
    let fn346Result = fn346(arg1430.x, arg1430.z, arg1430.y),
      fn346Result2 = fn346(arg1431.x, arg1431.z, arg1431.y);
    if (fn346Result.d < n131 && fn346Result2.d < n131) return;
    if (fn346Result.d < n131 || fn346Result2.d < n131) {
      let v2121 = (n131 - fn346Result.d) / (fn346Result2.d - fn346Result.d);
      fn346Result.d < n131
        ? (fn346Result = {
            d: n131,
            l: fn346Result.l + (fn346Result2.l - fn346Result.l) * v2121,
            y: fn346Result.y + (fn346Result2.y - fn346Result.y) * v2121,
          })
        : (fn346Result2 = {
            d: n131,
            l: fn346Result.l + (fn346Result2.l - fn346Result.l) * v2121,
            y: fn346Result.y + (fn346Result2.y - fn346Result.y) * v2121,
          });
    }
    let fn348Result = fn348(fn346Result),
      fn348Result2 = fn348(fn346Result2),
      max180 = Math.max(
        1,
        Math.ceil(
          Math.max(
            Math.abs(fn348Result2.c - fn348Result.c),
            Math.abs(fn348Result2.r - fn348Result.r),
          ),
        ),
      );
    for (let n405 = 0; n405 <= max180; n405++) {
      let v2122 = n405 / max180,
        round34 = Math.round(fn348Result.c + (fn348Result2.c - fn348Result.c) * v2122),
        round35 = Math.round(fn348Result.r + (fn348Result2.r - fn348Result.r) * v2122),
        v2123 = fn348Result.d + (fn348Result2.d - fn348Result.d) * v2122;
      if (
        round34 < 0 ||
        round34 >= cols ||
        round35 < 0 ||
        round35 >= rows ||
        !fn344(round34, round35, v2123, 0.12)
      )
        continue;
      let v2124 =
        Math.abs(fn348Result2.c - fn348Result.c) > 0.8
          ? fn348Result2.c > fn348Result.c
            ? "\\"
            : "/"
          : "|";
      (n405 + arg1433) % 5 != 4 && fn345(round34, round35, v2123, v2124, arg1432);
    }
  }
  function fn354(arg1434, arg1435, arg1436) {
    return fn346(arg1434, arg1435, arg1436);
  }
  function fn355(
    arg1437,
    arg1438,
    arg1439,
    arg1440,
    arg1441,
    arg1442,
    arg1443,
    arg1444,
    arg1445,
    arg1446,
    arg1447 = 0,
    arg1448 = true,
  ) {
    let arr117 = [],
      arr118 = [];
    for (let n406 = 0; n406 < arg1444; n406++) {
      let v2125 = arg1447 + (n406 * Math.PI * 2) / arg1444,
        v2126 = arg1438 + Math.cos(v2125) * arg1442,
        v2127 = arg1439 + Math.sin(v2125) * arg1443;
      (arr117.push(fn354(v2126, v2127, arg1440)), arr118.push(fn354(v2126, v2127, arg1441)));
    }
    let fn354Result = fn354(arg1438, arg1439, 0.5 * (arg1440 + arg1441)),
      fn354Result2 = fn354(arg1438, arg1439, arg1441);
    for (let n407 = 0; n407 < arg1444; n407++) {
      let v2128 = (n407 + 1) % arg1444,
        arr119 = [arr117[n407], arr117[v2128], arr118[v2128], arr118[n407]];
      if (!fn350(arr119, fn354Result)) continue;
      let v2129 = arr119.reduce((arg1449, arg1450) => arg1449 + arg1450.d, 0) / arr119.length;
      arg1437.push({
        verts: arr119,
        dep: v2129,
        seed: arg1445 + 31 * n407,
        shade: 1 & n407 ? 0.05 : 0.015,
        styleBase: arg1446,
      });
    }
    if (arg1448 && fn342() > arg1441 + 0.04 && fn350(arr118, fn354Result2)) {
      let v2130 = arr118.reduce((arg1451, arg1452) => arg1451 + arg1452.d, 0) / arr118.length;
      arg1437.push({
        verts: arr118,
        dep: v2130,
        seed: arg1445 + 977,
        shade: -0.08,
        styleBase: arg1446 + "_top",
      });
    }
  }
  function fn356(arg1453, arg1454, arg1455, arg1456) {
    arg1453.sort((arg1457, arg1458) => arg1458.dep - arg1457.dep);
    let max181 = Math.max(0.08, Math.min(1, arg1455));
    for (let v2131 of arg1453) {
      let arg1456Result = arg1456(v2131, arg1454, max181);
      fn352(v2131.verts, {
        seed: v2131.seed,
        foliage: false,
        color: arg1456Result.color,
        fill: arg1456Result.fill,
        texelDensity: 7,
      });
    }
  }
  function fn357(arg1459, arg1460) {
    let arr120 = [],
      v2132 = 0.46 * (arg1459.w || 1.7),
      v2133 = 0.46 * (arg1459.d || 1.35),
      v2134 = arg1459.y || 0,
      v2135 = arg1459.h || 2.25;
    (fn355(
      arr120,
      arg1459.x,
      arg1459.z,
      v2134,
      v2134 + 0.72 * v2135,
      v2132,
      v2133,
      10,
      1201,
      "tank",
      0.1 * Math.PI,
    ),
      fn356(arr120, fn309(n57, arg1460, arg1459), arg1460, (arg1461, arg1462, arg1463) => ({
        color: arg1461.styleBase.endsWith("_top")
          ? arg1462.accent
          : "hsl(195,18%," +
            Math.max(18, 34 + 18 * arg1463 - 100 * arg1461.shade).toFixed(0) +
            "%)",
        fill: "hsl(205,18%," + (6 + 9 * arg1463).toFixed(0) + "%)",
      })));
    let v2136 = v2134 + 0.74 * v2135,
      v2137 = "hsl(38,72%," + (36 + 22 * arg1460).toFixed(0) + "%)";
    fn353(
      {
        x: arg1459.x - 0.82 * v2132,
        z: arg1459.z,
        y: v2136,
      },
      {
        x: arg1459.x + 0.82 * v2132,
        z: arg1459.z,
        y: v2136,
      },
      v2137,
      1307,
    );
  }
  function fn358(arg1464, arg1465) {
    let arr121 = [],
      v2138 = arg1464.y || 0,
      v2139 = arg1464.h || 5.8,
      v2140 = 0.34 * (arg1464.w || 1),
      max182 = Math.max(0.28, 0.42 * (arg1464.d || 0.78));
    (fn355(
      arr121,
      arg1464.x,
      arg1464.z,
      v2138,
      v2138 + 0.14 * v2139,
      1.35 * v2140,
      1.35 * max182,
      8,
      1401,
      "stack_base",
      0.125 * Math.PI,
    ),
      fn355(
        arr121,
        arg1464.x,
        arg1464.z,
        v2138 + 0.14 * v2139,
        v2138 + 0.94 * v2139,
        v2140,
        max182,
        10,
        1451,
        "stack",
        0.125 * Math.PI,
      ),
      fn356(arr121, fn309(n58, arg1465, arg1464), arg1465, (arg1466, arg1467, arg1468) => ({
        color: arg1466.styleBase.endsWith("_top")
          ? arg1467.accent
          : "hsl(22,22%," + Math.max(15, 28 + 18 * arg1468 - 100 * arg1466.shade).toFixed(0) + "%)",
        fill: "hsl(18,20%," + (5 + 8 * arg1468).toFixed(0) + "%)",
      })),
      arg1464.x,
      arg1464.z);
    let v2141 = v2138 + 0.94 * v2139;
    for (let n408 = 0; n408 < 3; n408++) {
      let v2142 = v2141 + 0.35 + 0.38 * n408,
        v2143 = 0.16 * (n408 - 1);
      (fn354(arg1464.x + 0.2 * v2143, arg1464.z, v2142),
        fn354(arg1464.x + 0.4 * v2143, arg1464.z - 0.1, v2142 + 0.08),
        fn354(arg1464.x + 0.55 * v2143, arg1464.z - 0.16, v2142 + 0.14),
        fn353(
          {
            x: arg1464.x + 0.12 * v2143,
            z: arg1464.z,
            y: v2142 - 0.02,
          },
          {
            x: arg1464.x + 0.42 * v2143,
            z: arg1464.z - 0.1,
            y: v2142 + 0.1,
          },
          "hsl(205,10%," + (18 + 10 * arg1465).toFixed(0) + "%)",
          1500 + n408,
        ));
      let arr122 = [],
        v2144 = 0.14 + 0.02 * n408;
      (fn355(
        arr122,
        arg1464.x + 0.55 * v2143,
        arg1464.z - 0.16,
        v2142 - 0.04,
        v2142 + 0.12,
        v2144,
        0.8 * v2144,
        6,
        1511 + 17 * n408,
        "smoke",
        0,
      ),
        fn356(
          arr122,
          fn309(n58, arg1465, arg1464),
          Math.max(0.04, 0.78 * arg1465),
          (arg1469, arg1470, arg1471) => ({
            color: "hsl(205,8%," + (16 + 10 * arg1471).toFixed(0) + "%)",
            fill: "hsl(205,10%," + (4 + 5 * arg1471).toFixed(0) + "%)",
          }),
        ));
    }
  }
  function fn359(arg1472, arg1473) {
    let arr123 = [],
      v2145 = arg1472.y || 0,
      v2146 = arg1472.h || 1.9,
      v2147 = 0.42 * (arg1472.w || 3),
      v2148 = 0.76 * (arg1472.d || 1.75);
    (fn355(
      arr123,
      arg1472.x,
      arg1472.z,
      v2145,
      v2145 + 0.18 * v2146,
      v2147,
      v2148,
      10,
      1601,
      "fountain_basin",
      0.1 * Math.PI,
    ),
      fn355(
        arr123,
        arg1472.x,
        arg1472.z,
        v2145 + 0.18 * v2146,
        v2145 + 0.48 * v2146,
        0.42 * v2147,
        0.42 * v2148,
        8,
        1631,
        "fountain_core",
        0.125 * Math.PI,
      ),
      fn356(arr123, fn309(n59, arg1473, arg1472), arg1473, (arg1474, arg1475, arg1476) => ({
        color:
          "fountain_core_top" === arg1474.styleBase || "fountain_basin_top" === arg1474.styleBase
            ? arg1475["~"] || arg1475.accent
            : "hsl(188,28%," +
              Math.max(18, 34 + 18 * arg1476 - 100 * arg1474.shade).toFixed(0) +
              "%)",
        fill: "hsl(205,26%," + (5 + 7 * arg1476).toFixed(0) + "%)",
      })));
    let v2149 =
      fn309(n59, arg1473, arg1472)["*"] || "hsl(190,92%," + (40 + 22 * arg1473).toFixed(0) + "%)";
    fn353(
      {
        x: arg1472.x,
        z: arg1472.z,
        y: v2145 + 0.48 * v2146,
      },
      {
        x: arg1472.x,
        z: arg1472.z,
        y: v2145 + 0.92 * v2146,
      },
      v2149,
      1661,
    );
    for (let [v2150, v2151] of [
      [0.52 * v2147, 0],
      [0.52 * -v2147, 0],
      [0, 0.52 * v2148],
      [0, 0.52 * -v2148],
    ])
      fn353(
        {
          x: arg1472.x,
          z: arg1472.z,
          y: v2145 + 0.62 * v2146,
        },
        {
          x: arg1472.x + v2150,
          z: arg1472.z + v2151,
          y: v2145 + 0.34 * v2146,
        },
        v2149,
        1681 + Math.round(10 * (v2150 + v2151)),
      );
  }
  function fn360(arg1477) {
    let fn347Result2 = fn347(arg1477);
    if (fn347Result2.length < 3) return false;
    let v2152 = 1 / 0,
      v2153 = -1 / 0,
      v2154 = 1 / 0,
      v2155 = -1 / 0,
      v2156 = 1 / 0,
      n409 = 0.001,
      arr124 = [];
    for (let v2161 of fn347Result2) {
      let fn348Result3 = fn348(v2161);
      if (
        !Number.isFinite(fn348Result3.c) ||
        !Number.isFinite(fn348Result3.r) ||
        !Number.isFinite(fn348Result3.d)
      )
        return false;
      (arr124.push(fn348Result3),
        (v2152 = Math.min(v2152, fn348Result3.c)),
        (v2153 = Math.max(v2153, fn348Result3.c)),
        (v2154 = Math.min(v2154, fn348Result3.r)),
        (v2155 = Math.max(v2155, fn348Result3.r)),
        (v2156 = Math.min(v2156, fn348Result3.d)));
    }
    for (let n410 = 0; n410 < arg1477.length; n410++)
      for (let v2162 = n410 + 1; v2162 < arg1477.length; v2162++) {
        let v2163 = arg1477[n410],
          v2164 = arg1477[v2162];
        Number.isFinite(v2163.x) &&
          Number.isFinite(v2164.x) &&
          (n409 = Math.max(
            n409,
            Math.hypot(v2163.x - v2164.x, v2163.y - v2164.y, v2163.z - v2164.z),
          ));
      }
    let v2157 = v2153 - v2152,
      v2158 = v2155 - v2154,
      max183 = Math.max(n131, v2156),
      v2159 = (n409 * v19) / max183,
      v2160 = (n409 * v17) / max183;
    return v2157 <= Math.max(10, 3.8 * v2159 + 4) && v2158 <= Math.max(10, 3.8 * v2160 + 4);
  }
  function fn361(arg1478, arg1479) {
    arg1478.sort((arg1480, arg1481) => arg1481.dep - arg1480.dep);
    for (let v2165 of arg1478) {
      if (!fn360(v2165.verts)) continue;
      let v2166 = "function" == typeof arg1479 ? arg1479(v2165) : arg1479;
      fn352(v2165.verts, {
        seed: v2165.seed,
        foliage: false,
        solidOnly: true,
        fill: v2166,
        color: v2166,
        texelDensity: 4,
      });
    }
  }
  function fn362(arg1482, arg1483, arg1484) {
    return 1 === arg1482.axis
      ? [arg1482.x + arg1484, arg1482.z + arg1483]
      : [arg1482.x + arg1483, arg1482.z + arg1484];
  }
  function fn363(
    arg1485,
    arg1486,
    arg1487,
    arg1488,
    arg1489,
    arg1490,
    arg1491,
    arg1492,
    arg1493,
    arg1494,
    arg1495 = true,
  ) {
    let [fn362Result, fn362Result2] = fn362(arg1486, arg1487, arg1488),
      v2167 = 1 === arg1486.axis ? arg1492 : arg1491,
      v2168 = 1 === arg1486.axis ? arg1491 : arg1492;
    fn381(
      arg1485,
      fn362Result,
      fn362Result2,
      arg1489,
      arg1490,
      v2167,
      v2168,
      v2167,
      v2168,
      arg1493,
      arg1494,
      arg1495,
    );
  }
  function fn364(arg1496) {
    return Number.isFinite(arg1496.fixtureFrontSign)
      ? arg1496.fixtureFrontSign
      : hash2(
            17 * Math.floor(toWorldX(arg1496.x)) + 913,
            23 * Math.floor(toWorldZ(arg1496.z)) + 271,
          ) > 0.5
        ? 1
        : -1;
  }
  function fn365(arg1497, arg1498, arg1499) {
    arg1497.sort((arg1500, arg1501) => arg1501.dep - arg1500.dep);
    let max184 = Math.max(0.08, Math.min(1, arg1498));
    for (let v2169 of arg1497) {
      let arg1499Result = arg1499(v2169, max184);
      fn352(v2169.verts, {
        seed: v2169.seed,
        foliage: false,
        color: arg1499Result.color,
        fill: arg1499Result.fill,
        texelDensity: arg1499Result.texelDensity || 7,
        glyph: arg1499Result.glyph || null,
      });
    }
  }
  function fn366(arg1502, arg1503, arg1504 = 24) {
    return !(
      ("window" === sCity3 ? fn343(arg1502) : arg1502._depth || fn343(arg1502)) <= arg1504 ||
      "window" === sCity3 ||
      (fn312(arg1502, arg1503), 0)
    );
  }
  function fn367(arg1505, arg1506) {
    if (fn366(arg1505, arg1506, 25)) return;
    let v2170 = arg1505.y || 0,
      v2171 = arg1505.h || 1.8,
      v2172 = 0.48 * (arg1505.w || 1),
      v2173 = 0.46 * (arg1505.d || 0.86),
      fn364Result = fn364(arg1505),
      arr125 = [];
    (fn363(arr125, arg1505, 0, 0, v2170, v2170 + v2171, v2172, v2173, 3001, "vend_body"),
      fn363(
        arr125,
        arg1505,
        0,
        fn364Result * (v2173 + 0.025),
        v2170 + 0.43 * v2171,
        v2170 + 0.88 * v2171,
        0.76 * v2172,
        0.035,
        3041,
        "vend_screen",
      ),
      fn363(
        arr125,
        arg1505,
        0,
        fn364Result * (v2173 + 0.032),
        v2170 + 0.16 * v2171,
        v2170 + 0.35 * v2171,
        0.62 * v2172,
        0.042,
        3071,
        "vend_slot",
      ),
      fn363(
        arr125,
        arg1505,
        0.58 * -v2172,
        fn364Result * (v2173 + 0.04),
        v2170 + 0.48 * v2171,
        v2170 + 0.64 * v2171,
        0.12 * v2172,
        0.05,
        3091,
        "vend_keys",
      ),
      fn365(arr125, arg1506, (arg1507, arg1508) =>
        "vend_screen" === arg1507.styleBase
          ? {
              color: "hsl(188,92%," + (38 + 23 * arg1508).toFixed(0) + "%)",
              fill: "hsl(205,58%," + (4 + 7 * arg1508).toFixed(0) + "%)",
            }
          : "vend_slot" === arg1507.styleBase
            ? {
                color: "hsl(42,78%," + (34 + 20 * arg1508).toFixed(0) + "%)",
                fill: "hsl(210,36%," + (3 + 5 * arg1508).toFixed(0) + "%)",
              }
            : "vend_keys" === arg1507.styleBase
              ? {
                  color: "hsl(292,78%," + (34 + 22 * arg1508).toFixed(0) + "%)",
                  fill: "hsl(220,30%," + (4 + 5 * arg1508).toFixed(0) + "%)",
                }
              : {
                  color:
                    "hsl(205,62%," +
                    Math.max(18, 31 + 21 * arg1508 - 100 * arg1507.shade).toFixed(0) +
                    "%)",
                  fill: "hsl(205,48%," + (4 + 7 * arg1508).toFixed(0) + "%)",
                },
      ));
  }
  function fn368(arg1509, arg1510) {
    if (fn366(arg1509, arg1510, 30)) return;
    let v2174 = arg1509.y || 0,
      v2175 = arg1509.h || 2.35,
      v2176 = 0.5 * (arg1509.w || 2.7),
      v2177 = 0.5 * (arg1509.d || 1.3),
      v2178 = Number.isFinite(arg1509.fixtureFrontSign) ? arg1509.fixtureFrontSign : 1,
      arr126 = [],
      arr127 = [],
      arr128 = [],
      arr129 = [],
      arr130 = [],
      arr131 = [],
      arr132 = [],
      arr133 = [],
      n411 = 0.035,
      v2179 = 0.92 * v2176,
      v2180 = -v2178 * v2177 * 0.78,
      v2181 = -v2178 * v2177 * 0.08,
      v2182 = -v2178 * v2177 * 0.04,
      v2183 = v2178 * v2177 * 0.82,
      fn475 = (arg1511, arg1512, arg1513, arg1514, arg1515, arg1516, arg1517 = 0.02) => {
        let arr134 = [];
        if (null === arg1514)
          for (let [v2203, v2204] of arg1512) {
            let [fn362Result3, fn362Result4] = fn362(arg1509, v2203, v2204);
            arr134.push(fn346(fn362Result3, fn362Result4, arg1513));
          }
        else
          for (let [v2205, v2206, v2207] of arg1512) {
            let [fn362Result5, fn362Result6] = fn362(arg1509, v2205, v2206);
            arr134.push(fn346(fn362Result5, fn362Result6, v2207));
          }
        let v2202 = arr134.reduce((arg1518, arg1519) => arg1518 + arg1519.d, 0) / arr134.length;
        arg1511.push({
          verts: arr134,
          dep: v2202,
          seed: arg1515,
          shade: arg1517,
          styleBase: arg1516,
        });
      },
      v2184 = v2174 + 0.88 * v2175,
      v2185 = v2174 + v2175,
      v2186 = -v2176,
      v2187 = v2176,
      v2188 = v2182 - 0.98 * v2177,
      v2189 = v2182 + 0.98 * v2177,
      fn476 = (arg1520, arg1521, arg1522, arg1523, arg1524 = 0.02) => {
        let map40 = arg1520.map(([arg1525, arg1526]) => {
          let [fn362Result7, fn362Result8] = fn362(arg1509, arg1525, arg1526);
          return fn346(fn362Result7, fn362Result8, arg1521);
        });
        arr127.push({
          verts: map40,
          dep: map40.reduce((arg1527, arg1528) => arg1527 + arg1528.d, 0) / map40.length,
          seed: arg1522,
          shade: arg1524,
          styleBase: arg1523,
        });
      },
      fn477 = (arg1529, arg1530, arg1531) => {
        let [fn362Result9, fn362Result10] = fn362(arg1509, arg1529[0], arg1529[1]),
          [fn362Result11, fn362Result12] = fn362(arg1509, arg1530[0], arg1530[1]),
          arr135 = [
            fn346(fn362Result9, fn362Result10, v2184),
            fn346(fn362Result11, fn362Result12, v2184),
            fn346(fn362Result11, fn362Result12, v2185),
            fn346(fn362Result9, fn362Result10, v2185),
          ];
        arr127.push({
          verts: arr135,
          dep: arr135.reduce((arg1532, arg1533) => arg1532 + arg1533.d, 0) / arr135.length,
          seed: arg1531,
          shade: 0.03,
          styleBase: "shelter_roof_edge",
        });
      };
    (fn342() > v2185 + 0.02
      ? fn476(
          [
            [v2186, v2188],
            [v2187, v2188],
            [v2187, v2189],
            [v2186, v2189],
          ],
          v2185,
          2891,
          "shelter_roof_top",
          -0.06,
        )
      : fn476(
          [
            [v2186, v2189],
            [v2187, v2189],
            [v2187, v2188],
            [v2186, v2188],
          ],
          v2184,
          2893,
          "shelter_roof_inner",
          0.045,
        ),
      fn477([v2186, v2188], [v2187, v2188], 2895),
      fn477([v2187, v2188], [v2187, v2189], 2897),
      fn477([v2187, v2189], [v2186, v2189], 2899),
      fn477([v2186, v2189], [v2186, v2188], 2901),
      fn363(
        arr126,
        arg1509,
        0,
        -v2178 * v2177 * 0.96,
        v2174 + 0.91 * v2175,
        v2174 + 0.99 * v2175,
        0.22 * v2176,
        0.18 * v2177,
        2931,
        "shelter_sign",
      ));
    for (let v2208 of [-v2179, v2179])
      fn363(
        arr129,
        arg1509,
        v2208,
        v2183,
        v2174,
        v2174 + 0.9 * v2175,
        0.055,
        0.055,
        2801 + Math.round(17 * (v2208 + 2)),
        "shelter_frame",
        false,
      );
    (fn363(
      arr130,
      arg1509,
      0,
      v2180,
      v2174,
      v2174 + 0.34 * v2175,
      0.92 * v2176,
      n411,
      2961,
      "shelter_panel",
      false,
    ),
      fn363(
        arr130,
        arg1509,
        0,
        v2180,
        v2174 + 0.34 * v2175,
        v2174 + 0.82 * v2175,
        0.92 * v2176,
        n411,
        2991,
        "shelter_glass",
        false,
      ),
      fn363(
        arr131,
        arg1509,
        -v2179,
        v2181,
        v2174,
        v2174 + 0.3 * v2175,
        n411,
        0.74 * v2177,
        3021,
        "shelter_panel",
        false,
      ),
      fn363(
        arr131,
        arg1509,
        -v2179,
        v2181,
        v2174 + 0.3 * v2175,
        v2174 + 0.8 * v2175,
        n411,
        0.74 * v2177,
        3061,
        "shelter_glass",
        false,
      ),
      fn363(
        arr132,
        arg1509,
        v2179,
        v2181,
        v2174,
        v2174 + 0.3 * v2175,
        n411,
        0.74 * v2177,
        3041,
        "shelter_panel",
        false,
      ),
      fn363(
        arr132,
        arg1509,
        v2179,
        v2181,
        v2174 + 0.3 * v2175,
        v2174 + 0.8 * v2175,
        n411,
        0.74 * v2177,
        3081,
        "shelter_glass",
        false,
      ));
    let v2190 = 1.15 * n411 - v2179,
      v2191 = v2179 - 1.15 * n411,
      v2192 = v2181 - 0.72 * v2177,
      v2193 = v2181 + 0.72 * v2177,
      v2194 = v2174 + 0.06 * v2175,
      v2195 = v2174 + 0.795 * v2175;
    (fn475(
      arr128,
      [
        [v2190, v2192, v2194],
        [v2190, v2193, v2194],
        [v2190, v2193, v2195],
        [v2190, v2192, v2195],
      ],
      0,
      1,
      3077,
      "shelter_inner_side",
      0.025,
    ),
      fn475(
        arr128,
        [
          [v2191, v2193, v2194],
          [v2191, v2192, v2194],
          [v2191, v2192, v2195],
          [v2191, v2193, v2195],
        ],
        0,
        1,
        3097,
        "shelter_inner_side",
        0.025,
      ));
    let v2196 = v2174 + 0.34;
    (fn363(
      arr133,
      arg1509,
      0,
      -v2178 * v2177 * 0.4,
      v2196,
      v2196 + 0.075,
      0.6 * v2176,
      0.14,
      3101,
      "shelter_bench",
    ),
      fn363(
        arr133,
        arg1509,
        0,
        -v2178 * v2177 * 0.54,
        v2196 + 0.075,
        v2196 + 0.315,
        0.6 * v2176,
        0.05,
        3131,
        "shelter_bench",
      ));
    for (let v2209 of [0.42 * -v2176, 0, 0.42 * v2176])
      fn363(
        arr133,
        arg1509,
        v2209,
        -v2178 * v2177 * 0.32,
        v2174,
        v2196 - 0.01,
        0.028,
        0.028,
        3161 + Math.round(29 * (v2209 + 2)),
        "shelter_bench_leg",
        false,
      );
    let fn478 = (arg1534, arg1535) =>
        "shelter_glass" === arg1534.styleBase
          ? {
              color: "hsl(188,58%," + (28 + 21 * arg1535).toFixed(0) + "%)",
              fill: "hsl(196,32%," + (4 + 6 * arg1535).toFixed(0) + "%)",
            }
          : "shelter_inner_side" === arg1534.styleBase
            ? {
                color: "hsl(188,48%," + (25 + 19 * arg1535).toFixed(0) + "%)",
                fill: "hsl(196,28%," + (4 + 6 * arg1535).toFixed(0) + "%)",
              }
            : "shelter_bench" === arg1534.styleBase
              ? {
                  color: "hsl(34,42%," + (30 + 22 * arg1535).toFixed(0) + "%)",
                  fill: "hsl(30,26%," + (5 + 7 * arg1535).toFixed(0) + "%)",
                }
              : "shelter_bench_leg" === arg1534.styleBase
                ? {
                    color: "hsl(188,18%," + (22 + 17 * arg1535).toFixed(0) + "%)",
                    fill: "hsl(205,16%," + (4 + 5 * arg1535).toFixed(0) + "%)",
                  }
                : "shelter_roof_top" === arg1534.styleBase
                  ? {
                      color: "hsl(188,38%," + (34 + 20 * arg1535).toFixed(0) + "%)",
                      fill: "hsl(188,28%," + (5 + 6 * arg1535).toFixed(0) + "%)",
                    }
                  : "shelter_roof_inner" === arg1534.styleBase
                    ? {
                        color: "hsl(188,28%," + (24 + 17 * arg1535).toFixed(0) + "%)",
                        fill: "hsl(188,24%," + (4 + 6 * arg1535).toFixed(0) + "%)",
                      }
                    : "shelter_roof_edge" === arg1534.styleBase
                      ? {
                          color:
                            "hsl(188,34%," +
                            Math.max(18, 29 + 18 * arg1535 - 100 * arg1534.shade).toFixed(0) +
                            "%)",
                          fill: "hsl(188,27%," + (4 + 6 * arg1535).toFixed(0) + "%)",
                        }
                      : "shelter_sign" === arg1534.styleBase
                        ? {
                            color: "hsl(50,78%," + (40 + 24 * arg1535).toFixed(0) + "%)",
                            fill: "hsl(188,30%," + (5 + 6 * arg1535).toFixed(0) + "%)",
                          }
                        : "shelter_panel" === arg1534.styleBase
                          ? {
                              color:
                                "hsl(188,28%," +
                                Math.max(18, 28 + 18 * arg1535 - 100 * arg1534.shade).toFixed(0) +
                                "%)",
                              fill: "hsl(188,23%," + (4 + 6 * arg1535).toFixed(0) + "%)",
                            }
                          : {
                              color:
                                "hsl(188,24%," +
                                Math.max(17, 27 + 18 * arg1535 - 100 * arg1534.shade).toFixed(0) +
                                "%)",
                              fill: "hsl(192,22%," + (4 + 6 * arg1535).toFixed(0) + "%)",
                            },
      v2197 = 1 === arg1509.axis ? fn341() - arg1509.z : fn340() - arg1509.x,
      v2198 = 1 === arg1509.axis ? fn340() - arg1509.x : fn341() - arg1509.z,
      v2199 = v2198 * v2178 < 0,
      v2200 = v2197 > 0,
      v2201 = Math.abs(v2197) / (Math.abs(v2198) + 0.001) > 0.16;
    (fn365(arr126, arg1510, fn478),
      fn365(arr127, arg1510, fn478),
      v2199 || fn365(arr128, arg1510, fn478),
      v2199 || fn365(arr130, arg1510, fn478),
      v2201
        ? fn365(v2200 ? arr131 : arr132, arg1510, fn478)
        : (fn365(arr131, arg1510, fn478), fn365(arr132, arg1510, fn478)),
      fn365(arr133, arg1510, fn478),
      fn365(arr129, arg1510, fn478),
      v2199 && fn365(arr130, arg1510, fn478),
      v2201 && fn365(v2200 ? arr132 : arr131, arg1510, fn478));
  }
  function fn369(arg1536, arg1537) {
    if (fn366(arg1536, arg1537, 27)) return;
    let v2210 = arg1536.y || 0,
      v2211 = arg1536.h || 1.1,
      v2212 = 0.5 * (arg1536.w || 3),
      v2213 = 0.5 * (arg1536.d || 1.5),
      arr136 = [];
    (fn363(
      arr136,
      arg1536,
      0,
      0,
      v2210,
      v2210 + 0.72 * v2211,
      0.96 * v2212,
      0.82 * v2213,
      3201,
      "counter_body",
      false,
    ),
      fn363(
        arr136,
        arg1536,
        0,
        0,
        v2210 + 0.72 * v2211,
        v2210 + 0.84 * v2211,
        v2212,
        v2213,
        3231,
        "counter_top",
      ));
    let fn364Result2 = fn364(arg1536);
    (fn363(
      arr136,
      arg1536,
      Math.min(0.58 * v2212, Math.max(0.35, v2212 - 0.48)),
      fn364Result2 * v2213 * 0.18,
      v2210 + 0.855 * v2211,
      v2210 + 1.08 * v2211,
      Math.min(0.32, 0.16 * v2212),
      Math.min(0.2, 0.28 * v2213),
      3261,
      "counter_till",
    ),
      fn365(arr136, arg1537, (arg1538, arg1539) =>
        "counter_top" === arg1538.styleBase
          ? {
              color: "hsl(42,66%," + (34 + 21 * arg1539).toFixed(0) + "%)",
              fill: "hsl(35,28%," + (5 + 8 * arg1539).toFixed(0) + "%)",
            }
          : "counter_till" === arg1538.styleBase
            ? {
                color: "hsl(188,84%," + (35 + 23 * arg1539).toFixed(0) + "%)",
                fill: "hsl(205,48%," + (4 + 6 * arg1539).toFixed(0) + "%)",
              }
            : {
                color:
                  "hsl(175,37%," +
                  Math.max(18, 29 + 20 * arg1539 - 100 * arg1538.shade).toFixed(0) +
                  "%)",
                fill: "hsl(180,28%," + (4 + 7 * arg1539).toFixed(0) + "%)",
              },
      ));
  }
  function fn370(arg1540, arg1541) {
    if (fn366(arg1540, arg1541, 24)) return;
    let v2214 = arg1540.y || 0,
      v2215 = arg1540.h || 1.9,
      v2216 = arg1540.w || 3,
      v2217 = 0.5 * v2216,
      v2218 = 0.5 * (arg1540.d || 1.55),
      arr137 = [],
      min67 = Math.min(0.1, Math.max(0.055, 0.025 * v2216));
    (fn363(
      arr137,
      arg1540,
      -v2217 + min67,
      0,
      v2214,
      v2214 + v2215,
      min67,
      0.92 * v2218,
      3401,
      "shelf_frame",
    ),
      fn363(
        arr137,
        arg1540,
        v2217 - min67,
        0,
        v2214,
        v2214 + v2215,
        min67,
        0.92 * v2218,
        3431,
        "shelf_frame",
      ));
    let arr138 = [0.1, 0.38, 0.66, 0.92];
    for (let n412 = 0; n412 < arr138.length; n412++) {
      let v2219 = v2214 + v2215 * arr138[n412];
      fn363(
        arr137,
        arg1540,
        0,
        0,
        v2219,
        v2219 + 0.065,
        0.96 * v2217,
        0.94 * v2218,
        3461 + 41 * n412,
        "shelf_slab",
      );
    }
    let arr139 = [0.18, 0.46, 0.74];
    for (let n413 = 0; n413 < arr139.length; n413++)
      for (let v2220 = -1; v2220 <= 1; v2220++) {
        if ((v2220 + n413 + Math.floor(arg1540.x + arg1540.z)) & 1) continue;
        let v2221 = v2220 * v2217 * 0.48,
          min68 = Math.min(0.3, Math.max(0.16, 0.18 * v2217));
        fn363(
          arr137,
          arg1540,
          v2221,
          0,
          v2214 + v2215 * arr139[n413],
          v2214 + v2215 * (arr139[n413] + 0.13),
          min68,
          0.54 * v2218,
          3601 + 97 * n413 + 19 * (v2220 + 1),
          "shelf_stock",
        );
      }
    fn365(arr137, arg1541, (arg1542, arg1543) =>
      "shelf_stock" === arg1542.styleBase
        ? {
            color: "hsl(174,55%," + (30 + 21 * arg1543).toFixed(0) + "%)",
            fill: "hsl(180,31%," + (4 + 7 * arg1543).toFixed(0) + "%)",
          }
        : "shelf_slab" === arg1542.styleBase
          ? {
              color: "hsl(42,42%," + (30 + 19 * arg1543).toFixed(0) + "%)",
              fill: "hsl(36,24%," + (4 + 7 * arg1543).toFixed(0) + "%)",
            }
          : {
              color:
                "hsl(38,29%," +
                Math.max(18, 27 + 18 * arg1543 - 100 * arg1542.shade).toFixed(0) +
                "%)",
              fill: "hsl(32,22%," + (4 + 6 * arg1543).toFixed(0) + "%)",
            },
    );
  }
  function fn371(arg1544, arg1545) {
    if (fn366(arg1544, arg1545, 25)) return;
    let v2222 = arg1544.y || 0,
      v2223 = arg1544.h || 1.7,
      v2224 = 0.5 * (arg1544.w || 1.1),
      v2225 = 0.5 * (arg1544.d || 1.05),
      fn364Result3 = fn364(arg1544),
      arr140 = [];
    (fn363(
      arr140,
      arg1544,
      0,
      0,
      v2222,
      v2222 + 0.12 * v2223,
      0.72 * v2224,
      0.72 * v2225,
      3801,
      "terminal_foot",
    ),
      fn363(
        arr140,
        arg1544,
        0,
        0,
        v2222 + 0.1 * v2223,
        v2222 + 0.57 * v2223,
        0.45 * v2224,
        0.45 * v2225,
        3831,
        "terminal_pedestal",
      ),
      fn363(
        arr140,
        arg1544,
        0,
        fn364Result3 * v2225 * 0.02,
        v2222 + 0.55 * v2223,
        v2222 + 0.91 * v2223,
        0.72 * v2224,
        0.43 * v2225,
        3861,
        "terminal_head",
      ),
      fn363(
        arr140,
        arg1544,
        0,
        fn364Result3 * (0.46 * v2225),
        v2222 + 0.62 * v2223,
        v2222 + 0.85 * v2223,
        0.57 * v2224,
        0.035,
        3891,
        "terminal_screen",
      ),
      fn365(arr140, arg1545, (arg1546, arg1547) =>
        "terminal_screen" === arg1546.styleBase
          ? {
              color: "hsl(118,92%," + (38 + 24 * arg1547).toFixed(0) + "%)",
              fill: "hsl(190,54%," + (3 + 6 * arg1547).toFixed(0) + "%)",
            }
          : "terminal_head" === arg1546.styleBase
            ? {
                color:
                  "hsl(188,66%," +
                  Math.max(19, 32 + 21 * arg1547 - 100 * arg1546.shade).toFixed(0) +
                  "%)",
                fill: "hsl(195,42%," + (4 + 7 * arg1547).toFixed(0) + "%)",
              }
            : {
                color:
                  "hsl(190,34%," +
                  Math.max(17, 27 + 18 * arg1547 - 100 * arg1546.shade).toFixed(0) +
                  "%)",
                fill: "hsl(200,28%," + (4 + 6 * arg1547).toFixed(0) + "%)",
              },
      ));
  }
  function fn372(arg1548, arg1549) {
    if (fn366(arg1548, arg1549, 22)) return;
    let v2226 = arg1548.y || 0,
      v2227 = arg1548.h || 0.8,
      v2228 = 0.5 * (arg1548.w || 1.9),
      v2229 = 0.5 * (arg1548.d || 0.68),
      arr141 = [],
      arr142 = [],
      v2230 = v2226 + 0.42 * v2227,
      max185 = Math.max(0.062, 0.095 * v2227),
      fn364Result4 = fn364(arg1548);
    (fn363(
      arr141,
      arg1548,
      0,
      0,
      v2230,
      v2230 + max185,
      0.98 * v2228,
      0.82 * v2229,
      4001,
      "bench_seat",
    ),
      fn363(
        arr141,
        arg1548,
        0,
        -fn364Result4 * v2229 * 0.72,
        v2230 + max185,
        v2226 + v2227,
        0.98 * v2228,
        Math.max(0.045, 0.12 * v2229),
        4031,
        "bench_back",
      ));
    let v2231 = v2230 - 0.1 * max185,
      min69 = Math.min(0.052, 0.06 * v2228),
      min70 = Math.min(0.036, 0.1 * v2229),
      v2232 = -fn364Result4 * v2229 * 0.3;
    for (let v2233 of [0.54 * -v2228, 0.54 * v2228])
      fn363(
        arr142,
        arg1548,
        v2233,
        v2232,
        v2226,
        v2231,
        min69,
        min70,
        4061 + Math.round(31 * v2233),
        "bench_leg",
        false,
      );
    let fn479 = (arg1550, arg1551) => ({
      color:
        "bench_leg" === arg1550.styleBase
          ? "hsl(195,18%," + (22 + 17 * arg1551).toFixed(0) + "%)"
          : "hsl(32,35%," + Math.max(18, 30 + 21 * arg1551 - 100 * arg1550.shade).toFixed(0) + "%)",
      fill:
        "bench_leg" === arg1550.styleBase
          ? "hsl(205,16%," + (4 + 5 * arg1551).toFixed(0) + "%)"
          : "hsl(28,27%," + (5 + 7 * arg1551).toFixed(0) + "%)",
    });
    (fn365(arr142, arg1549, fn479), fn365(arr141, arg1549, fn479));
  }
  function fn373(arg1552, arg1553) {
    if (fn366(arg1552, arg1553, 20)) return;
    let v2234 = arg1552.y || 0,
      v2235 = arg1552.h || 1.05,
      min71 = Math.min(0.34, Math.max(0.22, 0.39 * (arg1552.w || 0.75))),
      arr143 = [];
    (fn355(
      arr143,
      arg1552.x,
      arg1552.z,
      v2234,
      v2234 + 0.88 * v2235,
      min71,
      min71,
      8,
      4201,
      "bin_body",
      0.125 * Math.PI,
      false,
    ),
      fn355(
        arr143,
        arg1552.x,
        arg1552.z,
        v2234 + 0.88 * v2235,
        v2234 + 0.98 * v2235,
        1.05 * min71,
        1.05 * min71,
        8,
        4231,
        "bin_rim",
        0.125 * Math.PI,
        true,
      ),
      fn356(arr143, fn309(7, arg1553, arg1552), arg1553, (arg1554, arg1555, arg1556) => ({
        color:
          "bin_rim_top" === arg1554.styleBase
            ? "hsl(135,25%," + (28 + 18 * arg1556).toFixed(0) + "%)"
            : "hsl(135,24%," +
              Math.max(15, 24 + 18 * arg1556 - 100 * arg1554.shade).toFixed(0) +
              "%)",
        fill: "hsl(135,20%," + (3 + 6 * arg1556).toFixed(0) + "%)",
      })));
  }
  function fn374(arg1557, arg1558) {
    if (fn366(arg1557, arg1558, 19)) return;
    let v2236 = arg1557.y || 0,
      v2237 = arg1557.h || 0.9,
      v2238 = arg1557.w || 0.35,
      min72 = Math.min(0.145, Math.max(0.095, 0.34 * v2238)),
      arr144 = [],
      v2239 =
        hash2(
          19 * Math.floor(toWorldX(arg1557.x)) + 701,
          23 * Math.floor(toWorldZ(arg1557.z)) + 709,
        ) > 0.42;
    (fn355(
      arr144,
      arg1557.x,
      arg1557.z,
      v2236,
      v2236 + 0.095 * v2237,
      1.25 * min72,
      1.25 * min72,
      8,
      4601,
      "bollard_foot",
      0.125 * Math.PI,
      true,
    ),
      fn355(
        arr144,
        arg1557.x,
        arg1557.z,
        v2236 + 0.075 * v2237,
        v2236 + 0.82 * v2237,
        min72,
        min72,
        8,
        4631,
        "bollard_body",
        0.125 * Math.PI,
        false,
      ),
      fn355(
        arr144,
        arg1557.x,
        arg1557.z,
        v2236 + 0.82 * v2237,
        v2236 + 0.96 * v2237,
        1.04 * min72,
        1.04 * min72,
        8,
        4661,
        "bollard_cap",
        0.125 * Math.PI,
        true,
      ),
      v2239 &&
        fn355(
          arr144,
          arg1557.x,
          arg1557.z,
          v2236 + 0.6 * v2237,
          v2236 + 0.665 * v2237,
          1.075 * min72,
          1.075 * min72,
          8,
          4691,
          "bollard_band",
          0.125 * Math.PI,
          false,
        ),
      fn356(arr144, fn309(8, arg1558, arg1557), arg1558, (arg1559, arg1560, arg1561) =>
        "bollard_band" === arg1559.styleBase
          ? {
              color: "hsl(50,78%," + (43 + 27 * arg1561).toFixed(0) + "%)",
              fill: "hsl(46,45%," + (5 + 7 * arg1561).toFixed(0) + "%)",
            }
          : "bollard_cap_top" === arg1559.styleBase
            ? {
                color: "hsl(48,30%," + (34 + 20 * arg1561).toFixed(0) + "%)",
                fill: "hsl(210,12%," + (4 + 5 * arg1561).toFixed(0) + "%)",
              }
            : {
                color:
                  "hsl(210,12%," +
                  Math.max(14, 27 + 17 * arg1561 - 100 * arg1559.shade).toFixed(0) +
                  "%)",
                fill: "hsl(215,14%," + (3 + 5 * arg1561).toFixed(0) + "%)",
              },
      ));
  }
  function fn375(arg1562, arg1563) {
    if (fn366(arg1562, arg1563, 22)) return;
    let v2240 = arg1562.y || 0,
      v2241 = arg1562.h || 1,
      v2242 = 0.5 * (arg1562.w || 1.2),
      v2243 = 0.5 * (arg1562.d || 1),
      arr145 = [];
    (fn363(
      arr145,
      arg1562,
      0,
      0,
      v2240,
      v2240 + 0.4 * v2241,
      0.96 * v2242,
      0.92 * v2243,
      4401,
      "planter_box",
      false,
    ),
      fn363(
        arr145,
        arg1562,
        0,
        0,
        v2240 + 0.4 * v2241,
        v2240 + 0.47 * v2241,
        v2242,
        v2243,
        4431,
        "planter_rim",
        true,
      ),
      fn365(arr145, arg1563, (arg1564, arg1565) => ({
        color:
          "hsl(188,30%," + Math.max(17, 27 + 18 * arg1565 - 100 * arg1564.shade).toFixed(0) + "%)",
        fill: "hsl(195,25%," + (4 + 6 * arg1565).toFixed(0) + "%)",
      })));
    let v2244 = "hsl(112,58%," + (22 + 27 * arg1563).toFixed(0) + "%)",
      v2245 = "hsl(135,70%," + (28 + 28 * arg1563).toFixed(0) + "%)";
    for (let v2246 = -1; v2246 <= 1; v2246++) {
      let v2247 = v2246 * v2242 * 0.48,
        [fn362Result13, fn362Result14] = fn362(arg1562, v2247, (1 & v2246) * v2243 * 0.12),
        arr146 = [],
        min73 = Math.min(0.28, Math.max(0.15, 0.2 * v2242));
      (fn355(
        arr146,
        fn362Result13,
        fn362Result14,
        v2240 + 0.49 * v2241,
        v2240 + v2241 * (0.7 + (0 === v2246 ? 0.12 : 0)),
        min73,
        0.88 * min73,
        6,
        4471 + 71 * (v2246 + 1),
        "planter_leaf",
        Math.PI / 6,
        true,
      ),
        fn356(arr146, fn309(n53, arg1563, arg1562), arg1563, (arg1566, arg1567, arg1568) => ({
          color: arg1566.styleBase.endsWith("_top") ? v2245 : v2244,
          fill: "hsl(118,35%," + (3 + 5 * arg1568).toFixed(0) + "%)",
        })));
    }
  }
  function fn376(arg1569, arg1570) {
    let v2248 = arg1569.y || 0,
      v2249 = arg1569.h || 1.1,
      v2250 = arg1569.w || 1.2,
      v2251 = arg1569.d || 1.28,
      max186 = Math.max(0.34, Math.min(0.5, 0.38 * v2250)),
      arr147 = [],
      v2252 = v2248 + 0.66 * v2249,
      v2253 = v2248 + 0.75 * v2249,
      max187 = Math.max(0.055, 0.15 * max186),
      v2254 = 0.42 * max186;
    (fn355(
      arr147,
      arg1569.x,
      arg1569.z,
      v2248,
      v2248 + 0.055 * v2249,
      v2254,
      v2254,
      8,
      2261,
      "cafe_foot",
      0.125 * Math.PI,
      true,
    ),
      fn355(
        arr147,
        arg1569.x,
        arg1569.z,
        v2248 + 0.045 * v2249,
        v2252,
        max187,
        max187,
        8,
        2291,
        "cafe_post",
        0.125 * Math.PI,
        false,
      ),
      fn355(
        arr147,
        arg1569.x,
        arg1569.z,
        v2252,
        v2253,
        max186,
        max186,
        10,
        2321,
        "cafe_top",
        0.1 * Math.PI,
        true,
      ));
    let min74 = Math.min(0.78, max186 + 0.22 * v2251),
      v2255 = 0.42 * max186,
      v2256 = v2248 + 0.38 * v2249,
      v2257 = v2248 + 0.46 * v2249,
      v2258 = 0.78 * max187,
      v2259 =
        1 === arg1569.axis
          ? [
              [arg1569.x, arg1569.z - min74],
              [arg1569.x, arg1569.z + min74],
            ]
          : [
              [arg1569.x - min74, arg1569.z],
              [arg1569.x + min74, arg1569.z],
            ];
    for (let n414 = 0; n414 < v2259.length; n414++) {
      let [v2260, v2261] = v2259[n414];
      (fn355(
        arr147,
        v2260,
        v2261,
        v2248,
        v2248 + 0.04 * v2249,
        0.48 * v2255,
        0.48 * v2255,
        6,
        2361 + 71 * n414,
        "cafe_stool_foot",
        Math.PI / 6,
        true,
      ),
        fn355(
          arr147,
          v2260,
          v2261,
          v2248 + 0.035 * v2249,
          v2256,
          v2258,
          v2258,
          6,
          2391 + 71 * n414,
          "cafe_stool_post",
          Math.PI / 6,
          false,
        ),
        fn355(
          arr147,
          v2260,
          v2261,
          v2256,
          v2257,
          v2255,
          v2255,
          8,
          2421 + 71 * n414,
          "cafe_stool",
          0.125 * Math.PI,
          true,
        ));
    }
    let fn309Result5 = fn309(n41, arg1570, arg1569);
    (Math.max(0.08, Math.min(1, arg1570)),
      fn356(arr147, fn309Result5, arg1570, (arg1571, arg1572, arg1573) => {
        let v2262,
          v2263,
          v2264 = arg1571.styleBase.includes("post") || arg1571.styleBase.includes("foot"),
          includes = arg1571.styleBase.includes("stool");
        return (
          v2264
            ? ((v2262 =
                "hsl(32,20%," +
                Math.max(18, 30 + 18 * arg1573 - 100 * arg1571.shade).toFixed(0) +
                "%)"),
              (v2263 = "hsl(30,18%," + (5 + 7 * arg1573).toFixed(0) + "%)"))
            : includes
              ? ((v2262 =
                  "hsl(28,42%," +
                  Math.max(19, 32 + 20 * arg1573 - 100 * arg1571.shade).toFixed(0) +
                  "%)"),
                (v2263 = "hsl(25,34%," + (6 + 8 * arg1573).toFixed(0) + "%)"))
              : ((v2262 =
                  "hsl(38,48%," +
                  Math.max(20, 35 + 22 * arg1573 - 100 * arg1571.shade).toFixed(0) +
                  "%)"),
                (v2263 = "hsl(34,38%," + (6 + 9 * arg1573).toFixed(0) + "%)")),
          arg1571.styleBase.endsWith("_top") &&
            (v2262 = "hsl(40,52%," + (35 + 24 * arg1573).toFixed(0) + "%)"),
          {
            color: v2262,
            fill: v2263,
          }
        );
      }));
  }
  function fn377(arg1574, arg1575) {
    if (("window" === sCity3 ? fn343(arg1574) : arg1574._depth || fn343(arg1574)) > 30) {
      if ("window" === sCity3) return;
      return void fn318(arg1574, arg1575);
    }
    let v2265 = arg1574.y || 0,
      v2266 = arg1574.h || 2.35,
      v2267 = arg1574.w || 1.22,
      v2268 = arg1574.d || 0.96,
      v2269 = 0.5 * (0 === arg1574.axis ? v2267 : v2268),
      v2270 = 0.5 * (0 === arg1574.axis ? v2268 : v2267),
      v2271 = Number.isFinite(arg1574.phoneFrontSign) ? arg1574.phoneFrontSign : -1,
      n415 = 0.075,
      arr148 = [],
      fn480 = (arg1576, arg1577, arg1578, arg1579, arg1580, arg1581, arg1582, arg1583) =>
        fn381(
          arr148,
          arg1576,
          arg1577,
          arg1578,
          arg1579,
          arg1580,
          arg1581,
          arg1580,
          arg1581,
          arg1582,
          arg1583,
        );
    fn480(arg1574.x, arg1574.z, v2265, v2265 + 0.07, v2269, v2270, 2001, "phone_base");
    let v2272 = v2265 + v2266 - 0.12,
      v2273 = v2265 + v2266,
      v2274 = 1.09 * v2269,
      v2275 = 1.09 * v2270,
      fn481 = (arg1584, arg1585, arg1586, arg1587, arg1588 = 0.02) => {
        let map41 = arg1584.map(([arg1589, arg1590]) => fn346(arg1589, arg1590, arg1585));
        arr148.push({
          verts: map41,
          dep: map41.reduce((arg1591, arg1592) => arg1591 + arg1592.d, 0) / map41.length,
          seed: arg1586,
          shade: arg1588,
          styleBase: arg1587,
        });
      },
      fn482 = (arg1593, arg1594, arg1595) => {
        let arr153 = [
          fn346(arg1593[0], arg1593[1], v2272),
          fn346(arg1594[0], arg1594[1], v2272),
          fn346(arg1594[0], arg1594[1], v2273),
          fn346(arg1593[0], arg1593[1], v2273),
        ];
        arr148.push({
          verts: arr153,
          dep: arr153.reduce((arg1596, arg1597) => arg1596 + arg1597.d, 0) / arr153.length,
          seed: arg1595,
          shade: 0.03,
          styleBase: "phone_roof_edge",
        });
      },
      arr149 = [arg1574.x - v2274, arg1574.z - v2275],
      arr150 = [arg1574.x + v2274, arg1574.z - v2275],
      arr151 = [arg1574.x + v2274, arg1574.z + v2275],
      arr152 = [arg1574.x - v2274, arg1574.z + v2275];
    (fn342() > v2273 + 0.02
      ? fn481([arr149, arr150, arr151, arr152], v2273, 2031, "phone_roof_top", -0.06)
      : fn481([arr152, arr151, arr150, arr149], v2272, 2033, "phone_roof_inner", 0.05),
      fn482(arr149, arr150, 2035),
      fn482(arr150, arr151, 2037),
      fn482(arr151, arr152, 2039),
      fn482(arr152, arr149, 2041));
    for (let v2277 of [-1, 1])
      for (let v2278 of [-1, 1])
        fn480(
          arg1574.x + v2277 * (v2269 - n415),
          arg1574.z + v2278 * (v2270 - n415),
          v2265 + 0.05,
          v2272,
          n415,
          n415,
          2071 + 31 * (v2277 + 2) + 13 * (v2278 + 2),
          "phone_post",
        );
    if (0 === arg1574.axis) {
      let v2279 = arg1574.z - v2271 * v2270 * 0.82,
        v2280 = arg1574.z - v2271 * v2270 * 0.52;
      (fn480(
        arg1574.x,
        v2279,
        v2265 + 0.16,
        v2265 + 0.76 * v2266,
        0.78 * v2269,
        0.055,
        2161,
        "phone_back",
      ),
        fn480(
          arg1574.x,
          v2280,
          v2265 + 0.72,
          v2265 + 1.42,
          0.34 * v2269,
          0.1,
          2191,
          "phone_terminal",
        ));
    } else {
      let v2281 = arg1574.x - v2271 * v2269 * 0.82,
        v2282 = arg1574.x - v2271 * v2269 * 0.52;
      (fn480(
        v2281,
        arg1574.z,
        v2265 + 0.16,
        v2265 + 0.76 * v2266,
        0.055,
        0.78 * v2270,
        2161,
        "phone_back",
      ),
        fn480(
          v2282,
          arg1574.z,
          v2265 + 0.72,
          v2265 + 1.42,
          0.1,
          0.34 * v2270,
          2191,
          "phone_terminal",
        ));
    }
    arr148.sort((arg1598, arg1599) => arg1599.dep - arg1598.dep);
    let max188 = Math.max(0.08, Math.min(1, arg1575));
    for (let v2283 of arr148) {
      let v2284 =
          "hsl(350,72%," + Math.max(20, 34 + 22 * max188 - 100 * v2283.shade).toFixed(0) + "%)",
        v2285 = "hsl(350,42%," + (5 + 8 * max188).toFixed(0) + "%)";
      ("phone_back" === v2283.styleBase &&
        ((v2284 = "hsl(202,32%," + (22 + 15 * max188).toFixed(0) + "%)"),
        (v2285 = "hsl(205,40%," + (4 + 5 * max188).toFixed(0) + "%)")),
        "phone_terminal" === v2283.styleBase &&
          ((v2284 = "hsl(185,88%," + (38 + 20 * max188).toFixed(0) + "%)"),
          (v2285 = "hsl(205,55%," + (4 + 5 * max188).toFixed(0) + "%)")),
        "phone_roof_top" === v2283.styleBase &&
          ((v2284 = "hsl(350,88%," + (40 + 23 * max188).toFixed(0) + "%)"),
          (v2285 = "hsl(350,45%," + (6 + 8 * max188).toFixed(0) + "%)")),
        "phone_roof_inner" === v2283.styleBase &&
          ((v2284 = "hsl(350,58%," + (24 + 17 * max188).toFixed(0) + "%)"),
          (v2285 = "hsl(350,34%," + (4 + 6 * max188).toFixed(0) + "%)")),
        "phone_roof_edge" === v2283.styleBase &&
          ((v2284 =
            "hsl(350,78%," + Math.max(20, 33 + 20 * max188 - 100 * v2283.shade).toFixed(0) + "%)"),
          (v2285 = "hsl(350,40%," + (5 + 7 * max188).toFixed(0) + "%)")),
        fn352(v2283.verts, {
          seed: v2283.seed,
          foliage: false,
          color: v2284,
          fill: v2285,
          texelDensity: 7,
        }));
    }
    let v2276 = "hsl(46,88%," + (38 + 22 * max188).toFixed(0) + "%)";
    if (0 === arg1574.axis) {
      let v2286 = arg1574.z + v2271 * v2270 * 0.98;
      fn353(
        {
          x: arg1574.x - 0.62 * v2269,
          z: v2286,
          y: v2265 + 0.84 * v2266,
        },
        {
          x: arg1574.x + 0.62 * v2269,
          z: v2286,
          y: v2265 + 0.84 * v2266,
        },
        v2276,
        2231,
      );
    } else {
      let v2287 = arg1574.x + v2271 * v2269 * 0.98;
      fn353(
        {
          x: v2287,
          z: arg1574.z - 0.62 * v2270,
          y: v2265 + 0.84 * v2266,
        },
        {
          x: v2287,
          z: arg1574.z + 0.62 * v2270,
          y: v2265 + 0.84 * v2266,
        },
        v2276,
        2231,
      );
    }
  }
  function fn378(arg1600, arg1601) {
    let v2288 = arg1600.y || 0,
      v2289 = arg1600.h || 0.8,
      max189 = Math.max(0.13, Math.min(0.2, 0.22 * (arg1600.w || 0.75))),
      arr154 = [];
    (fn355(
      arr154,
      arg1600.x,
      arg1600.z,
      v2288,
      v2288 + 0.15 * v2289,
      1.18 * max189,
      1.18 * max189,
      8,
      1881,
      "hydrant_base",
      0.125 * Math.PI,
      true,
    ),
      fn355(
        arr154,
        arg1600.x,
        arg1600.z,
        v2288 + 0.15 * v2289,
        v2288 + 0.73 * v2289,
        max189,
        max189,
        10,
        1911,
        "hydrant_body",
        0.1 * Math.PI,
        false,
      ),
      fn355(
        arr154,
        arg1600.x,
        arg1600.z,
        v2288 + 0.73 * v2289,
        v2288 + 0.85 * v2289,
        1.08 * max189,
        1.08 * max189,
        8,
        1941,
        "hydrant_cap",
        0.125 * Math.PI,
        true,
      ));
    let v2290 = v2288 + 0.43 * v2289,
      v2291 = v2288 + 0.57 * v2289,
      v2292 = v2288 + 0.875 * v2289,
      v2293 = v2288 + 0.985 * v2289,
      v2294 = 0.72 * max189,
      v2295 = 0.38 * max189,
      v2296 = 0.24 * max189;
    ("x" == (1 === arg1600.axis ? "z" : "x")
      ? (fn381(
          arr154,
          arg1600.x - (max189 + 0.52 * v2294),
          arg1600.z,
          v2290,
          v2291,
          0.52 * v2294,
          v2295,
          0.52 * v2294,
          v2295,
          1971,
          "hydrant_nozzle",
        ),
        fn381(
          arr154,
          arg1600.x + (max189 + 0.52 * v2294),
          arg1600.z,
          v2290,
          v2291,
          0.52 * v2294,
          v2295,
          0.52 * v2294,
          v2295,
          1981,
          "hydrant_nozzle",
        ))
      : (fn381(
          arr154,
          arg1600.x,
          arg1600.z - (max189 + 0.52 * v2294),
          v2290,
          v2291,
          v2295,
          0.52 * v2294,
          v2295,
          0.52 * v2294,
          1971,
          "hydrant_nozzle",
        ),
        fn381(
          arr154,
          arg1600.x,
          arg1600.z + (max189 + 0.52 * v2294),
          v2290,
          v2291,
          v2295,
          0.52 * v2294,
          v2295,
          0.52 * v2294,
          1981,
          "hydrant_nozzle",
        )),
      fn355(
        arr154,
        arg1600.x,
        arg1600.z,
        v2292,
        v2293,
        v2296,
        v2296,
        6,
        1991,
        "hydrant_top",
        0.166 * Math.PI,
        true,
      ));
    let fn309Result6 = fn309(n42, arg1601, arg1600),
      v2297 = "hsl(42,34%," + (30 + 22 * arg1601).toFixed(0) + "%)";
    fn356(arr154, fn309Result6, arg1601, (arg1602, arg1603, arg1604) => {
      let v2298 =
          "hsl(8,78%," + Math.max(18, 30 + 20 * arg1604 - 100 * arg1602.shade).toFixed(0) + "%)",
        v2299 = "hsl(8,48%," + (5 + 8 * arg1604).toFixed(0) + "%)";
      return (
        arg1602.styleBase.endsWith("_top") &&
          (v2298 = "hsl(12,82%," + (37 + 24 * arg1604).toFixed(0) + "%)"),
        "hydrant_nozzle" === arg1602.styleBase &&
          ((v2298 =
            "hsl(8,82%," + Math.max(20, 32 + 18 * arg1604 - 100 * arg1602.shade).toFixed(0) + "%)"),
          (v2299 = "hsl(8,44%," + (5 + 7 * arg1604).toFixed(0) + "%)")),
        ("hydrant_top" === arg1602.styleBase || "hydrant_top_top" === arg1602.styleBase) &&
          ((v2298 = v2297), (v2299 = "hsl(38,24%," + (5 + 7 * arg1604).toFixed(0) + "%)")),
        {
          color: v2298,
          fill: v2299,
        }
      );
    });
  }
  function fn379(arg1605, arg1606) {
    let x3 = arg1605.x,
      z3 = arg1605.z,
      v2300 = arg1605.y || 0,
      v2301 = arg1605.h || 2.45,
      v2302 = 0.28 * (arg1605.w || 2.4),
      max190 = Math.max(0.24, 0.22 * (arg1605.d || 1.85)),
      arr155 = [];
    (fn381(
      arr155,
      x3,
      z3,
      v2300,
      v2300 + 0.18 * v2301,
      2 * v2302,
      2 * max190,
      1.75 * v2302,
      1.75 * max190,
      1701,
      "plinth",
    ),
      fn381(
        arr155,
        x3,
        z3,
        v2300 + 0.18 * v2301,
        v2300 + 0.82 * v2301,
        0.95 * v2302,
        0.95 * max190,
        0.38 * v2302,
        0.38 * max190,
        1751,
        "body",
      ),
      fn381(
        arr155,
        x3,
        z3,
        v2300 + 0.82 * v2301,
        v2300 + 0.98 * v2301,
        0.44 * v2302,
        0.44 * max190,
        0.14 * v2302,
        0.14 * max190,
        1801,
        "cap",
      ),
      arr155.sort((arg1607, arg1608) => arg1608.dep - arg1607.dep));
    let fn309Result7 = fn309(n60, arg1606, arg1605),
      max191 = Math.max(0.08, Math.min(1, arg1606));
    for (let v2303 of arr155) {
      let v2304 =
          "hsl(42,26%," + Math.max(17, 31 + 18 * max191 - 100 * v2303.shade).toFixed(0) + "%)",
        v2305 = "hsl(205,22%," + (4 + 7 * max191).toFixed(0) + "%)";
      ("body" === v2303.styleBase &&
        (v2304 =
          "hsl(190,26%," + Math.max(18, 34 + 17 * max191 - 100 * v2303.shade).toFixed(0) + "%)"),
        "cap" === v2303.styleBase && (v2304 = fn309Result7.accent),
        fn352(v2303.verts, {
          seed: v2303.seed,
          foliage: false,
          color: v2304,
          fill: v2305,
          texelDensity: 7,
        }));
    }
    fn353(
      {
        x: x3 - 0.55 * v2302,
        z: z3,
        y: v2300 + 0.42 * v2301,
      },
      {
        x: x3 + 0.55 * v2302,
        z: z3,
        y: v2300 + 0.6 * v2301,
      },
      fn309Result7.accent,
      1831,
    );
  }
  function fn380(arg1609, arg1610, arg1611) {
    return fn346(arg1609, arg1610, arg1611);
  }
  function fn381(
    arg1612,
    arg1613,
    arg1614,
    arg1615,
    arg1616,
    arg1617,
    arg1618,
    arg1619,
    arg1620,
    arg1621,
    arg1622,
    arg1623 = true,
  ) {
    let arr156 = [
        fn380(arg1613 - arg1617, arg1614 - arg1618, arg1615),
        fn380(arg1613 + arg1617, arg1614 - arg1618, arg1615),
        fn380(arg1613 + arg1617, arg1614 + arg1618, arg1615),
        fn380(arg1613 - arg1617, arg1614 + arg1618, arg1615),
      ],
      arr157 = [
        fn380(arg1613 - arg1619, arg1614 - arg1620, arg1616),
        fn380(arg1613 + arg1619, arg1614 - arg1620, arg1616),
        fn380(arg1613 + arg1619, arg1614 + arg1620, arg1616),
        fn380(arg1613 - arg1619, arg1614 + arg1620, arg1616),
      ],
      fn380Result = fn380(arg1613, arg1614, 0.5 * (arg1615 + arg1616)),
      arr158 = [
        [arr156[0], arr156[1], arr157[1], arr157[0]],
        [arr156[1], arr156[2], arr157[2], arr157[1]],
        [arr156[2], arr156[3], arr157[3], arr157[2]],
        [arr156[3], arr156[0], arr157[0], arr157[3]],
      ];
    arg1623 && arr158.push([arr157[0], arr157[1], arr157[2], arr157[3]]);
    for (let n416 = 0; n416 < arr158.length; n416++) {
      let v2306 = arr158[n416];
      if (!fn350(v2306, fn380Result)) continue;
      let v2307 = v2306.reduce((arg1624, arg1625) => arg1624 + arg1625.d, 0) / v2306.length;
      arg1612.push({
        verts: v2306,
        dep: v2307,
        seed: arg1621 + 31 * n416,
        shade: 4 === n416 ? -0.08 : 1 & n416 ? 0.055 : 0.015,
        styleBase: arg1622,
      });
    }
  }
  function fn382(arg1626, arg1627) {
    let x4 = arg1626.x,
      z4 = arg1626.z,
      v2308 = arg1626.y || 0,
      v2309 = 0.5 * (1 === arg1626.axis ? arg1626.d || obj3.d : arg1626.w || obj3.w),
      v2310 = 0.5 * (1 === arg1626.axis ? arg1626.w || obj3.w : arg1626.d || obj3.d),
      v2311 = arg1626.h || obj3.h,
      arr159 = [];
    (fn381(arr159, x4, z4, v2308, v2308 + 0.09 * v2311, v2309, v2310, v2309, v2310, 101, "plinth"),
      fn381(
        arr159,
        x4,
        z4,
        v2308 + 0.09 * v2311,
        v2308 + 0.235 * v2311,
        0.78 * v2309,
        0.78 * v2310,
        0.7 * v2309,
        0.7 * v2310,
        211,
        "pedestal",
      ),
      fn381(
        arr159,
        x4,
        z4,
        v2308 + 0.235 * v2311,
        v2308 + 0.64 * v2311,
        0.62 * v2309,
        0.62 * v2310,
        0.37 * v2309,
        0.38 * v2310,
        307,
        "body",
      ),
      fn381(
        arr159,
        x4,
        z4,
        v2308 + 0.6 * v2311,
        v2308 + 0.715 * v2311,
        0.73 * v2309,
        0.6 * v2310,
        0.58 * v2309,
        0.49 * v2310,
        401,
        "shoulder",
      ),
      fn381(
        arr159,
        x4,
        z4,
        v2308 + 0.715 * v2311,
        v2308 + 0.875 * v2311,
        0.34 * v2309,
        0.31 * v2310,
        0.24 * v2309,
        0.22 * v2310,
        503,
        "beacon",
      ),
      fn381(
        arr159,
        x4,
        z4,
        v2308 + 0.875 * v2311,
        v2308 + 0.925 * v2311,
        0.26 * v2309,
        0.23 * v2310,
        0.13 * v2309,
        0.12 * v2310,
        607,
        "cap",
      ),
      arr159.sort((arg1628, arg1629) => arg1629.dep - arg1628.dep));
    let fn309Result8 = fn309(n55, arg1627, arg1626),
      max192 = Math.max(0.08, Math.min(1, arg1627));
    for (let v2313 of arr159) {
      let base3 = fn309Result8.base,
        v2314 = "hsl(42,24%," + (7 + 10 * max192).toFixed(0) + "%)";
      ("body" === v2313.styleBase || "shoulder" === v2313.styleBase
        ? ((base3 =
            "hsl(42,42%," + Math.max(18, 34 + 22 * max192 - 100 * v2313.shade).toFixed(0) + "%)"),
          (v2314 = "hsl(42,26%," + (6 + 9 * max192).toFixed(0) + "%)"))
        : "beacon" === v2313.styleBase || "cap" === v2313.styleBase
          ? ((base3 =
              "beacon" === v2313.styleBase
                ? fn309Result8.accent
                : fn309Result8["*"] || fn309Result8.accent),
            (v2314 = "hsl(195,34%," + (5 + 8 * max192).toFixed(0) + "%)"))
          : (base3 =
              "hsl(42,32%," + Math.max(15, 29 + 20 * max192 - 100 * v2313.shade).toFixed(0) + "%)"),
        fn352(v2313.verts, {
          seed: v2313.seed,
          foliage: false,
          color: base3,
          fill: v2314,
        }));
    }
    fn353(
      {
        x: x4,
        z: z4,
        y: v2308 + 0.925 * v2311,
      },
      {
        x: x4,
        z: z4,
        y: v2308 + 0.985 * v2311,
      },
      fn309Result8.accent,
      733,
    );
    let v2312 = v2308 + 0.988 * v2311,
      max193 = Math.max(0.1, 0.13 * v2309),
      max194 = Math.max(0.1, 0.055 * v2310),
      max195 = Math.max(0.12, 0.012 * v2311),
      fn380Result2 = fn380(x4, z4, v2312),
      fn380Result3 = fn380(x4, z4, v2312 + max195),
      fn380Result4 = fn380(x4, z4, v2312 - max195),
      fn380Result5 = fn380(x4 + max193, z4, v2312),
      fn380Result6 = fn380(x4 - max193, z4, v2312),
      fn380Result7 = fn380(x4, z4 - max194, v2312),
      fn380Result8 = fn380(x4, z4 + max194, v2312),
      arr160 = [
        [fn380Result3, fn380Result5, fn380Result7],
        [fn380Result3, fn380Result7, fn380Result6],
        [fn380Result3, fn380Result6, fn380Result8],
        [fn380Result3, fn380Result8, fn380Result5],
        [fn380Result4, fn380Result7, fn380Result5],
        [fn380Result4, fn380Result6, fn380Result7],
        [fn380Result4, fn380Result8, fn380Result6],
        [fn380Result4, fn380Result5, fn380Result8],
      ],
      arr161 = [];
    for (let n417 = 0; n417 < arr160.length; n417++) {
      let v2315 = arr160[n417];
      fn350(v2315, fn380Result2) &&
        arr161.push({
          verts: v2315,
          dep: v2315.reduce((arg1630, arg1631) => arg1630 + arg1631.d, 0) / 3,
          i: n417,
        });
    }
    arr161.sort((arg1632, arg1633) => arg1633.dep - arg1632.dep);
    for (let v2316 of arr161)
      fn352(v2316.verts, {
        seed: 811 + 17 * v2316.i,
        foliage: false,
        color: fn309Result8["*"] || fn309Result8.accent,
        fill: "hsl(195,40%," + (5 + 9 * max192).toFixed(0) + "%)",
      });
  }
  function fn383(arg1634, arg1635, arg1636, arg1637) {
    if (Math.hypot(arg1634.x - view.x, arg1634.z - view.z) <= n130)
      return void (function (arg1638, arg1639) {
        let now7 = performance.now();
        stats.nearTrees++;
        let v2321 = arg1638.y || 0,
          v2322 = arg1638.h || 2.6,
          hypot8 = Math.hypot(arg1638.x - view.x, arg1638.z - view.z),
          floor73 = Math.floor(5 * toWorldX(arg1638.x)),
          floor74 = Math.floor(5 * toWorldZ(arg1638.z)),
          v2323 = ((73856093 * floor73) ^ (19349663 * floor74)) >>> 0,
          v2324 = freeze30[fn339(v2323)],
          min78 = Math.min(v2322 * v2324.trunk, 1.4),
          v2325 = 0.055 + 0.018 * hash2(floor73 + 17, floor74 + 23),
          v2326 = "hsl(29,38%," + (20 + 20 * arg1639).toFixed(0) + "%)",
          v2327 = "hsl(27,34%," + (11 + 15 * arg1639).toFixed(0) + "%)",
          v2328 = "hsl(28,30%," + (5 + 8 * arg1639).toFixed(0) + "%)",
          v2329 = arg1638.x - v2325,
          v2330 = arg1638.x + v2325,
          v2331 = arg1638.z - v2325,
          v2332 = arg1638.z + v2325,
          v2333 = v2321,
          v2334 = v2321 + min78,
          fn346Result3 = fn346(arg1638.x, arg1638.z, 0.5 * (v2333 + v2334)),
          sort2 = [
            [
              fn346(v2329, v2331, v2333),
              fn346(v2330, v2331, v2333),
              fn346(v2330, v2331, v2334),
              fn346(v2329, v2331, v2334),
            ],
            [
              fn346(v2330, v2332, v2333),
              fn346(v2329, v2332, v2333),
              fn346(v2329, v2332, v2334),
              fn346(v2330, v2332, v2334),
            ],
            [
              fn346(v2329, v2332, v2333),
              fn346(v2329, v2331, v2333),
              fn346(v2329, v2331, v2334),
              fn346(v2329, v2332, v2334),
            ],
            [
              fn346(v2330, v2331, v2333),
              fn346(v2330, v2332, v2333),
              fn346(v2330, v2332, v2334),
              fn346(v2330, v2331, v2334),
            ],
          ]
            .map((arg1640, arg1641) => ({
              v: arg1640,
              depth: arg1640.reduce((arg1642, arg1643) => arg1642 + arg1643.d, 0) / arg1640.length,
              i: arg1641,
            }))
            .sort((arg1644, arg1645) => arg1645.depth - arg1644.depth);
        for (let v2337 of sort2)
          fn350(v2337.v, fn346Result3) &&
            fn352(v2337.v, {
              seed: v2323 + 29 * v2337.i,
              foliage: false,
              color: 1 & v2337.i ? v2327 : v2326,
              fill: v2328,
            });
        let v2335 = v2321 + 0.87 * min78,
          map42 = v2324.clusters.map((arg1646) => ({
            ox: arg1646[0],
            oz: arg1646[1],
            cy: v2335 + arg1646[2],
            rx: arg1646[3],
            rz: arg1646[4],
            ry: arg1646[5],
          })),
          arr162 = [];
        for (let n418 = 0; n418 < map42.length; n418++) {
          let v2338 = map42[n418],
            v2339 = hash2(v2323 + 73 * n418, v2323 + 91 * n418) - 0.5,
            v2340 = hash2(v2323 + 101 * n418, v2323 + 113 * n418) - 0.5,
            v2341 = arg1638.x + v2338.ox + 0.12 * v2339,
            v2342 = arg1638.z + v2338.oz + 0.12 * v2340,
            v2343 = v2338.cy + 0.12 * (hash2(v2323 + 127 * n418, 61) - 0.5),
            v2344 = 0.9 + 0.2 * hash2(v2323 + 131 * n418, 71),
            v2345 = v2338.rx * v2344,
            v2346 = v2338.rz * v2344,
            v2347 = v2338.ry * v2344,
            fn346Result4 = fn346(v2341, v2342, v2343),
            fn346Result5 = fn346(v2341, v2342, v2343 + v2347),
            fn346Result6 = fn346(v2341, v2342, v2343 - v2347),
            fn346Result7 = fn346(v2341 + v2345, v2342, v2343),
            fn346Result8 = fn346(v2341 - v2345, v2342, v2343),
            fn346Result9 = fn346(v2341, v2342 - v2346, v2343),
            fn346Result10 = fn346(v2341, v2342 + v2346, v2343),
            arr163 = [
              [fn346Result5, fn346Result7, fn346Result9],
              [fn346Result5, fn346Result9, fn346Result8],
              [fn346Result5, fn346Result8, fn346Result10],
              [fn346Result5, fn346Result10, fn346Result7],
              [fn346Result6, fn346Result9, fn346Result7],
              [fn346Result6, fn346Result8, fn346Result9],
              [fn346Result6, fn346Result10, fn346Result8],
              [fn346Result6, fn346Result7, fn346Result10],
            ],
            v2348 = view.x - v2341,
            v2349 = view.z - v2342,
            v2350 = fn191() - v2343,
            v2351 =
              (v2348 * v2348) / (v2345 * v2345) +
                (v2349 * v2349) / (v2346 * v2346) +
                (v2350 * v2350) / (v2347 * v2347) <
              1.02;
          for (let n419 = 0; n419 < arr163.length; n419++) {
            let v2352 = arr163[n419];
            if (!v2351 && !fn350(v2352, fn346Result4)) continue;
            let v2353 = v2352.reduce((arg1647, arg1648) => arg1647 + arg1648.d, 0) / 3;
            arr162.push({
              verts: v2352,
              dep: v2353,
              ci: n418,
              fi: n419,
              cx: v2341,
              cz: v2342,
              cy: v2343,
            });
          }
        }
        arr162.sort((arg1649, arg1650) => arg1650.dep - arg1649.dep);
        for (let v2354 of arr162) {
          let hypot9 = Math.hypot(v2354.cx - view.x, v2354.cz - view.z),
            fn349Result = fn349(Math.min(hypot8, hypot9)),
            v2355 = v2354.fi < 4,
            v2356 = (11 * v2354.ci + 7 * v2354.fi) % 18,
            v2357 = 104 + ((v2323 + 17 * v2354.ci) % 25),
            v2358 = 40 + ((v2323 + 13 * v2354.fi) % 20),
            v2359 = (v2355 ? 25 : 18) + (v2355 ? 22 : 17) * arg1639 - 0.18 * v2356;
          fn352(v2354.verts, {
            seed: v2323 + 211 * v2354.ci + 37 * v2354.fi,
            foliage: true,
            density: fn349Result,
            color: "hsl(" + v2357 + "," + v2358 + "%," + Math.max(10, v2359).toFixed(0) + "%)",
          });
        }
        let obj55 = {
            x: arg1638.x,
            z: arg1638.z,
            y: v2321 + 0.72 * min78,
          },
          v2336 = "hsl(30,34%," + (15 + 17 * arg1639).toFixed(0) + "%)";
        for (let n420 = 1; n420 < map42.length; n420++) {
          let v2360 = map42[n420];
          fn353(
            obj55,
            {
              x: arg1638.x + 0.72 * v2360.ox,
              z: arg1638.z + 0.72 * v2360.oz,
              y: v2360.cy - 0.12,
            },
            v2336,
            v2323 + n420,
          );
        }
        fn2("nearTrees", now7);
      })(arg1634, arg1637);
    let floor71 = Math.floor(5 * toWorldX(arg1634.x)),
      floor72 = Math.floor(5 * toWorldZ(arg1634.z)),
      v2317 = freeze30[fn339(((73856093 * floor71) ^ (19349663 * floor72)) >>> 0)],
      v2318 = (1.3 * v2317.farWidth * (cols / 2)) / (arg1635 * Math.tan(v18 / 2)),
      max196 = Math.max(0, Math.round(arg1636 - v2318 / 2)),
      min75 = Math.min(cols - 1, Math.round(arg1636 + v2318 / 2)),
      fn191Result8 = fn191(),
      fn10Result13 = fn10(arg1634.h, arg1635, fn191Result8),
      fn10Result14 = fn10(0, arg1635, fn191Result8),
      fn10Result15 = fn10(Math.max(0.88, arg1634.h * v2317.farCanopy), arg1635, fn191Result8),
      max197 = Math.max(0, Math.ceil(fn10Result13)),
      min76 = Math.min(rows - 1, Math.floor(fn10Result14)),
      min77 = Math.min(min76, Math.max(max197, Math.floor(fn10Result15))),
      v2319 = (max196 + min75) / 2,
      v2320 = (max197 + min77) / 2,
      max198 = Math.max(0.7, (min75 - max196) / 2),
      max199 = Math.max(1, (min77 - max197) / 2),
      round36 = Math.round(5 * arg1634.x),
      round37 = Math.round(5 * arg1634.z);
    for (let v2361 = max196; v2361 <= min75; v2361++)
      if (!(float32Array[v2361] < arg1635))
        for (let v2362 = max197; v2362 <= min76; v2362++) {
          if (v2362 > min77) {
            let min79 = Math.min(0.52, 0.14 * max198);
            Math.abs(v2361 - v2319) < min79 &&
              fn264(v2361, v2362, "|", "hsl(28,35%," + (14 + 17 * arg1637).toFixed(0) + "%)");
            continue;
          }
          let v2363 = (v2361 - v2319) / max198,
            v2364 = (v2362 - v2320) / max199;
          if (
            v2363 * v2363 + v2364 * v2364 > 1 ||
            hash2(31 * round36 + v2361, 17 * v2362 + round37) > 0.88
          )
            continue;
          let fn12Result27 = hash2(v2361 + v2362, round36);
          fn264(
            v2361,
            v2362,
            fn12Result27 < 0.3 ? "%" : fn12Result27 < 0.6 ? "*" : fn12Result27 < 0.8 ? "#" : "o",
            "hsl(115,45%," + (20 + 26 * arg1637).toFixed(0) + "%)",
          );
        }
  }
  function fn384(arg1651, arg1652, arg1653, arg1654) {
    return arg1651.slice(
      0,
      Math.max(0, Math.min(arg1651.length, Math.floor((arg1652 - arg1653) * arg1654))),
    );
  }
  function fn385() {
    let max200 = Math.max(0, Math.min(1, (live - freeze6.title) / (freeze6.live - freeze6.title)));
    return {
      raw: max200,
      resolve: 1 - Math.pow(1 - max200, 1.18),
    };
  }
  var n133 = 1.58,
    round = Math.round(width * n133),
    round2 = Math.round(9 * n133),
    round3 = Math.round(v6 * n133),
    round4 = Math.round(n3 * n133),
    round5 = Math.round(n133),
    n134 = 0;
  function fn386(arg1655, arg1656, arg1657, arg1658) {
    if (v2 && " " !== arg1655) {
      if (v8) {
        let fn260Result2 = fn260(arg1655, arg1658);
        if (undefined !== fn260Result2) {
          let v2365 = (fn260Result2 % n6) * v6,
            v2366 = ((fn260Result2 / n6) | 0) * n3;
          return void v2.drawImage(
            v7,
            v2365,
            v2366,
            v6,
            n3,
            Math.round(arg1656) - round5,
            Math.round(arg1657),
            round3,
            round4,
          );
        }
      }
      ((v2.fillStyle = arg1658),
        (v2.font = Math.round(15.8) + 'px Consolas, "Courier New", monospace'),
        v2.fillText(arg1655, Math.round(arg1656), Math.round(arg1657 + round2) - 2));
    }
  }
  function fn387(arg1659, arg1660, arg1661, arg1662, arg1663 = 60) {
    arg1659 = String(arg1659 ?? "");
    for (let n421 = 0; n421 < Math.min(arg1659.length, arg1663); n421++)
      fn386(arg1659[n421], arg1660 * round + n421 * round, arg1661 * round2, arg1662);
  }
  var v82 = n13,
    freeze31 = Object.freeze([
      Object.freeze({
        id: "LOCAL",
        height: 13,
        step: 4,
        widthCap: 33,
        legend: "STREET DETAIL / ~1 BLOCK",
      }),
      Object.freeze({
        id: "DISTRICT",
        height: 15,
        step: 16,
        widthCap: 35,
        legend: "DISTRICT / BLOCK + ROAD DETAIL",
      }),
      Object.freeze({
        id: "SECTOR",
        height: 17,
        step: 0,
        widthCap: 41,
        legend: "SECTOR ATLAS / 16 DISTRICTS",
      }),
      Object.freeze({
        id: "CITY",
        height: 17,
        step: 0,
        widthCap: 41,
        legend: "CITY ATLAS / 16 SECTORS + PRIMARY ROUTES",
      }),
    ]),
    v83 =
      typeof location < "u"
        ? (new URLSearchParams(location.search).get("mapzoom") || "").toUpperCase()
        : "",
    max3 = Math.max(
      0,
      freeze31.findIndex((arg1664) => arg1664.id === v83),
    ),
    mapColors = Object.freeze({
      player: "hsl(132,100%,84%)",
      playerGuide: "hsl(132,100%,68%)",
      landmark: "hsl(43,100%,68%)",
      relay: "hsl(350,96%,70%)",
      taxi: "hsl(48,100%,68%)",
      road: "hsl(188,58%,58%)",
      arterial: "hsl(154,82%,69%)",
      pedestrian: "hsl(116,55%,49%)",
      building: "hsl(139,22%,34%)",
      park: "hsl(102,76%,56%)",
      water: "hsl(192,88%,64%)",
      boundary: "hsl(138,29%,39%)",
      sectorBoundary: "hsl(47,48%,46%)",
      centre: "hsl(138,43%,53%)",
      label: "hsl(138,60%,61%)",
      unknown: "hsl(138,18%,24%)",
    }),
    freeze33 = Object.freeze({
      CORE: [184, 72],
      INDUSTRIAL: [31, 78],
      OLD_TOWN: [48, 64],
      RESIDENTIAL: [128, 60],
      COMMERCIAL: [302, 64],
      PARKLAND: [105, 72],
      TOWER_ESTATE: [220, 64],
      MIXED: [164, 50],
    });
  function fn388(arg1665, arg1666) {
    return ((arg1665 % arg1666) + arg1666) % arg1666;
  }
  function fn389(arg1667, arg1668) {
    return fn153(arg1667, arg1668);
  }
  function fn390(arg1669, arg1670) {
    return fn152(arg1669, arg1670);
  }
  function fn391(arg1671, arg1672) {
    return fn390(toWorldX(arg1671), toWorldZ(arg1672));
  }
  function fn392(arg1673, arg1674 = false) {
    let v2367 = freeze33[arg1673] || freeze33.MIXED;
    return "hsl(" + v2367[0] + "," + v2367[1] + "%," + (arg1674 ? 66 : 47) + "%)";
  }
  function fn393(arg1675, arg1676 = false, arg1677 = 0, arg1678 = 0) {
    let v2368 = freeze33[arg1675] || freeze33.MIXED,
      v2369 = (((arg1678 % 3) + 3) % 3) - 1;
    return (
      "hsl(" +
      fn388(
        v2368[0] + 4 * v2369 + (1 === arg1677 ? 10 : 2 === arg1677 ? -8 : 3 === arg1677 ? 6 : 0),
        360,
      ) +
      "," +
      Math.min(92, v2368[1] + (arg1677 ? 8 : 0)) +
      "%," +
      (arg1676 ? (arg1677 ? 71 : 64) : arg1677 ? 57 : 47) +
      "%)"
    );
  }
  function fn394(arg1679, arg1680) {
    return fn151(arg1679, arg1680);
  }
  function fn395(arg1681) {
    return Math.round(arg1681 / n30) * n30;
  }
  function fn396(arg1682, arg1683) {
    let max201 = Math.max(0, Math.min(1, arg1682 / n10)),
      max202 = Math.max(0, Math.min(1, arg1683 / n10)),
      v2370 = max201 - 0.5,
      v2371 = max202 - 0.5,
      abs10 = Math.abs(v2370),
      abs11 = Math.abs(v2371),
      v2372 = Math.hypot(v2370, v2371) > 0.37,
      v2373 = abs10 < 0.1 ? "" : v2370 < 0 ? "WEST" : "EAST",
      v2374 = abs11 < 0.1 ? "" : v2371 < 0 ? "NORTH" : "SOUTH",
      v2375 = v2374 && v2373 ? v2374 + "-" + v2373 : v2374 || v2373 || "CENTRAL";
    return (
      "CENTRAL" !== v2375 && v2372
        ? (v2375 = "OUTER " + v2375)
        : "CENTRAL" !== v2375 &&
          !v2372 &&
          (abs10 < 0.22 || abs11 < 0.22) &&
          (v2375 = "CENTRAL-" + v2375),
      {
        label: v2375,
        nx: max201,
        nz: max202,
      }
    );
  }
  function fn397(arg1684, arg1685) {
    let max203 = Math.max(0, Math.min(7, Math.floor((arg1684 / n10) * 8))),
      max204 = Math.max(0, Math.min(7, Math.floor((arg1685 / n10) * 8)));
    return {
      x: max203,
      z: max204,
      label: String.fromCharCode(65 + max203) + (max204 + 1),
    };
  }
  function fn398(arg1686 = view.x, arg1687 = view.z) {
    let v2376,
      v2377,
      v2378,
      fn3Result9 = toWorldX(arg1686),
      fn4Result9 = toWorldZ(arg1687),
      fn388Result = fn388(Math.floor(fn3Result9), n30),
      fn388Result2 = fn388(Math.floor(fn4Result9), n30),
      v2379 = fn388Result < n31,
      v2380 = fn388Result2 < n31,
      fn389Result = fn389("Z", Math.floor(fn3Result9 / n30) * n30),
      fn389Result2 = fn389("X", Math.floor(fn4Result9 / n30) * n30),
      fn389Result3 = fn389("Z", fn395(fn3Result9)),
      fn389Result4 = fn389("X", fn395(fn4Result9));
    if (v2379 && v2380)
      ((v2376 = fn389Result2),
        (v2377 = fn389Result),
        (v2378 = fn389Result2.name + " / " + fn389Result.name));
    else if (v2379) ((v2376 = fn389Result), (v2377 = fn389Result4), (v2378 = fn389Result.name));
    else if (v2380) ((v2376 = fn389Result2), (v2377 = fn389Result3), (v2378 = fn389Result2.name));
    else {
      let abs12 = Math.abs(fn3Result9 - fn389Result3.base),
        abs13 = Math.abs(fn4Result9 - fn389Result4.base);
      ((v2376 = abs12 < abs13 ? fn389Result3 : fn389Result4),
        (v2377 = abs12 < abs13 ? fn389Result4 : fn389Result3),
        (v2378 = v2376.name));
    }
    let fn394Result3 = fn394(fn3Result9, fn4Result9);
    return {
      district: fn390(fn3Result9, fn4Result9),
      area: fn394Result3,
      sector: fn394Result3,
      gridRef: fn397(fn3Result9, fn4Result9),
      position: fn396(fn3Result9, fn4Result9),
      street: v2376,
      cross: v2377,
      location: v2378,
    };
  }
  function fn399(arg1688) {
    return ["^", ">", "v", "<"][fn388(Math.round(arg1688 / (Math.PI / 2)), 4)];
  }
  function fn400(arg1689) {
    return String(arg1689 || "")
      .replace("NORTH-EAST", "NE")
      .replace("SOUTH-EAST", "SE")
      .replace("SOUTH-WEST", "SW")
      .replace("NORTH-WEST", "NW")
      .replace("NORTH", "N")
      .replace("SOUTH", "S")
      .replace("EAST", "E")
      .replace("WEST", "W");
  }
  var v84 = v57;
  function fn401(arg1690, arg1691) {
    let round38 = Math.round(arg1691 / n30);
    for (let n422 = 0; n422 < 20; n422++)
      for (let v2381 of n422 ? [round38 - n422, round38 + n422] : [round38]) {
        let v2382 = v2381 * n30;
        if (v2382 > 0 && v2382 < n10 && fn19(arg1690, v2382)) return v2382;
      }
    return Math.max(n30, Math.min(n10 - n30, round38 * n30));
  }
  var freeze34 = Object.freeze([
    ...[0.24, 0.5, 0.76].map((arg1692, arg1693) =>
      Object.freeze({
        axis: "Z",
        base: fn401("Z", n10 * arg1692),
        name: fn389("Z", fn401("Z", n10 * arg1692)).name,
        index: arg1693,
      }),
    ),
    ...[0.24, 0.5, 0.76].map((arg1694, arg1695) =>
      Object.freeze({
        axis: "X",
        base: fn401("X", n10 * arg1694),
        name: fn389("X", fn401("X", n10 * arg1694)).name,
        index: arg1695,
      }),
    ),
  ]);
  function fn402(arg1696, arg1697) {
    return fn19(arg1696, arg1697) && 0 === fn388(Math.floor(arg1697 / n30), 7);
  }
  function fn403() {
    return freeze31[max3];
  }
  function fn404(arg1698, arg1699, arg1700) {
    let floor75 = Math.floor(arg1698),
      floor76 = Math.floor(arg1699);
    if (floor75 < 0 || floor76 < 0 || floor75 >= worldN || floor76 >= worldN)
      return {
        ch: " ",
        color: mapColors.unknown,
      };
    if (fn23(arg1698, arg1699)) {
      if (Math.hypot(arg1698 - obj3.x, arg1699 - obj3.z) < 2.1)
        return {
          ch: "*",
          color: mapColors.landmark,
        };
      let v2385 = uint8Array18[worldIndex(floor75, floor76)];
      return {
        ch: 4 === v2385 ? "~" : 5 === v2385 ? "." : ":",
        color: 4 === v2385 ? mapColors.water : mapColors.park,
      };
    }
    let fn24Result30 = worldIndex(floor75, floor76),
      v2383 = uint8Array17[fn24Result30],
      v2384 = uint8Array18[fn24Result30];
    if (1 === v2383) {
      let fn391Result = fn391(arg1698, arg1699),
        v2386 =
          fn391Result.districtX === arg1700.districtX &&
          fn391Result.districtZ === arg1700.districtZ;
      return {
        ch: "#",
        color: fn392(fn391Result.type, v2386),
      };
    }
    return 0 === v2384
      ? {
          ch: "=",
          color: mapColors.road,
        }
      : 2 === v2384
        ? {
            ch: "+",
            color: mapColors.arterial,
          }
        : 6 === v2384
          ? {
              ch: "-",
              color: mapColors.pedestrian,
            }
          : 5 === v2384
            ? {
                ch: ".",
                color: mapColors.park,
              }
            : 3 === v2384
              ? {
                  ch: ":",
                  color: mapColors.park,
                }
              : 4 === v2384
                ? {
                    ch: "~",
                    color: mapColors.water,
                  }
                : 1 === v2384
                  ? {
                      ch: " ",
                      color: mapColors.boundary,
                    }
                  : {
                      ch: " ",
                      color: mapColors.unknown,
                    };
  }
  function fn405(arg1701, arg1702, arg1703) {
    if (arg1701 < 0 || arg1702 < 0 || arg1701 >= n10 || arg1702 >= n10)
      return {
        ch: " ",
        color: mapColors.unknown,
      };
    for (let v2394 of v84)
      if (Math.abs(arg1701 - v2394.x) < 12 && Math.abs(arg1702 - v2394.z) < 12)
        return {
          ch: "*",
          color: mapColors.landmark,
        };
    if (
      arg1701 >= freeze8.x0 &&
      arg1701 < freeze8.x1 &&
      arg1702 >= freeze8.z0 &&
      arg1702 < freeze8.z1
    )
      return {
        ch: "P",
        color: mapColors.park,
      };
    let floor77 = Math.floor(arg1701),
      floor78 = Math.floor(arg1702),
      fn388Result3 = fn388(floor77, n30),
      fn388Result4 = fn388(floor78, n30),
      v2387 = fn388Result3 < n31,
      v2388 = fn388Result4 < n31,
      v2389 = v2387 && fn19("Z", floor77 - fn388Result3),
      v2390 = v2388 && fn19("X", floor78 - fn388Result4),
      v2391 = v2389 && fn402("Z", floor77 - fn388Result3),
      v2392 = v2390 && fn402("X", floor78 - fn388Result4);
    if (v2387 || v2388)
      return v2387 && v2388
        ? v2391 && v2392
          ? {
              ch: "╬",
              color: mapColors.arterial,
            }
          : v2391
            ? {
                ch: "║",
                color: mapColors.arterial,
              }
            : v2392
              ? {
                  ch: "═",
                  color: mapColors.arterial,
                }
              : v2389 && v2390
                ? {
                    ch: "┼",
                    color: mapColors.road,
                  }
                : v2389
                  ? {
                      ch: "│",
                      color: mapColors.road,
                    }
                  : v2390
                    ? {
                        ch: "─",
                        color: mapColors.road,
                      }
                    : {
                        ch: "·",
                        color: mapColors.pedestrian,
                      }
        : v2387
          ? {
              ch: v2391 ? "║" : v2389 ? "│" : "·",
              color: v2391 ? mapColors.arterial : v2389 ? mapColors.road : mapColors.pedestrian,
            }
          : {
              ch: v2392 ? "═" : v2390 ? "─" : "·",
              color: v2392 ? mapColors.arterial : v2390 ? mapColors.road : mapColors.pedestrian,
            };
    let floor79 = Math.floor(floor77 / n30),
      floor80 = Math.floor(floor78 / n30),
      fn35Result6 = fn35(floor79, floor80),
      fn390Result3 = fn390(arg1701, arg1702),
      v2393 =
        fn390Result3.districtX === arg1703.districtX &&
        fn390Result3.districtZ === arg1703.districtZ;
    return fn35Result6.park
      ? {
          ch: "░",
          color: mapColors.park,
        }
      : {
          ch: "▓",
          color: fn393(
            fn390Result3.type,
            v2393,
            fn35Result6.architecture,
            (31 * floor79 + 17 * floor80) | 0,
          ),
        };
  }
  function fn406(arg1704, arg1705, arg1706 = mapColors.unknown) {
    return Array.from(
      {
        length: arg1705,
      },
      () =>
        Array.from(
          {
            length: arg1704,
          },
          () => ({
            ch: " ",
            color: arg1706,
          }),
        ),
    );
  }
  function fn407(arg1707, arg1708, arg1709, arg1710, arg1711) {
    if (!(arg1708 < 0 || arg1708 >= arg1707.length))
      for (let n423 = 0; n423 < arg1710.length; n423++) {
        let v2395 = arg1709 + n423;
        v2395 >= 0 &&
          v2395 < arg1707[arg1708].length &&
          (arg1707[arg1708][v2395] = {
            ch: arg1710[n423],
            color: arg1711,
          });
      }
  }
  function fn408(arg1712, arg1713, arg1714) {
    let v2396 = Math.ceil(16) - 1,
      max205 = Math.max(0, Math.min(v2396, arg1712.districtX + arg1713)),
      max206 = Math.max(0, Math.min(v2396, arg1712.districtZ + arg1714));
    return fn390((max205 + 0.5) * v82, (max206 + 0.5) * v82);
  }
  function fn409(arg1715, arg1716, arg1717 = 2) {
    if (
      !(arg1715 = String(arg1715 || "")
        .trim()
        .replace(/\s+/g, " "))
    )
      return [""];
    let split2 = arg1715.split(" "),
      arr164 = [],
      s19 = "";
    for (let v2397 of split2) {
      let v2398 = s19 ? s19 + " " + v2397 : v2397;
      if (v2398.length <= arg1716 || !s19)
        s19 = v2398.length <= arg1716 ? v2398 : v2397.slice(0, arg1716);
      else if (
        (arr164.push(s19),
        (s19 = v2397.length <= arg1716 ? v2397 : v2397.slice(0, arg1716)),
        arr164.length >= arg1717 - 1)
      )
        break;
    }
    if (
      (arr164.length < arg1717 && s19 && arr164.push(s19),
      arr164.length < arg1717 && split2.join(" ").length > arr164.join(" ").length)
    ) {
      let length5 = arr164.join(" ").trim().split(/\s+/).filter(Boolean).length,
        join = split2.slice(length5).join(" ");
      join && (arr164[arr164.length - 1] = join.length <= arg1716 ? join : join.slice(0, arg1716));
    }
    return arr164.length > arg1717
      ? arr164.slice(0, arg1717)
      : (1 === arr164.length &&
          arr164[0].length > arg1716 &&
          (arr164[0] = arr164[0].slice(0, arg1716)),
        arr164);
  }
  function fn410(arg1718, arg1719, arg1720, arg1721) {
    let max207 = Math.max(0, Math.min(3, Math.floor((arg1718 / arg1720) * 4))),
      max208 = Math.max(0, Math.min(3, Math.floor((arg1719 / arg1721) * 4)));
    return fn394(((max207 + 0.5) * n10) / 4, ((max208 + 0.5) * n10) / 4);
  }
  function fn411(arg1722, arg1723) {
    if ((arg1722 = String(arg1722).replace(/^THE\s+/, "")).length <= arg1723) return arg1722;
    let v2399 = arg1722.split(" ")[0];
    return v2399.length <= arg1723 ? v2399 : v2399.slice(0, arg1723);
  }
  function fn412(arg1724 = 33, arg1725 = fn403()) {
    return (
      1 & (arg1724 = Math.max(17, Math.min(arg1725.widthCap || arg1724, 1 | arg1724))) || arg1724--,
      "LOCAL" === arg1725.id
        ? (function (arg1726, arg1727) {
            let height3 = arg1727.height,
              fn406Result = fn406(arg1726, height3),
              v2400 = (arg1726 - 1) >> 1,
              v2401 = (height3 - 1) >> 1,
              fn391Result2 = fn391(view.x, view.z);
            for (let v2402 = -v2401; v2402 <= v2401; v2402++)
              for (let v2403 = -v2400; v2403 <= v2400; v2403++)
                fn406Result[v2402 + v2401][v2403 + v2400] = fn404(
                  view.x + v2403 * arg1727.step,
                  view.z + v2402 * arg1727.step,
                  fn391Result2,
                );
            let fn3Result10 = toWorldX(view.x),
              fn4Result10 = toWorldZ(view.z);
            for (let v2404 of v84) {
              let v2405 = Math.round((v2404.x - fn3Result10) / arg1727.step) + v2400,
                v2406 = Math.round((v2404.z - fn4Result10) / arg1727.step) + v2401;
              v2406 >= 0 &&
                v2406 < height3 &&
                v2405 >= 0 &&
                v2405 < arg1726 &&
                (fn406Result[v2406][v2405] = {
                  ch: "*",
                  color: mapColors.landmark,
                });
            }
            for (let v2407 of arr2)
              if (v2407.kind === n38) {
                let v2408 = Number.isFinite(v2407.relayWorldX)
                    ? v2407.relayWorldX
                    : toWorldX(v2407.x),
                  v2409 = Number.isFinite(v2407.relayWorldZ)
                    ? v2407.relayWorldZ
                    : toWorldZ(v2407.z),
                  v2410 = Math.round((v2408 - fn3Result10) / arg1727.step) + v2400,
                  v2411 = Math.round((v2409 - fn4Result10) / arg1727.step) + v2401;
                v2411 >= 0 &&
                  v2411 < height3 &&
                  v2410 >= 0 &&
                  v2410 < arg1726 &&
                  (fn406Result[v2411][v2410] = {
                    ch: "R",
                    color: mapColors.relay,
                  });
              }
            return (
              (fn406Result[v2401][v2400] = {
                ch: fn399(view.yaw),
                color: mapColors.player,
              }),
              {
                width: arg1726,
                height: height3,
                rows: fn406Result,
                mode: arg1727,
              }
            );
          })(arg1724, arg1725)
        : "DISTRICT" === arg1725.id
          ? (function (arg1728, arg1729) {
              let height4 = arg1729.height,
                fn406Result2 = fn406(arg1728, height4),
                v2412 = (arg1728 - 1) >> 1,
                v2413 = (height4 - 1) >> 1,
                fn3Result11 = toWorldX(view.x),
                fn4Result11 = toWorldZ(view.z),
                floor81 = Math.floor(fn3Result11 / arg1729.step),
                floor82 = Math.floor(fn4Result11 / arg1729.step),
                fn390Result4 = fn390(fn3Result11, fn4Result11);
              for (let v2415 = -v2413; v2415 <= v2413; v2415++)
                for (let v2416 = -v2412; v2416 <= v2412; v2416++) {
                  let v2417 = (floor81 + v2416) * arg1729.step + 0.5 * arg1729.step,
                    v2418 = (floor82 + v2415) * arg1729.step + 0.5 * arg1729.step;
                  fn406Result2[v2415 + v2413][v2416 + v2412] = fn405(v2417, v2418, fn390Result4);
                }
              for (let v2419 of arr2)
                if (v2419.kind === n38) {
                  let v2420 = Number.isFinite(v2419.relayWorldX)
                      ? v2419.relayWorldX
                      : toWorldX(v2419.x),
                    v2421 = Number.isFinite(v2419.relayWorldZ)
                      ? v2419.relayWorldZ
                      : toWorldZ(v2419.z),
                    v2422 = Math.round((v2420 - fn3Result11) / arg1729.step) + v2412,
                    v2423 = Math.round((v2421 - fn4Result11) / arg1729.step) + v2413;
                  v2423 >= 0 &&
                    v2423 < height4 &&
                    v2422 >= 0 &&
                    v2422 < arg1728 &&
                    (fn406Result2[v2423][v2422] = {
                      ch: "R",
                      color: mapColors.relay,
                    });
                }
              let v2414 = " " + fn390Result4.name + " ";
              return (
                fn407(
                  fn406Result2,
                  1,
                  Math.max(0, Math.floor((arg1728 - v2414.length) / 2)),
                  v2414,
                  fn392(fn390Result4.type, true),
                ),
                (function (arg1730, arg1731, arg1732, arg1733) {
                  if (
                    arg1732 < 0 ||
                    arg1732 >= arg1730.length ||
                    arg1731 < 0 ||
                    arg1731 >= arg1730[arg1732].length
                  )
                    return;
                  arg1730[arg1732][arg1731] = {
                    ch: "@",
                    color: mapColors.player,
                  };
                  let v2424 = [
                      [0, -1],
                      [1, 0],
                      [0, 1],
                      [-1, 0],
                    ][fn388(Math.round(arg1733 / (Math.PI / 2)), 4)],
                    v2425 = arg1732 + v2424[1],
                    v2426 = arg1731 + v2424[0];
                  v2425 >= 0 &&
                    v2425 < arg1730.length &&
                    v2426 >= 0 &&
                    v2426 < arg1730[v2425].length &&
                    (arg1730[v2425][v2426] = {
                      ch: fn399(arg1733),
                      color: mapColors.playerGuide,
                    });
                })(fn406Result2, v2412, v2413, view.yaw),
                {
                  width: arg1728,
                  height: height4,
                  rows: fn406Result2,
                  mode: arg1729,
                  currentDistrict: fn390Result4,
                  neighbours: {
                    north: fn408(fn390Result4, 0, -1),
                    south: fn408(fn390Result4, 0, 1),
                    west: fn408(fn390Result4, -1, 0),
                    east: fn408(fn390Result4, 1, 0),
                  },
                }
              );
            })(arg1724, arg1725)
          : "SECTOR" === arg1725.id
            ? (function (arg1734, arg1735) {
                let height5 = arg1735.height,
                  fn406Result3 = fn406(arg1734, height5),
                  fn3Result12 = toWorldX(view.x),
                  fn4Result12 = toWorldZ(view.z),
                  fn394Result4 = fn394(fn3Result12, fn4Result12),
                  n424 = 2048,
                  max209 = Math.max(1, Math.round(4)),
                  v2427 = fn394Result4.ix * n424,
                  v2428 = fn394Result4.iz * n424,
                  fn390Result5 = fn390(fn3Result12, fn4Result12);
                for (let n425 = 0; n425 < height5; n425++)
                  for (let n426 = 0; n426 < arg1734; n426++) {
                    let fn390Result6 = fn390(
                        v2427 + ((n426 + 0.5) / arg1734) * n424,
                        v2428 + ((n425 + 0.5) / height5) * n424,
                      ),
                      v2429 =
                        fn390Result6.districtX === fn390Result5.districtX &&
                        fn390Result6.districtZ === fn390Result5.districtZ;
                    fn406Result3[n425][n426] = {
                      ch: "·",
                      color: fn392(fn390Result6.type, v2429),
                    };
                  }
                let arr165 = [],
                  arr166 = [];
                for (let n427 = 1; n427 < max209; n427++)
                  (arr165.push(Math.round((n427 * arg1734) / max209)),
                    arr166.push(Math.round((n427 * height5) / max209)));
                for (let v2430 of arr165)
                  for (let n428 = 0; n428 < height5; n428++)
                    fn406Result3[n428][Math.min(arg1734 - 1, v2430)] = {
                      ch: "│",
                      color: mapColors.boundary,
                    };
                for (let v2431 of arr166)
                  for (let n429 = 0; n429 < arg1734; n429++)
                    fn406Result3[Math.min(height5 - 1, v2431)][n429] = {
                      ch: "─",
                      color: mapColors.boundary,
                    };
                for (let v2432 of arr165)
                  for (let v2433 of arr166)
                    fn406Result3[Math.min(height5 - 1, v2433)][Math.min(arg1734 - 1, v2432)] = {
                      ch: "┼",
                      color: mapColors.boundary,
                    };
                for (let n430 = 0; n430 < max209; n430++)
                  for (let n431 = 0; n431 < max209; n431++) {
                    let fn390Result7 = fn390(
                        v2427 + (n431 + 0.5) * v82,
                        v2428 + (n430 + 0.5) * v82,
                      ),
                      round39 = Math.round((n431 * arg1734) / max209),
                      v2434 = Math.round(((n431 + 1) * arg1734) / max209) - 1,
                      round40 = Math.round((n430 * height5) / max209),
                      v2435 = Math.round(((n430 + 1) * height5) / max209) - 1,
                      max211 = Math.max(3, v2434 - round39 - 1),
                      max212 = Math.max(1, v2435 - round40 - 1),
                      fn409Result = fn409(fn390Result7.name, max211, Math.min(2, max212)),
                      max213 = Math.max(
                        round40,
                        Math.min(v2435 - fn409Result.length + 1, round40 + 1),
                      ),
                      v2436 =
                        fn390Result7.districtX === fn390Result5.districtX &&
                        fn390Result7.districtZ === fn390Result5.districtZ;
                    for (let n432 = 0; n432 < fn409Result.length; n432++) {
                      let v2437 = fn409Result[n432];
                      fn407(
                        fn406Result3,
                        max213 + n432,
                        Math.max(round39, Math.floor((round39 + v2434 - v2437.length + 1) / 2)),
                        v2437,
                        fn392(fn390Result7.type, v2436),
                      );
                    }
                  }
                for (let v2438 of freeze34)
                  if ("Z" === v2438.axis && v2438.base >= v2427 && v2438.base < v2427 + n424) {
                    let max214 = Math.max(
                      0,
                      Math.min(
                        arg1734 - 1,
                        Math.round(((v2438.base - v2427) / n424) * (arg1734 - 1)),
                      ),
                    );
                    for (let n433 = 0; n433 < height5; n433++) {
                      let ch = fn406Result3[n433][max214].ch;
                      fn406Result3[n433][max214] = {
                        ch: "═" === ch || "─" === ch ? "╬" : "║",
                        color: mapColors.arterial,
                      };
                    }
                  } else if (
                    "X" === v2438.axis &&
                    v2438.base >= v2428 &&
                    v2438.base < v2428 + n424
                  ) {
                    let max215 = Math.max(
                      0,
                      Math.min(
                        height5 - 1,
                        Math.round(((v2438.base - v2428) / n424) * (height5 - 1)),
                      ),
                    );
                    for (let n434 = 0; n434 < arg1734; n434++) {
                      let ch2 = fn406Result3[max215][n434].ch;
                      fn406Result3[max215][n434] = {
                        ch: "║" === ch2 || "│" === ch2 ? "╬" : "═",
                        color: mapColors.arterial,
                      };
                    }
                  }
                if (
                  freeze8.cx >= v2427 &&
                  freeze8.cx < v2427 + n424 &&
                  freeze8.cz >= v2428 &&
                  freeze8.cz < v2428 + n424
                ) {
                  let round41 = Math.round(((freeze8.cx - v2427) / n424) * (arg1734 - 1));
                  fn406Result3[Math.round(((freeze8.cz - v2428) / n424) * (height5 - 1))][round41] =
                    {
                      ch: "P",
                      color: mapColors.park,
                    };
                }
                for (let v2439 of v84) {
                  if (
                    v2439.x < v2427 ||
                    v2439.x >= v2427 + n424 ||
                    v2439.z < v2428 ||
                    v2439.z >= v2428 + n424
                  )
                    continue;
                  let round42 = Math.round(((v2439.x - v2427) / n424) * (arg1734 - 1)),
                    round43 = Math.round(((v2439.z - v2428) / n424) * (height5 - 1));
                  ((fn406Result3[round43][round42] = {
                    ch: "*",
                    color: mapColors.landmark,
                  }),
                    round42 + 1 < arg1734 &&
                      fn407(fn406Result3, round43, round42 + 1, v2439.code, mapColors.landmark));
                }
                let max210 = Math.max(
                  0,
                  Math.min(arg1734 - 1, Math.round(((fn3Result12 - v2427) / n424) * (arg1734 - 1))),
                );
                return (
                  (fn406Result3[
                    Math.max(
                      0,
                      Math.min(
                        height5 - 1,
                        Math.round(((fn4Result12 - v2428) / n424) * (height5 - 1)),
                      ),
                    )
                  ][max210] = {
                    ch: "@",
                    color: mapColors.player,
                  }),
                  {
                    width: arg1734,
                    height: height5,
                    rows: fn406Result3,
                    mode: arg1735,
                    currentSector: fn394Result4,
                    currentDistrict: fn390Result5,
                  }
                );
              })(arg1724, arg1725)
            : (function (arg1736, arg1737) {
                let height6 = arg1737.height,
                  fn406Result4 = fn406(arg1736, height6),
                  fn394Result5 = fn394(toWorldX(view.x), toWorldZ(view.z));
                for (let n435 = 0; n435 < height6; n435++)
                  for (let n436 = 0; n436 < arg1736; n436++) {
                    let fn410Result = fn410(n436, n435, arg1736, height6),
                      v2440 =
                        fn410Result.ix === fn394Result5.ix && fn410Result.iz === fn394Result5.iz;
                    fn406Result4[n435][n436] = {
                      ch: "·",
                      color: fn392(fn410Result.type, v2440),
                    };
                  }
                let arr167 = [],
                  arr168 = [];
                for (let n437 = 1; n437 < 4; n437++)
                  (arr167.push(Math.round((n437 * arg1736) / 4)),
                    arr168.push(Math.round((n437 * height6) / 4)));
                for (let v2441 of arr167)
                  for (let n438 = 0; n438 < height6; n438++)
                    fn406Result4[n438][Math.min(arg1736 - 1, v2441)] = {
                      ch: "│",
                      color: mapColors.boundary,
                    };
                for (let v2442 of arr168)
                  for (let n439 = 0; n439 < arg1736; n439++)
                    fn406Result4[Math.min(height6 - 1, v2442)][n439] = {
                      ch: "─",
                      color: mapColors.boundary,
                    };
                for (let v2443 of arr167)
                  for (let v2444 of arr168)
                    fn406Result4[Math.min(height6 - 1, v2444)][Math.min(arg1736 - 1, v2443)] = {
                      ch: "┼",
                      color: mapColors.boundary,
                    };
                for (let v2445 of freeze34)
                  if ("Z" === v2445.axis) {
                    let max218 = Math.max(
                      0,
                      Math.min(arg1736 - 1, Math.round((v2445.base / n10) * (arg1736 - 1))),
                    );
                    for (let n440 = 0; n440 < height6; n440++) {
                      let ch3 = fn406Result4[n440][max218].ch;
                      fn406Result4[n440][max218] = {
                        ch: "═" === ch3 || "─" === ch3 ? "╬" : "║",
                        color: mapColors.arterial,
                      };
                    }
                  } else {
                    let max219 = Math.max(
                      0,
                      Math.min(height6 - 1, Math.round((v2445.base / n10) * (height6 - 1))),
                    );
                    for (let n441 = 0; n441 < arg1736; n441++) {
                      let ch4 = fn406Result4[max219][n441].ch;
                      fn406Result4[max219][n441] = {
                        ch: "║" === ch4 || "│" === ch4 ? "╬" : "═",
                        color: mapColors.arterial,
                      };
                    }
                  }
                for (let n442 = 0; n442 < 4; n442++)
                  for (let n443 = 0; n443 < 4; n443++) {
                    let round44 = Math.round((n443 * arg1736) / 4),
                      v2446 = Math.round(((n443 + 1) * arg1736) / 4) - 1,
                      round45 = Math.round((n442 * height6) / 4),
                      v2447 = Math.round(((n442 + 1) * height6) / 4) - 1,
                      fn394Result6 = fn394(((n443 + 0.5) * n10) / 4, ((n442 + 0.5) * n10) / 4),
                      max220 = Math.max(3, v2446 - round44 - 1),
                      fn411Result = fn411(fn394Result6.name, max220),
                      max221 = Math.max(round45, Math.min(v2447, round45 + 1));
                    (fn407(
                      fn406Result4,
                      max221,
                      Math.max(round44, Math.floor((round44 + v2446 - fn411Result.length + 1) / 2)),
                      fn411Result,
                      fn392(
                        fn394Result6.type,
                        n443 === fn394Result5.ix && n442 === fn394Result5.iz,
                      ),
                    ),
                      "PARKLAND" === fn394Result6.type &&
                        max221 + 1 <= v2447 &&
                        (fn406Result4[max221 + 1][Math.floor((round44 + v2446) / 2)] = {
                          ch: "P",
                          color: mapColors.park,
                        }));
                  }
                let max216 = Math.max(
                  0,
                  Math.min(arg1736 - 1, Math.round((freeze8.cx / n10) * (arg1736 - 1))),
                );
                fn406Result4[
                  Math.max(0, Math.min(height6 - 1, Math.round((freeze8.cz / n10) * (height6 - 1))))
                ][max216] = {
                  ch: "P",
                  color: mapColors.park,
                };
                for (let v2448 of v84) {
                  let max222 = Math.max(
                      0,
                      Math.min(arg1736 - 1, Math.round((v2448.x / n10) * (arg1736 - 1))),
                    ),
                    max223 = Math.max(
                      0,
                      Math.min(height6 - 1, Math.round((v2448.z / n10) * (height6 - 1))),
                    );
                  ((fn406Result4[max223][max222] = {
                    ch: "*",
                    color: mapColors.landmark,
                  }),
                    max222 + 1 < arg1736 &&
                      fn407(fn406Result4, max223, max222 + 1, v2448.code, mapColors.landmark));
                }
                let max217 = Math.max(
                  0,
                  Math.min(arg1736 - 1, Math.round((toWorldX(view.x) / n10) * (arg1736 - 1))),
                );
                return (
                  (fn406Result4[
                    Math.max(
                      0,
                      Math.min(height6 - 1, Math.round((toWorldZ(view.z) / n10) * (height6 - 1))),
                    )
                  ][max217] = {
                    ch: "@",
                    color: mapColors.player,
                  }),
                  {
                    width: arg1736,
                    height: height6,
                    rows: fn406Result4,
                    mode: arg1737,
                    currentArea: fn394Result5,
                  }
                );
              })(arg1724, arg1725)
    );
  }
  var now2 = performance.now(),
    n135 = 60,
    n136 = 0,
    n137 = 0,
    n138 = 0,
    flag17 = false,
    obj26 = {
      cells: 0,
      runs: 0,
      maxRuns: 0,
      nearWalls: 0,
      farWalls: 0,
      roofs: 0,
      ground: 0,
      cacheCells: 0,
      runGrowth: 0,
    },
    from11 = Array.from(
      {
        length: 160,
      },
      () => ({}),
    ),
    float64Array2 = new Float64Array(rows),
    int16Array25 = new Int16Array(rows),
    uint8Array42 = new Uint8Array(rows),
    map23 = new Map(),
    freeze35 = Object.freeze({
      height: 0,
      idX: 0,
      idZ: 0,
      hue: 0,
      sat: 0,
      win: 0,
      lit: 0,
      architecture: 0,
      loaded: false,
      plan: 0,
    }),
    obj27 = {};
  function fn413(arg1738, arg1739) {
    let v2449 = arg1738 - recordedOriginX,
      v2450 = arg1739 - recordedOriginZ;
    if (v2449 >= 0 && v2450 >= 0 && v2449 < worldN && v2450 < worldN) {
      let fn24Result31 = worldIndex(v2449, v2450);
      if (1 !== uint8Array17[fn24Result31]) return freeze35;
      let v2452 = uint16Array7[fn24Result31] || (521 * (v2449 + 1) + (v2450 + 1)) & 65535;
      return {
        height: uint8Array16[fn24Result31],
        idX: v2452,
        idZ: v2452,
        hue: uint8Array19[fn24Result31],
        sat: uint8Array20[fn24Result31],
        win: uint8Array21[fn24Result31],
        lit: uint8Array22[fn24Result31],
        architecture: uint8Array23[fn24Result31],
        loaded: true,
        plan: v2452,
        localX: v2449,
        localZ: v2450,
      };
    }
    let v2451 = arg1738 * n10 + arg1739,
      get21 = map23.get(v2451);
    return (
      undefined !== get21 ||
        ((get21 = fn36(arg1738, arg1739, obj27)
          ? {
              height: obj27.height,
              idX: obj27.idX,
              idZ: obj27.idZ,
              hue: obj27.hue,
              sat: obj27.sat,
              win: obj27.win,
              lit: obj27.lit,
              architecture: obj27.architecture,
              loaded: false,
              plan: (65535 * hash2(7919 * obj27.idX + 11, 104729 * obj27.idZ + 7)) & 65535,
            }
          : freeze35),
        map23.set(v2451, get21),
        obj26.cacheCells++),
      get21
    );
  }
  function fn414(arg1740, arg1741, arg1742, arg1743, arg1744, arg1745) {
    let v2453 = toWorldX(view.x) + arg1744 * arg1743,
      v2454 = toWorldZ(view.z) + arg1745 * arg1743,
      fn40Result4 = fn40(arg1743),
      v2455 = arg1742.hue || 188,
      v2456 = arg1742.plan || 1,
      v2457 =
        Math.abs(v2453 / 3 - Math.round(v2453 / 3)) < 0.08 ||
        Math.abs(v2454 / 3 - Math.round(v2454 / 3)) < 0.08,
      fn12Result28 = hash2(
        Math.floor(2 * v2453) + 13 * v2456,
        Math.floor(2 * v2454) + 7 * v2456 + 17,
      );
    (fn263(arg1740, arg1741, "hsl(" + v2455 + ",22%," + fn40Result4.base.toFixed(1) + "%)"),
      fn264(
        arg1740,
        arg1741,
        v2457
          ? "+"
          : fn12Result28 > 0.97
            ? "H"
            : fn12Result28 > 0.87
              ? "o"
              : fn12Result28 > 0.44
                ? "="
                : ".",
        "hsl(" +
          v2455 +
          "," +
          (v2457 ? 46 : 27) +
          "%," +
          (v2457 ? fn40Result4.seam : fn40Result4.ink).toFixed(0) +
          "%)",
      ));
  }
  function fn415(arg1746, arg1747, arg1748, arg1749, arg1750) {
    if (
      arg1748.loaded &&
      arg1749 <= n16 &&
      arg1748.localX >= 0 &&
      arg1748.localZ >= 0 &&
      arg1748.localX < worldN &&
      arg1748.localZ < worldN
    ) {
      if (!arg1748.wi) {
        let v2458 = arg1748.u - (0 === arg1748.side ? recordedOriginZ : recordedOriginX);
        arg1748.wi = fn279(
          arg1749,
          arg1748.side,
          arg1748.localX,
          arg1748.localZ,
          v2458 - Math.floor(v2458),
          arg1748.h,
          Math.max(0, Math.ceil(fn10(arg1748.h, arg1749, arg1750))),
          Math.min(rows - 1, Math.floor(fn10(0, arg1749, arg1750))),
          false,
          0,
          v2458,
        );
      }
      if (arg1748.wi.baseB >= 0.05)
        return (fn283(arg1746, arg1747, arg1748.wi), void obj26.nearWalls++);
    }
    ((function (arg1751, arg1752, arg1753, arg1754, arg1755) {
      let max224 = Math.max(0.035, Math.min(1, (400 - arg1754) / 252)),
        v2459 = arg1753.hue || 188,
        v2460 = arg1755 + arg1754 * float32Array18[arg1752],
        floor83 = Math.floor(0.55 * arg1753.u),
        floor84 = Math.floor(0.55 * v2460),
        v2461 = ((floor84 % 4) + 4) % 4,
        v2462 = ((floor83 % 6) + 6) % 6,
        fn12Result29 = hash2(13 * arg1753.wx + 29 * floor83, 11 * arg1753.wz + 17 * floor84),
        flag35 = false,
        v2463 = arg1753.win || 0;
      flag35 =
        0 === v2463
          ? v2462 % 3 == 1 && 1 === v2461
          : 1 === v2463
            ? v2462 % 3 == 1 && 1 === v2461 && fn12Result29 < 0.48
            : 2 === v2463
              ? (1 === v2461 || 2 === v2461) && v2462 % 2 == 0
              : v2462 % 2 == 0 && fn12Result29 < 0.68;
      let v2464,
        v2465,
        v2466 = arg1752 === Math.max(0, Math.ceil(fn10(arg1753.h, arg1754, arg1755))),
        v2467 = flag35 && fn12Result29 < ((arg1753.lit || 45) / 100) * 0.72,
        v2468 = 7 + 17 * max224,
        v2469 = 15 + 28 * max224,
        v2470 = 19 + 31 * max224;
      (fn263(
        arg1751,
        arg1752,
        "hsl(" +
          v2459 +
          "," +
          Math.max(18, 0.42 * (arg1753.sat || 52)).toFixed(0) +
          "%," +
          (5 + 8 * max224).toFixed(1) +
          "%)",
      ),
        v2466
          ? ((v2464 =
              1 === arg1753.architecture
                ? "~"
                : 2 === arg1753.architecture
                  ? "^"
                  : 3 === arg1753.architecture
                    ? "*"
                    : "="),
            (v2465 = "hsl(" + v2459 + ",55%," + v2469.toFixed(0) + "%)"))
          : v2467
            ? ((v2464 = arg1754 > 300 ? "." : "0"),
              (v2465 = "hsl(" + v2459 + ",70%," + v2470.toFixed(0) + "%)"))
            : flag35
              ? ((v2464 = ":"),
                (v2465 = "hsl(" + v2459 + ",28%," + (9 + 18 * max224).toFixed(0) + "%)"))
              : ((v2464 = fn12Result29 > 0.72 ? ":" : fn12Result29 > 0.34 ? "." : "·"),
                (v2465 = "hsl(" + v2459 + ",24%," + v2468.toFixed(0) + "%)")),
        fn264(arg1751, arg1752, v2464, v2465));
    })(arg1746, arg1747, arg1748, arg1749, arg1750),
      obj26.farWalls++);
  }
  function fn416(arg1756, arg1757, arg1758, arg1759, arg1760) {
    let v2471 = (function (arg1761, arg1762, arg1763, arg1764, arg1765 = 420) {
      let floor85 = Math.floor(arg1761),
        floor86 = Math.floor(arg1762),
        n444 = 0,
        n445 = 0,
        n446 = 0,
        v2472 = null,
        v2473 = 0 === arg1763 ? 1 / 0 : Math.abs(1 / arg1763),
        v2474 = 0 === arg1764 ? 1 / 0 : Math.abs(1 / arg1764),
        v2475 = arg1763 < 0 ? -1 : 1,
        v2476 = arg1764 < 0 ? -1 : 1,
        v2477 = arg1763 < 0 ? (arg1761 - floor85) * v2473 : (floor85 + 1 - arg1761) * v2473,
        v2478 = arg1764 < 0 ? (arg1762 - floor86) * v2474 : (floor86 + 1 - arg1762) * v2474,
        v2479 = Math.ceil(arg1765 * (Math.abs(arg1763) + Math.abs(arg1764))) + 8;
      for (let n447 = 0; n447 < v2479 && n444 < arg1765; n447++) {
        let min80 = Math.min(v2477, v2478, arg1765),
          fn413Result = fn413(floor85, floor86),
          v2480 = fn413Result.height || 0;
        if ((obj26.cells++, v2480 > 0)) {
          if (
            v2472 &&
            v2472.h === v2480 &&
            v2472.idX === fn413Result.idX &&
            v2472.idZ === fn413Result.idZ &&
            n444 <= v2472.exit + 1e-7
          )
            v2472.exit = min80;
          else {
            n446 >= from11.length && (from11.push({}), obj26.runGrowth++);
            let v2482 = from11[n446++];
            ((v2482.h = v2480),
              (v2482.low = 0),
              (v2482.entry = n444),
              (v2482.exit = min80),
              (v2482.side = n445),
              (v2482.wx = floor85),
              (v2482.wz = floor86),
              (v2482.u = 0 === n445 ? arg1762 + arg1764 * n444 : arg1761 + arg1763 * n444),
              (v2482.idX = fn413Result.idX),
              (v2482.idZ = fn413Result.idZ),
              (v2482.hue = fn413Result.hue),
              (v2482.sat = fn413Result.sat),
              (v2482.win = fn413Result.win),
              (v2482.lit = fn413Result.lit),
              (v2482.architecture = fn413Result.architecture),
              (v2482.loaded = fn413Result.loaded),
              (v2482.plan = fn413Result.plan),
              (v2482.localX = fn413Result.localX),
              (v2482.localZ = fn413Result.localZ),
              (v2482.wi = null),
              (v2472 = v2482));
          }
        } else v2472 = null;
        if (min80 >= arg1765) break;
        let v2481 = v2478 <= v2477 + 1e-9;
        ((n444 = min80),
          v2477 <= v2478 + 1e-9 && ((floor85 += v2475), (v2477 += v2473), (n445 = 0)),
          v2481 && ((floor86 += v2476), (v2478 += v2474), (n445 = 1)));
      }
      return ((obj26.runs += n446), (obj26.maxRuns = Math.max(obj26.maxRuns, n446)), n446);
    })(toWorldX(view.x), toWorldZ(view.z), arg1757, arg1758);
    ((function (arg1766, arg1767) {
      for (let n448 = 0; n448 < rows; n448++) {
        let v2483 = float32Array18[n448] < -0.00001 ? float32Array14[n448] : 1 / 0;
        ((float64Array2[n448] = v2483), (int16Array25[n448] = -1), (uint8Array42[n448] = 0));
      }
      for (let n449 = 0; n449 < arg1766; n449++) {
        let v2484 = from11[n449],
          entry = v2484.entry;
        if (entry > 0.0001 && v2484.h > 0) {
          let max225 = Math.max(0, Math.ceil(fn10(v2484.h, entry, arg1767) - 0.000001)),
            min81 = Math.min(rows - 1, Math.floor(fn10(0, entry, arg1767) + 0.000001));
          if (max225 <= min81)
            for (let v2485 = max225; v2485 <= min81; v2485++) {
              let v2486 = arg1767 + entry * float32Array18[v2485];
              v2486 >= -0.00001 &&
                v2486 <= v2484.h + 0.00001 &&
                entry < float64Array2[v2485] &&
                ((float64Array2[v2485] = entry),
                (int16Array25[v2485] = n449),
                (uint8Array42[v2485] = 1));
            }
        }
        if (arg1767 > v2484.h + 0.0001 && v2484.exit > v2484.entry + 0.0001) {
          let max226 = Math.max(0, Math.ceil(fn10(v2484.h, v2484.exit, arg1767) - 0.000001)),
            min82 = Math.min(
              rows - 1,
              Math.floor(fn10(v2484.h, Math.max(0.0001, v2484.entry), arg1767) + 0.000001),
            );
          if (max226 <= min82)
            for (let v2487 = max226; v2487 <= min82; v2487++) {
              let v2488 = float32Array18[v2487];
              if (v2488 >= -0.00001) continue;
              let v2489 = (v2484.h - arg1767) / v2488;
              v2489 >= v2484.entry - 0.00001 &&
                v2489 <= v2484.exit + 0.00001 &&
                v2489 < float64Array2[v2487] &&
                ((float64Array2[v2487] = v2489),
                (int16Array25[v2487] = n449),
                (uint8Array42[v2487] = 2));
            }
        }
      }
    })(v2471, arg1760),
      (float32Array[arg1756] = v2471 ? from11[0].entry : 1000000000));
    for (let n450 = 0; n450 < rows; n450++) {
      let v2490 = uint8Array42[n450],
        v2491 = float64Array2[n450];
      if (1 === v2490) {
        let v2492 = from11[int16Array25[n450]];
        ((float32Array7[n450 * cols + arg1756] = v2491),
          fn415(arg1756, n450, v2492, v2491, arg1760));
      } else if (2 === v2490) {
        let v2493 = from11[int16Array25[n450]];
        ((float32Array7[n450 * cols + arg1756] = v2491),
          fn414(arg1756, n450, v2493, v2491, arg1757, arg1758),
          obj26.roofs++);
      } else
        float32Array18[n450] < -0.00001
          ? (Number.isFinite(v2491) && v2491 > 0 && (float32Array7[n450 * cols + arg1756] = v2491),
            fn267(arg1756, n450, arg1757, arg1758),
            fn268(arg1756, n450, 0, arg1757, arg1758),
            obj26.ground++)
          : fn265(arg1756, n450, arg1759, arg1757, arg1758);
    }
  }
  (requestAnimationFrame(function v2494(arg1768) {
    let max227 = Math.max(0, arg1768 - now2),
      min83 = Math.min(0.05, max227 / 1000);
    now2 = arg1768;
    let now8 = performance.now();
    ((function (arg1769) {
      (float64Array.fill(0),
        (float64Array[freeze4.frameInterval] = arg1769),
        (stats.nearTrees = 0),
        (stats.populationAIRuns = 0),
        (stats.populationBackgroundTicks = 0),
        (stats.fullSimNPCs = 0),
        (stats.backgroundNPCs = 0),
        (stats.fullSimCars = 0),
        (stats.backgroundCars = 0),
        (stats.windowCacheBuilds = 0),
        (stats.windowCacheReuses = 0),
        (stats.windowCacheWallInfoBuilds = 0),
        (n112 = 0),
        (stats.atlasNewSlots = 0),
        (stats.atlasUploads = 0),
        (stats.atlasResets = 0),
        (stats.atlasEmergencyRollovers = 0),
        (stats.atlasGlyphMisses = 0),
        (stats.atlasSolidMisses = 0));
    })(max227),
      (n70 =
        "function" == typeof window.__CCTV_SCENE_TIME__
          ? window.__CCTV_SCENE_TIME__()
          : arg1768 / 1000),
      "function" == typeof window.__CCTV_FRAME_BEGIN__ && window.__CCTV_FRAME_BEGIN__());
    let now9 = performance.now();
    if (
      ((function (arg1770) {
        PHASE_LIVE !== PHASE.LIVE &&
          ((live = Math.max(0, (arg1770 - now) / 1000)) < freeze6.boot
            ? fn14(PHASE.BOOT)
            : live < freeze6.text
              ? fn14(PHASE.INTRO_TEXT)
              : live < freeze6.title
                ? fn14(PHASE.TITLE)
                : live < freeze6.live
                  ? fn14(PHASE.RESOLVING)
                  : fn15());
      })(arg1768),
      fn243(),
      fn244(),
      flag6 ||
        ((function (arg1771) {
          if (PHASE_LIVE !== PHASE.LIVE) return;
          let v2503 = v47?.["active"] ? 12 : flag9 ? 8.5 : 24,
            v2504 = 1 - Math.exp(-v2503 * Math.max(0, arg1771));
          ((view.yaw += fn197(yaw - view.yaw) * v2504),
            (view.pitch += (pitch - view.pitch) * v2504));
        })(min83),
        PHASE_LIVE === PHASE.LIVE && fn251(min83)),
      fn2("playerStep", now9),
      (now9 = performance.now()),
      flag6 ||
        (function () {
          let v2505 = v63;
          if (!v2505 || "city" !== zone) return;
          v2505.framesSpent++;
          let v2506 = performance.now() + 0.85;
          for (; v63 && performance.now() < v2506;)
            if ("index" === v2505.phase) fn204(v2505, v2506);
            else if ("entrances" === v2505.phase) fn205(v2505, v2506);
            else {
              if ("sites" !== v2505.phase) {
                if ("commit" === v2505.phase) {
                  fn207(v2505);
                  break;
                }
                break;
              }
              fn206(v2505, v2506);
            }
        })(),
      fn2("streaming", now9),
      (now9 = performance.now()),
      flag6 ||
        (function (arg1772) {
          for (let n451 = 0; n451 < renderGrid.length; n451++) renderGrid[n451].length = 0;
          if (
            ("function" != typeof window.__CCTV_RECYCLE__ && (n68 += arg1772),
            n68 >= 0.25 && ((n68 = 0), "city" === zone ? fn92(false) : fn92(false, obj9.x, obj9.z)),
            "interior" === zone &&
              (function (arg1773) {
                for (let v2507 of arr22) {
                  if (v60 === v2507) {
                    let v2511 = view.x - v2507.x,
                      v2512 = view.z - v2507.z,
                      v2513 = Math.hypot(v2511, v2512) || 1;
                    ((v2507.hx = v2511 / v2513),
                      (v2507.hz = v2512 / v2513),
                      (v2507.focused = true));
                    continue;
                  }
                  if (((v2507.focused = false), v2507.wait > 0)) {
                    v2507.wait -= arg1773;
                    continue;
                  }
                  if (!v2507.path.length || v2507.pathIndex >= v2507.path.length) {
                    fn188(v2507);
                    continue;
                  }
                  let v2508 = v2507.path[v2507.pathIndex],
                    v2509 = v2508.x - v2507.x,
                    v2510 = v2508.z - v2507.z,
                    hypot10 = Math.hypot(v2509, v2510);
                  if (hypot10 < 0.08) {
                    ((v2507.x = v2508.x),
                      (v2507.z = v2508.z),
                      v2507.pathIndex++,
                      v2507.pathIndex >= v2507.path.length &&
                        (v2507.wait = 0.7 + ((37 * v2507.routeIndex) % 10) * 0.08));
                    continue;
                  }
                  let min85 = Math.min(hypot10, v2507.speed * arg1773);
                  ((v2507.hx = v2509 / hypot10),
                    (v2507.hz = v2510 / hypot10),
                    (v2507.x += v2507.hx * min85),
                    (v2507.z += v2507.hz * min85),
                    (v2507.phase += 4 * min85));
                }
              })(arg1772),
            "city" !== zone)
          ) {
            if (((v45 = v42), (n69 += arg1772) < 0.05)) return;
            let min86 = Math.min(0.15, n69);
            n69 = 0;
            let now10 = performance.now();
            (fn66(),
              fn88(min86),
              (float64Array[freeze4.populationAI] += performance.now() - now10),
              stats.populationAIRuns++);
            for (let n452 = 0; n452 < pedestrians.length; n452++) {
              let v2514 = pedestrians[n452];
              "function" == typeof window.__CCTV_STEP__
                ? window.__CCTV_STEP__(v2514, stepPedestrian, min86)
                : stepPedestrian(v2514, min86);
            }
            for (let n453 = 0; n453 < cars.length; n453++) {
              let v2515 = cars[n453];
              "function" == typeof window.__CCTV_STEP__
                ? window.__CCTV_STEP__(v2515, stepCar, min86)
                : stepCar(v2515, min86);
            }
            return void rebuildEntityGrid();
          }
          if (
            ((n69 = 0),
            "function" != typeof window.__CCTV_TICK_FIRES__ &&
              ((function (arg1774) {
                return v43 <= 0 || (!((v46 += arg1774) < v43) && ((v46 %= v43), true));
              })(arg1772) && classifyPopulation(),
              (v44 += arg1772) >= v39 && ((v44 %= v39), runNearPopulationAI())),
            "function" != typeof window.__CCTV_PACES__ && fn87(arg1772, nearCars),
            "function" == typeof window.__CCTV_SIM_TICKS__)
          ) {
            window.__CCTV_SIM_TICKS__();
            for (let n454 = 0; n454 < nearPedestrians.length; n454++)
              binIntoRenderGrid(nearPedestrians[n454]);
            for (let n455 = 0; n455 < nearCars.length; n455++) binIntoRenderGrid(nearCars[n455]);
          } else {
            for (let n456 = 0; n456 < nearPedestrians.length; n456++) {
              let v2516 = nearPedestrians[n456];
              (stepPedestrian(v2516, arg1772), binIntoRenderGrid(v2516));
            }
            for (let n457 = 0; n457 < nearCars.length; n457++) {
              let v2517 = nearCars[n457];
              (stepCar(v2517, arg1772, true, nearCars), binIntoRenderGrid(v2517));
            }
          }
          if (((v45 += arg1772), "function" == typeof window.__CCTV_BACKGROUND__)) v45 = v42;
          else if (v45 >= v42) {
            let min87 = Math.min(0.2, v45);
            ((v45 %= v42), runFarPopulationAI(min87));
          }
        })(min83),
      fn2("population", now9),
      (now9 = performance.now()),
      !flag6 && "function" != typeof window.__CCTV_AERIAL__ && fn298(min83),
      fn2("aerialStep", now9),
      (now9 = performance.now()),
      flag6 ||
        (function (arg1775) {
          if (v81 && "city" === zone)
            for (let v2518 of from10) {
              ((v2518.y -= v2518.speed * arg1775),
                (v2518.x += 0.72 * arg1775),
                (v2518.z += 0.2 * arg1775));
              let v2519 = v2518.x - view.x,
                v2520 = v2518.z - view.z;
              (v2518.y < -0.15 || v2519 * v2519 + v2520 * v2520 > 472) && fn306(v2518, false);
            }
        })(min83),
      fn2("rainStep", now9),
      (now9 = performance.now()),
      fn9(),
      fn2("projection", now9),
      ctx.clearRect(0, 0, elCv.width, elCv.height),
      (function () {
        if (v70 && v77 && flag13 && v78) {
          let getQueryObjectEXT = v77.getQueryObjectEXT(v78, v77.QUERY_RESULT_AVAILABLE_EXT),
            getParameter = v70.getParameter(v77.GPU_DISJOINT_EXT);
          getQueryObjectEXT &&
            (getParameter || v77.getQueryObjectEXT(v78, v77.QUERY_RESULT_EXT),
            v77.deleteQueryEXT(v78),
            (v78 = null),
            (flag13 = false));
        }
        let v2521 = !(!v66 || "resolve" !== v66.phase);
        ((flag14 = !(!v70 || PHASE_LIVE !== PHASE.LIVE || v2521)),
          (n109 = 0),
          flag14 && n5 >= max && fn258(false),
          v69 && (v69.style.display = flag14 ? "block" : "none"),
          flag14 &&
            (v70.viewport(0, 0, v69.width, v69.height),
            v70.clearColor(0, 0, 0, 0),
            v70.clear(v70.COLOR_BUFFER_BIT)));
      })(),
      (s6 = ""),
      int16Array15.fill(rows),
      int16Array16.fill(-1),
      uint8Array15.fill(0),
      float32Array7.fill(1 / 0),
      uint8Array.fill(0),
      PHASE_LIVE === PHASE.LIVE)
    ) {
      let n458 = 8,
        round46 = Math.round(v12);
      for (
        let max228 = Math.max(0, round46 - 14);
        max228 <= Math.min(cols - 1, round46 + 14);
        max228++
      )
        float32Array[max228] < n458 && (n458 = float32Array[max228]);
      for (let n459 = 0; n459 < spriteQueue.length; n459++) {
        let v2522 = spriteQueue[n459];
        v2522.h >= 2.4 &&
          Math.abs(v2522._col - v12) <= 10 &&
          v2522._depth < n458 &&
          (n458 = v2522._depth);
      }
      // Proximity pitch clamp. The original cut the maximum look-up angle from
      // 1.15rad (66deg) down to 0.35rad (20deg) as the wall ahead closed from 8
      // to 2 units, which is why tall buildings seemed to LOSE height as you
      // walked up to them - you were simply no longer allowed to tilt up far
      // enough to see the top. It reads as a band-aid for the projection bug
      // above (clamping the pitch hid the bowing), so with the shift-lens
      // projection the full range is restored.
      // Under the shift lens the meaningful limit is how far the horizon slides,
      // not an angle: offset = v17*tan(pitch). v11/v17 == tan(0.35) == one
      // half-screen, so this caps the slide at two half-screens (~0.63rad) and
      // holds it there regardless of proximity.
      ((n95 +=
        ((perspShiftMode
          ? Math.atan((2 * v11) / v17)
          : n458 >= 8
            ? 1.15
            : n458 <= 2
              ? 0.35
              : 1.15 - (0.8 * (8 - n458)) / 6) - n95) *
        Math.min(1, 6 * min83)),
        pitch > n95 ? (pitch = n95) : pitch < -n95 && (pitch = -n95),
        view.pitch > n95 ? (view.pitch = n95) : view.pitch < -n95 && (view.pitch = -n95));
    }
    let pitch2 = view.pitch,
      v2495 = v11 + v17 * Math.tan(pitch2),
      min84 = Math.min(rows, Math.max(0, Math.ceil(v2495)));
    ((now9 = performance.now()),
      (function (arg1776) {
        fn9();
        let fn191Result10 = fn191();
        perspShiftMode = "rotate" !== window.__PERSP__;
        if (perspShiftMode) {
          // Row -> height-per-unit-depth is a straight ramp about the shifted
          // horizon, so world verticals stay vertical and parallel on screen.
          let v2560 = v11 + v17 * Math.tan(arg1776);
          for (let n460 = 0; n460 < rows; n460++) {
            let v2561 = (v2560 - n460) / v17;
            float32Array18[n460] = v2561;
            let v2524 = v2561 < -0.001 ? fn191Result10 / -v2561 : 1000000000;
            ((float32Array14[n460] = v2524),
              (float32Array15[n460] = 1 - v2524 * v13),
              (float32Array16[n460] = v2561 > 0.001 ? (fn196() - n14) / v2561 : 1000000000),
              (float32Array17[n460] = v2561 < -0.001 ? n14 / -v2561 : 1000000000));
          }
        } else
        for (let n460 = 0; n460 < rows; n460++) {
          let v2523 = Math.atan((v11 - n460) / v17) + arg1776;
          float32Array18[n460] = Math.tan(v2523);
          let v2524 = v2523 < -0.001 ? fn191Result10 / Math.tan(-v2523) : 1000000000;
          ((float32Array14[n460] = v2524),
            (float32Array15[n460] = 1 - v2524 * v13),
            (float32Array16[n460] = v2523 > 0.001 ? (fn196() - n14) / Math.tan(v2523) : 1000000000),
            (float32Array17[n460] = v2523 < -0.001 ? n14 / Math.tan(-v2523) : 1000000000));
        }
        for (let n461 = 0; n461 < rows; n461++) {
          let v2525 = float32Array18[Math.max(0, n461 - 1)],
            v2526 = float32Array18[Math.min(rows - 1, n461 + 1)];
          float32Array19[n461] = 0.5 * Math.abs(v2525 - v2526);
        }
      })(pitch2),
      fn2("projection", now9));
    let sin15 = Math.sin(view.yaw),
      cos3 = Math.cos(view.yaw);
    if (((n120 = sin15), (n119 = cos3), (flag = false), (n28 = 0), fn190())) {
      if (
        ((now9 = performance.now()),
        (flag = (function (arg1777, arg1778) {
          if ("city" === zone) return false;
          let fn192Result3 = fn192(),
            fn194Result4 = fn194(),
            v2527 =
              "observation" === zone
                ? uint8Array30
                : "balcony" === zone
                  ? uint8Array34
                  : uint8Array26;
          for (let n462 = 0; n462 < cols; n462 += 5) {
            let v2541 = arg1777 * v21[n462] + arg1778 * v20[n462],
              v2542 = arg1777 * v20[n462] - arg1778 * v21[n462],
              v2543 = 0 | view.x,
              v2544 = 0 | view.z,
              v2545 = 0 === v2541 ? 1000000000 : Math.abs(1 / v2541),
              v2546 = 0 === v2542 ? 1000000000 : Math.abs(1 / v2542),
              v2547 = v2541 < 0 ? -1 : 1,
              v2548 = v2542 < 0 ? -1 : 1,
              v2549 = v2541 < 0 ? (view.x - v2543) * v2545 : (v2543 + 1 - view.x) * v2545,
              v2550 = v2542 < 0 ? (view.z - v2544) * v2546 : (v2544 + 1 - view.z) * v2546,
              v2551 = v2543,
              v2552 = v2544;
            for (
              let n463 = 0;
              n463 < 80 &&
              (v2549 < v2550
                ? ((v2549 += v2545), (v2551 += v2547))
                : ((v2550 += v2546), (v2552 += v2548)),
              !(v2551 < 0 || v2552 < 0 || v2551 >= fn192Result3 || v2552 >= fn192Result3));
              n463++
            ) {
              let fn193Result2 = fn193(v2551, v2552);
              if (1 === fn194Result4[fn193Result2]) {
                if (v2527[fn193Result2]) return true;
                break;
              }
            }
          }
          let v2528 = cols - 1,
            v2529 = arg1777 * v21[v2528] + arg1778 * v20[v2528],
            v2530 = arg1777 * v20[v2528] - arg1778 * v21[v2528],
            v2531 = 0 | view.x,
            v2532 = 0 | view.z,
            v2533 = 0 === v2529 ? 1000000000 : Math.abs(1 / v2529),
            v2534 = 0 === v2530 ? 1000000000 : Math.abs(1 / v2530),
            v2535 = v2529 < 0 ? -1 : 1,
            v2536 = v2530 < 0 ? -1 : 1,
            v2537 = v2529 < 0 ? (view.x - v2531) * v2533 : (v2531 + 1 - view.x) * v2533,
            v2538 = v2530 < 0 ? (view.z - v2532) * v2534 : (v2532 + 1 - view.z) * v2534,
            v2539 = v2531,
            v2540 = v2532;
          for (
            let n464 = 0;
            n464 < 80 &&
            (v2537 < v2538
              ? ((v2537 += v2533), (v2539 += v2535))
              : ((v2538 += v2534), (v2540 += v2536)),
            !(v2539 < 0 || v2540 < 0 || v2539 >= fn192Result3 || v2540 >= fn192Result3));
            n464++
          ) {
            let fn193Result3 = fn193(v2539, v2540);
            if (1 === fn194Result4[fn193Result3]) {
              if (v2527[fn193Result3]) return true;
              break;
            }
          }
          return false;
        })(sin15, cos3)),
        fn2("windowVisibility", now9),
        flag)
      ) {
        if (
          s !== zone ||
          (arg1768 - v24 >= windowPortalRefreshMs &&
            (function () {
              if (
                s !== zone ||
                v28 !== recordedOriginX ||
                v29 !== recordedOriginZ ||
                (("observation" === zone || "balcony" === zone) &&
                  (Math.abs(view.x - v25) > 0.01 || Math.abs(view.z - v26) > 0.01))
              )
                return true;
              let v2553 = view.yaw - v27;
              return (
                (v2553 = ((v2553 + Math.PI) % (2 * Math.PI)) - Math.PI),
                Math.abs(v2553) > 0.0015
              );
            })())
        ) {
          let now12 = performance.now();
          ((function () {
            let v2554 = "observation" === zone || "balcony" === zone,
              v2555 = "balcony" === zone;
            if (v2554) {
              let v2558 = v2555 ? 9 : 16,
                v2559 = v2555 ? 9 : 16,
                v2560 = v2555 ? 0.42 : min,
                v2561 = (view.x - v2558) * v2560,
                v2562 = (v2559 - view.z) * v2560;
              ((n21 = obj9.x + v53.tx * v2561 + v53.dx * v2562),
                (n22 = obj9.z + v53.tz * v2561 + v53.dz * v2562));
            } else ((n21 = obj9.x), (n22 = obj9.z));
            ((n23 = 0), (v23 = v2554 ? max2 + n14 : "interior" === zone ? n101 + n14 : n14));
            let v2556 = obj9.yaw + view.yaw - (v2554 ? 0 : Math.PI),
              sin16 = Math.sin(v2556),
              cos4 = Math.cos(v2556);
            ((n24 = sin16), (n25 = cos4));
            let v2557 = v23 > 6 ? 6 : 1;
            for (let n465 = 0; n465 < cols; n465++) {
              let v2563 = sin16 * v21[n465] + cos4 * v20[n465],
                v2564 = sin16 * v20[n465] - cos4 * v21[n465];
              ((float32Array20[n465] = v2563),
                (float32Array21[n465] = v2564),
                (float32Array22[n465] = 0),
                (uint8Array11[n465] = 0));
              let v2565 = 0 | n21,
                v2566 = 0 | n22,
                v2567 = 0 === v2563 ? 1000000000 : Math.abs(1 / v2563),
                v2568 = 0 === v2564 ? 1000000000 : Math.abs(1 / v2564),
                v2569 = v2563 < 0 ? -1 : 1,
                v2570 = v2564 < 0 ? -1 : 1,
                v2571 = v2563 < 0 ? (n21 - v2565) * v2567 : (v2565 + 1 - n21) * v2567,
                v2572 = v2564 < 0 ? (n22 - v2566) * v2568 : (v2566 + 1 - n22) * v2568,
                v2573 = v2565,
                v2574 = v2566,
                n466 = 0,
                v2575 = -1,
                v2576 = -1,
                fn483 = (arg1779) => {
                  (v2576 >= 0 &&
                    (float32Array25[v2576] = Math.max(
                      float32Array24[v2576] + 0.01,
                      Math.min(n16, arg1779),
                    )),
                    (v2576 = -1));
                };
              for (
                let n467 = 0;
                n467 < 346 &&
                (v2571 < v2572
                  ? ((v2571 += v2567), (v2573 += v2569), (n466 = 0))
                  : ((v2572 += v2568), (v2574 += v2570), (n466 = 1)),
                !(v2573 < 0 || v2574 < 0 || v2573 >= worldN || v2574 >= worldN));
                n467++
              ) {
                let v2577 = 0 === n466 ? v2571 - v2567 : v2572 - v2568;
                if (v2577 > n16) {
                  fn483(n16);
                  break;
                }
                let fn24Result32 = worldIndex(v2573, v2574),
                  v2578 = int16Array17[fn24Result32],
                  v2579 = uint16Array7[fn24Result32],
                  v2580 =
                    1 === uint8Array17[fn24Result32] && v2578 !== v59.id
                      ? uint8Array23[fn24Result32]
                        ? v2579 + 65536 * uint8Array16[fn24Result32]
                        : v2579 || -2
                      : -1;
                if (
                  v2580 !== v2575 &&
                  (v2575 >= 0 && fn483(v2577),
                  (v2575 = v2580),
                  v2580 >= 0 && uint8Array11[n465] < v2557)
                ) {
                  let v2581 = uint8Array11[n465]++,
                    v2582 = 6 * n465 + v2581,
                    v2583 = 0 === n466 ? n22 + v2577 * v2564 : n21 + v2577 * v2563;
                  if (
                    ((v2576 = v2582),
                    (float32Array24[v2582] = v2577),
                    (float32Array25[v2582] = n16),
                    (int16Array11[v2582] = v2573),
                    (int16Array12[v2582] = v2574),
                    (uint8Array12[v2582] = n466),
                    (uint16Array5[v2582] = v2579),
                    (float32Array26[v2582] = v2583 - Math.floor(v2583)),
                    0 === v2581 &&
                      ((float32Array22[n465] = v2577),
                      (int16Array9[n465] = v2573),
                      (int16Array10[n465] = v2574),
                      (uint8Array10[n465] = n466),
                      (float32Array23[n465] = float32Array26[v2582])),
                    1 === v2557)
                  ) {
                    fn483(v2577 + 0.01);
                    break;
                  }
                }
                if (v2571 > 166 && v2572 > 166) break;
              }
              fn483(n16);
            }
            (fn38(recordedOriginX + n21, recordedOriginZ + n22, n24, n25, v23, true),
              (v25 = view.x),
              (v26 = view.z),
              (v27 = view.yaw),
              (v28 = recordedOriginX),
              (v29 = recordedOriginZ),
              n27++);
          })(),
            (n28 = performance.now() - now12),
            (float64Array[freeze4.windowPrepare] += n28),
            (v24 = arg1768),
            (s = zone));
        }
        !(function (arg1780) {
          if (v16 === view.pitch && v15 === arg1780) return false;
          v15 = arg1780;
          for (let n468 = 0; n468 < cols; n468++)
            for (let n469 = 0; n469 < uint8Array3[n468]; n469++) {
              let v2584 = n468 * n17 + n469,
                v2585 = float32Array8[v2584];
              ((int16Array5[v2584] = Math.max(
                0,
                Math.ceil(fn10(float32Array9[v2584], v2585, arg1780)),
              )),
                (int16Array6[v2584] = Math.min(rows - 1, Math.floor(fn10(0, v2585, arg1780)))));
            }
          v16 = view.pitch;
        })(v23);
        let now11 = performance.now();
        ((function () {
          let v2586 = Math.abs(view.pitch - v31) * v17;
          if (v30 === n27 && v2586 <= quality.windowCachePitchTolerancePx)
            stats.windowCacheReuses++;
          else {
            (uint8Array13.fill(0), array.fill(null), stats.windowCacheBuilds++);
            for (let n470 = 0; n470 < rows; n470++)
              uint8Array14[n470] = Math.atan((v11 - n470) / v17) + view.pitch < -0.001 ? 1 : 0;
            for (let n471 = 0; n471 < cols; n471++) {
              let v2587 = uint8Array11[n471];
              if (!v2587) continue;
              let v2588 = 6 * n471;
              for (let n473 = 1; n473 < v2587; n473++) {
                let v2589 = v2588 + n473,
                  v2590 = v2589 - 1,
                  v2591 = int16Array11[v2589],
                  v2592 = int16Array12[v2589];
                uint16Array5[v2589] === uint16Array5[v2590] &&
                  0 !== uint8Array23[worldIndex(v2591, v2592)] &&
                  (float32Array25[v2590] = Math.max(float32Array25[v2590], float32Array25[v2589]));
              }
              for (let n474 = 0; n474 < v2587; n474++) {
                let v2593 = v2588 + n474,
                  v2594 = float32Array24[v2593],
                  v2595 = int16Array11[v2593],
                  v2596 = int16Array12[v2593],
                  v2597 = uint8Array16[worldIndex(v2595, v2596)],
                  v2598 = v2594 + n23;
                ((int16Array13[v2593] = Math.max(0, Math.ceil(fn10(v2597, v2598, v23)))),
                  (int16Array14[v2593] = Math.min(rows - 1, Math.floor(fn10(0, v2598, v23)))));
              }
              let n472 = 0;
              for (let n475 = 0; n475 < rows; n475++) {
                let v2599 = float32Array18[n475],
                  v2600 = 1 / 0,
                  v2601 = -1,
                  n476 = 0;
                for (let n477 = 0; n477 < v2587; n477++) {
                  let v2602 = v2588 + n477,
                    v2603 = float32Array24[v2602],
                    v2604 = int16Array11[v2602],
                    v2605 = int16Array12[v2602],
                    v2606 = uint8Array16[worldIndex(v2604, v2605)],
                    v2607 = int16Array13[v2602],
                    v2608 = int16Array14[v2602],
                    v2609 = v23 + v2603 * v2599;
                  if (
                    (n475 >= v2607 &&
                      n475 <= v2608 &&
                      v2609 >= 0 &&
                      v2609 <= v2606 &&
                      v2603 < v2600 &&
                      ((v2600 = v2603), (v2601 = v2602), (n476 = 1)),
                    v23 > v2606 + 0.05 && uint8Array14[n475])
                  ) {
                    let v2610 = (v23 - v2606) / -v2599;
                    v2610 >= v2603 &&
                      v2610 <= float32Array25[v2602] &&
                      v2610 < v2600 &&
                      ((v2600 = v2610), (v2601 = v2602), (n476 = 2));
                  }
                }
                if (0 !== n476 && v2600 < 143.25) {
                  let v2611 = n475 * cols + n471;
                  ((uint8Array13[v2611] = n476),
                    (uint16Array6[v2611] = v2601),
                    (float32Array27[v2611] = v2600),
                    1 === n476 && (n472 |= 1 << (v2601 - v2588)));
                }
              }
              for (let n478 = 0; n478 < v2587; n478++)
                if (n472 & (1 << n478)) {
                  let v2612 = v2588 + n478,
                    v2613 = float32Array24[v2612],
                    v2614 = int16Array11[v2612],
                    v2615 = int16Array12[v2612],
                    v2616 = uint8Array16[worldIndex(v2614, v2615)],
                    v2617 = uint8Array12[v2612],
                    v2618 = v2613 + n23,
                    v2619 =
                      0 === v2617
                        ? n22 + v2613 * float32Array21[n471]
                        : n21 + v2613 * float32Array20[n471];
                  ((array[v2612] = fn279(
                    v2618,
                    v2617,
                    v2614,
                    v2615,
                    float32Array26[v2612],
                    v2616,
                    int16Array13[v2612],
                    int16Array14[v2612],
                    false,
                    0,
                    v2619,
                    true,
                  )),
                    stats.windowCacheWallInfoBuilds++);
                }
            }
            ((v30 = n27), (v31 = view.pitch));
          }
        })(),
          (float64Array[freeze4.windowCache] += performance.now() - now11));
      }
    } else fn191() <= 5.5 && fn38(toWorldX(view.x), toWorldZ(view.z), sin15, cos3, fn191(), false);
    flag17 = "city" === zone && fn191() > 5.5;
    for (let v2620 in obj26) obj26[v2620] = 0;
    (flag17 && (map23.clear(), uint8Array3.fill(0), uint8Array9.fill(0)),
      (n19 = 0),
      uint8Array2.fill(0),
      (now9 = performance.now()));
    let fn192Result2 = fn192(),
      fn194Result3 = fn194(),
      v2496 =
        "observation" === zone
          ? float32Array32
          : "balcony" === zone
            ? float32Array33
            : float32Array31,
      v2497 = "city" === zone,
      fn191Result9 = fn191(),
      v2498 = -1,
      v2499 = -1,
      v2500 = -1,
      flag36 = false;
    for (let n479 = 0; n479 < cols; n479++) {
      let v2621 = sin15 * v21[n479] + cos3 * v20[n479],
        v2622 = sin15 * v20[n479] - cos3 * v21[n479];
      if (flag17) {
        fn416(n479, v2621, v2622, v2495, fn191());
        continue;
      }
      let v2623 = 0 | view.x,
        v2624 = 0 | view.z,
        v2625 = 0 === v2621 ? 1000000000 : Math.abs(1 / v2621),
        v2626 = 0 === v2622 ? 1000000000 : Math.abs(1 / v2622),
        v2627 = v2621 < 0 ? -1 : 1,
        v2628 = v2622 < 0 ? -1 : 1,
        v2629 = v2621 < 0 ? (view.x - v2623) * v2625 : (v2623 + 1 - view.x) * v2625,
        v2630 = v2622 < 0 ? (view.z - v2624) * v2626 : (v2624 + 1 - view.z) * v2626,
        v2631 = v2623,
        v2632 = v2624,
        n480 = 0,
        n481 = 0,
        n482 = 0,
        n483 = 0,
        n484 = 0,
        flag37 = false,
        v2633 = from2[n479],
        v2634 = fn191Result9,
        n485 = 0,
        v2635 = -1 / 0,
        n486 = 0,
        flag38 = false;
      for (
        let n488 = 0;
        n488 < 346 &&
        (v2629 < v2630
          ? ((v2629 += v2625), (v2631 += v2627), (n480 = 0))
          : ((v2630 += v2626), (v2632 += v2628), (n480 = 1)),
        !(
          (v2629 > 166 && v2630 > 166) ||
          v2631 < 0 ||
          v2632 < 0 ||
          v2631 >= fn192Result2 ||
          v2632 >= fn192Result2
        ));
        n488++
      ) {
        let v2640 = 0 === n480 ? v2629 - v2625 : v2630 - v2626;
        if (flag37 && v2497 && v2635 > 0 && v2635 * v2640 >= 70 - v2634) break;
        let v2641 = v2497 ? worldIndex(v2631, v2632) : fn193(v2631, v2632);
        if (1 === fn194Result3[v2641]) {
          if (v2640 > n16) break;
          let v2642 = v2497 ? uint8Array16[v2641] : v2496[v2641] || fn196(),
            v2643 = 0 === n480 ? view.z + v2640 * v2622 : view.x + v2640 * v2621,
            v2644 = v2497;
          if (v2497 && v2634 > v2642 + 0.05 && n486 < n18) {
            let v2646 = 65535 & (uint16Array7[v2641] || 521 * (v2631 + 1) + (v2632 + 1)),
              min89 = Math.min(n16, v2629, v2630),
              v2647 = n479 * n18 + Math.max(0, n486 - 1);
            if (
              flag38 &&
              n486 > 0 &&
              uint16Array[v2647] === v2646 &&
              Math.abs(float32Array6[v2647] - v2642) < 0.035 &&
              v2640 <= float32Array5[v2647] + 0.025
            )
              float32Array5[v2647] = Math.max(float32Array5[v2647], min89);
            else {
              let v2648 = n479 * n18 + n486++;
              ((float32Array4[v2648] = v2640),
                (float32Array5[v2648] = min89),
                (float32Array6[v2648] = v2642),
                (int16Array[v2648] = v2631),
                (int16Array2[v2648] = v2632),
                (uint16Array[v2648] = v2646));
            }
            flag38 = true;
          }
          flag37 ||
            ((flag37 = true),
            (n481 = v2640),
            (n484 = v2642),
            (n483 = v2643),
            (n482 = n483 - Math.floor(n483)));
          let v2645 = (v2642 - v2634) / v2640;
          if (0 === n485 || v2645 > v2635 + 0.00001) {
            let v2649 = v2633[Math.min(n485, 31)];
            ((v2649.perp = v2640),
              (v2649.side = n480),
              (v2649.cx = v2631),
              (v2649.cz = v2632),
              (v2649.h = v2642),
              (v2649.wallPos = v2643),
              (v2649.texX = v2643 - Math.floor(v2643)),
              n485 < 32 && n485++,
              (v2635 = v2645));
          }
          if (!v2644) break;
          continue;
        }
        v2497 && (flag38 = false);
      }
      if ((v2497 && (uint8Array[n479] = n486), flag37 && n485)) {
        let v2650 = v2633[0];
        ((n481 = v2650.perp),
          (n480 = v2650.side),
          (v2631 = v2650.cx),
          (v2632 = v2650.cz),
          (n484 = v2650.h),
          (n483 = v2650.wallPos),
          (n482 = v2650.texX));
      }
      v2497 && n485 > n19 && (n19 = n485);
      let n487 = 0,
        v2636 = -1;
      if (flag37) {
        let fn191Result11 = fn191();
        n487 = Math.max(0, Math.ceil(fn10(n484, n481, fn191Result11)));
        let fn10Result16 = fn10(0, n481, fn191Result11);
        v2636 = fn10Result16 < 0 ? -1 : Math.min(rows - 1, Math.floor(fn10Result16));
      }
      let v2637 = n485 > 1 ? v2633 : null,
        v2638 = null;
      if (v2497 && ((uint8Array2[n479] = n485), n485)) {
        v2637 && ((n487 = rows), (v2636 = -1));
        for (let n489 = 0; n489 < n485; n489++) {
          let v2651 = v2633[n489],
            max229 = Math.max(0, Math.ceil(fn10(v2651.h, v2651.perp, v2634))),
            min90 = Math.min(rows - 1, Math.floor(fn10(0, v2651.perp, v2634)));
          ((v2651.r0 = max229),
            (v2651.r1 = min90),
            v2637 && (max229 < n487 && (n487 = max229), min90 > v2636 && (v2636 = min90)));
        }
      }
      float32Array[n479] = flag37 ? n481 : 1000000000;
      let v2639 = flag37 && (!flag36 || n480 !== v2500 || (v2631 !== v2498 && v2632 !== v2499));
      ((v2498 = v2631), (v2499 = v2632), (v2500 = n480), (flag36 = flag37));
      let min88 = Math.min(min84, n487);
      for (let n490 = 0; n490 < min88; n490++) fn265(n479, n490, v2495, v2621, v2622);
      if (n487 <= v2636 && v2637) {
        for (let n491 = 0; n491 < n485; n491++) {
          let v2652 = v2637[n491];
          v2652.wi = fn279(
            v2652.perp,
            v2652.side,
            v2652.cx,
            v2652.cz,
            v2652.texX,
            v2652.h,
            v2652.r0,
            v2652.r1,
            v2639,
            0,
            v2652.wallPos,
          );
        }
        for (let v2653 = n487; v2653 <= v2636; v2653++) {
          let v2654 = null;
          for (let n492 = 0; n492 < n485; n492++) {
            let v2655 = v2637[n492];
            if (v2653 >= v2655.r0 && v2653 <= v2655.r1 && v2655.wi && v2655.wi.baseB >= 0.05) {
              v2654 = v2655;
              break;
            }
          }
          v2654 &&
            (fn283(n479, v2653, v2654.wi),
            (float32Array7[v2653 * cols + n479] = Math.min(
              float32Array7[v2653 * cols + n479],
              v2654.perp,
            )));
        }
      } else if (n487 <= v2636) {
        let fn279Result = fn279(n481, n480, v2631, v2632, n482, n484, n487, v2636, v2639, 0, n483);
        v2497 && (v2638 = fn279Result);
        let v2656 =
          ("interior" === zone && 0 !== uint8Array26[fn135(v2631, v2632)]) ||
          ("observation" === zone && 0 !== uint8Array30[fn136(v2631, v2632)]) ||
          ("balcony" === zone && 0 !== uint8Array34[fn137(v2631, v2632)]);
        if ((v2656 && ((int16Array15[n479] = n487), (int16Array16[n479] = v2636)), v2656))
          for (let v2657 = n487; v2657 <= v2636; v2657++) fn293(n479, v2657, fn279Result);
        else if (fn279Result.localZone)
          for (let v2658 = n487; v2658 <= v2636; v2658++) fn280(n479, v2658, fn279Result);
        else if (fn279Result.baseB >= 0.05)
          for (let v2659 = n487; v2659 <= v2636; v2659++)
            (fn283(n479, v2659, fn279Result),
              (float32Array7[v2659 * cols + n479] = Math.min(
                float32Array7[v2659 * cols + n479],
                n481,
              )));
      }
      for (let max230 = Math.max(0, Math.floor(v2495) + 1); max230 < rows; max230++) {
        let flag39 = false;
        if (v2637)
          for (let n493 = 0; n493 < n485; n493++) {
            let v2665 = v2637[n493];
            if (v2665.wi && v2665.wi.baseB >= 0.05 && max230 >= v2665.r0 && max230 <= v2665.r1) {
              flag39 = true;
              break;
            }
          }
        else
          max230 >= n487 &&
            max230 <= v2636 &&
            (flag39 = !v2497 || (!!v2638 && v2638.baseB >= 0.05));
        if (flag39) continue;
        let v2660 = float32Array18[max230],
          v2661 = 1 / 0,
          v2662 = -1,
          flag40 = false;
        if (v2497 && v2660 < -0.00001) {
          let v2666 = uint8Array[n479],
            v2667 = n479 * n18;
          for (let n494 = 0; n494 < v2666; n494++) {
            let v2670 = v2667 + n494,
              v2671 = float32Array6[v2670];
            if (v2634 <= v2671 + 0.05) continue;
            let v2672 = (v2634 - v2671) / -v2660;
            v2672 >= float32Array4[v2670] - 0.01 &&
              v2672 <= float32Array5[v2670] + 0.01 &&
              v2672 < v2661 &&
              ((v2661 = v2672), (v2662 = v2670), (flag40 = false));
          }
          let v2668 = uint8Array9[n479],
            v2669 = n479 * n20;
          for (let n495 = 0; n495 < v2668; n495++) {
            let v2673 = v2669 + n495,
              v2674 = float32Array13[v2673];
            if (v2634 <= v2674 + 0.05) continue;
            let v2675 = (v2634 - v2674) / -v2660;
            v2675 >= float32Array11[v2673] - 0.04 &&
              v2675 <= float32Array12[v2673] + 0.04 &&
              v2675 < v2661 &&
              ((v2661 = v2675), (v2662 = v2673), (flag40 = true));
          }
        }
        let v2663 = v2497 ? fn43(n479, max230) : 1 / 0;
        if (v2662 >= 0 && v2661 < v2663 - 0.02) {
          ((float32Array7[max230 * cols + n479] = v2661),
            flag40
              ? fn42(n479, max230, v2662, v2661, v2621, v2622)
              : fn41(n479, max230, v2662, v2661, v2621, v2622));
          continue;
        }
        let v2664 = float32Array14[max230];
        (Number.isFinite(v2664) && v2664 > 0 && (float32Array7[max230 * cols + n479] = v2664),
          fn267(n479, max230, v2621, v2622),
          fn268(n479, max230, 0, v2621, v2622));
      }
      v2497 && fn44(n479, v2637, n485, n487, v2636, n481);
    }
    (fn2("mainPass", now9),
      fn190() && flag
        ? ((now9 = performance.now()),
          (function () {
            if (!populationVisible) return;
            performance.now();
            ((n26 = 0), (n29 = 0), float32Array28.fill(1 / 0));
            let v2676 = windowStaticRadius,
              v2677 = 0.72 * spriteFarDist,
              max231 = Math.max(0, ((n21 - v2676) / gridCell) | 0),
              min91 = Math.min(gridDim - 1, ((n21 + v2676) / gridCell) | 0),
              max232 = Math.max(0, ((n22 - v2676) / gridCell) | 0),
              min92 = Math.min(gridDim - 1, ((n22 + v2676) / gridCell) | 0);
            for (let v2678 = max232; v2678 <= min92; v2678++)
              for (let v2679 = max231; v2679 <= min91; v2679++) {
                let v2680 = from3[v2678 * gridDim + v2679];
                for (let n496 = 0; n496 < v2680.length; n496++) fn292(v2680[n496]);
              }
            let max233 = Math.max(0, ((n21 - v2677) / gridCell) | 0),
              min93 = Math.min(gridDim - 1, ((n21 + v2677) / gridCell) | 0),
              max234 = Math.max(0, ((n22 - v2677) / gridCell) | 0),
              min94 = Math.min(gridDim - 1, ((n22 + v2677) / gridCell) | 0);
            for (let v2681 = max234; v2681 <= min94; v2681++)
              for (let v2682 = max233; v2682 <= min93; v2682++) {
                let v2683 = entityGrid[v2681 * gridDim + v2682];
                for (let n497 = 0; n497 < v2683.length; n497++) {
                  let v2684 = v2683[n497];
                  fn291(v2684, 5 === v2684.kind ? 5 : 4);
                }
              }
            performance.now();
          })(),
          fn2("windowTraffic", now9))
        : fn190() && ((n26 = 0), (n29 = 0)));
    let v2501 = PHASE_LIVE === PHASE.RESOLVING && fn385().raw >= 0.67,
      v2502 = PHASE_LIVE === PHASE.RESOLVING && fn385().raw >= 0.78;
    if (
      ((PHASE_LIVE === PHASE.LIVE || v2501) &&
        ((now9 = performance.now()),
        (function () {
          if (!populationVisible || "city" !== zone) return;
          let sin17 = Math.sin(view.yaw),
            cos5 = Math.cos(view.yaw),
            v2685 = sin17,
            v2686 = -cos5,
            v2687 = cos5,
            v2688 = sin17,
            fn3Result13 = toWorldX(view.x),
            fn4Result13 = toWorldZ(view.z),
            arr169 = [],
            arr170 = [];
          for (let v2689 of from8) {
            let v2690 = v2689.x - fn3Result13,
              v2691 = v2689.z - fn4Result13,
              v2692 = v2690 * v2685 + v2691 * v2686;
            if (v2692 < 2 || v2692 > n121) continue;
            let v2693 = v2690 * v2687 + v2691 * v2688,
              v2694 = v2692 * Math.tan(0.5 * v18) + 8;
            Math.abs(v2693) > v2694 ||
              arr169.push({
                car: v2689,
                depth: v2692,
              });
          }
          for (let v2695 of from9) {
            let v2696 = v2695.x - fn3Result13,
              v2697 = v2695.z - fn4Result13,
              v2698 = v2696 * v2685 + v2697 * v2686;
            if (v2698 < 26 || v2698 > n121 + 55) continue;
            let v2699 = v2696 * v2687 + v2697 * v2688,
              v2700 = v2698 * Math.tan(0.5 * v18) + 18;
            Math.abs(v2699) > v2700 ||
              arr170.push({
                ghost: v2695,
                depth: v2698,
              });
          }
          arr170.sort((arg1781, arg1782) => arg1782.depth - arg1781.depth);
          for (let v2701 of arr170) {
            let ghost = v2701.ghost,
              depth = v2701.depth,
              v2702 = 0.5 * ghost.span,
              fn299Result2 = fn299(
                ghost.x + ghost.hx * v2702,
                ghost.y,
                ghost.z + ghost.hz * v2702,
                v2685,
                v2686,
                v2687,
                v2688,
              ),
              fn299Result3 = fn299(
                ghost.x - ghost.hx * v2702,
                ghost.y,
                ghost.z - ghost.hz * v2702,
                v2685,
                v2686,
                v2687,
                v2688,
              ),
              fn299Result4 = fn299(ghost.x, ghost.y, ghost.z, v2685, v2686, v2687, v2688);
            if (
              !fn299Result4 ||
              fn299Result4.c < -10 ||
              fn299Result4.c > cols + 10 ||
              fn299Result4.r < -6 ||
              fn299Result4.r > rows + 4
            )
              continue;
            let max235 = Math.max(0.1, 1 - depth / (n121 + 55)),
              v2703 = "hsl(" + ghost.hue + ",60%," + (14 + 18 * max235).toFixed(0) + "%)",
              v2704 = "hsl(" + ghost.hue + ",78%," + (28 + 24 * max235).toFixed(0) + "%)";
            depth > 190
              ? (fn301(
                  fn299Result4.c,
                  fn299Result4.r,
                  fn299Result4.d,
                  (ghost.id + ghost.cycle) & 1 ? "." : "-",
                  v2704,
                ),
                (ghost.id + ghost.cycle) % 3 == 0 &&
                  fn301(fn299Result4.c + 1, fn299Result4.r, fn299Result4.d - 0.005, ".", v2703))
              : (fn302(fn299Result3, fn299Result2, "-", v2703, 0.015),
                depth > 110
                  ? fn301(fn299Result4.c, fn299Result4.r, fn299Result4.d - 0.01, "=", v2704)
                  : (fn301(fn299Result2.c, fn299Result2.r, fn299Result2.d - 0.015, ".", v2704),
                    fn301(fn299Result3.c, fn299Result3.r, fn299Result3.d - 0.012, ".", v2703)));
          }
          arr169.sort((arg1783, arg1784) => arg1784.depth - arg1783.depth);
          for (let v2705 of arr169) {
            let car = v2705.car,
              depth2 = v2705.depth,
              v2706 = 0.5 * car.length,
              fn299Result5 = fn299(car.x, car.y, car.z, v2685, v2686, v2687, v2688);
            if (
              !fn299Result5 ||
              fn299Result5.c < -8 ||
              fn299Result5.c > cols + 8 ||
              fn299Result5.r < -5 ||
              fn299Result5.r > rows + 5
            )
              continue;
            let max236 = Math.max(0.12, 1 - depth2 / n121),
              v2707 = "hsl(" + car.hue + ",72%," + (30 + 38 * max236).toFixed(0) + "%)",
              v2708 = "hsl(" + car.hue + ",68%," + (18 + 24 * max236).toFixed(0) + "%)",
              v2709 = "hsl(52,96%," + (58 + 30 * max236).toFixed(0) + "%)",
              v2710 = "hsl(322,92%," + (45 + 29 * max236).toFixed(0) + "%)",
              v2711 = "hsl(" + car.hue + ",68%," + (18 + 24 * max236).toFixed(0) + "%)",
              v2712 =
                "hsl(" +
                (52 === car.hue ? 188 : car.hue) +
                ",84%," +
                (44 + 28 * max236).toFixed(0) +
                "%)";
            if (depth2 > 185) {
              fn301(
                fn299Result5.c,
                fn299Result5.r,
                fn299Result5.d,
                (car.id + car.cycle) & 1 ? "." : "-",
                v2707,
              );
              continue;
            }
            let v2713 = -car.hz * car.width * 0.48,
              v2714 = car.hx * car.width * 0.48,
              v2715 = car.y + 0.1,
              v2716 = car.y - 0.16,
              fn299Result6 = fn299(
                car.x + car.hx * v2706 + v2713,
                v2715,
                car.z + car.hz * v2706 + v2714,
                v2685,
                v2686,
                v2687,
                v2688,
              ),
              fn299Result7 = fn299(
                car.x + car.hx * v2706 - v2713,
                v2715,
                car.z + car.hz * v2706 - v2714,
                v2685,
                v2686,
                v2687,
                v2688,
              ),
              fn299Result8 = fn299(
                car.x - car.hx * v2706 + v2713,
                v2715,
                car.z - car.hz * v2706 + v2714,
                v2685,
                v2686,
                v2687,
                v2688,
              ),
              fn299Result9 = fn299(
                car.x - car.hx * v2706 - v2713,
                v2715,
                car.z - car.hz * v2706 - v2714,
                v2685,
                v2686,
                v2687,
                v2688,
              ),
              fn299Result10 = fn299(
                car.x + car.hx * v2706 + v2713,
                v2716,
                car.z + car.hz * v2706 + v2714,
                v2685,
                v2686,
                v2687,
                v2688,
              ),
              fn299Result11 = fn299(
                car.x + car.hx * v2706 - v2713,
                v2716,
                car.z + car.hz * v2706 - v2714,
                v2685,
                v2686,
                v2687,
                v2688,
              ),
              fn299Result12 = fn299(
                car.x - car.hx * v2706 + v2713,
                v2716,
                car.z - car.hz * v2706 + v2714,
                v2685,
                v2686,
                v2687,
                v2688,
              ),
              fn299Result13 = fn299(
                car.x - car.hx * v2706 - v2713,
                v2716,
                car.z - car.hz * v2706 - v2714,
                v2685,
                v2686,
                v2687,
                v2688,
              ),
              fn299Result14 = fn299(
                car.x - car.hx * (v2706 + Math.min(5, 0.025 * depth2)),
                car.y,
                car.z - car.hz * (v2706 + Math.min(5, 0.025 * depth2)),
                v2685,
                v2686,
                v2687,
                v2688,
              );
            (depth2 > 48 && fn302(fn299Result14, fn299Result5, ".", v2711, 0.02),
              depth2 > 110
                ? (fn302(fn299Result8, fn299Result6, "-", v2708, 0.008),
                  fn302(fn299Result9, fn299Result7, "-", v2707, 0.008),
                  fn302(fn299Result8, fn299Result9, "|", v2707, 0.006),
                  fn302(fn299Result6, fn299Result7, "|", v2707, 0.006),
                  fn303(fn299Result8, fn299Result6, v2712, car.id + car.cycle, 0.018),
                  fn303(fn299Result9, fn299Result7, v2712, car.id + car.cycle + 1, 0.018),
                  fn301(fn299Result6.c, fn299Result6.r, fn299Result6.d - 0.03, ">", v2709),
                  fn301(fn299Result7.c, fn299Result7.r, fn299Result7.d - 0.03, ">", v2709),
                  fn301(fn299Result8.c, fn299Result8.r, fn299Result8.d - 0.024, "<", v2710),
                  fn301(fn299Result9.c, fn299Result9.r, fn299Result9.d - 0.024, "<", v2710),
                  fn299Result5 &&
                    fn301(fn299Result5.c, fn299Result5.r + 1, fn299Result5.d - 0.012, "+", v2711))
                : (fn302(fn299Result8, fn299Result6, "=", v2707, 0),
                  fn302(fn299Result9, fn299Result7, "=", v2707, 0),
                  fn302(fn299Result12, fn299Result10, "_", v2708, 0.012),
                  fn302(fn299Result13, fn299Result11, "_", v2708, 0.012),
                  fn302(fn299Result8, fn299Result9, "|", v2707, 0.006),
                  fn302(fn299Result6, fn299Result7, "|", v2707, 0.006),
                  fn302(fn299Result12, fn299Result13, "|", v2708, 0.016),
                  fn302(fn299Result10, fn299Result11, "|", v2708, 0.016),
                  fn302(fn299Result8, fn299Result12, "/", v2708, 0.014),
                  fn302(fn299Result6, fn299Result10, "/", v2708, 0.014),
                  fn302(fn299Result9, fn299Result13, "\\", v2708, 0.014),
                  fn302(fn299Result7, fn299Result11, "\\", v2708, 0.014),
                  fn303(fn299Result8, fn299Result6, v2712, car.id + car.cycle, 0.018),
                  fn303(fn299Result9, fn299Result7, v2712, car.id + car.cycle + 1, 0.018),
                  fn301(fn299Result6.c, fn299Result6.r, fn299Result6.d - 0.03, ">", v2709),
                  fn301(fn299Result7.c, fn299Result7.r, fn299Result7.d - 0.03, ">", v2709),
                  fn301(fn299Result8.c, fn299Result8.r, fn299Result8.d - 0.024, "<", v2710),
                  fn301(fn299Result9.c, fn299Result9.r, fn299Result9.d - 0.024, "<", v2710),
                  fn299Result5 &&
                    (fn301(fn299Result5.c, fn299Result5.r, fn299Result5.d - 0.01, "#", v2707),
                    fn301(
                      fn299Result5.c,
                      fn299Result5.r + 1,
                      fn299Result5.d - 0.012,
                      "+",
                      v2711,
                    ))));
          }
          elCv.dataset && (elCv.dataset.aerialTraffic = String(arr169.length + arr170.length));
        })(),
        fn2("aerialDraw", now9)),
      (PHASE_LIVE === PHASE.LIVE || v2502) &&
        ((now9 = performance.now()),
        (function () {
          if (((n124 = 0), !v81 || "city" !== zone)) return;
          let sin18 = Math.sin(view.yaw),
            cos6 = Math.cos(view.yaw);
          for (let v2717 of from10) {
            let v2718 = v2717.x - view.x,
              v2719 = v2717.z - view.z,
              v2720 = v2718 * sin18 - v2719 * cos6;
            if (v2720 < 0.35 || v2720 > spriteFarDist) continue;
            let round47 = Math.round(v12 + (v19 / v2720) * (v2718 * cos6 + v2719 * sin18));
            if (round47 < 0 || round47 >= cols || float32Array[round47] + 0.08 < v2720) continue;
            let round48 = Math.round(fn10(v2717.y, v2720));
            if (round48 < 0 || round48 >= rows) continue;
            let v2721 = v2720 < 10,
              v2722 = v2720 < 22,
              v2723 = 0.72 * cos6 + 0.2 * sin18;
            (fn264(
              round47,
              round48,
              Math.abs(v2723) > 0.42 ? (v2723 > 0 ? "\\" : "/") : v2721 ? "|" : "'",
              v2721 ? "hsl(188,58%,52%)" : v2722 ? "hsl(188,46%,38%)" : "hsl(188,34%,25%)",
            ),
              v2721 &&
                round48 + 1 < rows &&
                float32Array[round47] + 0.08 >= v2720 &&
                fn264(round47, round48 + 1, "|", "hsl(188,44%,36%)"),
              n124++);
          }
          elCv.dataset && (elCv.dataset.rainVisible = String(n124));
        })(),
        fn2("rainDraw", now9)),
      PHASE_LIVE === PHASE.RESOLVING &&
        !v2501 &&
        ((now9 = performance.now()),
        (function () {
          if ("city" !== zone || PHASE_LIVE !== PHASE.RESOLVING) return;
          let cos7 = Math.cos(view.yaw),
            sin19 = Math.sin(view.yaw);
          ((n119 = cos7), (n120 = sin19));
          let v2724 = sin19,
            v2725 = -cos7,
            v2726 = cos7,
            v2727 = sin19;
          spriteQueue.length = 0;
          let max237 = Math.max(0, ((view.x - spriteGridRadius) / gridCell) | 0),
            min95 = Math.min(gridDim - 1, ((view.x + spriteGridRadius) / gridCell) | 0),
            max238 = Math.max(0, ((view.z - spriteGridRadius) / gridCell) | 0),
            min96 = Math.min(gridDim - 1, ((view.z + spriteGridRadius) / gridCell) | 0);
          for (let v2728 = max238; v2728 <= min96; v2728++)
            for (let v2729 = max237; v2729 <= min95; v2729++) {
              let v2730 = from3[v2728 * gridDim + v2729];
              for (let n498 = 0; n498 < v2730.length; n498++)
                v2730[n498].kind === n38 && queueSprite(v2730[n498], v2724, v2725, v2726, v2727);
            }
          spriteQueue.sort((arg1785, arg1786) => arg1786._depth - arg1785._depth);
          for (let n499 = 0; n499 < spriteQueue.length; n499++) {
            let v2731 = spriteQueue[n499],
              v2732 = 1 - v2731._depth * v13;
            v2732 >= 0.035 && fn377(v2731, v2732);
          }
          spriteQueue.length = 0;
        })(),
        fn2("sprites", now9)),
      (PHASE_LIVE === PHASE.LIVE || v2501) &&
        ((now9 = performance.now()),
        (function () {
          if ("intro_room" === zone)
            return (
              (spriteQueue.length = 0),
              void (function () {
                let obj56 = {
                    x: freeze25.x,
                    z: freeze25.z,
                    axis: 0,
                  },
                  arr171 = [],
                  h2 = freeze25.h,
                  v2737 = 0.5 * freeze25.w,
                  v2738 = 0.5 * freeze25.d;
                (fn363(arr171, obj56, 0, 0, h2 - 0.115, h2, v2737, v2738, 12001, "table_top", true),
                  fn363(
                    arr171,
                    obj56,
                    0,
                    0,
                    h2 - 0.225,
                    h2 - 0.11,
                    0.86 * v2737,
                    0.76 * v2738,
                    12017,
                    "table_apron",
                    false,
                  ));
                for (let v2740 of [0.73 * -v2737, 0.73 * v2737])
                  for (let v2741 of [0.65 * -v2738, 0.65 * v2738])
                    fn363(
                      arr171,
                      obj56,
                      v2740,
                      v2741,
                      0.02,
                      h2 - 0.18,
                      0.085,
                      0.085,
                      12051 + Math.round(31 * (v2740 + v2741)),
                      "table_leg",
                      false,
                    );
                fn361(arr171, (arg1787) =>
                  "table_top" === arg1787.styleBase
                    ? arg1787.styleBase.endsWith("_top")
                      ? "hsl(29,31%,32%)"
                      : "hsl(29,30%,27%)"
                    : "table_apron" === arg1787.styleBase
                      ? "hsl(27,27%,18%)"
                      : "hsl(25,22%,13%)",
                );
                let obj57 = {
                    x: freeze27.x,
                    z: freeze27.z,
                    axis: freeze27.axis,
                  },
                  arr172 = [];
                (fn363(
                  arr172,
                  obj57,
                  0,
                  0,
                  0.02,
                  freeze27.h,
                  0.105,
                  0.52 * freeze27.w,
                  12601,
                  "door_panel",
                  true,
                ),
                  fn363(
                    arr172,
                    obj57,
                    -0.34,
                    0,
                    0.34,
                    1.34,
                    0.045,
                    0.18 * freeze27.w,
                    12621,
                    "door_recess",
                    false,
                  ),
                  fn363(
                    arr172,
                    obj57,
                    0.34,
                    0,
                    0.34,
                    1.34,
                    0.045,
                    0.18 * freeze27.w,
                    12631,
                    "door_recess",
                    false,
                  ),
                  fn363(
                    arr172,
                    obj57,
                    0,
                    0,
                    1.58,
                    2.7,
                    0.045,
                    0.39 * freeze27.w,
                    12641,
                    "door_recess",
                    false,
                  ),
                  fn363(
                    arr172,
                    obj57,
                    0,
                    0.36 * freeze27.w,
                    1.01,
                    1.13,
                    0.048,
                    0.048,
                    12661,
                    "door_knob",
                    true,
                  ),
                  fn361(arr172, (arg1788) =>
                    "door_knob" === arg1788.styleBase
                      ? "hsl(43,54%,52%)"
                      : "door_recess" === arg1788.styleBase
                        ? "hsl(28,19%,10%)"
                        : "hsl(29,22%,16%)",
                  ));
                let obj58 = {
                    x: freeze26.x,
                    z: freeze26.z,
                    axis: 0,
                  },
                  arr173 = [];
                (fn363(
                  arr173,
                  obj58,
                  0,
                  0,
                  3.34,
                  n106 - 0.06,
                  0.028,
                  0.028,
                  12801,
                  "lamp_stem",
                  false,
                ),
                  fn363(arr173, obj58, 0, 0, 3.17, 3.35, 0.29, 0.29, 12831, "lamp_shade", true),
                  fn363(
                    arr173,
                    obj58,
                    0,
                    0,
                    3.1,
                    3.18,
                    0.16,
                    0.16,
                    12841,
                    "lamp_shade_lower",
                    true,
                  ));
                let arr174 = [];
                (fn355(
                  arr174,
                  freeze26.x,
                  freeze26.z,
                  3.045,
                  3.13,
                  0.072,
                  0.072,
                  8,
                  12861,
                  "lamp_bulb",
                  0,
                  true,
                ),
                  fn361(arr173, (arg1789) =>
                    "lamp_stem" === arg1789.styleBase
                      ? "hsl(36,14%,25%)"
                      : "lamp_shade_lower" === arg1789.styleBase
                        ? "hsl(39,20%,29%)"
                        : "hsl(42,24%,43%)",
                  ),
                  fn361(arr174, (arg1790) =>
                    arg1790.styleBase.endsWith("_top") ? "hsl(43,62%,76%)" : "hsl(42,48%,57%)",
                  ));
                let obj59 = {
                    x: freeze24.x,
                    z: freeze24.z,
                    axis: 0,
                  },
                  arr175 = [],
                  v2739 = 0.5 + 0.5 * Math.sin(3.2 * n70),
                  y = freeze24.y;
                (fn363(arr175, obj59, 0, 0, y, y + 0.085, 0.36, 0.235, 12201, "phone_base", true),
                  fn363(
                    arr175,
                    obj59,
                    0,
                    -0.025,
                    y + 0.082,
                    y + 0.155,
                    0.31,
                    0.19,
                    12221,
                    "phone_mid",
                    true,
                  ),
                  fn363(
                    arr175,
                    obj59,
                    0,
                    -0.045,
                    y + 0.15,
                    y + 0.225,
                    0.235,
                    0.135,
                    12241,
                    "phone_upper",
                    true,
                  ),
                  fn363(
                    arr175,
                    obj59,
                    0,
                    -0.055,
                    y + 0.215,
                    y + 0.255,
                    0.245,
                    0.052,
                    12255,
                    "phone_cradle_bar",
                    true,
                  ),
                  fn363(
                    arr175,
                    obj59,
                    -0.19,
                    -0.045,
                    y + 0.225,
                    y + 0.292,
                    0.055,
                    0.075,
                    12261,
                    "phone_cradle",
                    true,
                  ),
                  fn363(
                    arr175,
                    obj59,
                    0.19,
                    -0.045,
                    y + 0.225,
                    y + 0.292,
                    0.055,
                    0.075,
                    12271,
                    "phone_cradle",
                    true,
                  ),
                  fn363(
                    arr175,
                    obj59,
                    0,
                    -0.018,
                    y + 0.27,
                    y + 0.322,
                    0.255,
                    0.045,
                    12281,
                    "phone_handset_mid",
                    true,
                  ),
                  fn363(
                    arr175,
                    obj59,
                    -0.255,
                    -0.008,
                    y + 0.25,
                    y + 0.333,
                    0.075,
                    0.08,
                    12291,
                    "phone_handset_end",
                    true,
                  ),
                  fn363(
                    arr175,
                    obj59,
                    0.255,
                    -0.008,
                    y + 0.25,
                    y + 0.333,
                    0.075,
                    0.08,
                    12321,
                    "phone_handset_end",
                    true,
                  ),
                  fn363(
                    arr175,
                    obj59,
                    0,
                    0.205,
                    y + 0.105,
                    y + 0.215,
                    0.155,
                    0.024,
                    12341,
                    "phone_dial_plate",
                    true,
                  ));
                let arr176 = [];
                for (let n500 = 0; n500 < 10; n500++) {
                  let v2742 = (n500 / 10) * Math.PI * 2,
                    v2743 = 0.105 * Math.cos(v2742),
                    v2744 = y + 0.16 + 0.058 * Math.sin(v2742);
                  fn363(
                    arr176,
                    obj59,
                    v2743,
                    0.235,
                    v2744 - 0.013,
                    v2744 + 0.013,
                    0.016,
                    0.012,
                    12351 + 13 * n500,
                    "phone_dial_ring",
                    true,
                  );
                }
                let arr177 = [];
                (fn363(
                  arr177,
                  obj59,
                  0,
                  0.238,
                  y + 0.139,
                  y + 0.181,
                  0.027,
                  0.012,
                  12411,
                  "phone_dial_hub",
                  true,
                ),
                  fn361(arr175, (arg1791) =>
                    "phone_dial_plate" === arg1791.styleBase
                      ? "hsl(4,68%," + (29 + 2.5 * v2739).toFixed(1) + "%)"
                      : "phone_cradle" === arg1791.styleBase ||
                          "phone_cradle_bar" === arg1791.styleBase
                        ? "hsl(356,48%," + (20 + 2 * v2739).toFixed(1) + "%)"
                        : "phone_handset_mid" === arg1791.styleBase ||
                            "phone_handset_end" === arg1791.styleBase
                          ? "hsl(1,77%," + (35 + 4 * v2739).toFixed(1) + "%)"
                          : "phone_upper" === arg1791.styleBase || "phone_mid" === arg1791.styleBase
                            ? "hsl(3,80%," + (29 + 3 * v2739).toFixed(1) + "%)"
                            : "hsl(5,84%," + (26 + 3.5 * v2739).toFixed(1) + "%)",
                  ),
                  fn361(arr176, (arg1792) => "hsl(41,28%,71%)"),
                  fn361(arr177, (arg1793) => "hsl(4,24%,13%)"),
                  (function (arg1794, arg1795) {
                    let arr178 = [
                        {
                          x: freeze24.x + 0.31,
                          z: freeze24.z - 0.01,
                          y: arg1794 + 0.245,
                        },
                        {
                          x: freeze24.x + 0.43,
                          z: freeze24.z + 0.02,
                          y: arg1794 + 0.19,
                        },
                        {
                          x: freeze24.x + 0.49,
                          z: freeze24.z + 0.1,
                          y: arg1794 + 0.12,
                        },
                        {
                          x: freeze24.x + 0.43,
                          z: freeze24.z + 0.18,
                          y: arg1794 + 0.075,
                        },
                        {
                          x: freeze24.x + 0.5,
                          z: freeze24.z + 0.25,
                          y: arg1794 + 0.04,
                        },
                        {
                          x: freeze24.x + 0.58,
                          z: freeze24.z + 0.3,
                          y: arg1794 + 0.015,
                        },
                      ],
                      v2745 = "hsl(352,18%," + (25 + 4 * arg1795).toFixed(0) + "%)";
                    for (let n501 = 0; n501 < arr178.length - 1; n501++) {
                      let fn346Result11 = fn346(arr178[n501].x, arr178[n501].z, arr178[n501].y),
                        fn346Result12 = fn346(
                          arr178[n501 + 1].x,
                          arr178[n501 + 1].z,
                          arr178[n501 + 1].y,
                        );
                      if (fn346Result11.d < n131 && fn346Result12.d < n131) continue;
                      let fn348Result4 = fn348(
                          fn346Result11.d < n131
                            ? {
                                ...fn346Result11,
                                d: n131,
                              }
                            : fn346Result11,
                        ),
                        fn348Result5 = fn348(
                          fn346Result12.d < n131
                            ? {
                                ...fn346Result12,
                                d: n131,
                              }
                            : fn346Result12,
                        ),
                        hypot11 = Math.hypot(
                          arr178[n501 + 1].x - arr178[n501].x,
                          arr178[n501 + 1].y - arr178[n501].y,
                          arr178[n501 + 1].z - arr178[n501].z,
                        ),
                        max239 = Math.max(n131, Math.min(fn346Result11.d, fn346Result12.d));
                      Math.hypot(fn348Result5.c - fn348Result4.c, fn348Result5.r - fn348Result4.r) >
                        Math.max(12, ((hypot11 * Math.max(v19, v17)) / max239) * 4 + 4) ||
                        fn353(arr178[n501], arr178[n501 + 1], v2745, 12471 + 7 * n501);
                    }
                  })(y - 0.002, v2739));
              })()
            );
          let cos8 = Math.cos(view.yaw),
            sin20 = Math.sin(view.yaw);
          ((n119 = cos8), (n120 = sin20));
          let v2733 = sin20,
            v2734 = -cos8,
            v2735 = cos8,
            v2736 = sin20;
          if (((spriteQueue.length = 0), "balcony" === zone))
            for (let n502 = 0; n502 < arr25.length; n502++) {
              let v2746 = arr25[n502];
              (populationVisible || (4 !== v2746.kind && 5 !== v2746.kind)) &&
                queueSprite(v2746, v2733, v2734, v2735, v2736);
            }
          else if ("city" !== zone) {
            let fn195Result = fn195();
            for (let n503 = 0; n503 < fn195Result.length; n503++) {
              let v2747 = fn195Result[n503];
              (populationVisible || (4 !== v2747.kind && 5 !== v2747.kind)) &&
                queueSprite(v2747, v2733, v2734, v2735, v2736);
            }
          } else {
            let max240 = Math.max(0, ((view.x - spriteGridRadius) / gridCell) | 0),
              min97 = Math.min(gridDim - 1, ((view.x + spriteGridRadius) / gridCell) | 0),
              max241 = Math.max(0, ((view.z - spriteGridRadius) / gridCell) | 0),
              min98 = Math.min(gridDim - 1, ((view.z + spriteGridRadius) / gridCell) | 0);
            for (let v2748 = max241; v2748 <= min98; v2748++)
              for (let v2749 = max240; v2749 <= min97; v2749++) {
                let v2750 = v2748 * gridDim + v2749,
                  v2751 = from7[v2750];
                for (let n504 = 0; n504 < v2751.length; n504++)
                  queueSprite(v2751[n504], v2733, v2734, v2735, v2736);
                let v2752 = from3[v2750];
                for (let n505 = 0; n505 < v2752.length; n505++)
                  queueSprite(v2752[n505], v2733, v2734, v2735, v2736);
                let v2753 = renderGrid[v2750];
                for (let n506 = 0; n506 < v2753.length; n506++)
                  populationVisible &&
                    5 !== v2753[n506].kind &&
                    queueSprite(v2753[n506], v2733, v2734, v2735, v2736);
              }
            let max242 = Math.max(0, ((view.x - signalFarDist) / gridCell) | 0),
              min99 = Math.min(gridDim - 1, ((view.x + signalFarDist) / gridCell) | 0),
              max243 = Math.max(0, ((view.z - signalFarDist) / gridCell) | 0),
              min100 = Math.min(gridDim - 1, ((view.z + signalFarDist) / gridCell) | 0);
            for (let v2754 = max243; v2754 <= min100; v2754++)
              for (let v2755 = max242; v2755 <= min99; v2755++) {
                if (v2755 >= max240 && v2755 <= min97 && v2754 >= max241 && v2754 <= min98)
                  continue;
                let v2756 = from3[v2754 * gridDim + v2755];
                for (let n507 = 0; n507 < v2756.length; n507++)
                  v2756[n507].trafficSignal && queueSprite(v2756[n507], v2733, v2734, v2735, v2736);
              }
            if (populationVisible)
              for (let n508 = 0; n508 < nearCars.length; n508++)
                queueSprite(nearCars[n508], v2733, v2734, v2735, v2736);
          }
          (spriteQueue.sort((arg1796, arg1797) => arg1797._depth - arg1796._depth),
            (n118 = 0),
            (n117 = 0));
          for (let n509 = 0; n509 < spriteQueue.length; n509++)
            5 === spriteQueue[n509].kind && (spriteQueue[n509]._volumeFrame = false);
          for (let v2757 = spriteQueue.length - 1; v2757 >= 0 && n118 < vehicleVolumeMax; v2757--) {
            let v2758 = spriteQueue[v2757];
            5 === v2758.kind &&
              v2758._depth <= vehicleVolumeFar &&
              ((v2758._volumeFrame = true), n118++);
          }
          elCv.dataset &&
            ((elCv.dataset.volumetricCars = String(n118)),
            (elCv.dataset.vehicleOccupantGlyphs = "0"));
          for (let n510 = 0; n510 < spriteQueue.length; n510++) {
            let v2759 = spriteQueue[n510],
              depth3 = v2759._depth,
              col = v2759._col;
            if (v2759._skyTaxiRender) {
              (fn305(v2759._taxiVisual, depth3, v2733, v2734, v2735, v2736),
                v2759._skyTaxiDispatchEntry &&
                  elCv.dataset &&
                  ((elCv.dataset.skyTaxiExterior = "1"),
                  (elCv.dataset.skyTaxiExteriorLod = "PURPOSE_BUILT_VOLUME_DEPTHED"),
                  (elCv.dataset.skyTaxiExteriorPhase = sOFF),
                  (elCv.dataset.skyTaxiExteriorDepth = depth3.toFixed(2)),
                  (elCv.dataset.skyTaxiExteriorOwned = "0")));
              continue;
            }
            let v2760 =
              5 === v2759.kind
                ? 1 - depth3 / vehicleFarDist
                : v2759.trafficSignal
                  ? Math.max(0.04, 1 - depth3 / signalFarDist)
                  : 1 - depth3 * v13;
            v2760 < 0.035 ||
              (3 === v2759.kind
                ? fn338(v2759, depth3, col, v2760)
                : 4 === v2759.kind
                  ? fn320(v2759, depth3, col, v2760)
                  : 5 === v2759.kind
                    ? fn336(v2759, depth3, col, v2760)
                    : v2759.kind === n37 && v2759.trafficSignal
                      ? fn337(v2759, v2760)
                      : v2759.kind === n55
                        ? fn382(v2759, v2760)
                        : v2759.kind === n38
                          ? fn377(v2759, v2760)
                          : v2759.kind === n58
                            ? fn358(v2759, v2760)
                            : v2759.kind === n57
                              ? fn357(v2759, v2760)
                              : v2759.kind === n59
                                ? fn359(v2759, v2760)
                                : v2759.kind === n60
                                  ? fn379(v2759, v2760)
                                  : v2759.kind === n42
                                    ? fn378(v2759, v2760)
                                    : v2759.kind === n41
                                      ? fn376(v2759, v2760)
                                      : v2759.kind === n39
                                        ? fn367(v2759, v2760)
                                        : 9 === v2759.kind
                                          ? fn368(v2759, v2760)
                                          : v2759.kind === n47
                                            ? fn369(v2759, v2760)
                                            : v2759.kind === n46
                                              ? fn370(v2759, v2760)
                                              : v2759.kind === n54
                                                ? fn371(v2759, v2760)
                                                : 6 === v2759.kind
                                                  ? fn372(v2759, v2760)
                                                  : 7 === v2759.kind
                                                    ? fn373(v2759, v2760)
                                                    : 8 === v2759.kind
                                                      ? fn374(v2759, v2760)
                                                      : v2759.kind === n53
                                                        ? fn375(v2759, v2760)
                                                        : v2759.kind >= 6
                                                          ? v2759.kind === n40
                                                            ? fn317(v2759, v2760)
                                                            : v2759.volume
                                                              ? fn312(v2759, v2760)
                                                              : set2.has(v2759.kind)
                                                                ? fn318(v2759, v2760)
                                                                : fn319(v2759, depth3, col, v2760)
                                                          : fn383(v2759, depth3, col, v2760));
          }
          elCv.dataset && (elCv.dataset.vehicleOccupantGlyphs = String(n117));
        })(),
        fn2("sprites", now9)),
      (now9 = performance.now()),
      fn262(),
      fn2("gpuFlush", now9),
      v33 &&
        "intro_room" === zone &&
        (function () {
          if (!v33 || "intro_room" !== zone) return void fn257();
          let max244 = Math.max(0, Math.min(1, v33.timer / freeze28.entry)),
            max245 = Math.max(0, Math.min(1, (max244 - 0.12) / 0.42)),
            max246 = Math.max(0, Math.min(1, (max244 - 0.48) / 0.32)),
            max247 = Math.max(0, Math.min(1, (max244 - 0.72) / 0.28)),
            v2761 = (function () {
              let fn348Result6 = fn348(fn346(freeze24.x, freeze24.z, freeze24.y + 0.22));
              return !fn348Result6 ||
                !Number.isFinite(fn348Result6.c) ||
                !Number.isFinite(fn348Result6.r) ||
                fn348Result6.d < 0.08
                ? {
                    x: 0.5 * elCv.width,
                    y: 0.52 * elCv.height,
                  }
                : {
                    x: fn348Result6.c * width,
                    y: 9 * fn348Result6.r,
                  };
            })(),
            v2762 = ctx2;
          if (
            (v2762.clearRect(0, 0, canvasEl.width, canvasEl.height),
            v2762.save(),
            (v2762.globalCompositeOperation = "source-over"),
            max245 > 0)
          )
            for (let n511 = 0; n511 < rows; n511++)
              for (let n512 = 0; n512 < cols; n512++) {
                let v2764 = n512 * width,
                  v2765 = 9 * n511,
                  v2766 = v2764 + 0.5 * width,
                  v2767 = v2765 + 4.5,
                  hypot12 = Math.hypot(v2766 - v2761.x, v2767 - v2761.y),
                  v2768 = 0.28 * Math.max(0, 1 - hypot12 / 170);
                if (max245 < 0.46 * hash2(29 * n512 + 17, 37 * n511 + 23) + v2768) continue;
                let v2769 = 0.05 + 0.22 * max245;
                ((v2762.fillStyle = "rgba(0,0,0," + v2769.toFixed(3) + ")"),
                  v2762.fillRect(v2764, v2765, Math.max(0.55, 0.12 * width), 9.4),
                  v2762.fillRect(v2764, v2765, width + 0.4, Math.max(0.55, 0.9)));
              }
          if (max246 > 0) {
            ((v2762.font = Math.max(9, Math.floor(9 * 0.94)) + "px monospace"),
              (v2762.textAlign = "left"),
              (v2762.textBaseline = "alphabetic"));
            for (let n513 = 0; n513 < rows; n513++)
              for (let n514 = 0; n514 < cols; n514++) {
                let v2770 = n514 * width,
                  v2771 = 9 * n513,
                  v2772 = v2770 + 0.5 * width,
                  v2773 = v2771 + 4.5,
                  hypot13 = Math.hypot(v2772 - v2761.x, v2773 - v2761.y);
                if (
                  hash2(43 * n514 + 3, 17 * n513 + 9) <
                  1 - max246 + 0.42 * Math.max(0, 1 - hypot13 / 135)
                )
                  continue;
                let max248 = Math.max(0, (max246 - 0.35) / 0.65),
                  v2774 = (v2761.x - v2772) * max248 * 0.045,
                  v2775 = (v2761.y - v2773) * max248 * 0.045,
                  v2776 = v2770 + v2774,
                  v2777 = v2771 + v2775;
                ((v2762.fillStyle = "rgba(0,0,0," + (0.34 + 0.54 * max246).toFixed(3) + ")"),
                  v2762.fillRect(v2776 - 0.4, v2777 - 0.4, width + 1.2, 10.2));
                let fn12Result30 = hash2(7 * n514 + 3, 13 * n513 + 5),
                  v2778 = hypot13 < 100 ? 2 : fn12Result30 > 0.68 ? 30 : 205,
                  v2779 = hypot13 < 100 ? 54 : fn12Result30 > 0.68 ? 45 : 42;
                v2762.fillStyle =
                  "hsl(" + v2778 + "," + (hypot13 < 100 ? 72 : 42) + "%," + v2779 + "%)";
                let v2780 = s2[(11 * hash2(61 * n514 + 11, 47 * n513 + 5)) | 0];
                (n514 + n513 + ((10 * max246) | 0)) & 2
                  ? v2762.fillText(v2780, v2776, 9 * (n513 + 1) + v2775 - 1.4)
                  : v2762.fillRect(v2776 + 1, v2777 + 1, Math.max(1, width - 1), Math.max(1, 8));
              }
          }
          let v2763 = 0.18 + 0.42 * Math.sin(Math.min(1, max244) * Math.PI);
          ((v2762.strokeStyle = "hsla(2,88%,58%," + v2763.toFixed(3) + ")"),
            (v2762.lineWidth = 1.5 + 2.2 * max246),
            v2762.beginPath(),
            v2762.arc(v2761.x, v2761.y, 12 + 8 * max246, 0, 2 * Math.PI),
            v2762.stroke(),
            max247 > 0 &&
              ((v2762.fillStyle = "rgba(0,0,0," + (0.96 * max247).toFixed(3) + ")"),
              v2762.fillRect(0, 0, canvasEl.width, canvasEl.height)),
            v2762.restore());
        })(),
      PHASE_LIVE === PHASE.RESOLVING
        ? (function () {
            let fn385Result = fn385(),
              raw = fn385Result.raw,
              resolve = fn385Result.resolve;
            (!v34 && raw >= 0.72 && ((v34 = true), fn13(false)),
              ctx.save(),
              (ctx.globalCompositeOperation = "source-atop"),
              (ctx.fillStyle =
                "rgba(54,255,128," + Math.max(0, 0.82 - 1.08 * raw).toFixed(3) + ")"),
              ctx.fillRect(0, 0, elCv.width, elCv.height),
              ctx.restore());
            let v2781 = 0.025 + 0.105 * (1 - raw),
              v2782 = 0.18 + 0.26 * (1 - raw);
            (ctx.save(),
              (ctx.globalCompositeOperation = "source-over"),
              (ctx.fillStyle = "#000"),
              ctx.beginPath());
            for (let n515 = 0; n515 < rows; n515++)
              for (let n516 = 0; n516 < cols; n516++)
                float32Array29[n515 * cols + n516] > resolve &&
                  ctx.rect(n516 * width, 9 * n515, width + 0.65, 9.4);
            (ctx.fill(),
              (ctx.font = s10pxConsolasCourier),
              (ctx.textAlign = "left"),
              (ctx.textBaseline = "alphabetic"),
              (ctx.fillStyle = "rgba(74,236,127," + (0.3 + 0.3 * (1 - raw)).toFixed(2) + ")"),
              (ctx.shadowColor = "rgba(42,255,111,.20)"),
              (ctx.shadowBlur = 3));
            for (let n517 = 0; n517 < rows; n517++)
              for (let n518 = 0; n518 < cols; n518++) {
                let v2783 = float32Array29[n517 * cols + n518];
                if (
                  v2783 > resolve &&
                  v2783 < resolve + v2781 &&
                  hash2(41 * n518 + 7, 37 * n517 + 3) < v2782
                ) {
                  let v2784 = s2[(11 * hash2(13 * n518 + 5, 31 * n517 + 11)) | 0];
                  ctx.fillText(v2784, n518 * width, 9 * (n517 + 1) - 1.5);
                }
              }
            (ctx.restore(),
              (s6 = ""),
              (function (arg1798) {
                let arr179 = [];
                (arg1798 >= 0 && arr179.push("> ESTABLISHING LINK..."),
                  arg1798 >= 0.12 && arr179.push("> PLANE DETECTED"),
                  arg1798 >= 0.22 && arr179.push("> COORDINATES LOCKED"),
                  arg1798 >= 0.3 && arr179.push("> RESOLVING GEOMETRY..."),
                  arg1798 >= 0.69 && arr179.push("> GEOMETRY.........LOCKED"),
                  arg1798 >= 0.75 && arr179.push("> CITY GRID........ONLINE"),
                  arg1798 >= 0.8 && arr179.push("> POPULATION.......ONLINE"),
                  arg1798 >= 0.86 && arr179.push("> CONNECTION ESTABLISHED"),
                  arg1798 >= 0.91 && arr179.push("> ENTERING THE ASCII PLANE..."));
                let slice2 = arr179.slice(-5),
                  v2785 = Math.min(1, 12 * arg1798) * Math.min(1, 14 * (1 - arg1798));
                (ctx.save(),
                  (ctx.globalCompositeOperation = "source-over"),
                  (ctx.textAlign = "left"),
                  (ctx.textBaseline = "alphabetic"),
                  (ctx.font = '11px Consolas, "Courier New", monospace'),
                  (ctx.fillStyle = "rgba(104,255,157," + (0.42 + 0.42 * v2785).toFixed(2) + ")"),
                  (ctx.shadowColor = "rgba(57,255,124,.22)"),
                  (ctx.shadowBlur = 4));
                for (let n519 = 0; n519 < slice2.length; n519++)
                  ctx.fillText(slice2[n519], 34, 38 + 18 * n519);
                (ctx.restore(), (s6 = ""));
              })(raw));
          })()
        : PHASE_LIVE !== PHASE.LIVE
          ? (function () {
              if (
                (ctx.save(),
                (ctx.globalCompositeOperation = "source-over"),
                (ctx.globalAlpha = 1),
                (ctx.fillStyle = "#000"),
                ctx.fillRect(0, 0, elCv.width, elCv.height),
                (ctx.textBaseline = "alphabetic"),
                (ctx.textAlign = "left"),
                PHASE_LIVE === PHASE.BOOT)
              )
                return (
                  ((2.2 * live) | 0) % 2 == 0 &&
                    ((ctx.fillStyle = "rgba(90,255,148,.52)"),
                    ctx.fillRect(
                      Math.round(0.092 * elCv.width),
                      Math.round(0.5 * elCv.height),
                      Math.max(5, width),
                      2,
                    )),
                  ctx.restore(),
                  void (s6 = "")
                );
              if (PHASE_LIVE === PHASE.INTRO_TEXT) {
                let v2788 = live - freeze6.boot,
                  n520 = 19,
                  n521 = 0.4,
                  arr180 = [0];
                for (let n523 = 1; n523 < freeze7.length; n523++)
                  arr180.push(arr180[n523 - 1] + freeze7[n523 - 1].length / n520 + n521);
                let round49 = Math.round(0.085 * elCv.width),
                  round50 = Math.round(0.405 * elCv.height),
                  n522 = 34;
                ctx.font = '14px Consolas, "Courier New", monospace';
                for (let n524 = 0; n524 < freeze7.length; n524++) {
                  let fn384Result = fn384(freeze7[n524], v2788, arr180[n524], n520);
                  if (!fn384Result) continue;
                  let v2789 = v2788 - arr180[n524];
                  ((ctx.fillStyle = 2 === n524 ? "rgba(110,255,164,.93)" : "rgba(102,226,148,.78)"),
                    (ctx.shadowColor = "rgba(58,255,126,.24)"),
                    (ctx.shadowBlur = 5),
                    ctx.fillText(fn384Result, round49, round50 + n524 * n522),
                    fn384Result.length < freeze7[n524].length &&
                      ((3.1 * v2789) | 0) % 2 == 0 &&
                      ctx.fillRect(
                        round49 + ctx.measureText(fn384Result).width + 3,
                        round50 + n524 * n522 - 11,
                        7,
                        2,
                      ));
                }
                return (ctx.restore(), void (s6 = ""));
              }
              let v2786 = live - freeze6.text,
                v2787 =
                  v2786 < 0.18
                    ? "T_E A_CII _LA_E"
                    : v2786 < 0.4
                      ? "THE ASC_I PLANE"
                      : "THE ASCII PLANE",
                max249 = Math.max(0, Math.min(1, (v2786 - 0.3) / 0.22));
              ((ctx.font = '600 29px Consolas, "Courier New", monospace'),
                (ctx.textAlign = "center"),
                (ctx.fillStyle = "rgba(115,255,168," + (0.64 + 0.31 * max249).toFixed(2) + ")"),
                (ctx.shadowColor = "rgba(60,255,128,.34)"),
                (ctx.shadowBlur = 8),
                ctx.fillText(v2787, 0.5 * elCv.width, 0.5 * elCv.height),
                (ctx.font = '10px Consolas, "Courier New", monospace'),
                (ctx.fillStyle = "rgba(68,151,96," + (0.28 + 0.24 * max249).toFixed(2) + ")"),
                ctx.fillText("PLANE://LINK CANDIDATE", 0.5 * elCv.width, 0.5 * elCv.height + 29),
                ctx.restore(),
                (s6 = ""));
            })()
          : v66 &&
            "resolve" === v66.phase &&
            (function () {
              if (!v66 || "resolve" !== v66.phase) return;
              let max250 = Math.max(0, Math.min(1, v66.timer / 1.85)),
                v2790 = 1 - Math.pow(1 - max250, 1.18);
              (ctx.save(),
                (ctx.globalCompositeOperation = "source-atop"),
                (ctx.fillStyle =
                  "rgba(54,255,128," + Math.max(0, 0.82 - 1.08 * max250).toFixed(3) + ")"),
                ctx.fillRect(0, 0, elCv.width, elCv.height),
                ctx.restore());
              let v2791 = 0.025 + 0.105 * (1 - max250),
                v2792 = 0.18 + 0.26 * (1 - max250);
              (ctx.save(),
                (ctx.globalCompositeOperation = "source-over"),
                (ctx.fillStyle = "#000"),
                ctx.beginPath());
              for (let n525 = 0; n525 < rows; n525++)
                for (let n526 = 0; n526 < cols; n526++)
                  float32Array29[n525 * cols + n526] > v2790 &&
                    ctx.rect(n526 * width, 9 * n525, width + 0.65, 9.4);
              (ctx.fill(),
                (ctx.font = s10pxConsolasCourier),
                (ctx.textAlign = "left"),
                (ctx.textBaseline = "alphabetic"),
                (ctx.fillStyle = "rgba(74,236,127," + (0.3 + 0.3 * (1 - max250)).toFixed(2) + ")"),
                (ctx.shadowColor = "rgba(42,255,111,.20)"),
                (ctx.shadowBlur = 3));
              for (let n527 = 0; n527 < rows; n527++)
                for (let n528 = 0; n528 < cols; n528++) {
                  let v2793 = float32Array29[n527 * cols + n528];
                  if (
                    v2793 > v2790 &&
                    v2793 < v2790 + v2791 &&
                    hash2(41 * n528 + 7, 37 * n527 + 3) < v2792
                  ) {
                    let v2794 = s2[(11 * hash2(13 * n528 + 5, 31 * n527 + 11)) | 0];
                    ctx.fillText(v2794, n528 * width, 9 * (n527 + 1) - 1.5);
                  }
                }
              (ctx.restore(),
                (s6 = ""),
                (function (arg1799, arg1800) {
                  let arr181 = [];
                  (arg1799 >= 0 && arr181.push("> CONNECTION ACCEPTED"),
                    arg1799 >= 0.12 && arr181.push("> COORDINATES LOCKED"),
                    arg1799 >= 0.28 && arr181.push("> RESOLVING GEOMETRY..."),
                    arg1799 >= 0.68 && arr181.push("> CITY GRID........ONLINE"),
                    arg1799 >= 0.84 &&
                      arr181.push("> NODE " + (arg1800?.["gridRef"] || "----") + "........ONLINE"));
                  let slice3 = arr181.slice(-4),
                    v2795 = Math.min(1, 10 * arg1799) * Math.min(1, 12 * (1 - arg1799));
                  (ctx.save(),
                    (ctx.globalCompositeOperation = "source-over"),
                    (ctx.textAlign = "left"),
                    (ctx.textBaseline = "alphabetic"),
                    (ctx.font = '11px Consolas, "Courier New", monospace'),
                    (ctx.fillStyle = "rgba(104,255,157," + (0.38 + 0.42 * v2795).toFixed(2) + ")"),
                    (ctx.shadowColor = "rgba(57,255,124,.22)"),
                    (ctx.shadowBlur = 4));
                  for (let n529 = 0; n529 < slice3.length; n529++)
                    ctx.fillText(slice3[n529], 34, 38 + 18 * n529);
                  (ctx.restore(), (s6 = ""));
                })(max250, v66.record));
            })(),
      (now9 = performance.now()),
      n137++,
      (n136 += min83) >= 0.25 && ((n135 = Math.round(n137 / n136)), (n136 = 0), (n137 = 0)),
      (n138 += min83) >= 0.15)
    ) {
      ((n138 = 0), view.x, view.z);
      let v2796 = ((((180 * view.yaw) / Math.PI) % 360) + 360) % 360,
        v2797 = ["NORTH", "N-EAST", "EAST", "S-EAST", "SOUTH", "S-WEST", "WEST", "N-WEST"][
          Math.round(v2796 / 45) % 8
        ];
      ((elUiSector.textContent =
        "city" === zone
          ? fn398().location
          : "balcony" === zone
            ? "TOWER / BALCONY 31"
            : "observation" === zone
              ? "TOWER / FLOOR 31"
              : descriptor.label + " / FLOOR 00"),
        (elUiCoord.textContent = view.x.toFixed(2) + " / " + view.z.toFixed(2)),
        (elUiBearing.textContent = String(Math.round(v2796)).padStart(3, "0") + "° / " + v2797),
        (elUiFps.textContent = n135 + " FPS"),
        (elUiWeather.textContent = v81 ? "RAIN / R TO TOGGLE" : "CLEAR / R TO TOGGLE"),
        elUiAutoTour && (elUiAutoTour.textContent = flag9 ? "T / TOURING" : "T / OFF"),
        elUiPopulation &&
          (elUiPopulation.textContent = populationVisible ? "P / VISIBLE" : "P / HIDDEN"),
        (elUiNpcs.textContent = populationVisible
          ? "city" === zone
            ? pedestrians.length + " TRACKED"
            : "interior" === zone
              ? arr22.length + " LOCAL / CITY LIVE"
              : "balcony" === zone
                ? pedestrians.length + " BELOW"
                : "0 LOCAL / CITY LIVE"
          : "HIDDEN / P TO SHOW"),
        (elUiCars.textContent = populationVisible
          ? "city" === zone
            ? cars.length + " TRACKED"
            : "interior" === zone
              ? n26 + " LIVE GLYPHS"
              : "balcony" === zone
                ? cars.length + " BELOW"
                : "CITY COARSE UPDATE"
          : "HIDDEN / P TO SHOW"),
        (elUiStatic.textContent =
          "city" === zone ? arr2.length + " INDEXED" : fn195().length + " LOCAL"),
        (elUiVisible.textContent = spriteQueue.length + " VISIBLE"),
        (elUiProps.textContent =
          "city" === zone ? arr3.length + " INDEXED" : fn195().length + " FURNISHINGS"),
        (elUiSigns.textContent = "city" === zone ? n111 + " FACADES" : "PORTAL CITY BUS"));
      let n530 = 0,
        n531 = 0;
      for (let n532 = 0; n532 < pedestrians.length; n532++)
        pedestrians[n532].crossing ? n531++ : fn65(pedestrians[n532]) || n530++;
      ((elUiPath.textContent =
        "city" === zone ? (n530 ? n530 + " OFF ROUTE" : "ALL ROUTES VALID") : "LOCAL GRID VALID"),
        (elUiCrossings.textContent = "city" === zone ? n531 + " ACTIVE" : "N/A"));
      let fn212Result2 = fn212(),
        v2798 = fn212Result2 && fn212Result2.portal,
        v2799 = fn212Result2 ? fn212Result2.distance : 1 / 0;
      ((elUiZone.textContent =
        "city" === zone
          ? "CITY / EXTERIOR"
          : "balcony" === zone
            ? "LIVE BALCONY / 31"
            : "observation" === zone
              ? "TOWER / FLOOR 31"
              : descriptor.label + " / " + String(n101).padStart(2, "0")),
        (elUiPortalDistance.textContent = Number.isFinite(v2799)
          ? v2799.toFixed(1) + " METRES"
          : "NO LOCAL LINK"),
        (elUiPortalState.textContent =
          v2798 === obj11
            ? "open" === sStandby
              ? "OPEN / PRESS E"
              : "calling" === sStandby
                ? "CAR IN TRANSIT"
                : "PRESS E TO CALL"
            : v2798 === obj12
              ? "PRESS E / DESCEND"
              : n102 > 0
                ? "STABILIZING"
                : "READY"),
        (elUiDestination.textContent = v2798 ? v2798.destination : "---"));
      let flag41 = false,
        fn234Result = fn234(),
        fn177Result2 = fn177(),
        v2800 = (function () {
          let fn168Result2 = fn168();
          return "active" !== fn168Result2.status
            ? null
            : {
                label: "03::ACTIVE_OBJECTIVE",
                title: fn168Result2.title.replace(/ /g, "_"),
                text:
                  arr23[fn168Result2.step] + "\n\nINVENTORY :: " + fn167() + "\nCREDITS :: " + n105,
              };
        })(),
        v2801 = (function (arg1801 = 1.7) {
          let v2803 = null,
            fn484 = (arg1802) => {
              if (!arg1802 || arg1802.entranceOccluded) return;
              let fn213Result2 = fn213(arg1802);
              fn213Result2 <= arg1801 &&
                (!v2803 || fn213Result2 < v2803.distance) &&
                (v2803 = {
                  target: arg1802,
                  distance: fn213Result2,
                  label: fn214(arg1802),
                });
            };
          if ("city" !== zone) {
            for (let v2805 of fn195()) fn484(v2805);
            return v2803;
          }
          let v2804 = arg1801 + 4,
            max251 = Math.max(0, ((view.x - v2804) / gridCell) | 0),
            min101 = Math.min(gridDim - 1, ((view.x + v2804) / gridCell) | 0),
            max252 = Math.max(0, ((view.z - v2804) / gridCell) | 0),
            min102 = Math.min(gridDim - 1, ((view.z + v2804) / gridCell) | 0);
          for (let v2806 = max252; v2806 <= min102; v2806++)
            for (let v2807 = max251; v2807 <= min101; v2807++) {
              let v2808 = v2806 * gridDim + v2807;
              for (let v2809 of from7[v2808]) fn484(v2809);
              for (let v2810 of from3[v2808]) fn484(v2810);
              for (let v2811 of renderGrid[v2808]) fn484(v2811);
            }
          return v2803;
        })(),
        v2802 = (function (arg1803) {
          if (!arg1803) return null;
          let target2 = arg1803.target,
            replace3 = arg1803.label.replace(/ /g, "_");
          if (target2.kind === n48)
            return {
              label: "03::STREET_OBJECT",
              title: replace3,
              text: "ENTERABLE ADDRESS :: walk through the recessed doorway.",
            };
          if (target2.kind === n38) {
            let v2812 = (function (arg1804) {
              let fn224Result4 = fn224(arg1804),
                v2813 = fn224Result4 && obj18.nodes[fn224Result4.districtKey];
              return {
                record: fn224Result4,
                registered: !!v2813,
                registeredRecord: v2813,
                district: fn390(fn224Result4.worldX, fn224Result4.worldZ),
              };
            })(target2);
            return {
              label: "03::PUBLIC_RELAY",
              title: "TELEPHONE_RELAY // " + v2812.district.name.replace(/ /g, "_"),
              text:
                "[E] ACCESS PUBLIC LINE :: " +
                arg1803.distance.toFixed(1) +
                "m\n" +
                (v2812.registered ? "DISTRICT NODE REGISTERED" : "UNREGISTERED DISTRICT NODE"),
            };
          }
          return {
            label: "03::NEARBY_OBJECT",
            title: replace3,
            text: "OBJECT IDENTIFIED :: " + arg1803.distance.toFixed(1) + "m",
          };
        })(v2801);
      if (((elUiContextChoices.hidden = true), (elUiContextChoices.textContent = ""), flag12)) {
        let v2814 = v55[n100],
          fn162Result = fn162(v2814);
        ((flag41 = true),
          (elUiContextLabel.textContent = "03::LIFT_DIRECTORY"),
          (elUiContextTitle.textContent =
            v2814.descriptor.label.replace(/ /g, "_") + " // SELECT_FLOOR"),
          (elUiContextCopy.textContent =
            "CURRENT FLOOR :: " +
            String(n101).padStart(2, "0") +
            "\nBuilding height :: " +
            fn161(v2814) +
            " registered floors. Rooms are generated only when visited."),
          (elUiContextChoices.textContent = fn162Result
            .map(
              (arg1805, arg1806) =>
                "[" +
                (arg1806 + 1) +
                "] " +
                (0 === arg1805
                  ? "FLOOR 00 / STREET LOBBY"
                  : v2814.hero && 31 === arg1805
                    ? "FLOOR 31 / OBSERVATION"
                    : "FLOOR " +
                      String(arg1805).padStart(2, "0") +
                      " / " +
                      fn164(v2814, arg1805).typeLabel),
            )
            .concat("[ESC] close directory")
            .join("\n")),
          (elUiContextChoices.hidden = false));
      } else if (fn234Result)
        ((flag41 = true),
          (elUiContextLabel.textContent = fn234Result.label),
          (elUiContextTitle.textContent = fn234Result.title),
          (elUiContextCopy.textContent = fn234Result.text),
          fn234Result.choices &&
            fn234Result.choices.length &&
            ((elUiContextChoices.textContent = fn234Result.choices
              .map((arg1807) => "[" + arg1807.key + "] " + arg1807.text)
              .concat(
                "sectors" === v65.mode || "districts" === v65.mode
                  ? "[N/P] page  [ESC] back"
                  : "[ESC] close/back",
              )
              .join("\n")),
            (elUiContextChoices.hidden = false)));
      else if (fn177Result2)
        ((flag41 = true),
          (elUiContextLabel.textContent = fn177Result2.label),
          (elUiContextTitle.textContent = fn177Result2.title),
          (elUiContextCopy.textContent = fn177Result2.text),
          fn177Result2.choices &&
            fn177Result2.choices.length &&
            ((elUiContextChoices.textContent = fn177Result2.choices
              .map((arg1808) => "[" + arg1808.key + "] " + arg1808.text)
              .concat("[ESC] close link")
              .join("\n")),
            (elUiContextChoices.hidden = false)));
      else if ("city" === zone) {
        if (((elUiContextLabel.textContent = "03::LOCAL_CONTEXT"), v2802))
          ((flag41 = true),
            (elUiContextLabel.textContent = v2802.label),
            (elUiContextTitle.textContent = v2802.title),
            (elUiContextCopy.textContent = v2802.text));
        else if (v2799 < 5) {
          let descriptor7 = v55[v2798.siteIndex || 0].descriptor;
          ((flag41 = true),
            (elUiContextTitle.textContent = descriptor7.label.replace(/ /g, "_") + "_ENTRANCE"),
            (elUiContextCopy.textContent =
              "Enter " +
              descriptor7.label +
              " :: " +
              descriptor7.typeLabel +
              ".\n" +
              (descriptor7.address
                ? descriptor7.address +
                  " // " +
                  descriptor7.district +
                  " // " +
                  descriptor7.sector +
                  "\n"
                : "") +
              "The inset threshold is the invisible link."));
        } else if (v2798) {
          elUiContextTitle.textContent = "ENTRY_NODE_DETECTED";
          let v2815 = v2798.x - view.x,
            v2816 = v2798.z - view.z,
            v2817 = ((((180 * Math.atan2(v2815, -v2816)) / Math.PI) % 360) + 360) % 360;
          elUiContextCopy.textContent =
            v2798.destination +
            ": " +
            v2799.toFixed(0) +
            "m / bearing " +
            String(Math.round(v2817)).padStart(3, "0") +
            "°.";
        }
      } else if ("interior" === zone) {
        elUiContextLabel.textContent = "03::" + descriptor.label.replace(/ /g, "_");
        let hypot14 = Math.hypot(view.x - obj11.x, view.z - obj11.z),
          hypot15 = Math.hypot(view.x - obj10.x, view.z - obj10.z),
          fn172Result2 = fn172();
        fn172Result2
          ? ((flag41 = true),
            (elUiContextTitle.textContent = fn172Result2.target.interaction.label),
            (elUiContextCopy.textContent =
              "[E] " +
              fn172Result2.target.interaction.verb +
              " :: " +
              fn172Result2.distance.toFixed(1) +
              "m"))
          : n104 > 0
            ? ((flag41 = true),
              (elUiContextTitle.textContent =
                "open" === sStandby ? "ELEVATOR_ARRIVED" : "ELEVATOR_CONTROL"),
              (elUiContextCopy.textContent = s5))
            : hypot14 < obj11.radius + 1.3
              ? ((flag41 = true),
                (elUiContextTitle.textContent =
                  "open" === sStandby ? "LIFT_00_OPEN" : "LIFT_00_STANDBY"),
                (elUiContextCopy.textContent =
                  "open" === sStandby
                    ? "[E] open the floor directory."
                    : "[E] call elevator for this building."))
              : 0 === n101 && hypot15 < 4
                ? ((flag41 = true),
                  (elUiContextTitle.textContent = "EXIT_LINK_READY"),
                  (elUiContextCopy.textContent =
                    "Walk into the cyan EXIT entrance in the south wall."))
                : v2802
                  ? ((flag41 = true),
                    (elUiContextLabel.textContent = v2802.label),
                    (elUiContextTitle.textContent = v2802.title),
                    (elUiContextCopy.textContent = v2802.text))
                  : ((elUiContextTitle.textContent = descriptor.condition.replace(/ /g, "_")),
                    (elUiContextCopy.textContent =
                      descriptor.typeLabel +
                      " :: " +
                      (descriptor.address || "SITE " + String(n100).padStart(3, "0")) +
                      " // " +
                      (descriptor.district || "CITY") +
                      " // " +
                      (descriptor.sector || "SECTOR") +
                      ", floor " +
                      String(n101).padStart(2, "0") +
                      ". Find LIFT 00 on the north wall."));
      } else if ("observation" === zone) {
        let hypot16 = Math.hypot(view.x - obj12.x, view.z - obj12.z),
          hypot17 = Math.hypot(view.x - 16, view.z - 4.4),
          fn172Result3 = fn172();
        ((elUiContextLabel.textContent = "03::FLOOR_31_OBSERVATION"),
          fn172Result3
            ? ((flag41 = true),
              (elUiContextTitle.textContent = fn172Result3.target.interaction.label),
              (elUiContextCopy.textContent =
                "[E] " +
                fn172Result3.target.interaction.verb +
                " :: " +
                fn172Result3.distance.toFixed(1) +
                "m"))
            : n104 > 0
              ? ((flag41 = true),
                (elUiContextTitle.textContent = "ELEVATOR_TRANSIT_COMPLETE"),
                (elUiContextCopy.textContent = s5))
              : hypot16 < obj12.radius + 1.4
                ? ((flag41 = true),
                  (elUiContextTitle.textContent = "RETURN_LIFT_READY"),
                  (elUiContextCopy.textContent = "[E] descend to Nocturne Mart / Floor 00."))
                : hypot17 < 6
                  ? ((flag41 = true),
                    (elUiContextTitle.textContent = "BALCONY_LINK_READY"),
                    (elUiContextCopy.textContent =
                      "[E] open the live-city terrace. Stable portal view and solid ASCII rail online."))
                  : v2802
                    ? ((flag41 = true),
                      (elUiContextLabel.textContent = v2802.label),
                      (elUiContextTitle.textContent = v2802.title),
                      (elUiContextCopy.textContent = v2802.text))
                    : ((elUiContextTitle.textContent = "OBSERVATION_ROOM_ONLINE"),
                      (elUiContextCopy.textContent =
                        "Floor 31 is commissioned. Inspect the live balcony link on the north wall.")));
      } else {
        let hypot18 = Math.hypot(view.x - obj14.x, view.z - obj14.z);
        ((elUiContextLabel.textContent = "03::LIVE_BALCONY_31"),
          hypot18 < obj14.radius + 1
            ? ((flag41 = true),
              (elUiContextTitle.textContent = "RETURN_LINK_READY"),
              (elUiContextCopy.textContent = "[E] return to the Floor 31 observation room."))
            : v2802
              ? ((flag41 = true),
                (elUiContextLabel.textContent = v2802.label),
                (elUiContextTitle.textContent = v2802.title),
                (elUiContextCopy.textContent = v2802.text))
              : ((elUiContextTitle.textContent = "ELEVATED_CITY_FEED"),
                (elUiContextCopy.textContent =
                  "Look across the live elevated city from a stable local terrace. The low ASCII rail marks its safe boundary.")));
      }
      (!flag41 &&
        v2800 &&
        ((flag41 = true),
        (elUiContextLabel.textContent = v2800.label),
        (elUiContextTitle.textContent = v2800.title),
        (elUiContextCopy.textContent = v2800.text)),
        (elContextPanel.hidden = !flag41));
    }
    ((function (arg1809 = performance.now()) {
      if (!v2 || PHASE_LIVE !== PHASE.LIVE || (flag5 && !flag7) || arg1809 - n134 < 90) return;
      ((n134 = arg1809),
        (function () {
          if (!elInterfaceAscii || !elInterface) return;
          let max254 = Math.max(360, Math.round(elInterface.clientWidth || 420)),
            max255 = Math.max(540, Math.round(elInterface.clientHeight || 720));
          (elInterfaceAscii.width !== max254 || elInterfaceAscii.height !== max255) &&
            ((elInterfaceAscii.width = max254), (elInterfaceAscii.height = max255), (n134 = 0));
        })());
      let v2818 = v2;
      if (
        (v2818.clearRect(0, 0, elInterfaceAscii.width, elInterfaceAscii.height),
        (v2818.font = Math.round(15.8) + 'px Consolas, "Courier New", monospace'),
        (v2818.textBaseline = "alphabetic"),
        (v2818.imageSmoothingEnabled = false),
        "intro_room" === zone)
      )
        return;
      let max253 = Math.max(28, Math.floor(elInterfaceAscii.width / round) - 4),
        sHsl13835 = "hsl(138,35%,34%)",
        sHsl13844 = "hsl(138,44%,48%)",
        sHsl13890 = "hsl(138,90%,68%)",
        sHsl13852 = "hsl(138,52%,58%)",
        n533 = 2,
        fn485 = () => {
          fn387("+" + "-".repeat(Math.max(8, max253 - 2)) + "+", 1, n533++, sHsl13835, max253);
        },
        fn486 = (arg1810, arg1811, arg1812 = sHsl13844) => {
          fn387(
            ("> " + arg1810.padEnd(11, ".") + " " + String(arg1811)).slice(0, max253),
            1,
            n533++,
            arg1812,
            max253,
          );
        };
      (fn387("01::NAVIGATION", 1, n533++, sHsl13852, max253), fn485());
      let fn221Result = fn221(view.yaw),
        fn3Result14 = toWorldX(view.x),
        fn4Result14 = toWorldZ(view.z);
      if ("city" === zone) {
        let fn398Result3 = fn398(),
          v2819 = (function (arg1813 = toWorldX(view.x), arg1814 = toWorldZ(view.z)) {
            let v2821 = null,
              v2822 = 1 / 0;
            for (let v2823 of v84) {
              let v2824 = v2823.x - arg1813,
                v2825 = v2823.z - arg1814,
                hypot19 = Math.hypot(v2824, v2825);
              if (hypot19 < v2822) {
                v2822 = hypot19;
                let fn221Result2 = fn221(Math.atan2(v2824, -v2825));
                v2821 = {
                  ...v2823,
                  distance: hypot19,
                  bearing: fn221Result2.compass,
                  bearingShort: fn400(fn221Result2.compass),
                };
              }
            }
            return v2821;
          })(fn3Result14, fn4Result14),
          v2820 = (function (arg1815 = toWorldX(view.x), arg1816 = toWorldZ(view.z)) {
            let v2826 = null,
              v2827 = 1 / 0;
            for (let v2828 of arr2) {
              if (v2828.kind !== n38) continue;
              let v2829 =
                  (Number.isFinite(v2828.relayWorldX) ? v2828.relayWorldX : toWorldX(v2828.x)) -
                  arg1815,
                v2830 =
                  (Number.isFinite(v2828.relayWorldZ) ? v2828.relayWorldZ : toWorldZ(v2828.z)) -
                  arg1816,
                hypot20 = Math.hypot(v2829, v2830);
              hypot20 < v2827 &&
                ((v2827 = hypot20),
                (v2826 = {
                  sprite: v2828,
                  distance: hypot20,
                  bearingShort: fn400(fn221(Math.atan2(v2829, -v2830)).compass),
                }));
            }
            return v2826;
          })(fn3Result14, fn4Result14),
          fn403Result = fn403();
        if (
          (fn486("DISTRICT", fn398Result3.district.name, fn392(fn398Result3.district.type, true)),
          fn486("CITY POS", fn398Result3.position.label, sHsl13852),
          fn486("SECTOR", fn398Result3.sector.name + " / " + fn398Result3.gridRef.label, sHsl13844),
          fn486("STREET", fn398Result3.street.name, sHsl13890),
          fn486("CROSS", fn398Result3.cross.name, sHsl13844),
          v2819 &&
            fn486(
              "LANDMARK",
              v2819.shortName + " / " + Math.round(v2819.distance) + "M " + v2819.bearingShort,
              mapColors.landmark,
            ),
          v2820 &&
            fn486("PHONE", Math.round(v2820.distance) + "M " + v2820.bearingShort, mapColors.relay),
          flag9 && v52)
        ) {
          let v2831 = v52.x - fn3Result14,
            v2832 = v52.z - fn4Result14,
            fn221Result3 = fn221(Math.atan2(v2831, -v2832));
          fn486(
            "TOUR",
            v52.shortName +
              " / " +
              Math.round(Math.hypot(v2831, v2832)) +
              "M " +
              fn400(fn221Result3.compass),
            mapColors.landmark,
          );
        }
        (fn486(
          "BEARING",
          String(Math.round(fn221Result.degrees)).padStart(3, "0") +
            " DEG / " +
            fn221Result.compass,
          sHsl13844,
        ),
          n533++,
          fn387("02::CITY_MAP // " + fn403Result.id + " // M MODE", 1, n533++, sHsl13852, max253),
          fn485());
        let fn412Result = fn412(
          Math.max(17, Math.min(fn403Result.widthCap || 33, max253 - 4)),
          fn403Result,
        );
        (fn387("  NORTH ^", 1, n533++, sHsl13835, max253),
          (n533 = (function (arg1817, arg1818, arg1819, arg1820) {
            for (let n534 = 0; n534 < arg1817.rows.length; n534++) {
              fn386("│", 1 * round, (arg1819 + n534) * round2, arg1820);
              let v2833 = arg1817.rows[n534];
              for (let n535 = 0; n535 < v2833.length; n535++)
                fn386(
                  v2833[n535].ch,
                  (3 + n535) * round,
                  (arg1819 + n534) * round2,
                  v2833[n535].color,
                );
              fn386("│", (4 + arg1817.width) * round, (arg1819 + n534) * round2, arg1820);
            }
            return arg1819 + arg1817.rows.length;
          })(fn412Result, 0, n533, sHsl13835)),
          "DISTRICT" === fn403Result.id &&
            (n533 = (function (arg1821, arg1822, arg1823, arg1824, arg1825) {
              if (!arg1821.neighbours) return arg1823;
              let neighbours = arg1821.neighbours;
              return (
                fn387(
                  ("  N " + neighbours.north.name + "   S " + neighbours.south.name).slice(
                    0,
                    arg1825,
                  ),
                  1,
                  arg1823++,
                  arg1824,
                  arg1825,
                ),
                fn387(
                  ("  W " + neighbours.west.name + "   E " + neighbours.east.name).slice(
                    0,
                    arg1825,
                  ),
                  1,
                  arg1823++,
                  arg1824,
                  arg1825,
                ),
                arg1823
              );
            })(fn412Result, 0, n533, sHsl13835, max253)),
          "SECTOR" === fn403Result.id &&
            fn412Result.currentSector &&
            fn387(
              ("  SECTOR " + fn412Result.currentSector.name + " / 16 DISTRICTS").slice(0, max253),
              1,
              n533++,
              sHsl13835,
              max253,
            ),
          "LOCAL" === fn403Result.id
            ? fn387("  ^ YOU  R PHONE  * LANDMARK", 1, n533++, sHsl13835, max253)
            : "DISTRICT" === fn403Result.id
              ? fn387("  @ YOU  R PHONE  * LANDMARK", 1, n533++, sHsl13835, max253)
              : "SECTOR" === fn403Result.id
                ? fn387(
                    "  @ YOU  *+CODE LANDMARK  P PARK  COLOUR=DISTRICT",
                    1,
                    n533++,
                    sHsl13835,
                    max253,
                  )
                : fn387(
                    "  @ YOU  *+CODE LANDMARK  P PARK  COLOUR=SECTOR",
                    1,
                    n533++,
                    sHsl13835,
                    max253,
                  ),
          fn387("  " + fn403Result.legend, 1, n533++, sHsl13835, max253));
      } else
        (fn486("SECTOR", elUiSector.textContent, sHsl13890),
          fn486("WORLD", fn3Result14.toFixed(2) + " / " + fn4Result14.toFixed(2), sHsl13844),
          fn486(
            "BEARING",
            String(Math.round(fn221Result.degrees)).padStart(3, "0") +
              " DEG / " +
              fn221Result.compass,
            sHsl13890,
          ),
          fn486("ZONE", elUiZone.textContent, sHsl13844));
      if (
        ((n533 += 1),
        fn387(
          ("city" === zone ? "03::KEYS" : "02::KEYS") + " // WASD/ARROWS MOVE // E USE",
          1,
          n533++,
          sHsl13852,
          max253,
        ),
        fn387("    SHIFT RUN // M MAP // T TOUR // P POP", 1, n533++, sHsl13844, max253),
        fn387("    R RAIN // G ASCII // MOUSE LOOK", 1, n533++, sHsl13835, max253),
        !elContextPanel.hidden)
      ) {
        ((n533 += 2),
          fn485(),
          fn387(
            "city" === zone ? "04::LOCAL_CONTEXT" : "03::LOCAL_CONTEXT",
            1,
            n533++,
            sHsl13852,
            max253,
          ),
          fn387("> " + String(elUiContextTitle.textContent || ""), 1, n533++, sHsl13890, max253));
        for (let v2834 of (function (arg1826, arg1827) {
          let split3 = String(arg1826 || "")
              .replace(/\s+/g, " ")
              .trim()
              .split(" "),
            arr182 = [],
            s20 = "";
          for (let v2835 of split3) {
            let v2836 = s20 ? s20 + " " + v2835 : v2835;
            v2836.length > arg1827 && s20 ? (arr182.push(s20), (s20 = v2835)) : (s20 = v2836);
          }
          return (s20 && arr182.push(s20), arr182);
        })(elUiContextCopy.textContent || "", max253 - 3).slice(0, 9))
          fn387("  " + v2834, 1, n533++, sHsl13844, max253);
        if (!elUiContextChoices.hidden)
          for (let v2837 of String(elUiContextChoices.textContent || "")
            .split("\n")
            .slice(0, 6))
            fn387("  " + v2837, 1, n533++, sHsl13852, max253);
      }
    })(arg1768),
      fn2("ui", now9),
      (function (arg1828) {
        float64Array[freeze4.cpuFrame] = performance.now() - arg1828;
        for (let n536 = 0; n536 < freeze3.length; n536++) from[n536][v5] = float64Array[n536];
        ((v5 = (v5 + 1) % n), n2 < n && n2++);
      })(now8),
      requestAnimationFrame(v2494));
  }),
    (window.game = Object.freeze({
      release: Object.freeze({
        name: "Prototype 2",
        skyTaxiEnabled: false,
        developerTools: false,
        frontierBase: "117a",
      }),
    })),
    "function" != typeof window.__CCTV_SCENE_TIME_SET__ &&
      ((window.__CCTV_SCENE_TIME_SET__ = (arg1829) => {
        n70 = arg1829;
      }),
      (window.__CCTV_TICK_FIRES__ = () => {
        (classifyPopulation(), runNearPopulationAI());
      }),
      (window.__CCTV_PACES__ = (arg1830) => {
        (fn87(arg1830, nearCars), fn87(arg1830, farCars));
      }),
      (window.__CCTV_BACKGROUND__ = (arg1831) => {
        runFarPopulationAI(arg1831);
      }),
      (window.__CCTV_RECYCLE__ = (arg1832) => {
        ((arg1832 % 5) + 5) % 5 == 0 && "city" === zone && fn92(false);
      }),
      (window.__CCTV_AERIAL__ = (arg1833) => {
        "city" === zone && fn298(arg1833);
      }),
      (window.__CCTV_AERIAL_SEED__ = (arg1834) => {
        let v2838 = ((arg1834 % 2147483647) + 2147483647) % 2147483647;
        for (let v2839 of from8) ((v2839.cycle = v2838 + 7 * v2839.id - 1), fn296(v2839, true));
        for (let v2840 of from9)
          ((v2840.cycle = v2838 + 1048576 + 11 * v2840.id - 1), fn297(v2840, true));
      }),
      (window.__CCTV_RESET__ = (arg1835, arg1836) => {
        n67++;
        for (let n537 = 0; n537 < pedestrians.length; n537++)
          (fn62(pedestrians[n537], n537, arg1835, arg1836), (pedestrians[n537]._id = n537));
        for (let n538 = 0; n538 < cars.length; n538++) {
          let v2841 = cars[n538];
          ((v2841.x = -10000 - 47 * n538),
            (v2841.z = -10000 - 47 * n538),
            (v2841.hx = 0),
            (v2841.hz = 0),
            (v2841.vehicleType = fn70(hash2(409 * n538 + 71, 613 * n538 + 97))),
            (v2841.kind = 5),
            (v2841._depth = 0),
            (v2841._col = 0),
            (v2841._trafficPace = 1),
            (v2841._trafficTarget = 1),
            (v2841._cyclistFiltering = false),
            (v2841._turnSerial = 0),
            (v2841._turnChoiceKey = ""),
            (v2841._turnIntent = "straight"),
            (v2841._occupantGeneration = 0),
            (v2841.parkTurn = 4 & n538 ? 1 : -1),
            (v2841._boxBlocked = false),
            (v2841._signalState = 0),
            (v2841._signalDistance = 0),
            (v2841._id = n538));
        }
        for (let n539 = 0; n539 < cars.length; n539++) fn91(cars[n539], n539, arg1835, arg1836);
        for (let v2842 of cars) fn83(v2842);
      })),
    (() => {
      if (window.__CCTV_ACTIVE__) return;
      function fn487(...arg1837) {
        window.__CCTV_DEBUG__ && console.log("[CCTV]", ...arg1837);
      }
      window.__CCTV_ACTIVE__ = true;
      let uRLSearchParams = new URLSearchParams(location.search);
      window.__CCTV_DEBUG__ = "1" === uRLSearchParams.get("cctvDebug");
      let v2843 = "1" === uRLSearchParams.get("local"),
        v2844 = (() => {
          let get22 = uRLSearchParams.get("cctvTime");
          if (!get22) return null;
          let v2862 = /^\d+$/.test(get22) ? Number(get22) : Date.parse(get22);
          return Number.isFinite(v2862) ? v2862 : null;
        })(),
        v2845 = (() => {
          let get23 = uRLSearchParams.get("cctvSkew"),
            v2863 = get23 ? Number(get23) : NaN;
          return Number.isFinite(v2863) ? v2863 : 0;
        })(),
        v2846 = v2845,
        flag42 = false;
      function fn488() {
        return v2844 ?? Date.now() + v2846;
      }
      async function fn489() {
        if (null != v2844 || v2845) flag42 = true;
        else
          try {
            let now13 = Date.now(),
              get24 = (
                await fetch(location.href, {
                  method: "HEAD",
                  cache: "no-store",
                })
              ).headers.get("date");
            if (!get24) return;
            let v2864 = Date.parse(get24) + Math.round((Date.now() - now13) / 2);
            Number.isFinite(v2864) &&
              ((v2846 = v2864 - Date.now()),
              (flag42 = true),
              fn487("clock anchored, skew", (v2846 >= 0 ? "+" : "") + v2846 + "ms"));
          } catch (err2) {
            fn487(
              "clock anchor unavailable, using local clock:",
              String((err2 && err2.message) || err2),
            );
          }
      }
      setInterval(fn489, 3600000);
      let n540 = 50,
        n541 = 40000,
        n542 = 0,
        n543 = 0,
        flag43 = false,
        flag44 = false,
        n544 = 0,
        n545 = 0,
        v2847 = -1,
        v2848 = -1,
        n546 = 0,
        flag45 = false,
        n547 = 0,
        n548 = 0,
        n549 = 0,
        v2849 = null;
      function fn490(arg1838) {
        ("function" == typeof window.__CCTV_SCENE_TIME_SET__ &&
          window.__CCTV_SCENE_TIME_SET__((arg1838 * n540) / 1000),
          "function" == typeof window.__CCTV_TICK_FIRES__ && window.__CCTV_TICK_FIRES__(arg1838));
        for (let n556 = 0; n556 < nearPedestrians.length; n556++)
          stepPedestrian(nearPedestrians[n556], 0.05);
        for (let n557 = 0; n557 < nearCars.length; n557++)
          stepCar(nearCars[n557], 0.05, true, nearCars);
        ("function" == typeof window.__CCTV_PACES__ && window.__CCTV_PACES__(0.05),
          "function" == typeof window.__CCTV_BACKGROUND__ && window.__CCTV_BACKGROUND__(0.05),
          "function" == typeof window.__CCTV_RECYCLE__ && window.__CCTV_RECYCLE__(arg1838),
          "function" == typeof window.__CCTV_AERIAL__ && window.__CCTV_AERIAL__(0.05),
          v2849 && v2849(arg1838));
      }
      ((window.__CCTV_SET_TRACE__ = (arg1839) => {
        v2849 = "function" == typeof arg1839 ? arg1839 : null;
      }),
        (window.__CCTV_FRAME_BEGIN__ = () => {
          if (v2843 || null != v2844) return ((n543 = 0), void (flag43 = false));
          let floor88 = Math.floor(fn488() / n540),
            v2865 = v2847 >= 0 ? v2847 : null,
            v2866 = null == v2865 ? 1 : floor88 - v2865;
          (v2866 < 0 && (v2866 = 0),
            null != v2865 &&
              !flag44 &&
              0 === n544 &&
              v2866 > 300 &&
              (fn487("re-deriving cast after", (v2866 * n540) / 1000 + "s", "of stalled frames"),
              (n544 = 0),
              (v2847 = n545 - 1),
              (flag44 = true),
              fn499()),
            (n543 = Math.min(v2866, 6)),
            (flag43 = flag44),
            (flag44 = false));
        }),
        (window.__CCTV_SCENE_TIME__ = () =>
          v2843 || null != v2844
            ? performance.now() / 1000
            : (Math.floor(fn488() / n540) * n540) / 1000),
        (window.__CCTV_SIM_TICKS__ = () => {
          if (v2843 || null != v2844) return void fn490(++n542);
          let now14 = performance.now();
          if (flag43 && v2848 >= 0) {
            let floor89 = Math.floor(fn488() / n540),
              v2867 = floor89 - n545;
            (v2867 >= 0 || (v2867 = 0),
              v2867 > n541 && ((n545 = floor89 - n541), (v2867 = n541)),
              (v2847 = n545 - 1),
              "function" == typeof window.__CCTV_AERIAL_SEED__ &&
                window.__CCTV_AERIAL_SEED__(v2852 ? v2852.slot : 0),
              "function" == typeof window.__CCTV_RESET__ && window.__CCTV_RESET__(view.x, view.z),
              (n544 = v2867),
              (n548 = v2867),
              (n547 = 0),
              (n549 = now14),
              (flag43 = false),
              fn487("cast replay armed", v2867, "ticks (cast", v2848 + ")"));
          }
          if (n544 > 0) {
            let min103 = Math.min(250, n544);
            for (let n558 = 0; n558 < min103; n558++) fn490(++v2847);
            return (
              (n544 -= min103),
              void (
                0 === n544 &&
                ((n546 = n545 * n540),
                (flag45 = true),
                (n547 = Math.round(performance.now() - n549)),
                fn487("cast replayed", n548, "ticks in", n547, "ms"))
              )
            );
          }
          for (let n559 = 0; n559 < n543; n559++) fn490(++v2847);
        }),
        (window.__CCTV_STEP__ = (arg1840, arg1841, arg1842) => {
          if ("function" == typeof arg1841 && arg1840) {
            if (v2843 || null != v2844) return void (arg1842 > 0 && arg1841(arg1840, arg1842));
            for (let n560 = 0; n560 < n543; n560++) arg1841(arg1840, 0.05);
          }
        }),
        (window.__CCTV_DECISION__ = (arg1843, arg1844) =>
          hash2(
            (613 * (0 | (arg1843 && arg1843._id)) + 31) | 0,
            (7 * Math.floor(arg1844) + 13) | 0,
          )),
        (window.__CCTV_TICK_SERIAL__ = (arg1845) => (v2843 || null != v2844 ? arg1845 + 1 : v2848)),
        (window.__CCTV_POP_SNAPSHOT__ = () => {
          let fn513 = (arg1846) =>
              arg1846.map((arg1847) => [
                Math.round(1000 * (arg1847.x || 0)) / 1000,
                Math.round(1000 * (arg1847.z || 0)) / 1000,
                Math.round(1000 * (arg1847.hx || 0)) / 1000,
                Math.round(1000 * (arg1847.hz || 0)) / 1000,
                Math.round(1000 * (arg1847.speed || 0)) / 1000,
                Math.round(((arg1847.phase || 0) % 628) * 1000) / 1000,
                arg1847.color || 0,
                arg1847.body || "",
                arg1847.vehicleType || "",
                arg1847.crossing ? 1 : 0,
                arg1847.waitingCross ? 1 : 0,
                Math.round(
                  ((undefined === arg1847._trafficPace ? 1 : arg1847._trafficPace) % 97) * 1000,
                ) / 1000,
                arg1847._lastJunction || "",
                arg1847._signalState || 0,
                Math.round(1000 * (arg1847._signalDistance || 0)) / 1000,
                arg1847._turnSerial || 0,
                arg1847._turnIntent || "",
                arg1847._turnChoiceKey || "",
                arg1847.parkTurn || 0,
                arg1847._boxBlocked ? 1 : 0,
                arg1847.kind || 0,
                arg1847._occupantGeneration || 0,
              ]),
            fn514 = (arg1848) =>
              arg1848.map((arg1849) => [
                Math.round(1000 * (arg1849.x || 0)) / 1000,
                Math.round(1000 * (arg1849.z || 0)) / 1000,
                Math.round(1000 * (arg1849.hx || 0)) / 1000,
                Math.round(1000 * (arg1849.hz || 0)) / 1000,
                Math.round(1000 * (arg1849.y || 0)) / 1000,
                Math.round(1000 * (arg1849.speed || 0)) / 1000,
                Math.round(arg1849.hue || 0),
                Math.round(arg1849.span || 0),
                arg1849.cycle || 0,
              ]);
          return {
            sceneTime: Math.round(1000 * window.__CCTV_SCENE_TIME__()) / 1000,
            tick: v2847,
            castSerial: v2848,
            castStartMs: n546,
            castReady: flag45,
            castVersion: 6,
            npcs: fn513(pedestrians),
            cars: fn513(cars),
            aerialCars: fn514(from8),
            aerialGhosts: fn514(from9),
          };
        }),
        (window.__CCTV_ALIGN_CAST__ = (arg1850, arg1851) => {
          if (
            ((arg1850 = Math.max(0, Math.floor(Number(arg1850) || 0))),
            (arg1851 = Math.max(0, Math.floor(Number(arg1851) || 0))),
            (!v2852 || v2852.slot !== arg1850) && window.__CCTV_GOTO__(arg1850),
            v2852 && v2852.slot === arg1850)
          ) {
            ((n544 = 0),
              "function" == typeof window.__CCTV_AERIAL_SEED__ &&
                window.__CCTV_AERIAL_SEED__(v2852.slot),
              "function" == typeof window.__CCTV_RESET__ && window.__CCTV_RESET__(view.x, view.z),
              (v2847 = n545 - 1));
            let max259 = Math.max(arg1851, n545);
            for (let v2868 = v2847 + 1; v2868 <= max259; v2868++) fn490(v2868);
            ((v2847 = max259), (flag45 = true));
          }
          return window.__CCTV_POP_SNAPSHOT__();
        }));
      let n550 = 7331,
        v2850 = n10,
        v2851 = null,
        s21 = "",
        n551 = 0;
      function fn491() {
        let v2869 = (function (arg1852) {
          return new Date(arg1852).toISOString().slice(0, 10);
        })(fn488());
        if (!v2851 || v2869 !== s21) {
          s21 = v2869;
          let v2870 = Number(v2869.replaceAll("-", "")) % 999983;
          ((n551 =
            (4294967296 * hash2(131 * v2870 + 17 * n550, 977 * n550 + 101 * v2869.length)) | 0),
            (v2851 = (function (arg1853, arg1854) {
              let v2871 = 0 | arg1854 || 1,
                fn515 = () => {
                  v2871 = (v2871 + 1831565813) >>> 0;
                  let v2872 = v2871;
                  return (
                    (v2872 = Math.imul(v2872 ^ (v2872 >>> 15), 1 | v2872)),
                    (v2872 ^= v2872 + Math.imul(v2872 ^ (v2872 >>> 7), 61 | v2872)),
                    ((v2872 ^ (v2872 >>> 14)) >>> 0) / 4294967296
                  );
                },
                slice4 = arg1853.slice();
              for (let v2873 = slice4.length - 1; v2873 > 0; v2873--) {
                let floor90 = Math.floor(fn515() * (v2873 + 1)),
                  v2874 = slice4[v2873];
                ((slice4[v2873] = slice4[floor90]), (slice4[floor90] = v2874));
              }
              return slice4;
            })(
              (function () {
                let ceil6 = Math.ceil(16),
                  arr186 = [];
                for (let n561 = 0; n561 < ceil6; n561++)
                  for (let n562 = 0; n562 < ceil6; n562++) {
                    let v2875 = (n562 + 0.5) * n13,
                      v2876 = (n561 + 0.5) * n13,
                      fn8Result2 = fn8(v2875, v2876);
                    fn18(v2875, v2876, 281.6) ||
                      v2875 < 700 ||
                      v2876 < 700 ||
                      v2875 > 7492 ||
                      v2876 > 7492 ||
                      arr186.push({
                        type: fn8Result2.type,
                        districtX: n562,
                        districtZ: n561,
                        x: v2875,
                        z: v2876,
                      });
                  }
                return arr186;
              })(),
              n551,
            )),
            fn487("tour built for", v2869, "-", v2851.length, "districts, seed", n551 >>> 0));
        }
        return v2851;
      }
      let n552 = 1.25;
      function fn492(arg1855) {
        return (
          0 === arg1855 ||
          1 === arg1855 ||
          2 === arg1855 ||
          3 === arg1855 ||
          5 === arg1855 ||
          6 === arg1855
        );
      }
      function fn493(arg1856, arg1857, arg1858) {
        for (let v2877 of [-0.35, -0.18, 0, 0.18, 0.35]) {
          let v2878 = arg1858 + v2877,
            sin21 = Math.sin(v2878),
            v2879 = -Math.cos(v2878),
            n563 = 64;
          for (let v2880 = n552; v2880 <= 44; v2880 += n552) {
            let v2881 = (arg1856 + sin21 * v2880) | 0,
              v2882 = (arg1857 + v2879 * v2880) | 0;
            if (v2881 < 0 || v2882 < 0 || v2881 >= worldN || v2882 >= worldN) break;
            if (1 === uint8Array17[worldIndex(v2881, v2882)]) {
              n563 = v2880;
              break;
            }
          }
          if (n563 < 40) return false;
        }
        return true;
      }
      function fn494(arg1859, arg1860) {
        let v2883 = arg1859.x - recordedOriginX,
          v2884 = arg1859.z - recordedOriginZ,
          filter6 = (function (arg1861, arg1862, arg1863) {
            let arr187 = [];
            for (let n564 = 0; n564 < 12 && arr187.length < 26; n564++)
              for (let n565 = 0; n565 < 14; n565++) {
                let v2886 =
                    hash2(73 * n564 + 17 * n565 + 1013 * arg1863, 977 * arg1863 + 31) * Math.PI * 2,
                  v2887 =
                    14 + 2.6 * n564 + 2 * hash2(41 * n565 + 7 * arg1863, 313 * n564 + 11 * arg1863),
                  v2888 = arg1861 + Math.cos(v2886) * v2887,
                  v2889 = arg1862 + Math.sin(v2886) * v2887,
                  round51 = Math.round(v2888),
                  round52 = Math.round(v2889);
                if (round51 < 4 || round52 < 4 || round51 > 508 || round52 > 508) continue;
                let fn24Result33 = worldIndex(round51, round52);
                if (
                  0 === uint8Array17[fn24Result33] &&
                  fn492(uint8Array18[fn24Result33]) &&
                  fn250(round51 + 0.5, round52 + 0.5) &&
                  (arr187.push({
                    x: round51 + 0.5,
                    z: round52 + 0.5,
                    yaw: Math.atan2(arg1861 - (round51 + 0.5), -(arg1862 - (round52 + 0.5))),
                  }),
                  arr187.length >= 26)
                )
                  break;
              }
            return arr187;
          })(v2883, v2884, arg1860)
            .filter(
              (arg1864) => arg1864.x > 3 && arg1864.z > 3 && arg1864.x < 509 && arg1864.z < 509,
            )
            .map((arg1865) =>
              (function (arg1866, arg1867, arg1868) {
                if (
                  !Number.isFinite(arg1866.yaw) ||
                  !Number.isFinite(arg1866.x) ||
                  !Number.isFinite(arg1866.z)
                )
                  return null;
                let atan24 = Math.atan2(Math.sin(arg1866.yaw), Math.cos(arg1866.yaw)),
                  v2890 = atan24,
                  sVISTA = "VISTA";
                if (fn493(arg1866.x, arg1866.z, atan24)) sVISTA = "STREET";
                else if (null != arg1867) {
                  let atan25 = Math.atan2(arg1867 - arg1866.x, -(arg1868 - arg1866.z));
                  fn493(arg1866.x, arg1866.z, atan25) && ((v2890 = atan25), (sVISTA = "ANCHOR"));
                }
                let v2891 = (function (arg1869, arg1870, arg1871) {
                    let n566 = 0,
                      n567 = 0;
                    for (let v2893 = -4; v2893 <= 4; v2893++) {
                      let v2894 = arg1871 + (v2893 / 4) * 0.63,
                        sin22 = Math.sin(v2894),
                        v2895 = -Math.cos(v2894),
                        n568 = 64;
                      for (let v2896 = n552; v2896 <= 60; v2896 += n552) {
                        let v2897 = (arg1869 + sin22 * v2896) | 0,
                          v2898 = (arg1870 + v2895 * v2896) | 0;
                        if (v2897 < 0 || v2898 < 0 || v2897 >= worldN || v2898 >= worldN) break;
                        if (1 === uint8Array17[worldIndex(v2897, v2898)]) {
                          n568 = v2896;
                          break;
                        }
                      }
                      ((n566 += n568), n567++);
                    }
                    return {
                      sum: n566,
                      mean: n566 / n567,
                    };
                  })(arg1866.x, arg1866.z, v2890),
                  v2892 = v2891.sum + 20 * Math.min(4, v2891.mean / 60);
                return {
                  ...arg1866,
                  yaw: v2890,
                  mode: sVISTA,
                  raySum: v2891.sum,
                  rayMean: v2891.mean,
                  score: v2892,
                };
              })(arg1865, v2883, v2884),
            )
            .filter(Boolean),
          filter7 = filter6.filter((arg1872) => arg1872.score >= 190 && arg1872.rayMean >= 18),
          flag48 = false;
        if (
          (filter7.length ||
            ((filter7 = filter6.filter((arg1873) => arg1873.score >= 120 && arg1873.rayMean >= 10)),
            (flag48 = true)),
          filter7.length)
        ) {
          let v2899 = filter7[0];
          for (let v2900 of filter7) v2900.score > v2899.score && (v2899 = v2900);
          return {
            x: v2899.x,
            z: v2899.z,
            yaw: v2899.yaw,
            pitch: 0.015 + 0.045 * hash2(arg1860, 913),
            mode: flag48 ? "FALLBACK" : v2899.mode,
            raySum: Math.round(v2899.raySum),
            elevated: false,
            hold: null,
          };
        }
        let v2885 = (function (arg1874, arg1875 = 9) {
          let arr188 = [
            0,
            Math.PI / 2,
            Math.PI,
            -Math.PI / 2,
            Math.PI / 4,
            -Math.PI / 4,
            (3 * Math.PI) / 4,
            (3 * -Math.PI) / 4,
          ];
          for (let v2901 of [arg1875, arg1875 + 3, arg1875 + 6, arg1875 + 9])
            for (let v2902 of arr188) {
              let v2903 = arg1874.x + Math.cos(v2902) * v2901,
                v2904 = arg1874.z + Math.sin(v2902) * v2901;
              if (v2903 < 2 || v2904 < 2 || v2903 > 510 || v2904 > 510) continue;
              let fn24Result34 = worldIndex(0 | v2903, 0 | v2904),
                v2905 = uint8Array18[fn24Result34];
              if (
                0 === uint8Array17[fn24Result34] &&
                4 !== v2905 &&
                0 !== v2905 &&
                fn124(v2903, v2904, 0.3)
              )
                return {
                  x: v2903,
                  z: v2904,
                  surface: v2905,
                  yaw: Math.atan2(arg1874.x - v2903, -(arg1874.z - v2904)),
                };
            }
          let fn238Result = fn238(arg1874.x + arg1875, arg1874.z + arg1875);
          return {
            ...fn238Result,
            yaw: Math.atan2(arg1874.x - fn238Result.x, -(arg1874.z - fn238Result.z)),
          };
        })(
          {
            x: v2883,
            z: v2884,
          },
          12,
        );
        return {
          x: v2885.x,
          z: v2885.z,
          yaw: v2885.yaw,
          pitch: 0.06,
          mode: "GROUND",
          raySum: 0,
          elevated: false,
          hold: null,
        };
      }
      let max256 = Math.max(
          8000,
          1000 * (parseFloat(uRLSearchParams.get("cctvDwell")) || 0) || 32000,
        ),
        max257 = Math.max(5000, 1000 * (parseFloat(uRLSearchParams.get("cctvMin")) || 0) || 26000),
        max258 = Math.max(
          max257 + 1000,
          1000 * (parseFloat(uRLSearchParams.get("cctvMax")) || 0) || 40000,
        ),
        v2852 = null,
        flag46 = true,
        v2853 = -1,
        v2854 = null,
        v2855 = null,
        floor87 = Math.floor(7 * Math.random()),
        v2856 = 1 + (Date.now() % 9973);
      function fn495() {
        return Math.floor(fn488() / max256);
      }
      function fn496(arg1876, arg1877, arg1878) {
        ((v2848 =
          v2857 >= 0
            ? (function (arg1879) {
                return 1 + ((2097151 * hash2(1 + (0 | arg1879), 8344)) | 0);
              })(v2857)
            : v2848 + 1),
          (n67 = v2848),
          (n545 = v2857 >= 0 ? Math.floor((v2857 * max256) / n540) : Math.floor(fn488() / n540)),
          (v2847 = n545 - 1),
          (flag45 = false),
          (flag44 = true),
          fn222(arg1876.x, arg1876.z));
        let fn494Result = fn494(arg1876, arg1877);
        if (
          !(function (arg1880) {
            return [arg1880.x, arg1880.z, arg1880.yaw, arg1880.pitch].every((arg1881) =>
              Number.isFinite(arg1881),
            );
          })(fn494Result)
        )
          return (fn487("tune rejected non-finite placement", arg1878), false);
        ((view.x = fn494Result.x),
          (view.z = fn494Result.z),
          (view.yaw = fn494Result.yaw),
          (view.pitch = fn494Result.pitch),
          resetLookFromView());
        let v2906 =
          v2857 >= 0 && v2851 && v2851.length
            ? (((v2857 % v2851.length) + v2851.length) % v2851.length) + 1
            : ++n553;
        return (
          (v2852 = {
            type: arg1876.type,
            anchorX: arg1876.x,
            anchorZ: arg1876.z,
            placement: fn494Result,
            since: performance.now(),
            serial: v2906,
            slot: v2857,
          }),
          (v2853 = v2857),
          fn505(),
          fn487(
            "tuned",
            arg1878,
            toWorldX(view.x).toFixed(0),
            toWorldZ(view.z).toFixed(0),
            fn494Result.mode,
            "rays",
            fn494Result.raySum,
          ),
          true
        );
      }
      let v2857 = -1,
        n553 = 0;
      function fn497() {
        if ((v2854 && (clearTimeout(v2854), (v2854 = null)), !flag46)) return;
        let fn488Result = fn488(),
          floor91 = Math.floor(fn488Result / max256),
          max260 = Math.max(250, (floor91 + 1) * max256 - fn488Result + 60);
        v2854 = setTimeout(() => {
          ((v2854 = null),
            fn498(fn495(), {
              cut: true,
            }));
        }, max260);
      }
      function fn498(arg1882, arg1883) {
        if (fn491().length) {
          if (arg1882 !== v2853) {
            let v2907 = (function (arg1884) {
              let fn491Result = fn491(),
                v2908 =
                  fn491Result[
                    ((arg1884 % fn491Result.length) + fn491Result.length) % fn491Result.length
                  ];
              return {
                type: v2908.type,
                districtX: v2908.districtX,
                districtZ: v2908.districtZ,
                x: v2908.x,
                z: v2908.z,
                salt: 1 + ((99991 * hash2(arg1884 + 1, 7732)) | 0),
              };
            })(arg1882);
            v2857 = arg1882;
            try {
              if (!fn496(v2907, v2907.salt, "slot " + arg1882)) return ((v2857 = -1), void fn497());
            } catch (err3) {
              return (
                (v2857 = -1),
                fn487("cut failed", String((err3 && err3.message) || err3)),
                void fn497()
              );
            }
            ((v2857 = -1), arg1883 && arg1883.cut && fn499());
          }
          fn497();
        }
      }
      function fn499() {
        obj60.flash &&
          (obj60.flash.classList.remove("cctv-flash-run"),
          obj60.flash.offsetWidth,
          obj60.flash.classList.add("cctv-flash-run"),
          "function" == typeof window.cctvAudioCutSfx && window.cctvAudioCutSfx());
      }
      let arr183 = [
        "PARKLAND",
        "OLD_TOWN",
        "RESIDENTIAL",
        "INDUSTRIAL",
        "COMMERCIAL",
        "TOWER_ESTATE",
        "MIXED",
      ];
      function fn500(arg1885, arg1886) {
        arg1885 = String(arg1885 || "").toUpperCase();
        let ceil7 = Math.ceil(16),
          v2909 = freeze29[arg1885] || 2500,
          v2910 = null,
          v2911 = 1 / 0;
        for (let n569 = 0; n569 < ceil7; n569++)
          for (let n570 = 0; n570 < ceil7; n570++) {
            let v2912 = (n570 + 0.5) * n13,
              v2913 = (n569 + 0.5) * n13;
            if (fn8(v2912, v2913).type !== arg1885 || fn18(v2912, v2913, 281.6)) continue;
            let hypot21 = Math.hypot(v2912 - 4096, v2913 - 4096),
              v2914 = v2912 < 700 || v2913 < 700 || v2912 > 7492 || v2913 > 7492 ? 500 : 0,
              v2915 =
                24 * hash2(701 * n570 + 1709 + 131 * arg1886, 709 * n569 + 1901 + 57 * arg1886),
              v2916 = Math.abs(hypot21 - v2909) + v2914 + v2915;
            v2916 < v2911 &&
              ((v2911 = v2916),
              (v2910 = {
                type: arg1885,
                districtX: n570,
                districtZ: n569,
                x: v2912,
                z: v2913,
              }));
          }
        return v2910;
      }
      function fn501() {
        let v2917 = (function () {
            for (let n571 = 0; n571 < arr183.length; n571++)
              if (
                ((floor87 = (floor87 + 1) % arr183.length),
                arr183[floor87] !== (v2852 && v2852.type))
              )
                return arr183[floor87];
            return arr183[floor87];
          })(),
          v2918 = ++v2856,
          v2919 = null;
        for (let n572 = 0; n572 < 8 && !v2919; n572++) v2919 = fn500(v2917, 17 * v2918 + 5 * n572);
        (v2919 || (v2919 = fn500("MIXED", v2918) || fn500("RESIDENTIAL", v2918)),
          v2919
            ? ((v2857 = -1), fn496(v2919, v2918, "local " + v2917) && fn499(), fn502())
            : fn502(8000));
      }
      function fn502(arg1887) {
        if ((v2855 && (clearTimeout(v2855), (v2855 = null)), !flag46)) return;
        let max261 = Math.max(0, max258 - max257),
          v2920 = arg1887 || max257 + Math.random() * max261;
        v2855 = setTimeout(() => {
          ((v2855 = null), fn501());
        }, v2920);
      }
      function fn503(arg1888) {
        return (
          (flag46 = !!arg1888),
          v2843
            ? flag46
              ? fn502()
              : v2855 && (clearTimeout(v2855), (v2855 = null))
            : flag46
              ? fn498(fn495(), {
                  cut: true,
                })
              : v2854 && (clearTimeout(v2854), (v2854 = null)),
          fn505(),
          fn487("rotation", flag46 ? (v2843 ? "AUTO" : "SYNCED") : "HOLD"),
          flag46
        );
      }
      setInterval(() => {
        v2852 &&
          (view.yaw !== v2852.placement.yaw || view.pitch !== v2852.placement.pitch) &&
          ((view.yaw = v2852.placement.yaw),
          (view.pitch = v2852.placement.pitch),
          resetLookFromView());
      }, 66);
      let arr184 = [
          "cctv-panel",
          "cctv-feed-label",
          "cctv-panel-street",
          "cctv-panel-subline",
          "cctv-utc",
          "cctv-static",
          "cctv-flash",
          "cctv-credits",
          "cctv-stage",
          "cctv-sound",
          "cctv-audio",
        ],
        obj60 = {};
      for (let v2921 of arr184)
        obj60[
          v2921
            .replace(/^cctv-/, "")
            .replace(/-([a-z0-9])/g, (arg1889, arg1890) => arg1890.toUpperCase())
        ] = document.getElementById(v2921);
      function fn504(arg1891) {
        return String(arg1891 || "")
          .replace(/\s+/g, " ")
          .trim()
          .toUpperCase();
      }
      function fn505() {
        if (obj60.panel && v2852)
          try {
            let fn3Result15 = toWorldX(view.x),
              fn4Result15 = toWorldZ(view.z),
              fn398Result4 = fn398(),
              fn390Result8 = fn390(fn3Result15, fn4Result15),
              fn151Result2 = fn151(fn3Result15, fn4Result15);
            if (
              (obj60.feedLabel &&
                (obj60.feedLabel.textContent = "FEED " + String(v2852.serial).padStart(3, "0")),
              obj60.panelStreet && (obj60.panelStreet.textContent = fn504(fn398Result4.location)),
              obj60.panelSubline)
            ) {
              let filter8 = [fn390Result8 && fn390Result8.name, fn151Result2 && fn151Result2.name]
                .map((arg1892) => fn504(arg1892))
                .filter(Boolean);
              ((obj60.panelSubline.textContent = filter8.join(" · ") || "—"),
                obj60.panelSubline.classList.toggle("cctv-degraded", filter8.length < 2));
            }
            !(function () {
              if (!v2859 || !v2852) return;
              v2860 = {
                wx: toWorldX(view.x),
                wz: toWorldZ(view.z),
                yaw: view.yaw,
              };
              let v2922 = s21 + ":" + v2852.slot;
              ((!arr185.length || arr185[arr185.length - 1].key !== v2922) &&
                (arr185.push({
                  key: v2922,
                  wx: v2860.wx,
                  wz: v2860.wz,
                }),
                arr185.length > n555 && arr185.shift()),
                (function () {
                  if (!v2859) return;
                  let v2923 = v2859;
                  fn507();
                  let length6 = arr185.length;
                  for (let n573 = 0; n573 < length6; n573++) {
                    let v2924 = arr185[n573];
                    ((v2923.fillStyle =
                      "rgba(183,255,208," + (0.22 + (0.5 * (n573 + 1)) / length6).toFixed(3) + ")"),
                      v2923.beginPath(),
                      v2923.arc(
                        (v2924.wx / v2850) * n554,
                        (v2924.wz / v2850) * n554,
                        1.5,
                        0,
                        2 * Math.PI,
                      ),
                      v2923.fill());
                  }
                  if (v2860) {
                    let v2925 = (v2860.wx / v2850) * n554,
                      v2926 = (v2860.wz / v2850) * n554,
                      yaw5 = v2860.yaw,
                      n574 = 0.63,
                      n575 = 11;
                    ((v2923.fillStyle = "rgba(2,8,4,.55)"),
                      v2923.beginPath(),
                      v2923.arc(v2925, v2926, 7.5, 0, 2 * Math.PI),
                      v2923.fill(),
                      (v2923.fillStyle = "rgba(255,64,64,.62)"),
                      (v2923.strokeStyle = "rgba(10,2,2,.9)"),
                      (v2923.lineWidth = 1),
                      v2923.beginPath(),
                      v2923.moveTo(v2925, v2926),
                      v2923.lineTo(
                        v2925 + Math.sin(yaw5 - n574) * n575,
                        v2926 - Math.cos(yaw5 - n574) * n575,
                      ),
                      v2923.lineTo(
                        v2925 + Math.sin(yaw5 + n574) * n575,
                        v2926 - Math.cos(yaw5 + n574) * n575,
                      ),
                      v2923.closePath(),
                      v2923.fill(),
                      v2923.stroke(),
                      (v2923.fillStyle = "#041008"),
                      v2923.fillRect(v2925 - 2.5, v2926 - 2.5, 5, 5),
                      (v2923.fillStyle = "#ffffff"),
                      v2923.fillRect(v2925 - 1.5, v2926 - 1.5, 3, 3),
                      (v2923.strokeStyle = "#9dffc7"),
                      v2923.strokeRect(v2925 - 4.5, v2926 - 4.5, 9, 9));
                  }
                })());
            })();
          } catch (err4) {
            fn487("panel error", String((err4 && err4.message) || err4));
          }
      }
      setInterval(fn505, 250);
      let v2858 = -1;
      function fn506() {
        if (!obj60.utc) return;
        let floor92 = Math.floor(fn488() / 1000);
        floor92 !== v2858 &&
          ((v2858 = floor92),
          (obj60.utc.textContent =
            "LIVE · " +
            (function (arg1893) {
              let date = new Date(arg1893),
                fn516 = (arg1894) => String(arg1894).padStart(2, "0");
              return (
                fn516(date.getUTCHours()) +
                ":" +
                fn516(date.getUTCMinutes()) +
                ":" +
                fn516(date.getUTCSeconds())
              );
            })(fn488()) +
            " UTC"));
      }
      (setInterval(fn506, 250), fn506());
      let obj61 = {
          CORE: "#e8f6e9",
          INDUSTRIAL: "#c9a24a",
          OLD_TOWN: "#d07d5a",
          RESIDENTIAL: "#7fa7c9",
          COMMERCIAL: "#c9c05a",
          PARKLAND: "#4f9d58",
          TOWER_ESTATE: "#8a7fc9",
          MIXED: "#5a9d8f",
        },
        n554 = 128,
        ceil5 = Math.ceil(16),
        n555 = 32,
        elCctvMap = document.getElementById("cctv-map"),
        v2859 = elCctvMap ? elCctvMap.getContext("2d") : null,
        arr185 = [],
        v2860 = null;
      function fn507() {
        if (!v2859) return;
        let v2927 = v2859,
          v2928 = n554 / ceil5;
        ((v2927.fillStyle = "#010402"), v2927.fillRect(0, 0, n554, n554));
        for (let n576 = 0; n576 < ceil5; n576++)
          for (let n577 = 0; n577 < ceil5; n577++) {
            let fn8Result3 = fn8((n577 + 0.5) * n13, (n576 + 0.5) * n13);
            ((v2927.fillStyle = obj61[fn8Result3.type] || "#33503c"),
              v2927.fillRect(n577 * v2928, n576 * v2928, v2928, v2928));
          }
        let v2929 = n554 / v2850;
        ((v2927.strokeStyle = "rgba(255,255,255,.5)"),
          (v2927.lineWidth = 1),
          v2927.strokeRect(
            freeze9.x0 * v2929,
            freeze9.z0 * v2929,
            (freeze9.x1 - freeze9.x0) * v2929,
            (freeze9.z1 - freeze9.z0) * v2929,
          ),
          (v2927.strokeStyle = "rgba(0,0,0,.35)"));
        for (let n578 = 1; n578 < ceil5; n578++)
          (v2927.beginPath(),
            v2927.moveTo(n578 * v2928, 0),
            v2927.lineTo(n578 * v2928, n554),
            v2927.stroke(),
            v2927.beginPath(),
            v2927.moveTo(0, n578 * v2928),
            v2927.lineTo(n554, n578 * v2928),
            v2927.stroke());
      }
      function fn508(arg1895) {
        (arg1895.stopPropagation(), arg1895.preventDefault());
      }
      function fn509(arg1896) {
        let target3 = arg1896.target;
        return !(!target3 || "function" != typeof target3.closest || !target3.closest("#cctv-vol"));
      }
      function fn510(arg1897) {
        (arg1897.stopPropagation(), fn509(arg1897) || arg1897.preventDefault());
      }
      fn507();
      let set6 = new Set([
        "KeyW",
        "KeyA",
        "KeyS",
        "KeyD",
        "ArrowUp",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        "KeyR",
        "KeyT",
        "KeyG",
        "KeyM",
        "KeyP",
        "KeyE",
        "KeyQ",
        "KeyC",
        "KeyB",
        "KeyN",
        "Tab",
        "Space",
        "Enter",
        "Escape",
        "ShiftLeft",
        "ShiftRight",
        "ControlLeft",
        "ControlRight",
      ]);
      (addEventListener(
        "keydown",
        function (arg1898) {
          if ("KeyH" === arg1898.code)
            return (arg1898.repeat || ((flag47 = !flag47), fn512()), void fn508(arg1898));
          if ("KeyS" === arg1898.code)
            return (
              !arg1898.repeat &&
                "function" == typeof window.cctvAudioToggle &&
                window.cctvAudioToggle(),
              void fn508(arg1898)
            );
          if ("KeyG" !== arg1898.code) {
            if (set6.has(arg1898.code)) {
              if (fn509(arg1898) && arg1898.code.startsWith("Arrow"))
                return void arg1898.stopPropagation();
              fn508(arg1898);
            }
          } else {
            if (!arg1898.repeat)
              try {
                localStorage.setItem("ascii-city-cctv-glyphs", fn252(!glyphsEnabled) ? "1" : "0");
              } catch {}
            fn508(arg1898);
          }
        },
        {
          capture: true,
        },
      ),
        addEventListener("keyup", fn508, {
          capture: true,
        }),
        document.addEventListener("mousemove", fn510, {
          capture: true,
        }),
        addEventListener("pointerdown", fn510, {
          capture: true,
        }),
        addEventListener("pointerup", fn510, {
          capture: true,
        }),
        addEventListener("pointermove", fn510, {
          capture: true,
        }),
        addEventListener("mousedown", fn510, {
          capture: true,
        }),
        addEventListener("mouseup", fn510, {
          capture: true,
        }),
        addEventListener("wheel", fn508, {
          capture: true,
          passive: false,
        }),
        addEventListener("contextmenu", fn508, {
          capture: true,
        }),
        addEventListener("touchmove", fn510, {
          capture: true,
          passive: false,
        }));
      let v2861 = null;
      async function fn511() {
        try {
          navigator.wakeLock && !v2861 && (v2861 = await navigator.wakeLock.request("screen"));
        } catch (err5) {
          fn487("wake lock unavailable", String((err5 && err5.message) || err5));
        }
      }
      (fn511(),
        document.addEventListener("visibilitychange", () => {
          document.hidden ||
            (fn511(),
            fn489(),
            !v2843 &&
              flag46 &&
              fn498(fn495(), {
                cut: true,
              }));
        }),
        (document.body.style.overflow = "hidden"),
        "function" == typeof window.cctvAudioSetup && window.cctvAudioSetup());
      let flag47 = true;
      function fn512() {
        (document.body.classList.toggle("cctv-ui-hidden", !flag47),
          (document.body.style.cursor = flag47 ? "" : "none"));
      }
      ((window.__CCTV_STATE__ = () => ({
        active: !!v2852,
        mode: v2843 ? "local" : "synced",
        channel: v2852
          ? {
              type: v2852.type,
              serial: v2852.serial,
              slot: v2852.slot,
              tourIndex: v2851 ? ((v2852.slot % v2851.length) + v2851.length) % v2851.length : -1,
              worldX: Number(toWorldX(view.x).toFixed(2)),
              worldZ: Number(toWorldZ(view.z).toFixed(2)),
              mode: v2852.placement.mode,
              raySum: v2852.placement.raySum,
              yaw: Number(view.yaw.toFixed(3)),
              pitch: Number(view.pitch.toFixed(3)),
              zone: zone,
              introState: "string" == typeof PHASE_LIVE ? PHASE_LIVE : elCv.dataset.introState,
            }
          : null,
        utcMs: fn488(),
        anchored: flag42,
        clockOffsetMs: v2846,
        dwellMs: max256,
        tourDay: s21,
        tourSeed: n551 >>> 0,
        tourLength: v2851 ? v2851.length : 0,
        timerArmed: !!(v2843 ? v2855 : v2854),
        castDebtTicks: v2847 >= 0 ? Math.max(0, Math.floor(fn488() / n540) - v2847) : null,
        mapLive: v2860
          ? {
              ...v2860,
            }
          : null,
        mapTrail: arr185.length,
        sim: {
          beat: v2843 || null != v2844 ? "local" : "synced",
          sceneTime:
            "function" == typeof window.__CCTV_SCENE_TIME__
              ? Math.round(1000 * window.__CCTV_SCENE_TIME__()) / 1000
              : null,
          tickMs: n540,
          castVersion: 6,
          castSerial: v2848,
          castReady: flag45,
          castStartMs: n546,
          castTick: v2847,
          lastReplayMs: n547,
          lastReplayTicks: n548,
        },
      })),
        (window.__CCTV_ROTATE__ = (arg1899) => ({
          rotationEnabled: fn503(null == arg1899 ? !flag46 : !!arg1899),
          timerArmed: !!(v2843 ? v2855 : v2854),
        })),
        (window.__CCTV_TOUR__ = (arg1900) => {
          let fn491Result2 = fn491();
          return fn491Result2
            .slice(0, Math.min(arg1900 || 16, fn491Result2.length))
            .map((arg1901) => arg1901.districtX + "," + arg1901.districtZ + "," + arg1901.type);
        }),
        (window.__CCTV_GOTO__ = (arg1902) => (
          fn498(0 | Number(arg1902), {
            cut: true,
          }),
          window.__CCTV_STATE__()
        )),
        (window.__CCTV_CUT__ = () => (
          v2843
            ? fn501()
            : fn498(fn495() + 1, {
                cut: true,
              }),
          window.__CCTV_STATE__()
        )),
        (window.__CCTV_SIMULATE_SLEEP__ = (arg1903) => {
          let max262 = Math.max(0, Math.floor((Number(arg1903) || 0) / n540));
          v2847 >= 0 && (v2847 -= max262);
          let v2930 = v2847 >= 0 ? Math.max(0, Math.floor(fn488() / n540) - v2847) : null;
          return {
            rewoundTicks: max262,
            frontier: v2847,
            debtTicks: v2930,
          };
        }));
      try {
        null == new URLSearchParams(location.search).get("solid") &&
          "0" === localStorage.getItem("ascii-city-cctv-glyphs") &&
          fn252(false);
      } catch {}
      (fn307(true),
        (populationVisible = true),
        fn15(),
        Promise.race([fn489(), new Promise((arg1904) => setTimeout(arg1904, 1500))]).then(() => {
          (v2843
            ? fn501()
            : fn498(fn495(), {
                cut: false,
              }),
            fn512(),
            fn487(
              "feed online",
              flag42 ? "(clock anchored)" : "(local clock)",
              v2843 ? "(local mode)" : "(synced tour)",
            ));
        }));
    })());
})();
