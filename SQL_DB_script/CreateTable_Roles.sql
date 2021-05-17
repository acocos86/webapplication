CREATE TABLE [dbo].[Roles] (
    [RoleId]   INT          IDENTITY (1, 1) NOT NULL,
    [Role]     VARCHAR (50) NULL,
    [IsAdmin]  BIT          NULL,
    [IsDoctor] BIT          NULL,
    [IsUser]   BIT          NULL,
    PRIMARY KEY CLUSTERED ([RoleId] ASC)
);


GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', @value = N'Cheie Primara Tabel Roles', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'Roles', @level2type = N'COLUMN', @level2name = N'RoleId';


GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', @value = N'Descriere rol', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'Roles', @level2type = N'COLUMN', @level2name = N'Role';


GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', @value = N'Este Admin?', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'Roles', @level2type = N'COLUMN', @level2name = N'IsAdmin';


GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', @value = N'Este Doctor?', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'Roles', @level2type = N'COLUMN', @level2name = N'IsDoctor';


GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', @value = N'Este Pacient?', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'Roles', @level2type = N'COLUMN', @level2name = N'IsUser';

