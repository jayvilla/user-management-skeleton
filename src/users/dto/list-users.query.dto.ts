// TODO: Add validation decorators (e.g., @IsString(), @IsInt(), @Min())
// TODO: Add default values for page and pageSize

export class ListUsersQueryDto {
  q?: string;
  page?: number;
  pageSize?: number;
}

