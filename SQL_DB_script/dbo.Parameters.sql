CREATE TABLE [dbo].[Parameters] (
    [ParameterId] INT           IDENTITY (1, 1) NOT NULL,
    [Parameter]   VARCHAR (100) NULL,
    [MinLimit]    FLOAT (53)    NULL,
    [MaxLimit]    FLOAT (53)    NULL,
    PRIMARY KEY CLUSTERED ([ParameterId] ASC)
);


GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', @value = N'Cheie Primara Tabel Parameters', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'Parameters', @level2type = N'COLUMN', @level2name = N'ParameterId';


GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', @value = N'Parametrii monitorizati', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'Parameters', @level2type = N'COLUMN', @level2name = N'Parameter';


GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', @value = N'Nivel minim valori normale', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'Parameters', @level2type = N'COLUMN', @level2name = N'MinLimit';


GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', @value = N'Nivel maxim valori normale', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'Parameters', @level2type = N'COLUMN', @level2name = N'MaxLimit';

