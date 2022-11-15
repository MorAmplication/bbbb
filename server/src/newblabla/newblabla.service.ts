import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { NewblablaServiceBase } from "./base/newblabla.service.base";

@Injectable()
export class NewblablaService extends NewblablaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
