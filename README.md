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
총 14개의 테이블을 제작하였습니다.

1. UserInformation  (유저 정보 테이블)

- 유저 아이디(user_id)
- 이메일(Email)
- 비밀번호(Password)
- 닉네임(Name)
- 가입 날짜(registration_date)
- 수정 날짜(modification_date)

2. userinfo_auth (유저 권한 테이블)

- 권한 번호(auth_no), 유저 아이디(user_id), 인증(auth)

3. StoreRegistration (업체 가입정보 테이블)

- 업체 아이디(store_id), 업체 주인 아이디_유저 정보 테이블의 유저 아이디 / (owner_id), 업체 이름(store_name), 업체 주소(store_address), 업체 설명(store_description), 업체 이미지(store_image), 승인 상태, 승인 날짜, 수정 날짜, 업체 x 좌표, 업체 y 좌표, 업체 카테고리

4. StoreInformation (업체 정보 및 메뉴 정보가 담긴 테이블)

- 업체 아이디(store_id), 메뉴명(menu_name), 메뉴 가격(menu_price), 메뉴 이미지(menu_image), 메뉴 상태정보(menu_visiblity_status) 

5. OrderInformation(주문 테이블)

-주문번호

-주문자 아이디

-업체 아이디

-주문 내용

-주문 상태

-주문날짜

-주문자 x좌표

-주문자 y좌표

 

6. RiderDelivery (라이더 배달 테이블)

-배달 번호

-주문 번호

-업체 아이디

-업체 이름

-업체 주인 이메일

-라이더 아이디

-라이더 위치에서 업체까지의 거리

-업체에서 주문자까지의 거리

-배달가격

-업체 x좌표

-업체 y좌표

-주문자 x좌표

-주문자 y좌표

-배달 수락 날짜

 

7. Comments(댓글 테이블)

-댓글 번호

-업체 아이디

-작성자 아이디

-작성자 이름

-내용

-별점

-댓글 상태정보

-작성 날짜

-수정 날짜

-답글작성시 어떤 댓글의 답글인지 확인하기 위한 댓글 번호

-depth=> 1이면 댓글 2이면 답

 

8. Reports(댓글 신고 테이블)

-신고번호

-댓글 번호

-댓글 작성자 아이디

-신고 상태

-신고 내역

-신고 날

 

9. StoreReports(업체 신고 테이블)

-신고번호

-주문 번호

-업체 번호

-신고 상태

-신고 내역

-신고자 아이디

-신고 날

 

10. account (계좌 테이블)

-계좌 번호

-계좌 주인 아이디

-계좌 주인 이름

-계좌 주인 이메일

-계좌 상태

-계좌 총액

-계좌 생성 날짜

-계좌 수정 날짜

 

 

11. accountstatus(입출금 상태 테이블)

-번호

-계좌 번호

-금액

-출금과 예금 2개의 타입이 존재함

-날

 

12. rankpoint(포인트 정보 테이블)

-등급 이름

-포인트 금액 

 

insert into rankpoint (Rating,score) value("Bronze",5000);
insert into rankpoint (Rating,score) value("Silver",10000);
insert into rankpoint (Rating,score) value("Gold",50000);
insert into rankpoint (Rating,score) value("Platinum",100000);
 

13. visitors(방문자수 테이블)

-이메일

-방문날

 

 

14. StoreRegistrationAudit (업체 수정정보 테이블)

트리거에 의해 기록되는 테이블

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
 

 

 

적용된 트리거들

업체 정보 수정 시 적용되는 트리거 
이전 정보를 정장하기 위해

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
업체 삭제시 적용되는 트리거
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
 

계좌생성 트리거
회원가입 시 계좌가 자동으로 생성되도록 하는 트리

CREATE TRIGGER after_user_registration
AFTER INSERT ON userinformation
FOR EACH ROW
BEGIN
    INSERT INTO account (
        owner_id, owner_name, owner_email, account_status, account_amount, change_date
    ) VALUES (
        NEW.user_id, NEW.Name, NEW.Email, 1, 0, NOW()
    );
 

계좌 입출금 발생 시 자동으로 현재 내 계좌의 값 변경 하는 트리거
CREATE TRIGGER accountstatus_insert
AFTER INSERT ON accountstatus
FOR EACH ROW
BEGIN
    UPDATE account
    SET account_amount = account_amount + NEW.amount,
        change_date = NOW()
    WHERE account_id = NEW.account_id;

# UseCase
![DeliveryOracle_UseCase drawio](https://github.com/user-attachments/assets/9013e409-9b7f-46ba-bc21-3d35c740edc5)

# 주요기능 :

# 설계의 주안점 :
