CREATE TABLE [dbo].[MedicalRecommendations] (
    [MedRecId]             INT          IDENTITY (1, 1) NOT NULL,
    [PatientId]            INT          NOT NULL,
    [RecommendationTypeId] INT          NOT NULL,
    [Date]                 DATE         NULL,
    [DailyDuration]        VARCHAR (50) NULL,
    [OtherIndications]     VARCHAR (50) NULL,
    PRIMARY KEY CLUSTERED ([MedRecId] ASC),
    CONSTRAINT [MedicalRecommendations_PatientId] FOREIGN KEY ([PatientId]) REFERENCES [dbo].[Patients] ([PatientId]),
    CONSTRAINT [MedicalRecommendations_RecommendationTypeId] FOREIGN KEY ([RecommendationTypeId]) REFERENCES [dbo].[RecommendationType] ([RecommendationTypeId])
);


GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', @value = N'Cheie Primara Tabel MedicalRecommendations', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'MedicalRecommendations', @level2type = N'COLUMN', @level2name = N'MedRecId';


GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', @value = N'Cheie Straina Tabel Patients', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'MedicalRecommendations', @level2type = N'COLUMN', @level2name = N'PatientId';


GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', @value = N'Cheie Straina Tabel RecommendationType', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'MedicalRecommendations', @level2type = N'COLUMN', @level2name = N'RecommendationTypeId';


GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', @value = N'Data recomnadarii', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'MedicalRecommendations', @level2type = N'COLUMN', @level2name = N'Date';


GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', @value = N'Durata zilnica recomandata', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'MedicalRecommendations', @level2type = N'COLUMN', @level2name = N'DailyDuration';


GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', @value = N'Alte indicatii', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'MedicalRecommendations', @level2type = N'COLUMN', @level2name = N'OtherIndications';

