# Intalink Database Table Structure Description

## Contents

- [Link Generation Methods Table](#1-link-generation-methods-table)
- [Data Application Log](#2-data-application-log)
- [Data Column Basic Information](#3-data-column-basic-information)
- [Data Model Table](#4-data-model-table)
- [Data Source Information Table](#5-data-source-information-table)
- [System Model Association Table](#6-system-model-association-table)
- [System Data Source Association Table](#7-system-data-source-association-table)
- [Data Table Information](#8-data-table-information)
- [Basic Relationship Table](#9-basic-relationship-table)
- [Dictionary Table](#10-dictionary-table)
- [Evaluation Method Table](#11-evaluation-method-table)
- [Output Method Table](#12-output-method-table)
- [System Configuration Table](#13-system-configuration-table)
- [System Information Table](#14-system-information-table)
- [Optimal Link Result](#15-optimal-link-result)
- [Optimal Output Result](#16-optimal-output-result)
- [Scoring Weight](#17-scoring-weight)
- [Data Link Table](#18-data-link-table)
- [Link Weight Calculation Result](#19-link-weight-calculation-result)
- [Different Scoring Method Result Table](#20-different-scoring-method-result-table)
- [Scoring Scheme Table](#21-scoring-scheme-table)
- [Inter-table Relationship Storage Table](#22-inter-table-relationship-storage-table)
- [Data Table Relationship Expression Result Table](#23-data-table-relationship-expression-result-table)

## 1. Link Generation Methods Table

This table stores the methods defined by users for generating links. Users must implement these methods in the code and define them in this table.

| Column Name             | Data Type     | Nullable | Primary Key | Auto Increment | Default Value | Remarks            |
|-------------------------|---------------|----------|-------------|----------------|---------------|--------------------|
| generating_methods_id   | int           | No       | Yes         | Yes            | None          | Primary key        |
| generating_methods_name | varchar(255)  | Yes      | No          | No             | None          | Name of the method |
| implementation_method   | varchar(1000) | Yes      | No          | No             | None          | Implementation details |
| implementation_team     | varchar(100)  | Yes      | No          | No             | None          | Team responsible for implementation |

## 2. Data Application Log

This table stores the application logs of users, detailing the source and content of the applications in JSON format.

| Column Name           | Data Type     | Nullable | Primary Key | Auto Increment | Default Value | Remarks          |
|-----------------------|---------------|----------|-------------|----------------|---------------|------------------|
| apply_for_id          | int           | No       | Yes         | Yes            | None          | Primary key      |
| apply_for_source      | varchar(100)  | Yes      | No          | No             | None          | Source of application |
| apply_for_content     | varchar(1000) | Yes      | No          | No             | None          | Content of the application |

## 3. Data Column Basic Information

This table stores basic information about data columns within tables, serving as the foundation for user applications.

| Column Name          | Data Type    | Nullable | Primary Key | Auto Increment | Default Value | Remarks            |
|----------------------|--------------|----------|-------------|----------------|---------------|--------------------|
| data_column_id       | int          | No       | Yes         | Yes            | None          | Primary key        |
| data_column_code     | varchar(255) | Yes      | No          | No             | None          | Code of the data item |
| data_column_name     | varchar(255) | Yes      | No          | No             | None          | Name of the data item |
| data_column_remark   | varchar(255) | Yes      | No          | No             | None          | Description of the data item |
| data_table_id        | int          | Yes      | No          | No             | None          | ID of the data table |
| is_del               | int          | Yes      | No          | No             | None          | Indicates if the column is deleted |

## 4. Data Model Table

This table stores information defining data models, which form the basis for intelligent data modeling.

| Column Name          | Data Type    | Nullable | Primary Key | Auto Increment | Default Value | Remarks            |
|----------------------|--------------|----------|-------------|----------------|---------------|--------------------|
| data_model_id        | int          | No       | Yes         | Yes            | None          | Primary key        |
| data_model_code      | varchar(255) | Yes      | No          | No             | None          | Code of the data model |
| data_model_name      | varchar(255) | Yes      | No          | No             | None          | Name of the data model |
| data_model_remark    | varchar(255) | Yes      | No          | No             | None          | Description of the data model |
| is_del               | int          | Yes      | No          | No             | None          | Indicates if the model is deleted |

## 5. Data Source Information Table

This table stores information about the data sources used by users, essential for subsequent data extraction and link generation.

| Column Name          | Data Type    | Nullable | Primary Key | Auto Increment | Default Value | Remarks            |
|----------------------|--------------|----------|-------------|----------------|---------------|--------------------|
| data_source_id       | int          | No       | Yes         | Yes            | None          | Primary key        |
| data_source_name     | varchar(255) | Yes      | No          | No             | None          | Name of the data source |
| url                  | varchar(255) | Yes      | No          | No             | None          | URL of the data source |
| user_name            | varchar(255) | Yes      | No          | No             | None          | User name for the data source |
| password             | varchar(255) | Yes      | No          | No             | None          | Password for the data source |
| database_type        | varchar(255) | Yes      | No          | No             | None          | Type of the database |
| is_del               | int          | Yes      | No          | No             | None          | Indicates if the source is deleted |

## 6. System Model Association Table

This table stores information linking system models to facilitate business applications, such as extracting specific fields under a system for data presentation.

| Column Name                          | Data Type | Nullable | Primary Key | Auto Increment | Default Value | Remarks            |
|--------------------------------------|-----------|----------|-------------|----------------|---------------|--------------------|
| data_source_data_model_relation_id   | int       | No       | Yes         | Yes            | None          | Primary key        |
| system_id                            | int       | Yes      | No          | No             | None          | ID of the system involved |
| data_model_id                        | int       | Yes      | No          | No             | None          | ID of the data model involved |

## 7. System Data Source Association Table

This table stores the associations between systems and data sources, enabling easier data retrieval for various applications.

| Column Name                          | Data Type | Nullable | Primary Key | Auto Increment | Default Value | Remarks            |
|--------------------------------------|-----------|----------|-------------|----------------|---------------|--------------------|
| data_source_system_relation_id       | int       | No       | Yes         | Yes            | None          | Primary key for the relationship |
| datasource_id                        | int       | Yes      | No          | No             | None          | ID of the data source involved |
| system_id                            | int       | Yes      | No          | No             | None          | ID of the system involved |

## 8. Data Table Information

This table stores information about data tables under the data models, serving as foundational tables for storing various data points.

| Column Name                          | Data Type | Nullable | Primary Key | Auto Increment | Default Value | Remarks            |
|--------------------------------------|-----------|----------|-------------|----------------|---------------|--------------------|
| data_table_id                        | int       | No       | Yes         | Yes            | None          | Primary key        |
| data_model_id                        | int       | Yes      | No          | No             | None          | ID of the data model associated |
| data_table_code                      | varchar(255) | Yes   | No          | No             | None          | Code identifying the data table |
| data_table_name                      | varchar(255) | Yes   | No          | No             | None          | Name of the data table |
| data_table_remark                    | varchar(255) | Yes   | No          | No             | None          | Description of the data table |
| is_del                               | int       | Yes      | No          | No             | None          | Indicates

## 9. Basic Relationship Table

| Column Name          | Data Type     | Nullable | Primary Key | Auto Increment | Default Value | Description         |
|----------------------|---------------|----------|-------------|----------------|---------------|---------------------|
| relation_id          | int           | No       | Yes         | Yes            | None          | Primary Key         |
| relation_describe    | varchar(500)  | Yes      | No          | No             | None          | Relationship Description |

## 10. Dictionary Table

| Column Name      | Data Type     | Nullable | Primary Key | Auto Increment | Default Value | Description       |
|------------------|---------------|----------|-------------|----------------|---------------|-------------------|
| dic_id           | int           | No       | Yes         | No             | None          | Primary Key       |
| dic_code         | varchar(255)  | Yes      | No          | No             | None          | Dictionary Code   |
| dic_name         | varchar(255)  | Yes      | No          | No             | None          | Dictionary Name   |
| dic_remark       | varchar(255)  | Yes      | No          | No             | None          | Dictionary Remark |
| parent_id        | int           | Yes      | No          | No             | None          | Parent ID         |
| dic_value        | varchar(255)  | Yes      | No          | No             | None          | Dictionary Value  |

## 11. Evaluation Methods Table

| Column Name                | Data Type     | Nullable | Primary Key | Auto Increment | Default Value | Description          |
|----------------------------|---------------|----------|-------------|----------------|---------------|----------------------|
| evaluation_method_id       | int           | No       | Yes         | Yes            | None          | Primary Key          |
| evaluation_method_name     | varchar(255)  | Yes      | No          | No             | None          | Evaluation Method Name |
| evaluation_method_remark   | varchar(500)  | Yes      | No          | No             | None          | Evaluation Method Remark |

## 12. Output Methods Table

| Column Name          | Data Type     | Nullable | Primary Key | Auto Increment | Default Value | Description       |
|----------------------|---------------|----------|-------------|----------------|---------------|-------------------|
| result_type_id       | int           | No       | Yes         | Yes            | None          | Primary Key       |
| result_type_code     | varchar(255)  | Yes      | No          | No             | None          | Output Method Code |
| result_type_name     | varchar(255)  | Yes      | No          | No             | None          | Output Method Name |
| result_type_remark   | varchar(500)  | Yes      | No          | No             | None          | Output Method Remark |

## 13. System Settings Table

| Column Name      | Data Type     | Nullable | Primary Key | Auto Increment | Default Value | Description       |
|------------------|---------------|----------|-------------|----------------|---------------|-------------------|
| setting_id       | int           | No       | Yes         | No             | None          | Primary Key       |
| name             | varchar(255)  | Yes      | No          | No             | None          | Setting Name      |
| code             | varchar(255)  | Yes      | No          | No             | None          | Setting Code      |
| remark           | varchar(255)  | Yes      | No          | No             | None          | Setting Remark    |
| value            | varchar(255)  | Yes      | No          | No             | None          | Setting Value     |

## 14. System Information Table

| Column Name    | Data Type     | Nullable | Primary Key | Auto Increment | Default Value | Description       |
|----------------|---------------|----------|-------------|----------------|---------------|-------------------|
| system_id      | int           | No       | Yes         | Yes            | None          | Primary Key       |
| system_name    | varchar(255)  | Yes      | No          | No             | None          | System Name       |
| system_code    | varchar(255)  | Yes      | No          | No             | None          | System Code       |
| system_remark  | varchar(255)  | Yes      | No          | No             | None          | System Description|
| is_del         | int           | Yes      | No          | No             | None          | Deletion Status   |
| create_time    | datetime      | Yes      | No          | No             | None          | Creation Time     |

## 15. Optimal Link Results

| Column Name           | Data Type | Nullable | Primary Key | Auto Increment | Default Value | Description       |
|-----------------------|-----------|----------|-------------|----------------|---------------|-------------------|
| better_link_result_id | int       | No       | Yes         | Yes            | None          | Primary Key       |
| apply_for_id          | int       | Yes      | No          | No             | None          | Application ID    |
| better_result_id      | int       | Yes      | No          | No             | None          | Optimal Sequence  |
| link_id               | int       | Yes      | No          | No             | None          | Link ID           |

## 16. Optimal Output Results

| Column Name       | Data Type     | Nullable | Primary Key | Auto Increment | Default Value | Description       |
|-------------------|---------------|----------|-------------|----------------|---------------|-------------------|
| better_result_id  | int           | No       | Yes         | Yes            | None          | Primary Key       |
| apply_for_id      | int           | Yes      | No          | No             | None          | Application Number|
| result_type       | varchar(100)  | Yes      | No          | No             | None          | Output Method     |
| result_time       | datetime      | Yes      | No          | No             | None          | Output Time       |
| result_content    | varchar(1000) | Yes      | No          | No             | None          | Output Content    |

## 17. Scoring Weights

| Column Name           | Data Type | Nullable | Primary Key | Auto Increment | Default Value | Description       |
|-----------------------|-----------|----------|-------------|----------------|---------------|-------------------|
| scoring_scheme_id     | int       | No       | Yes         | No             | None          | Primary Key       |
| evaluation_method_id  | int       | Yes      | No          | No             | None          | Evaluation Method ID |
| weight_coefficient    | double    | Yes      | No          | No             | None          | Weight Coefficient|

## 18. Data Link Table

| Column Name            | Data Type     | Nullable | Primary Key | Auto Increment | Default Value | Description        |
|------------------------|---------------|----------|-------------|----------------|---------------|--------------------|
| link_id                | int           | No       | Yes         | Yes            | None          | Link ID            |
| apply_for_id           | int           | Yes      | No          | No             | None          | Application ID     |
| link_content           | varchar(2000) | Yes      | No          | No             | None          | Link Content       |
| generating_methods_id  | int           | Yes      | No          | No             | None          | Link Generation Method |

## 19. Link Weight Calculation Results

| Column Name            | Data Type | Nullable | Primary Key | Auto Increment | Default Value | Description       |
|------------------------|-----------|----------|-------------|----------------|---------------|-------------------|
| link_id                | int       | No       | No          | No             | None          | Link ID           |
| comprehensive_weight   | double    | Yes      | No          | No             | None          | Comprehensive Weight |

## 20. Scoring Results for Different Methods Table

| Column Name        | Data Type   | Nullable | Primary Key | Auto Increment | Default Value | Description         |
|--------------------|-------------|----------|-------------|----------------|---------------|---------------------|
| link_id            | int         | No       | No          | No             |               | Link ID             |
| scoring_scheme_id  | int         | Yes      | No          | No             |               | Scoring Scheme ID   |
| scoring            | varchar(255)| Yes      | No          | No             |               | Scoring Result      |

## 21. Scoring Scheme Table

| Column Name            | Data Type   | Nullable | Primary Key | Auto Increment | Default Value | Description         |
|------------------------|-------------|----------|-------------|----------------|---------------|---------------------|
| scoring_scheme_id      | int         | No       | Yes         | Yes            |               | Primary Key         |
| scoring_scheme_name    | varchar(255)| Yes      | No          | No             |               | Scoring Scheme Name |
| scoring_scheme_remark  | varchar(500)| Yes      | No          | No             |               | Scoring Scheme Description |

## 22. Inter-Table Relationship Storage Table

| Column Name              | Data Type   | Nullable | Primary Key | Auto Increment | Default Value | Description              |
|--------------------------|-------------|----------|-------------|----------------|---------------|--------------------------|
| data_table_relation_id   | int         | No       | Yes         | Yes            |               | ID                        |
| data_column_id           | int         | Yes      | No          | No             |               | Data Column ID            |
| relation_data_column_id  | int         | Yes      | No          | No             |               | Related Data Column ID    |
| relation_type            | int         | Yes      | No          | No             |               | Relationship Type         |
| relation_str             | varchar(500)| Yes      | No          | No             |               | Relationship Expression   |

## 23. Data Table Relationship Expression Results Table

| Column Name       | Data Type     | Nullable | Primary Key | Auto Increment | Default Value | Description                |
|-------------------|---------------|----------|-------------|----------------|---------------|----------------------------|
| main_table        | int           | Yes      | No          | No             |               | Data Table ID              |
| relation_table    | int           | Yes      | No          | No             |               | Related Data Table ID      |
| relation_content  | varchar(2000) | Yes      | No          | No             |               | Inter-Table Relationship Expression |