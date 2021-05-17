CREATE TABLE [dbo].[MedicalHistory] (
    [MedHistId]   INT           IDENTITY (1, 1) NOT NULL,
    [PatientId]   INT           NOT NULL,
    [Date]        DATETIME      NULL,
    [Description] VARCHAR (200) NULL,
    PRIMARY KEY CLUSTERED ([MedHistId] ASC),
    CONSTRAINT [MedicalHistory_PatientId] FOREIGN KEY ([PatientId]) REFERENCES [dbo].[Patients] ([PatientId])
);


GO
ADD SENSITIVITY CLASSIFICATION TO
    [dbo].[MedicalHistory].[Description]
    WITH (LABEL = 'Highly Confidential - GDPR', LABEL_ID = '4028438d-6969-4d49-bcb1-79b56c3500e3', INFORMATION_TYPE = 'Health', INFORMATION_TYPE_ID = '6e2c5b18-97cf-3073-27ab-f12f87493da7', RANK = HIGH);


GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', @value = N'Cheie Primara Tabel MedicalHistory', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'MedicalHistory', @level2type = N'COLUMN', @level2name = N'MedHistId';


GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', @value = N'Cheie Straina Tabel Patients', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'MedicalHistory', @level2type = N'COLUMN', @level2name = N'PatientId';


GO
EXECUTE sp_addextendedproperty @name = N'sys_data_classification_recommendation_disabled', @value = 1, @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'MedicalHistory', @level2type = N'COLUMN', @level2name = N'PatientId';


GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', @value = N'Data istoric medical', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'MedicalHistory', @level2type = N'COLUMN', @level2name = N'Date';


GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', @value = N'Detalii istoric medical', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'MedicalHistory', @level2type = N'COLUMN', @level2name = N'Description';

