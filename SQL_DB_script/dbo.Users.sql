CREATE TABLE [dbo].[Users] (
    [UserId]   INT                                             IDENTITY (1, 1) NOT NULL,
    [RoleId]   INT                                             NOT NULL,
    [Name]     VARCHAR (50)                                    NULL,
    [Email]    VARCHAR (50) MASKED WITH (FUNCTION = 'email()') NULL,
    [Password] VARCHAR (20)                                    NULL,
    PRIMARY KEY CLUSTERED ([UserId] ASC),
    CONSTRAINT [Users_RoleId] FOREIGN KEY ([RoleId]) REFERENCES [dbo].[Roles] ([RoleId])
);

GO
EXECUTE sp_addextendedproperty @name = N'sys_data_classification_recommendation_disabled', @value = N'Active', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'Users';


GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', @value = N'Cheie Primara Tabel Users', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'Users', @level2type = N'COLUMN', @level2name = N'UserId';


GO
EXECUTE sp_addextendedproperty @name = N'sys_data_classification_recommendation_disabled', @value = N'Active', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'Users', @level2type = N'COLUMN', @level2name = N'UserId';


GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', @value = N'Cheie Straina Tabel Roles', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'Users', @level2type = N'COLUMN', @level2name = N'RoleId';


GO
EXECUTE sp_addextendedproperty @name = N'sys_data_classification_recommendation_disabled', @value = N'Active', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'Users', @level2type = N'COLUMN', @level2name = N'RoleId';


GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', @value = N'Nume', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'Users', @level2type = N'COLUMN', @level2name = N'Name';


GO
EXECUTE sp_addextendedproperty @name = N'sys_data_classification_recommendation_disabled', @value = N'Active', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'Users', @level2type = N'COLUMN', @level2name = N'Name';


GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', @value = N'Adresa email', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'Users', @level2type = N'COLUMN', @level2name = N'Email';


GO
EXECUTE sp_addextendedproperty @name = N'sys_data_classification_recommendation_disabled', @value = N'Active', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'Users', @level2type = N'COLUMN', @level2name = N'Email';


GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', @value = N'Parola', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'Users', @level2type = N'COLUMN', @level2name = N'Password';


GO
EXECUTE sp_addextendedproperty @name = N'sys_data_classification_recommendation_disabled', @value = N'Active', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'Users', @level2type = N'COLUMN', @level2name = N'Password';

