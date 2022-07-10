// Copyright 2018-2022 the oak authors. All rights reserved. MIT license.

import { assert, assertEquals } from "./test_deps.ts";
import * as mod from "./mod.ts";

Deno.test({
  name: "public API assertions",
  fn() {
    assert(mod != null);
    assertEquals(typeof mod.summoner.byName, "function");
  },
});
