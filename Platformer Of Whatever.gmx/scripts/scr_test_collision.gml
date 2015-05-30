if (argument0.solid and !place_free(self.x + hspeed, self.y + 1)) {
    self.x -= hspeed;
}

if (place_meeting(self.x + self.hspeed, self.y + self.vspeed, argument0)) {
    if (vspeed > 0 && y - vspeed < argument0.y) {
        self.y = other.y - 1;
        self.vspeed = 0;
        self.gravity = 0;
        self.state = state_idle;
    }
    else if (argument0.solid) {
        self.y -= self.vspeed;
        self.vspeed = 0;
    }
}
