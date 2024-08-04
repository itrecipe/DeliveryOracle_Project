package org.example.backend.sock;

import org.example.backend.user.security.jwt.provider.JwtTokenProvider;
import org.example.backend.user.service.VisitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.EventListener;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.messaging.SessionConnectEvent;
import org.springframework.web.socket.messaging.SessionDisconnectEvent;
import java.util.List;

@Component
public class WebSocketEventListener {
    @Autowired
    private VisitService visitService;
    private final SessionRegistry sessionRegistry;
    private final JwtTokenProvider jwtTokenProvider;

    public WebSocketEventListener(SessionRegistry sessionRegistry,JwtTokenProvider jwtTokenProvider) {
        this.sessionRegistry = sessionRegistry;
        this.jwtTokenProvider=jwtTokenProvider;
    }

    @EventListener
    public void handleWebSocketConnectListener(SessionConnectEvent event) {
        System.out.println("실행");

        StompHeaderAccessor accessor = StompHeaderAccessor.wrap(event.getMessage());

        String sessionId = accessor.getSessionId();

        List<String> authorizationHeaders = accessor.getNativeHeader("Authorization");
        System.out.println(authorizationHeaders);

        if (authorizationHeaders != null && !authorizationHeaders.isEmpty()) {
            Authentication authentication = jwtTokenProvider.getAuthentication(authorizationHeaders.get(0));
            String username = authentication.getName();0

            System.out.println("접속된 사용자명 : " + username);

            visitService.insertVister(username);
            sessionRegistry.registerSession(sessionId, username);
        }
    }

    @EventListener
    public void handleWebSocketDisconnectListener(SessionDisconnectEvent event) {
        StompHeaderAccessor accessor = StompHeaderAccessor.wrap(event.getMessage());
        String sessionId = accessor.getSessionId();
        sessionRegistry.unregisterSession(sessionId);
    }
}