import { Module } from "@nestjs/common";
import { BbbbModuleBase } from "./base/bbbb.module.base";
import { BbbbService } from "./bbbb.service";
import { BbbbController } from "./bbbb.controller";
import { BbbbResolver } from "./bbbb.resolver";

@Module({
  imports: [BbbbModuleBase],
  controllers: [BbbbController],
  providers: [BbbbService, BbbbResolver],
  exports: [BbbbService],
})
export class BbbbModule {}
