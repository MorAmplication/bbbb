/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateNewblablaArgs } from "./CreateNewblablaArgs";
import { UpdateNewblablaArgs } from "./UpdateNewblablaArgs";
import { DeleteNewblablaArgs } from "./DeleteNewblablaArgs";
import { NewblablaFindManyArgs } from "./NewblablaFindManyArgs";
import { NewblablaFindUniqueArgs } from "./NewblablaFindUniqueArgs";
import { Newblabla } from "./Newblabla";
import { NewblablaService } from "../newblabla.service";

@graphql.Resolver(() => Newblabla)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class NewblablaResolverBase {
  constructor(
    protected readonly service: NewblablaService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Newblabla",
    action: "read",
    possession: "any",
  })
  async _newblablasMeta(
    @graphql.Args() args: NewblablaFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Newblabla])
  @nestAccessControl.UseRoles({
    resource: "Newblabla",
    action: "read",
    possession: "any",
  })
  async newblablas(
    @graphql.Args() args: NewblablaFindManyArgs
  ): Promise<Newblabla[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Newblabla, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Newblabla",
    action: "read",
    possession: "own",
  })
  async newblabla(
    @graphql.Args() args: NewblablaFindUniqueArgs
  ): Promise<Newblabla | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Newblabla)
  @nestAccessControl.UseRoles({
    resource: "Newblabla",
    action: "create",
    possession: "any",
  })
  async createNewblabla(
    @graphql.Args() args: CreateNewblablaArgs
  ): Promise<Newblabla> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Newblabla)
  @nestAccessControl.UseRoles({
    resource: "Newblabla",
    action: "update",
    possession: "any",
  })
  async updateNewblabla(
    @graphql.Args() args: UpdateNewblablaArgs
  ): Promise<Newblabla | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Newblabla)
  @nestAccessControl.UseRoles({
    resource: "Newblabla",
    action: "delete",
    possession: "any",
  })
  async deleteNewblabla(
    @graphql.Args() args: DeleteNewblablaArgs
  ): Promise<Newblabla | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
