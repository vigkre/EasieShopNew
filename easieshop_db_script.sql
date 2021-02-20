USE [EasieShopDb]
GO
SET IDENTITY_INSERT [dbo].[Products] ON 

INSERT [dbo].[Products] ([Id], [Name], [Description], [Price], [PictureUrl]) VALUES (7, N'Blue boot', N'Blue boot', CAST(2000.00 AS Decimal(18, 2)), N'assets/images/products/boot-ang1.png')
INSERT [dbo].[Products] ([Id], [Name], [Description], [Price], [PictureUrl]) VALUES (8, N'Red boot', N'Red boot', CAST(1000.00 AS Decimal(18, 2)), N'assets/images/products/boot-core2.png')
SET IDENTITY_INSERT [dbo].[Products] OFF
