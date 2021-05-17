CREATE TABLE [dbo].[Doctors] (
    [DoctorId] INT                                                IDENTITY (1, 1) NOT NULL,
    [UserId]   INT                                                NOT NULL,
    [Name]     VARCHAR (150) MASKED WITH (FUNCTION = 'default()') NULL,
    PRIMARY KEY CLUSTERED ([DoctorId] ASC),
    CONSTRAINT [Doctors_UserId] FOREIGN KEY ([UserId]) REFERENCES [dbo].[Users] ([UserId])
);


GO
ADD SENSITIVITY CLASSIFICATION TO
    [dbo].[Doctors].[Name]
    WITH (LABEL = 'Highly Confidential - GDPR', LABEL_ID = '4028438d-6969-4d49-bcb1-79b56c3500e3', INFORMATION_TYPE = 'Name', INFORMATION_TYPE_ID = '57845286-7598-22f5-9659-15b24aeb125e', RANK = HIGH);


GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', @value = N'Cheie Primara Tabel Doctors', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'Doctors', @level2type = N'COLUMN', @level2name = N'DoctorId';


GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', @value = N'Cheie Straina Tabel Users', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'Doctors', @level2type = N'COLUMN', @level2name = N'UserId';


GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', @value = N'Nume Doctor', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'Doctors', @level2type = N'COLUMN', @level2name = N'Name';

