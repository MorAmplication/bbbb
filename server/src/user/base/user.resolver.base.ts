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
import { CreateUserArgs } from "./CreateUserArgs";
import { UpdateUserArgs } from "./UpdateUserArgs";
import { DeleteUserArgs } from "./DeleteUserArgs";
import { UserFindManyArgs } from "./UserFindManyArgs";
import { UserFindUniqueArgs } from "./UserFindUniqueArgs";
import { User } from "./User";
import { ProductFindManyArgs } from "../../product/base/ProductFindManyArgs";
import { Product } from "../../product/base/Product";
import { Organization } from "../../organization/base/Organization";
import { UserService } from "../user.service";

@graphql.Resolver(() => User)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class UserResolverBase {
  constructor(
    protected readonly service: UserService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async _usersMeta(
    @graphql.Args() args: UserFindManyArgs
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
  @graphql.Query(() => [User])
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async users(@graphql.Args() args: UserFindManyArgs): Promise<User[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => User, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "own",
  })
  async user(@graphql.Args() args: UserFindUniqueArgs): Promise<User | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => User)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "create",
    possession: "any",
  })
  async createUser(@graphql.Args() args: CreateUserArgs): Promise<User> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        organization: args.data.organization
          ? {
              connect: args.data.organization,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => User)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateUser(@graphql.Args() args: UpdateUserArgs): Promise<User | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          organization: args.data.organization
            ? {
                connect: args.data.organization,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => User)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "delete",
    possession: "any",
  })
  async deleteUser(@graphql.Args() args: DeleteUserArgs): Promise<User | null> {
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Product])
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "read",
    possession: "any",
  })
  async products(
    @graphql.Parent() parent: User,
    @graphql.Args() args: ProductFindManyArgs
  ): Promise<Product[]> {
    const results = await this.service.findProducts(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Organization, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "read",
    possession: "any",
  })
  async organization(
    @graphql.Parent() parent: User
  ): Promise<Organization | null> {
    const result = await this.service.getOrganization(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
