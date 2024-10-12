// import { UserModel } from '@hesta/models';
// import { createParamDecorator, ExecutionContext } from '@nestjs/common';
// import { SetMetadata } from '@nestjs/common';

// export const User = createParamDecorator<UserModel>(
//   (data: UserModel, ctx: ExecutionContext) => {
//     const request = ctx.switchToHttp().getRequest();
//     const user = request.user;

//     return user;
//   }
// );

// export const IS_PUBLIC_KEY = 'isPublic';
// export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
