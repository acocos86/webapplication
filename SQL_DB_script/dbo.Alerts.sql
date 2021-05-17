CREATE TABLE [dbo].[Alerts] (
    [AlertsId]    INT        IDENTITY (1, 1) NOT NULL,
    [PatientId]   INT        NOT NULL,
    [ParameterId] INT        NOT NULL,
    [Date]        DATETIME   DEFAULT (getdate()) NULL,
    [Level]       FLOAT (53) NULL,
    PRIMARY KEY CLUSTERED ([AlertsId] ASC),
    CONSTRAINT [Alerts_PatientId] FOREIGN KEY ([PatientId]) REFERENCES [dbo].[Patients] ([PatientId]),
    CONSTRAINT [Alerts_ParameterId] FOREIGN KEY ([ParameterId]) REFERENCES [dbo].[Parameters] ([ParameterId])
);


GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', @value = N'Cheie Primara Tabel Alerts', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'Alerts', @level2type = N'COLUMN', @level2name = N'AlertsId';


GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', @value = N'Cheie Straina Tabel Patients', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'Alerts', @level2type = N'COLUMN', @level2name = N'PatientId';


GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', @value = N'Parameters', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'Alerts', @level2type = N'COLUMN', @level2name = N'ParameterId';


GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', @value = N'Data si ora alertei', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'Alerts', @level2type = N'COLUMN', @level2name = N'Date';


GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', @value = N'Nivel parametru inregistrat', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'Alerts', @level2type = N'COLUMN', @level2name = N'Level';

