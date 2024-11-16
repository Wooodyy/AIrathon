import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";

export function SocialRehab({ formData, setFormData }: any) {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">5. Социальная реабилитация</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="space-y-2">
          <Label>Оценка социальной включенности (0-10)</Label>
          <Slider
            value={[formData.socialState]}
            onValueChange={(value) => setFormData({ ...formData, socialState: value[0] })}
            max={10}
            step={1}
          />
          <div className="text-right text-sm text-muted-foreground">
            {formData.socialState}/10
          </div>
        </div>

        <div className="grid gap-4">
          <div className="flex items-center space-x-2">
            <Switch
              checked={formData.hasCommunicationIssues}
              onCheckedChange={(checked) => setFormData({ ...formData, hasCommunicationIssues: checked })}
            />
            <Label>Испытываю трудности в общении</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              checked={formData.participatesInEvents}
              onCheckedChange={(checked) => setFormData({ ...formData, participatesInEvents: checked })}
            />
            <Label>Участвую в социальных мероприятиях</Label>
          </div>
        </div>

        <div className="grid gap-2">
          <Label>Потребности в социальной адаптации</Label>
          <Textarea
            value={formData.socialNeeds}
            onChange={(e) => setFormData({ ...formData, socialNeeds: e.target.value })}
            placeholder="Опишите, какая помощь вам необходима для адаптации в обществе"
          />
        </div>
      </CardContent>
    </Card>
  );
}