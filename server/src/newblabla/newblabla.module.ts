import { Module } from "@nestjs/common";
import { NewblablaModuleBase } from "./base/newblabla.module.base";
import { NewblablaService } from "./newblabla.service";
import { NewblablaController } from "./newblabla.controller";
import { NewblablaResolver } from "./newblabla.resolver";

@Module({
  imports: [NewblablaModuleBase],
  controllers: [NewblablaController],
  providers: [NewblablaService, NewblablaResolver],
  exports: [NewblablaService],
})
export class NewblablaModule {}
