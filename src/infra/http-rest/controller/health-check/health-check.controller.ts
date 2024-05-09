import { Controller, Get } from "@nestjs/common";

@Controller('health-check')
export class HealthCheckController {
    @Get()
    public healthCheck(): string {
        return 'ok';
    }
}