CREATE TABLE [dbo].[RecommendationType] (
    [RecommendationTypeId] INT           IDENTITY (1, 1) NOT NULL,
    [RecommendationType]   VARCHAR (150) NULL,
    PRIMARY KEY CLUSTERED ([RecommendationTypeId] ASC)
);


GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', @value = N'Cheie Primara Tabel RecommendationType', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'RecommendationType', @level2type = N'COLUMN', @level2name = N'RecommendationTypeId';


GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', @value = N'Tip recomandare', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'RecommendationType', @level2type = N'COLUMN', @level2name = N'RecommendationType';

