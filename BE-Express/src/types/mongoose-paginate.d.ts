import "mongoose-paginate-v2";

// Khai báo để TypeScript hiểu Model có method .paginate()
declare module "mongoose" {
	interface PaginateModel<T extends Document> extends Model<T> {
		paginate(query?: any, options?: any, callback?: any): Promise<mongoosePaginate.PaginateResult<T>>;
	}
}
