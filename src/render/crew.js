import * as THREE from 'three';

/** A handful of mechanics around a stopped car: four wheel gunners, two jack men and a lollipop man. */
export class PitCrew {
  constructor(team) {
    this.group = new THREE.Group();
    const suit = new THREE.MeshStandardMaterial({ color: team.color, roughness: 0.8 });
    const trim = new THREE.MeshStandardMaterial({ color: team.accent, roughness: 0.8 });
    const helmet = new THREE.MeshStandardMaterial({ color: 0xf2f2f2, roughness: 0.4 });
    const body = new THREE.CapsuleGeometry(0.2, 0.9, 3, 8);
    const head = new THREE.SphereGeometry(0.16, 10, 8);
    const gun = new THREE.CylinderGeometry(0.05, 0.05, 0.5, 6);
    gun.rotateZ(Math.PI / 2);
    this.people = [];
    const mk = (x, z, face, role) => {
      const g = new THREE.Group();
      const b = new THREE.Mesh(body, role === 'wheel' ? suit : trim);
      b.position.y = 0.75;
      const h = new THREE.Mesh(head, helmet);
      h.position.y = 1.5;
      g.add(b, h);
      if (role === 'wheel') {
        const t = new THREE.Mesh(gun, new THREE.MeshStandardMaterial({ color: 0x333840, metalness: 0.7, roughness: 0.4 }));
        t.position.set(0.3, 0.8, 0);
        g.add(t);
      }
      g.position.set(x, 0, z);
      g.rotation.y = face;
      this.group.add(g);
      const o = { g, b, h, role, x, z, face, phase: Math.random() * 6 };
      this.people.push(o);
      return o;
    };
    // positions in the car's local frame (+X forward, -Z left). Wheels at x = +1.96 / -1.64, z = +-(0.8..)
    for (const [x, z] of [[1.96, -1.55], [1.96, 1.55], [-1.64, -1.55], [-1.64, 1.55]]) mk(x, z, z < 0 ? -Math.PI / 2 : Math.PI / 2, 'wheel');
    mk(3.5, 0, Math.PI, 'jack');
    mk(-3.0, 0, 0, 'jack');
    // lollipop
    const lol = new THREE.Group();
    const stick = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 1.8, 5), new THREE.MeshStandardMaterial({ color: 0x777777 }));
    stick.position.y = 0.9;
    this.disc = new THREE.Mesh(new THREE.CircleGeometry(0.28, 20), new THREE.MeshBasicMaterial({ color: 0xff2020, side: THREE.DoubleSide }));
    this.disc.position.y = 1.9;
    lol.add(stick, this.disc);
    lol.position.set(4.6, 0, -0.9);
    this.group.add(lol);
    this.lollipop = lol;
  }

  update(t, progress) {
    for (const p of this.people) {
      const work = progress < 0.82;
      const bob = Math.sin(t * 12 + p.phase) * 0.03;
      if (p.role === 'wheel') {
        p.b.position.y = work ? 0.55 + bob : 0.75;
        p.b.rotation.z = work ? 0.0 : 0;
        p.h.position.y = work ? 1.25 + bob : 1.5;
        p.g.position.x = p.x + (work ? 0 : 0.05);
      } else {
        p.b.position.y = 0.75 + (work ? Math.sin(t * 6 + p.phase) * 0.05 : 0);
        p.h.position.y = 1.5;
      }
    }
    this.disc.material.color.set(progress > 0.85 ? 0x22dd55 : 0xff2020);
    this.lollipop.position.y = progress > 0.85 ? 0.0 : 0.0;
  }
}
