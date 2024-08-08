# 프로젝트명 :  DeliveryOracle
![image](https://github.com/user-attachments/assets/a4dd9696-fd30-4620-8759-0647a448d89c)

# 개발기간 : 24.06.18 ~ 24.07.18

# 팀 구성
- 황근호 (팀장) : Back-End / 유저 페이지 제작
- 손동민 (부팀장) : Front-End / 업체 페이지 제작
- 김민준 (팀원) : Full-Stack / 관리자 & 라이더 페이지 제작

# 프로젝트 소개
![image](https://github.com/user-attachments/assets/a0fae65e-9acd-42d7-be70-4d988d597ef4)

# 개발환경
![image](https://github.com/user-attachments/assets/821fc289-bb25-4fb6-8d6a-20dd5a8b7a8f)

# ERD
![DeliveryOracle_ERD](https://github.com/user-attachments/assets/5efc7279-a238-4d75-bc04-8155d1fbc517)
총 14개의 테이블을 제작 하였습니다.

1. UserInformation (유저 정보 테이블)

- 유저 아이디 : user_id
- 이메일 : Email
- 비밀번호 : Password
- 닉네임 : Name
- 가입 날짜 : registration_date
- 수정 날짜 : modification_date

2. userinfo_auth (유저 권한 테이블)

- 권한 번호 : auth_no
- 유저 아이디 : user_id
- 인증 : auth

3. StoreRegistration (업체 가입정보 테이블)

- 업체 아이디 : store_id
- 업체 주인 아이디 (유저 정보 테이블의 유저 아이디) : owner_id
- 업체 이름 : store_name
- 업체 주소 : store_address
- 업체 설명 : store_description
- 업체 이미지 : store_image
- 승인 상태 : approval_status
- 승인 날짜 : approval_date
- 수정 날짜 : modification_date
- 업체 x 좌표 : store_x
- 업체 y 좌표 : store_y
- 업체 카테고리 : store_ca

4. StoreInformation (업체 정보 및 메뉴 정보가 담긴 테이블)

- 업체 아이디 : store_id
- 메뉴명 : menu_name
- 메뉴 가격 : menu_price
- 메뉴 이미지 : menu_image
- 메뉴 상태정보 : menu_visiblity_status

5. OrderInformation (주문 테이블)

- 주문 번호 : order_id
- 주문자 아이디 : customer_id
- 업체 아이디 : store_id
- 주문 내용 : order_details
- 총합 : total_price
- 주문 상태 : order_approval_status
- 주문 날짜 : order_date
- 주문자 x좌표 : user_x
- 주문자 y좌표 : user_y

6. RiderDelivery (라이더 배달 테이블)

- 배달 번호 : delivery_id
- 주문 번호 : order_id
- 업체 아이디 : store_id
- 업체 이름 : store_name
- 업체 주인 이메일 : stroe_owner_email
- 라이더 아이디 : rider_id
- 라이더의 현위치에서 업체까지와의 거리 : distance_to_store
- 업체에서 주문자(user)까지의 거리 : distance_to_user
- 배달가격 : delivery_price
- 업체 x 좌표 : store_x
- 업체 y 좌표 : store_y
- 주문자 x 좌표 : user_x
- 주문자 y 좌표 : user_y
- 배달 수락 날짜 : order_date

7. Comments (댓글 테이블)

- 댓글 번호 : comment_id
- 업체 아이디 : store_id
- 작성자 아이디 : author_id
- 작성자 이름 : author_name
- 내용 : content
- 별점 : rating
- 댓글 상태정보 : visbility_status
- 작성 날짜 : creation_date
- 수정 날짜 : modification_date
- 대댓글 아이디 (답글 작성시 어떤 댓글의 답글인지 확인하기 위한 댓글 번호) : reply_id
- 댓글의 깊이 : depth (depth가 1이면 댓글 2이면 답글)

8. Reports (댓글 신고 테이블)

- 신고 번호 : report_id
- 댓글 번호 : comment_id
- 댓글 작성자 아이디 : comment_author_id
- 신고 상태 : report_status
- 신고 내역 : report_text
- 신고자 아이디 : reporter_id
- 신고 날짜 : report_date

9. StoreReports (업체 신고 테이블)

- 신고번호 : report_id
- 주문 번호 : order_id
- 업체 번호 : store_id
- 신고 상태 : report_status
- 신고 내역 : report_text
- 신고자 아이디 : reporter_id
- 신고 날짜 : report_date

10. account (계좌 테이블)

- 계좌 번호 : account_id
- 계좌 주인 아이디 : owner_id
- 계좌 주인 이름 : owner_name
- 계좌 주인 이메일 : owner_email
- 계좌 상태 : account_status
- 계좌 총액 : account_amount
- 계좌 생성 날짜 : approval_date
- 계좌 수정 날짜 : change_date

11. accountstatus(입출금 상태 테이블)

- 번호 : num
- 계좌 번호 : account_id
- 금액 : amount
- 출금과 예금 (2개의 타입이 존재) : type
- 날짜 : date

12. rankpoint (포인트 정보 테이블)

- 등급명 : rating
- 포인트 금액 : score
 
```sql
insert into rankpoint (Rating,score) value("Bronze",5000);
insert into rankpoint (Rating,score) value("Silver",10000);
insert into rankpoint (Rating,score) value("Gold",50000);
insert into rankpoint (Rating,score) value("Platinum",100000);
```

13. visitors (방문자수 테이블)

- 이메일 : email
- 방문 날짜 : visit_date

14. StoreRegistrationAudit (업체 수정 정보가 담긴 테이블)

- 트리거에 의해 기록되는 트리거 쿼리
```sql
CREATE TABLE StoreRegistrationAudit (
    audit_id INT AUTO_INCREMENT PRIMARY KEY,
    store_id INT,
    owner_id INT,
    store_name VARCHAR(30),
    store_address VARCHAR(50),
    store_description TEXT,
    store_image VARCHAR(255), 
    approval_status TINYINT(1),
    approval_date DATETIME,
    modification_date TIMESTAMP,
    store_x DECIMAL(15, 12),
    store_y DECIMAL(15, 12),
    store_ca VARCHAR(20),
    change_type ENUM('UPDATE', 'DELETE'),
    change_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

- 업체 정보 수정 시 적용되는 트리거 이전 정보를 저장하기 위해 걸어 둔 트리거
```sql
CREATE TRIGGER before_store_update
BEFORE UPDATE ON StoreRegistration
FOR EACH ROW
BEGIN
    INSERT INTO StoreRegistrationAudit (
        store_id, owner_id, store_name, store_address, store_description, 
        store_image, approval_status, approval_date, modification_date, 
        store_x, store_y, store_ca, change_type, change_date
    ) VALUES (
        OLD.store_id, OLD.owner_id, OLD.store_name, OLD.store_address, OLD.store_description, 
        OLD.store_image, OLD.approval_status, OLD.approval_date, OLD.modification_date, 
        OLD.store_x, OLD.store_y, OLD.store_ca, 'UPDATE', NOW()
    );
```

- 업체 삭제시 적용되는 트리거
```sql
CREATE TRIGGER before_store_delete
BEFORE DELETE ON StoreRegistration
FOR EACH ROW
BEGIN
    INSERT INTO StoreRegistrationAudit (
        store_id, owner_id, store_name, store_address, store_description, 
        store_image, approval_status, approval_date, modification_date, 
        store_x, store_y, store_ca, change_type, change_date
    ) VALUES (
        OLD.store_id, OLD.owner_id, OLD.store_name, OLD.store_address, OLD.store_description, 
        OLD.store_image, OLD.approval_status, OLD.approval_date, OLD.modification_date, 
        OLD.store_x, OLD.store_y, OLD.store_ca, 'DELETE', NOW()
    );
 ```

- 계좌 생성 트리거 (회원가입 시 계좌가 자동으로 생성되도록 하는 트리거)
```sql
CREATE TRIGGER after_user_registration
AFTER INSERT ON userinformation
FOR EACH ROW
BEGIN
    INSERT INTO account (
        owner_id, owner_name, owner_email, account_status, account_amount, change_date
    ) VALUES (
        NEW.user_id, NEW.Name, NEW.Email, 1, 0, NOW()
    );
 ```

- 계좌 입출금시 자동으로 현재 나의 계좌의 값을 변경하는 트리거
```sql
CREATE TRIGGER accountstatus_insert
AFTER INSERT ON accountstatus
FOR EACH ROW
BEGIN
    UPDATE account
    SET account_amount = account_amount + NEW.amount,
        change_date = NOW()
    WHERE account_id = NEW.account_id;
```

# UseCase
![DeliveryOracle_UseCase drawio](https://github.com/user-attachments/assets/9013e409-9b7f-46ba-bc21-3d35c740edc5)

# API 명세서
![사용자신고, 유저등록, Login - API](https://github.com/user-attachments/assets/28789e1b-a1d0-44c8-a552-5d772fb6ddce)
![라이더 페이지, 계좌정보 - API](https://github.com/user-attachments/assets/677b5eac-b488-43eb-8b20-c38a96eee4de)
![제미나이(구글 API), 댓글 컨트롤러 - API](https://github.com/user-attachments/assets/03eaf44b-d3bd-435b-be7b-a8282abee98b)
![업체 페이지 - API](https://github.com/user-attachments/assets/6158157f-6afe-4c4d-aeb6-d3b8881ad6b8)
![업체 페이지 (1) - API](https://github.com/user-attachments/assets/c7455b7f-4092-4d55-8f84-0b60d266bbc9)
![관리자 페이지, 유저 정보 수정 - API](https://github.com/user-attachments/assets/41444257-5a3e-49da-bd0e-85f92302a925)
![조회 - API](https://github.com/user-attachments/assets/0c1b6f5c-1ea7-4c35-a373-fa75b60d24d0)
![카카오 로그인 - API](https://github.com/user-attachments/assets/d59a23ed-dafc-44a9-8c01-256bfa788ec9)


