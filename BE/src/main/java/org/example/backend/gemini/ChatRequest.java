package org.example.backend.gemini;

import lombok.*;
import java.util.ArrayList;
import java.util.List;

//dto,vo 요청 DTO
@Data //Getter, Setter 및 기타 등등을 모아둔 애너테이션
@AllArgsConstructor //인자가 있는 생성자
@NoArgsConstructor  //기본 생성자 생성

@Builder
public class ChatRequest {
    private List<Content> contents;
    private GenerationConfig generationConfig;

    @Getter
    @Setter
    public static class Content {
        private Parts parts;
    }

    @Getter
    @Setter
    public static class Parts {
        private String text;
    }

    @Getter
    @Setter
    public static class GenerationConfig {
        private int candidate_count;
        private int max_output_tokens;
        private double temperature;
    }

    public ChatRequest(String prompt) {
        this.contents = new ArrayList<>();
        Content content = new Content();
        Parts parts = new Parts();

        parts.setText(prompt);
        content.setParts(parts);

        this.contents.add(content);
        this.generationConfig = new GenerationConfig();
        this.generationConfig.setCandidate_count(1);
        this.generationConfig.setMax_output_tokens(800);
        this.generationConfig.setTemperature(0.7);
    }
}

/*
@Builder
public class User {
    private Long id;
    private String name;
    private String email;
}
*/

/*
    빌더 패턴을 이용한 객체 생성
User user = User.builder()
        .id(1L)
        .name("John Doe")
        .email("john.doe@example.com")
        .build();
*/

