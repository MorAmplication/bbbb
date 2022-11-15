import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { NewblablaResolverBase } from "./base/newblabla.resolver.base";
import { Newblabla } from "./base/Newblabla";
import { NewblablaService } from "./newblabla.service";

@graphql.Resolver(() => Newblabla)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class NewblablaResolver extends NewblablaResolverBase {
  constructor(
    protected readonly service: NewblablaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
