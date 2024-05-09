import { Module } from "@nestjs/common";
import { ExempleModule } from "@controller/exemple/exemple.module";
import { HealthCheckModule } from "@controller/health-check/health-check.module";

@Module({
    imports: [
        HealthCheckModule, 
        ExempleModule
    ],
})
export class HttpRestModule {}