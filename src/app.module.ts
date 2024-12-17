import { Module } from "@nestjs/common";
import { EnvModule } from "infrastructure/database/env/env.module";

import { HttpModule } from "./presentation/http.module";

@Module({
  imports: [EnvModule, HttpModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
