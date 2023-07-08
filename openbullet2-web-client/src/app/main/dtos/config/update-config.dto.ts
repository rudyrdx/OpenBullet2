import { ConfigSettingsDto } from "./config.dto";

export interface UpdateConfigDto {
    id: string,
    mode: string,
    metadata: UpdateConfigMetadataDto,
    settings: ConfigSettingsDto,
    readme: string,
    loliCodeScript: string,
    startupLoliCodeScript: string,
    loliScript: string,
    cSharpScript: string,
    startupCSharpScript: string,
    persistent: boolean
}

export interface UpdateConfigMetadataDto {
    name: string,
    category: string,
    author: string,
    base64Image: string
}
