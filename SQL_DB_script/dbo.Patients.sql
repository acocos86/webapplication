CREATE TABLE [dbo].[Patients] (
    [PatientId]         INT                                                IDENTITY (1, 1) NOT NULL,
    [UserId]            INT                                                NOT NULL,
    [DoctorId]          INT                                                NOT NULL,
    [Name]              VARCHAR (50) MASKED WITH (FUNCTION = 'default()')  NULL,
    [Surname]           VARCHAR (50) MASKED WITH (FUNCTION = 'default()')  NULL,
    [Age]               TINYINT                                            NULL,
    [PNC]               BIGINT                                             NOT NULL,
    [AddressStreet]     VARCHAR (200) MASKED WITH (FUNCTION = 'default()') NULL,
    [AddressNumber]     VARCHAR (10) MASKED WITH (FUNCTION = 'default()')  NULL,
    [AddressLocation]   VARCHAR (50) MASKED WITH (FUNCTION = 'default()')  NULL,
    [AddressCounty]     VARCHAR (50) MASKED WITH (FUNCTION = 'default()')  NULL,
    [AddressPostalCode] VARCHAR (10) MASKED WITH (FUNCTION = 'default()')  NULL,
    [Phone]             VARCHAR (18) MASKED WITH (FUNCTION = 'default()')  NULL,
    [Email]             VARCHAR (50) MASKED WITH (FUNCTION = 'email()')    NULL,
    [Profession]        VARCHAR (50)                                       NULL,
    [Job]               VARCHAR (50)                                       NULL,
    PRIMARY KEY CLUSTERED ([PatientId] ASC),
    CONSTRAINT [Patients_DoctorId] FOREIGN KEY ([DoctorId]) REFERENCES [dbo].[Doctors] ([DoctorId]),
    CONSTRAINT [Patients_UserId] FOREIGN KEY ([UserId]) REFERENCES [dbo].[Users] ([UserId])
);


GO
ADD SENSITIVITY CLASSIFICATION TO
    [dbo].[Patients].[Name]
    WITH (LABEL = 'Highly Confidential - GDPR', LABEL_ID = '4028438d-6969-4d49-bcb1-79b56c3500e3', INFORMATION_TYPE = 'Name', INFORMATION_TYPE_ID = '57845286-7598-22f5-9659-15b24aeb125e', RANK = HIGH);


GO
ADD SENSITIVITY CLASSIFICATION TO
    [dbo].[Patients].[Surname]
    WITH (LABEL = 'Highly Confidential - GDPR', LABEL_ID = '4028438d-6969-4d49-bcb1-79b56c3500e3', INFORMATION_TYPE = 'Name', INFORMATION_TYPE_ID = '57845286-7598-22f5-9659-15b24aeb125e', RANK = HIGH);


GO
ADD SENSITIVITY CLASSIFICATION TO
    [dbo].[Patients].[Age]
    WITH (LABEL = 'Confidential - GDPR', LABEL_ID = '62da2a4c-52b9-44e6-bace-40002b6d70c7', INFORMATION_TYPE = 'Date Of Birth', INFORMATION_TYPE_ID = '3de7cc52-710d-4e96-7e20-4d5188d2590c', RANK = MEDIUM);


GO
ADD SENSITIVITY CLASSIFICATION TO
    [dbo].[Patients].[PNC]
    WITH (LABEL = 'Highly Confidential - GDPR', LABEL_ID = '4028438d-6969-4d49-bcb1-79b56c3500e3', INFORMATION_TYPE = 'National ID', INFORMATION_TYPE_ID = '6f5a11a7-08b1-19c3-59e5-8c89cf4f8444', RANK = HIGH);


GO
ADD SENSITIVITY CLASSIFICATION TO
    [dbo].[Patients].[AddressStreet]
    WITH (LABEL = 'Confidential - GDPR', LABEL_ID = '62da2a4c-52b9-44e6-bace-40002b6d70c7', INFORMATION_TYPE = 'Contact Info', INFORMATION_TYPE_ID = '5c503e21-22c6-81fa-620b-f369b8ec38d1', RANK = MEDIUM);


GO
ADD SENSITIVITY CLASSIFICATION TO
    [dbo].[Patients].[AddressNumber]
    WITH (LABEL = 'Confidential - GDPR', LABEL_ID = '62da2a4c-52b9-44e6-bace-40002b6d70c7', INFORMATION_TYPE = 'Contact Info', INFORMATION_TYPE_ID = '5c503e21-22c6-81fa-620b-f369b8ec38d1', RANK = MEDIUM);


GO
ADD SENSITIVITY CLASSIFICATION TO
    [dbo].[Patients].[AddressLocation]
    WITH (LABEL = 'Confidential - GDPR', LABEL_ID = '62da2a4c-52b9-44e6-bace-40002b6d70c7', INFORMATION_TYPE = 'Contact Info', INFORMATION_TYPE_ID = '5c503e21-22c6-81fa-620b-f369b8ec38d1', RANK = MEDIUM);


GO
ADD SENSITIVITY CLASSIFICATION TO
    [dbo].[Patients].[AddressCounty]
    WITH (LABEL = 'Confidential - GDPR', LABEL_ID = '62da2a4c-52b9-44e6-bace-40002b6d70c7', INFORMATION_TYPE = 'Contact Info', INFORMATION_TYPE_ID = '5c503e21-22c6-81fa-620b-f369b8ec38d1', RANK = MEDIUM);


GO
ADD SENSITIVITY CLASSIFICATION TO
    [dbo].[Patients].[AddressPostalCode]
    WITH (LABEL = 'Confidential - GDPR', LABEL_ID = '62da2a4c-52b9-44e6-bace-40002b6d70c7', INFORMATION_TYPE = 'Contact Info', INFORMATION_TYPE_ID = '5c503e21-22c6-81fa-620b-f369b8ec38d1', RANK = MEDIUM);


GO
ADD SENSITIVITY CLASSIFICATION TO
    [dbo].[Patients].[Phone]
    WITH (LABEL = 'Confidential - GDPR', LABEL_ID = '62da2a4c-52b9-44e6-bace-40002b6d70c7', INFORMATION_TYPE = 'Contact Info', INFORMATION_TYPE_ID = '5c503e21-22c6-81fa-620b-f369b8ec38d1', RANK = MEDIUM);


GO
ADD SENSITIVITY CLASSIFICATION TO
    [dbo].[Patients].[Email]
    WITH (LABEL = 'Confidential - GDPR', LABEL_ID = '62da2a4c-52b9-44e6-bace-40002b6d70c7', INFORMATION_TYPE = 'Contact Info', INFORMATION_TYPE_ID = '5c503e21-22c6-81fa-620b-f369b8ec38d1', RANK = MEDIUM);


GO
ADD SENSITIVITY CLASSIFICATION TO
    [dbo].[Patients].[Profession]
    WITH (LABEL = 'Confidential', LABEL_ID = 'cf94d023-a1fb-4565-afbf-c3ff07128624', INFORMATION_TYPE = 'Other', INFORMATION_TYPE_ID = '9c5b4809-0ccc-0637-6547-91a6f8bb609d', RANK = MEDIUM);


GO
ADD SENSITIVITY CLASSIFICATION TO
    [dbo].[Patients].[Job]
    WITH (LABEL = 'Confidential', LABEL_ID = 'cf94d023-a1fb-4565-afbf-c3ff07128624', INFORMATION_TYPE = 'Other', INFORMATION_TYPE_ID = '9c5b4809-0ccc-0637-6547-91a6f8bb609d', RANK = MEDIUM);


GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', @value = N'Cheie Primara Tabel Patients', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'Patients', @level2type = N'COLUMN', @level2name = N'PatientId';


GO
EXECUTE sp_addextendedproperty @name = N'sys_data_classification_recommendation_disabled', @value = 1, @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'Patients', @level2type = N'COLUMN', @level2name = N'PatientId';


GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', @value = N'Cheie Straina Tabel Users', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'Patients', @level2type = N'COLUMN', @level2name = N'UserId';


GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', @value = N'Cheie Straina Tabel Doctors', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'Patients', @level2type = N'COLUMN', @level2name = N'DoctorId';


GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', @value = N'Nume pacient', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'Patients', @level2type = N'COLUMN', @level2name = N'Name';


GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', @value = N'Prenume pacient', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'Patients', @level2type = N'COLUMN', @level2name = N'Surname';


GO
EXECUTE sp_addextendedproperty @name = N'sys_data_classification_recommendation_disabled', @value = 1, @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'Patients', @level2type = N'COLUMN', @level2name = N'Surname';


GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', @value = N'Vasta pacient', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'Patients', @level2type = N'COLUMN', @level2name = N'Age';


GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', @value = N'CNP', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'Patients', @level2type = N'COLUMN', @level2name = N'PNC';


GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', @value = N'Strada', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'Patients', @level2type = N'COLUMN', @level2name = N'AddressStreet';


GO
EXECUTE sp_addextendedproperty @name = N'sys_data_classification_recommendation_disabled', @value = 1, @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'Patients', @level2type = N'COLUMN', @level2name = N'AddressStreet';


GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', @value = N'Numar', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'Patients', @level2type = N'COLUMN', @level2name = N'AddressNumber';


GO
EXECUTE sp_addextendedproperty @name = N'sys_data_classification_recommendation_disabled', @value = 1, @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'Patients', @level2type = N'COLUMN', @level2name = N'AddressNumber';


GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', @value = N'Localitate', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'Patients', @level2type = N'COLUMN', @level2name = N'AddressLocation';


GO
EXECUTE sp_addextendedproperty @name = N'sys_data_classification_recommendation_disabled', @value = 1, @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'Patients', @level2type = N'COLUMN', @level2name = N'AddressLocation';


GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', @value = N'Judet', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'Patients', @level2type = N'COLUMN', @level2name = N'AddressCounty';


GO
EXECUTE sp_addextendedproperty @name = N'sys_data_classification_recommendation_disabled', @value = 1, @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'Patients', @level2type = N'COLUMN', @level2name = N'AddressCounty';


GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', @value = N'Cod postal', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'Patients', @level2type = N'COLUMN', @level2name = N'AddressPostalCode';


GO
EXECUTE sp_addextendedproperty @name = N'sys_data_classification_recommendation_disabled', @value = 1, @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'Patients', @level2type = N'COLUMN', @level2name = N'AddressPostalCode';


GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', @value = N'Telefon', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'Patients', @level2type = N'COLUMN', @level2name = N'Phone';


GO
EXECUTE sp_addextendedproperty @name = N'sys_data_classification_recommendation_disabled', @value = 1, @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'Patients', @level2type = N'COLUMN', @level2name = N'Phone';


GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', @value = N'email', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'Patients', @level2type = N'COLUMN', @level2name = N'Email';


GO
EXECUTE sp_addextendedproperty @name = N'sys_data_classification_recommendation_disabled', @value = 1, @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'Patients', @level2type = N'COLUMN', @level2name = N'Email';


GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', @value = N'Profesie pacient', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'Patients', @level2type = N'COLUMN', @level2name = N'Profession';


GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', @value = N'Loc de munca', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'TABLE', @level1name = N'Patients', @level2type = N'COLUMN', @level2name = N'Job';

