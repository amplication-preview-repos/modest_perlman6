/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { HintService } from "../hint.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { HintCreateInput } from "./HintCreateInput";
import { Hint } from "./Hint";
import { HintFindManyArgs } from "./HintFindManyArgs";
import { HintWhereUniqueInput } from "./HintWhereUniqueInput";
import { HintUpdateInput } from "./HintUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class HintControllerBase {
  constructor(
    protected readonly service: HintService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Hint })
  @nestAccessControl.UseRoles({
    resource: "Hint",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createHint(@common.Body() data: HintCreateInput): Promise<Hint> {
    return await this.service.createHint({
      data: {
        ...data,

        question: data.question
          ? {
              connect: data.question,
            }
          : undefined,
      },
      select: {
        content: true,
        createdAt: true,
        id: true,

        question: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Hint] })
  @ApiNestedQuery(HintFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Hint",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async hints(@common.Req() request: Request): Promise<Hint[]> {
    const args = plainToClass(HintFindManyArgs, request.query);
    return this.service.hints({
      ...args,
      select: {
        content: true,
        createdAt: true,
        id: true,

        question: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Hint })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Hint",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async hint(
    @common.Param() params: HintWhereUniqueInput
  ): Promise<Hint | null> {
    const result = await this.service.hint({
      where: params,
      select: {
        content: true,
        createdAt: true,
        id: true,

        question: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Hint })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Hint",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateHint(
    @common.Param() params: HintWhereUniqueInput,
    @common.Body() data: HintUpdateInput
  ): Promise<Hint | null> {
    try {
      return await this.service.updateHint({
        where: params,
        data: {
          ...data,

          question: data.question
            ? {
                connect: data.question,
              }
            : undefined,
        },
        select: {
          content: true,
          createdAt: true,
          id: true,

          question: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Hint })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Hint",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteHint(
    @common.Param() params: HintWhereUniqueInput
  ): Promise<Hint | null> {
    try {
      return await this.service.deleteHint({
        where: params,
        select: {
          content: true,
          createdAt: true,
          id: true,

          question: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/question/:id/hints")
  @swagger.ApiOkResponse({
    type: HintFindManyArgs,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async GetHintsForQuestion(
    @common.Body()
    body: string
  ): Promise<HintFindManyArgs[]> {
    return this.service.GetHintsForQuestion(body);
  }
}