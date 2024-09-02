import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HintServiceBase } from "./base/hint.service.base";

@Injectable()
export class HintService extends HintServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
