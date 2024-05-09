import { Module } from "@nestjs/common";
import { ExempleController } from "@controller/exemple/exemple.controller";

@Module({
    controllers: [ExempleController],
})
export class ExempleModule {}