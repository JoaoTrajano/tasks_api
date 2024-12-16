import { Module } from "@nestjs/common";

import { HttpModule } from "./presentation/http.module";

@Module({
  imports: [HttpModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
